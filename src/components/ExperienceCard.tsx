"use client";

import { useState, useEffect } from "react";
import type { ExperienceItem } from "@/content/types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type ExperienceCardProps = {
  item: ExperienceItem;
  forceExpanded?: boolean;
  onToggle?: () => void;
};

export default function ExperienceCard({ item, forceExpanded, onToggle }: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(!!forceExpanded);
  }, [forceExpanded]);
  const hasDetails =
    (item.skills && item.skills.length > 0) ||
    (item.achievements && item.achievements.length > 0);

  return (
    <Card
      id={`exp-${item.id}`}
      className="border border-white/10 bg-white/5 p-6 transition hover:border-white/20"
    >
      {/* Header - always visible, clickable */}
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 text-left"
        onClick={() => {
          setExpanded((prev) => !prev);
          onToggle?.();
        }}
        aria-expanded={expanded}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">{item.role}</h3>
              <p className="text-sm text-white/70">
                {item.company}
                {item.location ? (
                  <span className="text-white/40"> &middot; {item.location}</span>
                ) : null}
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">
              {item.dates}
            </span>
          </div>

          {/* Bullets - always visible */}
          <ul className="mt-5 space-y-2 text-sm text-white/70">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expand/collapse chevron */}
        {hasDetails ? (
          <span
            className={`mt-1 shrink-0 text-white/40 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        ) : null}
      </button>

      {/* Collapsible details */}
      {hasDetails ? (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "mt-5 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 pt-5">
            {/* Achievements */}
            {item.achievements && item.achievements.length > 0 ? (
              <div className="mb-4">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Key Achievements
                </h4>
                <ul className="space-y-1.5 text-sm">
                  {item.achievements.map((a) => (
                    <li key={a} className="flex gap-3 text-accent">
                      <span className="mt-0.5 shrink-0">&#9733;</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Skills */}
            {item.skills && item.skills.length > 0 ? (
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Skills & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="border-accent/20 bg-accent/5 text-accent"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </Card>
  );
}
