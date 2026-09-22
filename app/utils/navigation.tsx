"use client";

import { navigationItems } from "../data/navigation-items";
import NavigationLink from "./NavigationLink";

export default function Navigation() {
  return (
    <nav aria-label="Navegacion principal">
      <ul className="flex items-center gap-1">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <NavigationLink item={item} />
          </li>
        ))}
        <li>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            className="inline-block rounded-md px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            Next.js
          </a>
        </li>
      </ul>
    </nav>
  );
}