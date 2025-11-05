import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProductDetail } from "@/components/product-detail";
import { products, getProductBySlug } from "@/data/products";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <Navbar />
      <div className="mx-auto flex w-full max-w-[var(--width-content)] flex-col gap-16 px-6 pt-12 sm:px-10">
        <nav className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
          <Link href="/" className="transition hover:text-neutral-900">
            Home
          </Link>
          <span className="mx-3">/</span>
          <Link href="/products" className="transition hover:text-neutral-900">
            Products
          </Link>
          <span className="mx-3">/</span>
          <span className="text-neutral-900">{product.name}</span>
        </nav>

        <ProductDetail product={product} />

        {related.length > 0 && (
          <section className="space-y-6 border-t border-neutral-200 pt-10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-neutral-950">
                You might also like
              </h2>
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-sm font-semibold text-neutral-600 underline underline-offset-8 transition hover:text-neutral-900"
              >
                View all {product.category}
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="rounded-[var(--radius-card)] border border-neutral-200 bg-white px-6 py-6 transition hover:-translate-y-[2px] hover:border-neutral-900/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    {item.category}
                  </p>
                  <p className="mt-3 text-base font-semibold text-neutral-900">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm text-neutral-500">${item.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
}
