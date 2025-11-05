import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Explore the full LuxeThreads assortment of women's, men's, and accessories collections.",
};

const categories = ["Women", "Men", "Accessories"] as const;

type ProductsPageProps = {
  searchParams?: {
    category?: string;
  };
};

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const categoryParam = searchParams?.category ?? "All";

  const filtered =
    categoryParam === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === categoryParam.toLowerCase(),
        );

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <Navbar />
      <div className="mx-auto flex w-full max-w-[var(--width-content)] flex-col gap-12 px-6 pt-16 sm:px-10">
        <header className="space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
              Shop
            </span>
            <h1 className="mt-3 text-4xl font-semibold text-neutral-950">
              Curated collections for every layer of your wardrobe.
            </h1>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
            Each piece is engineered for long-form wear, refined drape, and
            effortless pairing. Select a category to tailor the assortment or
            browse our full capsule.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-neutral-600">
            <FilterLink label="All" active={categoryParam === "All"} />
            {categories.map((category) => (
              <FilterLink
                key={category}
                label={category}
                active={categoryParam.toLowerCase() === category.toLowerCase()}
              />
            ))}
          </div>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <aside className="space-y-6 rounded-[var(--radius-card)] border border-neutral-200 bg-white px-8 py-10 sm:px-10">
          <div>
            <h2 className="text-xl font-semibold text-neutral-950">
              Not sure where to start?
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Our stylists selected these pieces to anchor a streamlined capsule
              wardrobe.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {products
              .filter((product) => product.badge)
              .slice(0, 3)
              .map((product) => (
                <div key={product.slug} className="space-y-2 text-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    {product.badge}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-sm font-semibold text-neutral-900 transition hover:text-neutral-600"
                  >
                    {product.name}
                  </Link>
                  <p className="text-neutral-500">${product.price}</p>
                </div>
              ))}
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
}

type FilterLinkProps = {
  label: string;
  active: boolean;
};

const FilterLink = ({ label, active }: FilterLinkProps) => {
  const href =
    label === "All"
      ? "/products"
      : `/products?category=${encodeURIComponent(label)}`;
  return (
    <Link
      href={href}
      className={`rounded-full border px-4 py-2 transition ${
        active
          ? "border-neutral-900 bg-neutral-900 text-white"
          : "border-neutral-200 hover:border-neutral-900/60"
      }`}
    >
      {label}
    </Link>
  );
};
