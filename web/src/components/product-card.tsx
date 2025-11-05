"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { useState } from "react";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);

  const image = product.images[0];

  const handleAdd = () => {
    addItem({
      product,
      color: selectedColor,
      size: selectedSize,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1">
      <Link href={`/products/${product.slug}`} className="relative h-80 w-full">
        <Image
          src={image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-900 shadow-sm">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-4 px-6 py-6">
        <div>
          <div className="flex items-center justify-between">
            <Link
              href={`/products/${product.slug}`}
              className="text-lg font-semibold text-neutral-900 transition hover:text-neutral-700"
            >
              {product.name}
            </Link>
            <span className="text-sm font-semibold text-neutral-900">
              ${product.price}
            </span>
          </div>
          <p className="mt-2 text-sm text-neutral-600">
            {product.description.substring(0, 84)}...
          </p>
        </div>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <button
              key={color.name}
              type="button"
              className={`h-8 w-8 rounded-full border-2 transition ${selectedColor === color.name ? "border-neutral-900" : "border-transparent"}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color.name)}
              aria-label={`Select ${color.name}`}
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-600">
          {product.sizes.slice(0, 4).map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`rounded-full border px-3 py-2 transition ${selectedSize === size ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:border-neutral-600"}`}
            >
              {size}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="mt-auto flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-[2px] hover:bg-neutral-800"
        >
          {added ? "Added to Cart" : "Add to Cart"}
        </button>
        <p className="text-xs text-neutral-400">
          {product.rating.toFixed(1)} - {product.reviews.toLocaleString()} reviews
        </p>
      </div>
    </div>
  );
};
