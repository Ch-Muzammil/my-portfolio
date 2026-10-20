import { MapPin } from "lucide-react";
import type { ExperienceItem } from "@/types/content";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  highlightLimit?: number;
}

export function TimelineItem({ item, index, highlightLimit }: TimelineItemProps) {
  const highlights = highlightLimit ? item.highlights.slice(0, highlightLimit) : item.highlights;

  return (
    <article className="experience-row" data-current={item.current} data-spotlight>
      <div className="experience-when">
        <span className="experience-index" aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>
        <p className="experience-date">{item.date}</p>
        <p className="experience-location">
          <MapPin aria-hidden="true" />
          {item.location}
        </p>
      </div>
      <div className="experience-main">
        <h3>
          {item.title}
          {item.employment ? <Badge>{item.employment}</Badge> : null}
        </h3>
        <p className="experience-company">{item.company}</p>
        <ul className="experience-highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
      <div className="tags experience-tags">
        {item.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </article>
  );
}
