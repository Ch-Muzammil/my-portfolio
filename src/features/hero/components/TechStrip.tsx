import type { TechStripContent } from "@/types/content";
import { BrandIcon } from "@/components/ui/BrandIcon";

type TechItemData = TechStripContent["items"][number];

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
            {content.items.map((item) => (
              <TechItem key={item.name} item={item} />
            ))}
            {content.items.map((item) => (
              <TechItem key={`${item.name}-repeat`} item={item} hidden />
            ))}
          </ul>
          <ul className="marquee-group" aria-hidden="true">
            {loop.map((item, index) => (
              <TechItem key={`${item.name}-copy-${index}`} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TechItem({ item, hidden = false }: { item: TechItemData; hidden?: boolean }) {
  return (
    <li className="technology" aria-hidden={hidden || undefined}>
      <BrandIcon name={item.icon} />
      {item.name}
    </li>
  );
}
