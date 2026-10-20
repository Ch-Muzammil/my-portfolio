import { Code2, Component, Database, Flame, Layers, type LucideIcon } from "lucide-react";
import type { TechStripContent } from "@/types/content";

const icons: Record<string, LucideIcon> = {
  React: Component,
  "Next.js": Layers,
  TypeScript: Code2,
  "Tailwind CSS": Layers,
  Supabase: Database,
  Firebase: Flame,
};

interface TechStripProps {
  content: TechStripContent;
}

export function TechStrip({ content }: TechStripProps) {
  const [firstLine, secondLine] = content.label.split("\n");

  return (
    <div className="craft-strip" aria-label={content.accessibleName}>
      <div className="page-container craft-strip-inner">
        <p className="craft-label">
          {firstLine}
          {secondLine ? (
            <>
              <br />
              {secondLine}
            </>
          ) : null}
        </p>
        <div className="marquee">
          <ul className="marquee-group">
            {content.items.map((name) => (
              <TechItem key={name} name={name} />
            ))}
          </ul>
          <ul className="marquee-group" aria-hidden="true">
            {content.items.map((name) => (
              <TechItem key={`${name}-copy`} name={name} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TechItem({ name }: { name: string }) {
  const Icon = icons[name];
  return (
    <li className="technology">
      {Icon ? <Icon aria-hidden="true" /> : null}
      {name}
    </li>
  );
}
