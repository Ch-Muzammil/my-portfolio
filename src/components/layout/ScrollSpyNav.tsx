"use client";

import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/content";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface ScrollSpyNavProps {
  items: readonly NavItem[];
  label: string;
}

interface IndicatorBox {
  left: number;
  width: number;
}

// Client leaf: highlights the section in view and slides a pill under it (or under the hovered link).
export function ScrollSpyNav({ items, label }: ScrollSpyNavProps) {
  const pathname = usePathname();
  const activeId = useScrollSpy(
    items.map((item) => item.id),
    pathname === "/",
  );
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [box, setBox] = useState<IndicatorBox | null>(null);
  const links = useRef(new Map<string, HTMLAnchorElement>());
  const targetId = hoverId ?? activeId;

  useLayoutEffect(() => {
    const node = targetId ? links.current.get(targetId) : undefined;
    setBox(node ? { left: node.offsetLeft, width: node.offsetWidth } : null);
  }, [targetId]);

  const style = box
    ? ({ "--nav-x": `${box.left}px`, "--nav-w": `${box.width}px` } as CSSProperties)
    : undefined;

  return (
    <nav
      aria-label={label}
      className="desktop-nav"
      onPointerLeave={() => setHoverId(null)}
      data-indicator={box ? "on" : "off"}
      style={style}
    >
      <span className="nav-indicator" aria-hidden="true" />
      {items.map((item) => (
        <Link
          key={item.id}
          ref={(node) => {
            if (node) links.current.set(item.id, node);
            else links.current.delete(item.id);
          }}
          href={`/#${item.id}`}
          className="nav-link"
          data-active={activeId === item.id}
          data-lit={targetId === item.id}
          onPointerEnter={() => setHoverId(item.id)}
          onFocus={() => setHoverId(item.id)}
          onBlur={() => setHoverId(null)}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
