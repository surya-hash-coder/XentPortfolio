"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import FadeIn from "./ui/FadeIn";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      honeypot: (form.elements.namedItem("website") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to send");
      setStatus("sent");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <FadeIn>
          <span className="text-xs font-semibold text-xent-primary uppercase tracking-widest">
            Contact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Let's talk about your HR workflows.
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Have a question about Xent HR, or want to see how it fits your
            organization? Send us a message — we'll get back to you.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-xl bg-xent-subtle text-xent-primary grid place-items-center shrink-0">
                <Mail className="w-4 h-4" />
              </span>
              <div>
                <div className="text-sm font-semibold text-ink">Email</div>
                <div className="text-sm text-ink-soft">hello@xent.in</div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <form
            onSubmit={onSubmit}
            className="bg-bg rounded-2xl border border-line p-6 sm:p-8 space-y-4"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink">Name *</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="mt-1.5 w-full px-4 py-2.5 rounded-lg border border-line bg-white text-sm focus:outline-none focus:ring-2 focus:ring-xent-primary/30 focus:border-xent-primary transition"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink">Email *</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-1.5 w-full px-4 py-2.5 rounded-lg border border-line bg-white text-sm focus:outline-none focus:ring-2 focus:ring-xent-primary/30 focus:border-xent-primary transition"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink">Company</label>
              <input
                name="company"
                type="text"
                placeholder="Optional"
                className="mt-1.5 w-full px-4 py-2.5 rounded-lg border border-line bg-white text-sm focus:outline-none focus:ring-2 focus:ring-xent-primary/30 focus:border-xent-primary transition"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-ink">Message *</label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell us what you'd like to know..."
                className="mt-1.5 w-full px-4 py-2.5 rounded-lg border border-line bg-white text-sm focus:outline-none focus:ring-2 focus:ring-xent-primary/30 focus:border-xent-primary transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="inline-flex items-center justify-center gap-2 w-full bg-xent-primary hover:bg-xent-dark disabled:opacity-70 text-white font-semibold text-sm py-3 rounded-lg shadow-xent transition"
            >
              {status === "sending" && <Loader2 className="w-4 h-4 animate-spin" />}
              {status === "sent" && <CheckCircle2 className="w-4 h-4" />}
              {status === "idle" && <Send className="w-4 h-4" />}
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message sent!"
                : "Send Message"}
            </button>

            {status === "error" && (
              <div className="flex items-start gap-2 text-danger text-xs bg-red-50 border border-red-100 rounded-lg p-3">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {status === "sent" && (
              <div className="flex items-start gap-2 text-success text-xs bg-green-50 border border-green-100 rounded-lg p-3">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Thanks! We'll get back to you soon.</span>
              </div>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}