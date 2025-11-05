import { Editorial } from "@/components/editorial";
import { FeaturedProducts } from "@/components/featured-products";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Newsletter } from "@/components/newsletter";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <Navbar />
      <main className="flex w-full flex-col gap-20 px-6 pt-10 sm:px-10">
        <Hero />

        <section
          id="about"
          className="grid gap-6 rounded-[var(--radius-card)] border border-neutral-200 bg-white px-8 py-10 sm:grid-cols-3 sm:px-10"
        >
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
              Our approach
            </span>
            <h2 className="text-2xl font-semibold text-neutral-950">
              Elevated wardrobes, engineered for longevity.
            </h2>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-neutral-600">
            <p>
              Every LuxeThreads garment is developed inside our Brooklyn atelier,
              iterated alongside pattern makers and technologists to ensure the
              perfect intersection of form, function, and feel.
            </p>
            <p>
              From certified mills to modular silhouettes, we obsess over the
              details so you can build a minimalist wardrobe with maximal
              potential.
            </p>
          </div>
          <dl
            id="responsibility"
            className="grid gap-4 rounded-3xl bg-neutral-100 p-6 text-sm text-neutral-700"
          >
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-400">
                Traceable partners
              </dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-900">
                95% supply chain visibility
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-400">
                Climate impact
              </dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-900">
                Net-zero operations by 2027
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-400">
                Recycling program
              </dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-900">
                18k garments repurposed
              </dd>
            </div>
          </dl>
        </section>

        <FeaturedProducts />
        <Editorial />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
