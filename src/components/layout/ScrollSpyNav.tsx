"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/content";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface ScrollSpyNavProps {
  items: readonly NavItem[];
  label: string;
}

// Client leaf: highlights the section currently in view. Scroll updates use requestAnimationFrame.
export function ScrollSpyNav({ items, label }: ScrollSpyNavProps) {
  const pathname = usePathname();
  const activeId = useScrollSpy(
    items.map((item) => item.id),
    pathname === "/",
  );

  return (
    <nav aria-label={label} className="desktop-nav">
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/#${item.id}`}
          className="nav-link"
          data-active={activeId === item.id}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
