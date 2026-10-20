import { Code2, Component, Flame, Layers, PenTool, Zap, type LucideIcon } from "lucide-react";
import type { SkillItem } from "@/types/content";

const icons: Record<string, LucideIcon> = {
  React: Code2,
  "Next.js": Flame,
  TypeScript: Component,
  "JavaScript ES6+": Zap,
  "Tailwind CSS": Layers,
  Figma: PenTool,
};

interface CoreTileProps {
  skill: SkillItem;
}

export function CoreTile({ skill }: CoreTileProps) {
  const Icon = icons[skill.name];

  return (
    <div className="core-tile" data-spotlight>
      <div className="skill-icon" aria-hidden="true">
        {Icon ? <Icon /> : null}
      </div>
      <div>
        <p className="skill-name">{skill.name}</p>
        <p className="skill-level">{skill.level}</p>
      </div>
    </div>
  );
}
