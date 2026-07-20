"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { brand } from "@/brand.config";

export function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "the Flagship Aruba website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${brand.social.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-border bg-card p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
      >
        Send <Send className="size-4" />
      </button>
    </form>
  );
}
