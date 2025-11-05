"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cart-context";

const navLinks = [
  { href: "/products?category=Women", label: "Women" },
  { href: "/products?category=Men", label: "Men" },
  { href: "/products?category=Accessories", label: "Accessories" },
  { href: "/products", label: "All" },
  { href: "#editorial", label: "Editorial" },
];

export const Navbar = () => {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[var(--width-content)] items-center justify-between px-6 sm:px-10">
        <Link href="/" className="text-2xl font-semibold tracking-wide">
          LuxeThreads
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-neutral-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/products"
            className="rounded-full border border-neutral-900/15 px-5 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
          >
            Shop Now
          </Link>
          <button
            type="button"
            className="relative rounded-full border border-neutral-200 p-3 text-sm font-semibold"
            aria-label="View cart"
          >
            <span className="text-xs uppercase tracking-wide">Cart</span>
            <span className="absolute -right-2 -top-2 flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-neutral-900 px-2 text-[0.65rem] font-semibold text-white">
              {count}
            </span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-10 w-10 place-content-center rounded-full border border-neutral-200 text-sm font-medium md:hidden"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-neutral-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 transition-colors hover:text-neutral-950"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="rounded-full border border-neutral-200 px-4 py-2 text-center text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
            >
              Shop Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
