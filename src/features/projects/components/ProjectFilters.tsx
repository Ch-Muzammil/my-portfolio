"use client";

import { useState } from "react";
import type { Project } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { ProjectGrid } from "@/features/projects/components/ProjectGrid";

interface ProjectFiltersProps {
  projects: readonly Project[];
  filters: readonly string[];
  allFilter: string;
  label: string;
}

// Client leaf: the selected filter is local UI state.
export function ProjectFilters({ projects, filters, allFilter, label }: ProjectFiltersProps) {
  const [filter, setFilter] = useState(allFilter);
  const visible =
    filter === allFilter ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className="filter-tabs" role="group" aria-label={label}>
        {filters.map((item) => (
          <Button
            key={item}
            type="button"
            variant={filter === item ? "primary" : "quiet"}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <ProjectGrid projects={visible} />
    </>
  );
}
