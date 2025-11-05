"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/cart-context";

type ProductDetailProps = {
  product: Product;
};

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState("");

  const increment = () => setQuantity((qty) => Math.min(10, qty + 1));
  const decrement = () => setQuantity((qty) => Math.max(1, qty - 1));

  const handleAdd = () => {
    addItem({
      product,
      color: selectedColor.name,
      size: selectedSize,
      quantity,
    });
    setConfirmation(
      `${quantity} x ${product.name} added in ${selectedColor.name} / ${selectedSize}`,
    );
    window.setTimeout(() => setConfirmation(""), 2600);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
      <div className="space-y-6">
        <div className="relative h-[520px] w-full overflow-hidden rounded-[var(--radius-card)] bg-neutral-100">
          <Image
            src={activeImage}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
          {product.images.map((image) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(image)}
              className={`relative h-28 overflow-hidden rounded-2xl border ${activeImage === image ? "border-neutral-900" : "border-transparent"}`}
            >
              <Image src={image} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      <aside className="space-y-8 rounded-[var(--radius-card)] border border-neutral-200 bg-white px-8 py-10">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
            {product.category}
          </span>
          <h1 className="text-3xl font-semibold text-neutral-950">
            {product.name}
          </h1>
          <p className="text-sm leading-relaxed text-neutral-600">
            {product.description}
          </p>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-semibold text-neutral-900">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-neutral-400 line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            {product.rating.toFixed(1)} rating - {product.reviews.toLocaleString()} reviews
          </p>
        </div>

        <section className="space-y-4">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Color - {selectedColor.name}
            </p>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`h-10 w-10 rounded-full border-2 transition ${selectedColor.name === color.name ? "border-neutral-950" : "border-transparent"}`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name}`}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Size
            </p>
            <div className="grid grid-cols-3 gap-2 text-sm font-semibold uppercase tracking-wide">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-full border px-4 py-3 transition ${
                    selectedSize === size
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 hover:border-neutral-900/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full border border-neutral-200">
              <button
                type="button"
                onClick={decrement}
                className="h-11 w-11 rounded-full text-lg font-semibold"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="min-w-[3rem] text-center text-sm font-semibold">
                {quantity}
              </span>
              <button
                type="button"
                onClick={increment}
                className="h-11 w-11 rounded-full text-lg font-semibold"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Add to Cart
            </button>
          </div>
          {confirmation && (
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {confirmation}
            </p>
          )}
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Details
          </h2>
          <ul className="space-y-2 text-sm text-neutral-600">
            {product.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-[2px] h-2 w-2 rounded-full bg-neutral-900" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
};
