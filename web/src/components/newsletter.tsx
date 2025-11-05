"use client";

import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="mx-auto mt-24 w-full max-w-[var(--width-content)] rounded-[var(--radius-card)] border border-neutral-200 bg-white px-8 py-12 sm:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
            Studio dispatch
          </span>
          <h2 className="text-3xl font-semibold text-neutral-950">
            Join 45,000+ insiders for first access to drops and private
            previews.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Receive styling guides, responsible sourcing updates, and digital
            invitations to our atelier pop-ups across New York, Copenhagen, and
            Tokyo.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex-1">
              <span className="sr-only">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder="you@email.com"
                className="w-full rounded-full border border-neutral-300 px-5 py-3 text-sm text-neutral-900 shadow-sm transition focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Subscribe
            </button>
          </div>
          {submitted && (
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Welcome aboard - check your inbox for a confirmation email.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
