import type { SkillGroup as SkillGroupData } from "@/types/content";
import { Chip } from "@/components/ui/Chip";

interface SkillGroupProps {
  group: SkillGroupData;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="skill-group">
      <p className="skill-group-label">
        {group.label} <span className="skill-count">{group.skills.length}</span>
      </p>
      <div className="skill-chips">
        {group.skills.map((skill) => (
          <Chip key={skill}>{skill}</Chip>
        ))}
      </div>
    </div>
  );
}
