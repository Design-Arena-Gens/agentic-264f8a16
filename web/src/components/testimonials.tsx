const testimonials = [
  {
    quote:
      "The attention to detail is unmatched. My Studio blazer has become a year-round staple.",
    name: "Jordan L.",
    title: "Creative Director, Brooklyn",
  },
  {
    quote:
      "These are investment pieces that feel timeless yet progressive. LuxeThreads nails the balance.",
    name: "Maya R.",
    title: "Founder, Copenhagen",
  },
  {
    quote:
      "Every fabric feels carefully considered. The Terra knit set is the most comfortable travel outfit I own.",
    name: "Zoe A.",
    title: "Product Lead, San Francisco",
  },
];

export const Testimonials = () => {
  return (
    <section className="mx-auto mt-24 w-full max-w-[var(--width-content)] rounded-[var(--radius-card)] bg-neutral-900 px-8 py-14 text-neutral-200 sm:px-12">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
          Testimonials
        </span>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Loved by visionaries worldwide.
        </h2>
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {testimonials.map((entry) => (
          <blockquote key={entry.name} className="space-y-4">
            <p className="text-lg leading-relaxed text-neutral-100">
              <span>&ldquo;</span>
              {entry.quote}
              <span>&rdquo;</span>
            </p>
            <footer className="text-sm">
              <p className="font-semibold text-white">{entry.name}</p>
              <p className="text-neutral-400">{entry.title}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};
