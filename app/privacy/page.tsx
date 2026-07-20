import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for flagshiparuba.com.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl py-16 sm:py-24">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-10 space-y-6 text-pretty text-sm leading-relaxed text-muted-foreground">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Who We Are</h2>
                <p className="mt-2">Our website address is: https://www.flagshiparuba.com</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Comments</h2>
                <p className="mt-2">
                  When visitors leave comments on the site, we collect the data shown in the comments form, the
                  visitor&apos;s IP address, and the browser user agent string to help detect spam. An anonymized
                  string created from your email address (a hash) may be sent to the Gravatar service if you use
                  it. After your comment is approved, your profile picture becomes visible to the public in the
                  context of your comment.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Media</h2>
                <p className="mt-2">
                  If you upload images to the site, avoid uploading images with embedded EXIF GPS location data.
                  Visitors can download and view location data from images on the site.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Cookies</h2>
                <p className="mt-2">
                  When you leave a comment, you may choose to save your name, email, and website in cookies for
                  your convenience. These last for one year. Login cookies last two days (two weeks with
                  &ldquo;Remember Me&rdquo;); they are removed when you log out.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Embedded Content From Other Websites</h2>
                <p className="mt-2">
                  Pages on this site may include embedded content (videos, images, articles). Embedded content
                  behaves as if you had visited the other website directly, and may collect data about you, use
                  cookies, and monitor your interaction with the embedded content.
                </p>
              </div>
              <p>
                Questions about this policy? Please{" "}
                <a href="/contact" className="cursor-pointer font-medium text-primary underline underline-offset-2">
                  contact us
                </a>
                .
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
