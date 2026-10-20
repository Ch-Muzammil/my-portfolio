import type { ExperienceItem } from "@/types/content";
import { Reveal } from "@/components/ui/Reveal";
import { TimelineItem } from "@/features/experience/components/TimelineItem";

interface TimelineProps {
  items: readonly ExperienceItem[];
  highlightLimit?: number;
}

export function Timeline({ items, highlightLimit }: TimelineProps) {
  return (
    <ol className="timeline">
      {items.map((item, index) => (
        <li key={item.date}>
          <Reveal delay={index}>
            <TimelineItem item={item} index={index + 1} highlightLimit={highlightLimit} />
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
