import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative mx-auto mt-10 flex w-full max-w-[var(--width-content)] flex-col overflow-hidden rounded-[var(--radius-card)] bg-white backdrop-gradient lg:flex-row">
      <div className="flex flex-1 flex-col justify-between gap-10 px-8 py-12 sm:px-12">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Editorial Drop 04
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
            Precision tailoring meets sustainable craftsmanship.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-neutral-600">
            Discover the Studio Fall Capsule - versatile layers, architectural
            silhouettes, and engineered textiles that move with you.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Explore the Collection
          </Link>
          <Link
            href="#editorial"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
          >
            View Lookbook
          </Link>
        </div>
        <dl className="grid grid-cols-2 gap-6 text-sm text-neutral-600 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wide text-neutral-400">
              Recycled materials
            </dt>
            <dd className="mt-1 text-lg font-semibold text-neutral-900">
              62%
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-neutral-400">
              Certified mills
            </dt>
            <dd className="mt-1 text-lg font-semibold text-neutral-900">
              18 partners
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-neutral-400">
              Average rating
            </dt>
            <dd className="mt-1 text-lg font-semibold text-neutral-900">
              4.8 / 5
            </dd>
          </div>
        </dl>
      </div>
      <div className="relative h-[380px] flex-1 md:h-[520px]">
        <Image
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
          alt="LuxeThreads Fall Capsule hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};
