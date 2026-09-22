"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "../types/navigation";

type Props = {
  item: NavItem;
};

export default function NavigationLink({ item }: Props) {
  const pathname = usePathname();
  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

  return (
    <Link
      href={item.href}
      className={`inline-block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
          : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
      }`}
    >
      {item.label}
    </Link>
  );
}