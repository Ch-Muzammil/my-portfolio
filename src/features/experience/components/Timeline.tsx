import type { ExperienceItem } from "@/types/content";
import { Reveal } from "@/components/ui/Reveal";
import { TimelineItem } from "@/features/experience/components/TimelineItem";

interface TimelineProps {
  items: readonly ExperienceItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <Reveal key={item.date}>
          <TimelineItem item={item} />
        </Reveal>
      ))}
    </div>
  );
}
