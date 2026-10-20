import type { CSSProperties } from "react";
import type { SkillItem } from "@/types/content";
import { BrandIcon, brandColors } from "@/components/ui/BrandIcon";

interface CoreTileProps {
  skill: SkillItem;
}

export function CoreTile({ skill }: CoreTileProps) {
  return (
    <div
      className="core-tile"
      data-spotlight
      style={{ "--brand": brandColors[skill.icon] } as CSSProperties}
    >
      <div className="skill-icon" aria-hidden="true">
        <BrandIcon name={skill.icon} />
      </div>
      <div>
        <p className="skill-name">{skill.name}</p>
        <p className="skill-level">{skill.level}</p>
      </div>
    </div>
  );
}
