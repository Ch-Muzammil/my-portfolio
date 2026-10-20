import type { ExperienceItem } from "@/types/content";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";

interface TimelineItemProps {
  item: ExperienceItem;
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <article className={item.current ? "experience-row current" : "experience-row"}>
      <p className="experience-date">{item.date}</p>
      <div>
        <h3>
          {item.title} <Badge>{item.employment}</Badge>
        </h3>
        <p className="experience-company">{item.company}</p>
        <p className="body-copy">{item.description}</p>
        <div className="tags">
          {item.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      </div>
    </article>
  );
}
