import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ExperienceContent } from "@/types/content";

interface ResumeDownloadsProps {
  resume: ExperienceContent["resume"];
}

export function ResumeDownloads({ resume }: ResumeDownloadsProps) {
  return (
    <div className="resume-downloads">
      <div className="resume-actions">
        {resume.downloads.map((item, index) => (
          <Button key={item.href} href={item.href} download variant={index === 0 ? "primary" : "quiet"}>
            {item.label}
            <Download aria-hidden="true" />
          </Button>
        ))}
      </div>
      <p className="form-note">{resume.note}</p>
    </div>
  );
}
