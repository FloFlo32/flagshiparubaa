import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { brand } from "@/brand.config";

export const runtime = "nodejs";

/**
 * AI FAQ assistant. Streams answers grounded ONLY in content/knowledge.md
 * (populated by the URL ingest pipeline). Uses OPENAI_API_KEY from the env.
 */

const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

const ACTIVITIES = [
  { name: "Buki Di Pret", id: "5b0a4f57-dcd2-4125-a983-665c0482be3a" },
  { name: "Morning Snorkel tour", id: "01083159-5861-4408-b78d-22c81e19faa4" },
  { name: "Afternoon Snorkel tour", id: "47611e71-4496-4915-99ef-816cb4ec6fe2" },
  { name: "Sunset Cruise", id: "8ff35752-c22a-41f6-b142-4679aa1d1fb4" },
];

async function loadKnowledge() {
  try {
    return await readFile(join(process.cwd(), "content", "knowledge.md"), "utf8");
  } catch {
    return "(No knowledge base found.)";
  }
}

type Msg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      { error: "OPENAI_API_KEY is not set. Add it to .env." },
      { status: 500 }
    );
  }

  let messages: Msg[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages.slice(-10) : [];
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const knowledge = await loadKnowledge();
  const system = [
    `You are the friendly FAQ assistant for ${brand.name}.`,
    `Answer questions using ONLY the knowledge base below. Be concise, warm, and concrete.`,
    `If the answer isn't in the knowledge base, say you're not sure and suggest contacting ${brand.social.email}. Never invent facts, prices, or features.`,
    `Reply in plain text (short paragraphs or bullet points). Do not mention "the knowledge base".`,
    ``,
    `=== BOOKING ===`,
    `Available activities (name = id):`,
    ...ACTIVITIES.map((a) => `- ${a.name} = ${a.id}`),
    `End EVERY reply with exactly one marker line, alone, in the form [[BOOK:<id>]].`,
    `If your reply is about ONE specific activity from the list above, use that activity's id.`,
    `Otherwise (general question, multiple activities, or no match), use [[BOOK:]] with an empty id.`,
    `Never invent an id — only use ids from the list above or leave it empty.`,
    `The marker is parsed by the UI and never shown to the guest, so it must be the literal last line, nothing after it.`,
    ``,
    `=== KNOWLEDGE BASE ===`,
    knowledge,
  ].join("\n");

  const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      stream: true,
      temperature: 0.3,
      messages: [{ role: "system", content: system }, ...messages],
    }),
  });

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    return Response.json(
      { error: `Upstream error (${upstream.status}).`, detail: detail.slice(0, 300) },
      { status: 502 }
    );
  }

  // Re-stream OpenAI SSE as plain text tokens.
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body!.getReader();
      let buffer = "";
      try {
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (data === "[DONE]") {
              controller.close();
              return;
            }
            try {
              const json = JSON.parse(data);
              const token = json.choices?.[0]?.delta?.content;
              if (token) controller.enqueue(encoder.encode(token));
            } catch {
              // ignore keep-alive / partial frames
            }
          }
        }
      } catch (err) {
        controller.error(err);
        return;
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
