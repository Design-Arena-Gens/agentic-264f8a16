"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import type { ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/product-card";

const filters: (ProductCategory | "All" | "Editorial")[] = [
  "All",
  "Women",
  "Men",
  "Accessories",
  "Editorial",
];

export const FeaturedProducts = () => {
  const [active, setActive] =
    useState<(typeof filters)[number]>("Editorial");

  const filtered = useMemo(() => {
    if (active === "All") return products;
    if (active === "Editorial") {
      return products.filter((product) => product.badge);
    }
    return products.filter((product) => product.category === active);
  }, [active]);

  return (
    <section className="mx-auto mt-20 w-full max-w-[var(--width-content)]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
            Highlights
          </span>
          <h2 className="text-3xl font-semibold text-neutral-950 sm:text-4xl">
            Curated drops for the modern wardrobe.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-neutral-600">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 transition ${
                active === filter
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 hover:border-neutral-900/60"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
};
