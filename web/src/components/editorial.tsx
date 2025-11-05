import Image from "next/image";

const editorialSpreads = [
  {
    title: "Layering, refined.",
    description:
      "Structured knits and architectural layers crafted for dynamic movement and transitional climates.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
  },
  {
    title: "Material alchemy.",
    description:
      "Sculpted silhouettes in recycled wool blends and plant-dyed silks, photographed in the Brooklyn Navy Yard.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  },
  {
    title: "Tailored for motion.",
    description:
      "Performance suiting engineered with micro-stretch and active ventilation for city-to-studio days.",
    image: "https://images.unsplash.com/photo-1551022377-3d8c9218df21",
  },
];

export const Editorial = () => {
  return (
    <section
      id="editorial"
      className="mx-auto mt-24 w-full max-w-[var(--width-content)] rounded-[var(--radius-card)] bg-white px-8 py-14 sm:px-12"
    >
      <div className="flex flex-col gap-5">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
          Journal
        </span>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-3xl font-semibold text-neutral-950 sm:text-4xl">
            Behind the seams: the making of Capsule 04.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-neutral-600">
            Shot on location in Tribeca, our latest editorial explores how
            performance fabrics and thoughtful tailoring empower fluid
            wardrobes - from morning commute to after-hours studio sessions.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {editorialSpreads.map((spread) => (
          <article
            key={spread.title}
            className="overflow-hidden rounded-3xl border border-neutral-100"
          >
            <div className="relative h-60 w-full">
              <Image
                src={spread.image}
                alt={spread.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3 px-6 py-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                {spread.title}
              </h3>
              <p className="text-sm text-neutral-600">{spread.description}</p>
              <button
                type="button"
                className="text-sm font-semibold text-neutral-900 underline underline-offset-4"
              >
                Read story
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
