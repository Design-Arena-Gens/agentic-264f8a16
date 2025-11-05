import Link from "next/link";

const footerLinks = [
  {
    title: "Collections",
    items: [
      { label: "Fall Capsule", href: "/products?category=Women" },
      { label: "Architect Series", href: "/products?category=Men" },
      { label: "Elements Accessories", href: "/products?category=Accessories" },
    ],
  },
  {
    title: "About",
    items: [
      { label: "Our Story", href: "#about" },
      { label: "Responsible Materials", href: "#responsibility" },
      { label: "Journal", href: "#editorial" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Shipping & Returns", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "mailto:hello@luxethreads.com" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto grid w-full max-w-[var(--width-content)] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="space-y-4">
          <p className="text-xl font-semibold tracking-wide">LuxeThreads</p>
          <p className="text-sm leading-relaxed text-neutral-600">
            Elevated essentials designed in New York and handcrafted with
            globally sourced, responsible materials.
          </p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              {section.title}
            </p>
            <ul className="space-y-2 text-neutral-600">
              {section.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-neutral-950"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-neutral-200 bg-neutral-50/80">
        <div className="mx-auto flex w-full max-w-[var(--width-content)] flex-col gap-3 px-6 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} LuxeThreads. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-neutral-900">
              Terms
            </Link>
            <Link href="#" className="hover:text-neutral-900">
              Privacy
            </Link>
            <Link href="#" className="hover:text-neutral-900">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
