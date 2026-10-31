"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2 } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import type { ProjectImage } from "@/types/content";

interface CaseGalleryProps {
  shots: readonly ProjectImage[];
  viewLabel: string;
}

// Client leaf: lightbox open state and keyboard / swipe handling.
export function CaseGallery({ shots, viewLabel }: CaseGalleryProps) {
  const [index, setIndex] = useState(-1);

  const slides = shots.map((shot) => ({
    src: shot.src,
    width: shot.width,
    height: shot.height,
    alt: shot.alt,
    title: shot.title,
    description: shot.caption,
  }));

  return (
    <>
      <ul className="case-bento" data-count={Math.min(shots.length, 4)}>
        {shots.map((shot, i) => (
          <li key={shot.src} className="case-bento-item" data-featured={i === 0 || undefined}>
            <button
              type="button"
              className="case-shot"
              onClick={() => setIndex(i)}
              aria-label={`${viewLabel}: ${shot.title ?? shot.alt}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                quality={90}
                sizes={
                  i === 0
                    ? "(max-width: 40rem) 88vw, (max-width: 80rem) 66vw, 50rem"
                    : "(max-width: 40rem) 88vw, (max-width: 80rem) 33vw, 25rem"
                }
                className="case-shot-image"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
              <span className="case-shot-label">
                <span className="case-shot-index">{String(i + 1).padStart(2, "0")}</span>
                {shot.title ? <span className="case-shot-title">{shot.title}</span> : null}
              </span>
              <span className="case-shot-expand" aria-hidden="true">
                <Maximize2 />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        open={index >= 0}
        index={Math.max(index, 0)}
        close={() => setIndex(-1)}
        on={{ view: ({ index: current }) => setIndex(current) }}
        slides={slides}
        plugins={[Captions, Counter, Thumbnails, Zoom]}
        captions={{ descriptionTextAlign: "center", descriptionMaxLines: 2 }}
        thumbnails={{ width: 112, height: 63, border: 1, borderRadius: 10, padding: 0, gap: 10 }}
        zoom={{ maxZoomPixelRatio: 2.5, scrollToZoom: true }}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ finite: shots.length <= 1, padding: "4%" }}
        className="case-lightbox"
      />
    </>
  );
}
