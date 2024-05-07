"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 w-full px-6 py-2 backdrop-blur-xl md:px-0">
      <ul className="flex w-fit space-x-1 font-semibold md:mx-0">
        {navItems.map(({ label, href }, idx) => (
          <li className="flex" key={idx}>
            <Link
              href={href}
              className={`rounded-md px-3 py-2  duration-300 hover:bg-stone-900 hover:text-stone-300 ${
                href === pathname
                  ? "bg-stone-900 text-stone-300"
                  : "text-stone-500"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];
