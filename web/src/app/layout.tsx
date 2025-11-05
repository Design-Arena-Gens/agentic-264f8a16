import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LuxeThreads | Modern Clothing Essentials",
    template: "%s | LuxeThreads",
  },
  description:
    "LuxeThreads curates elevated wardrobe essentials for women, men, and accessories with uncompromising craftsmanship.",
  metadataBase: new URL("https://agentic-264f8a16.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-50 text-neutral-900 antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
