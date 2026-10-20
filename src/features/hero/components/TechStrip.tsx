import { Code2, Component, Database, Flame, Layers, Wind, type LucideIcon } from "lucide-react";
import type { TechStripContent } from "@/types/content";

const icons: Record<string, LucideIcon> = {
  React: Component,
  "Next.js": Layers,
  TypeScript: Code2,
  "Tailwind CSS": Wind,
  Supabase: Database,
  Firebase: Flame,
};

interface TechStripProps {
  content: TechStripContent;
}

export function TechStrip({ content }: TechStripProps) {
  const [firstLine, secondLine] = content.label.split("\n");
  // Each group repeats the list so a single group is always wider than the viewport.
  const loop = [...content.items, ...content.items];

  return (
    <div className="craft-strip" aria-label={content.accessibleName}>
      <div className="page-container craft-strip-inner">
        <p className="craft-label">
          {firstLine}
          {secondLine ? <span>{secondLine}</span> : null}
        </p>
        <div className="marquee">
          <ul className="marquee-group">
            {content.items.map((name) => (
              <TechItem key={name} name={name} />
            ))}
            {content.items.map((name) => (
              <TechItem key={`${name}-repeat`} name={name} hidden />
            ))}
          </ul>
          <ul className="marquee-group" aria-hidden="true">
            {loop.map((name, index) => (
              <TechItem key={`${name}-copy-${index}`} name={name} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TechItem({ name, hidden = false }: { name: string; hidden?: boolean }) {
  const Icon = icons[name];
  return (
    <li className="technology" aria-hidden={hidden || undefined}>
      {Icon ? <Icon aria-hidden="true" /> : null}
      {name}
    </li>
  );
}
