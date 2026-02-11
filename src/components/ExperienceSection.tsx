"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { experienceSection } from "@/content/experience";
import { milestonesSection } from "@/content/milestones";
import ExperienceCard from "@/components/ExperienceCard";

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Auto-collapse when clicking outside the expanded card
  useEffect(() => {
    if (!expandedId) return;

    function handleClick(e: MouseEvent) {
      const el = cardRefs.current.get(expandedId!);
      if (el && !el.contains(e.target as Node)) {
        setExpandedId(null);
      }
    }

    // Defer so the current click event doesn't immediately trigger collapse
    const id = requestAnimationFrame(() => {
      document.addEventListener("click", handleClick);
    });
    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("click", handleClick);
    };
  }, [expandedId]);

  const handleMilestoneClick = useCallback((targetId: string) => {
    setExpandedId(targetId);
    setTimeout(() => {
      const el = document.getElementById(`exp-${targetId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {experienceSection.subtitle}
        </p>
        <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
          {experienceSection.title}
        </h2>
      </div>

      {/* Milestones vertical timeline */}
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {milestonesSection.subtitle}
        </p>
        <h3 className="mt-3 font-display text-2xl text-white">
          {milestonesSection.title}
        </h3>

        <div className="relative mt-10">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-white/10 md:left-1/2" />

          <div className="flex flex-col gap-12">
            {milestonesSection.items.map((item, index) => {
              const isLeft = index % 2 === 0;

              const card = (
                <div
                  className={`rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition ${
                    item.targetId
                      ? "cursor-pointer hover:border-accent/30 hover:bg-white/8"
                      : ""
                  }`}
                >
                  <span className="mb-2 inline-block text-xs uppercase tracking-[0.2em] text-white/50">
                    {item.period}
                  </span>
                  <h4 className="text-base font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                  {item.targetId ? (
                    <span className="mt-2 inline-block text-xs text-accent/60">
                      View details &darr;
                    </span>
                  ) : null}
                </div>
              );

              return (
                <div
                  key={`${item.period}-${item.title}`}
                  className="relative flex items-start"
                >
                  {/* Dot - mobile left, desktop center */}
                  <div className="absolute left-[15px] top-6 z-10 -translate-x-1/2 md:left-1/2">
                    <span className="block h-3 w-3 rounded-full bg-accent shadow-[0_0_18px_rgba(159,178,200,0.6)]" />
                  </div>

                  {/* Desktop alternating layout */}
                  <div className={`hidden w-full items-start md:flex ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                    {/* Card side */}
                    <div className="w-[calc(50%-1.5rem)]">
                      {item.targetId ? (
                        <button
                          type="button"
                          onClick={() => handleMilestoneClick(item.targetId!)}
                          className="w-full text-left"
                        >
                          {card}
                        </button>
                      ) : (
                        card
                      )}
                    </div>
                    {/* Spacer for center dot area */}
                    <div className="w-12 shrink-0" />
                    {/* Empty side */}
                    <div className="w-[calc(50%-1.5rem)]" />
                  </div>

                  {/* Mobile layout - single column */}
                  <div className="pl-10 md:hidden">
                    {item.targetId ? (
                      <button
                        type="button"
                        onClick={() => handleMilestoneClick(item.targetId!)}
                        className="w-full text-left"
                      >
                        {card}
                      </button>
                    ) : (
                      card
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Experience cards - collapsible */}
      <div className="grid gap-6">
        {experienceSection.items.map((item) => (
          <div
            key={`${item.role}-${item.company}`}
            ref={(node) => {
              if (node) {
                cardRefs.current.set(item.id, node);
              } else {
                cardRefs.current.delete(item.id);
              }
            }}
          >
            <ExperienceCard
              item={item}
              forceExpanded={expandedId === item.id}
              onToggle={() =>
                setExpandedId((prev) => (prev === item.id ? null : item.id))
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
