import type { ExperienceItem } from "@/types/content";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <article className="experience-row" data-current={item.current} data-spotlight>
      <div className="experience-when">
        <span className="experience-index" aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>
        <p className="experience-date">{item.date}</p>
      </div>
      <div className="experience-main">
        <h3>
          {item.title} <Badge>{item.employment}</Badge>
        </h3>
        <p className="experience-company">{item.company}</p>
        <p className="body-copy">{item.description}</p>
      </div>
      <div className="tags experience-tags">
        {item.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </article>
  );
}
