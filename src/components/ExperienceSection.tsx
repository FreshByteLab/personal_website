"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { experienceSection } from "@/content/experience";
import { milestonesSection } from "@/content/milestones";
import type { MilestoneItem } from "@/content/types";
import Badge from "@/components/ui/Badge";

/* ── Category SVG icons (all white, 18×18) ── */

function BankIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
      <path d="M10 1L1 6h18L10 1Z" fill="#fff" />
      <rect x="3" y="7" width="2" height="8" rx="0.5" fill="#fff" />
      <rect x="7" y="7" width="2" height="8" rx="0.5" fill="#fff" />
      <rect x="11" y="7" width="2" height="8" rx="0.5" fill="#fff" />
      <rect x="15" y="7" width="2" height="8" rx="0.5" fill="#fff" />
      <rect x="1" y="16" width="18" height="2" rx="0.5" fill="#fff" />
    </svg>
  );
}

function TechIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
      <rect x="1" y="3" width="18" height="12" rx="2" stroke="#fff" strokeWidth="1.5" />
      <polyline points="5,8 8,10 5,12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10" y1="12" x2="14" y2="12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="18" x2="14" y2="18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="15" x2="10" y2="18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L1 7l9 5 9-5-9-5Z" fill="#fff" />
      <path d="M4 9v5c0 1 2.5 3 6 3s6-2 6-3V9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="18" y1="7" x2="18" y2="14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CertificationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="1" width="14" height="18" rx="2" stroke="#fff" strokeWidth="1.5" />
      <line x1="6" y1="6" x2="14" y2="6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="9.5" x2="14" y2="9.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="13" x2="10" y2="13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CategoryIcon({ category }: { category?: MilestoneItem["category"] }) {
  switch (category) {
    case "bank": return <BankIcon />;
    case "tech": return <TechIcon />;
    case "education": return <EducationIcon />;
    case "certification": return <CertificationIcon />;
    default: return <BankIcon />;
  }
}

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const entryRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const experienceMap = useMemo(() => {
    const map = new Map<string, (typeof experienceSection.items)[number]>();
    for (const item of experienceSection.items) {
      map.set(item.id, item);
    }
    return map;
  }, []);

  useEffect(() => {
    if (!expandedId) return;
    function handleClick(e: MouseEvent) {
      const el = entryRefs.current.get(expandedId!);
      if (el && !el.contains(e.target as Node)) setExpandedId(null);
    }
    const id = requestAnimationFrame(() => document.addEventListener("click", handleClick));
    return () => { cancelAnimationFrame(id); document.removeEventListener("click", handleClick); };
  }, [expandedId]);

  const handleToggle = useCallback((targetId: string) => {
    setExpandedId((prev) => {
      const next = prev === targetId ? null : targetId;
      if (next) {
        setTimeout(() => {
          const el = document.getElementById(`tl-${targetId}`);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
      return next;
    });
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

      {/* ── Desktop: alternating tree timeline ── */}
      <div className="relative hidden md:block">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent/40 via-accent/20 to-accent/40" />

        <div className="flex flex-col gap-6">
          {milestonesSection.items.map((item, index) => {
            const isLeft = item.category === "education" || item.category === "certification";
            const exp = item.targetId ? experienceMap.get(item.targetId) : null;
            const hasMilestoneBullets = item.bullets && item.bullets.length > 0;
            const expandId = item.targetId || (item.topics && item.topics.length > 0 ? `topics-${index}` : null) || (hasMilestoneBullets ? `bullets-${index}` : null);
            const isExpanded = expandedId === expandId;
            const hasTopics = item.topics && item.topics.length > 0;
            const hasExpandable = hasTopics || hasMilestoneBullets || (exp && ((exp.skills && exp.skills.length > 0) || (exp.achievements && exp.achievements.length > 0) || (exp.bullets && exp.bullets.length > 0)));
            const key = `${item.period}-${item.title}-${index}`;

            return (
              <div
                key={key}
                id={expandId ? `tl-${expandId}` : undefined}
                ref={(node) => {
                  if (expandId) {
                    if (node) entryRefs.current.set(expandId, node);
                    else entryRefs.current.delete(expandId);
                  }
                }}
                className="relative"
              >
                {/* Year bubble — center */}
                <div className="absolute left-1/2 top-3 z-20 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent/50 bg-midnight shadow-[0_0_24px_rgba(159,178,200,0.25)]">
                  <CategoryIcon category={item.category} />
                </div>

                {/* Card — left or right */}
                <div className={`flex ${isLeft ? "justify-start pr-[calc(50%+2.5rem)]" : "justify-end pl-[calc(50%+2.5rem)]"}`}>
                  <div className="w-full">
                    <button
                      type="button"
                      disabled={!hasExpandable}
                      onClick={() => expandId && handleToggle(expandId)}
                      className={`w-full rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm transition text-left ${
                        hasExpandable ? "cursor-pointer hover:border-accent/30 hover:bg-white/[0.09]" : ""
                      }`}
                    >
                      {/* Header */}
                      <div className={`flex items-start gap-3 ${isLeft ? "flex-row-reverse text-right" : ""}`}>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-accent/70">
                            {item.period}
                          </span>
                          <h4 className="mt-0.5 text-sm font-semibold text-white leading-snug">
                            {item.url ? (
                              <a href={item.url} target="_blank" rel="noreferrer" className="transition hover:text-accent" onClick={(e) => e.stopPropagation()}>
                                {item.title}
                              </a>
                            ) : item.title}
                          </h4>
                          {exp && (
                            <p className="mt-0.5 text-sm font-medium text-accent/80">
                              {exp.role}{exp.location && <span className="text-white/40"> · {exp.location}</span>}
                            </p>
                          )}
                          {item.description && (
                            <p className="mt-0.5 text-xs text-white/50 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                        {/* Logo inside card if available */}
                        {item.logo && (
                          <Image
                            src={item.logo.src}
                            alt={item.logo.alt}
                            width={80}
                            height={28}
                            unoptimized={item.logo.src.endsWith(".svg")}
                            className={`h-6 w-auto shrink-0 object-contain ${item.logo.src.includes("mdx") ? "" : "brightness-0 invert"}`}
                          />
                        )}
                        {/* Chevron */}
                        {hasExpandable && (
                          <span className={`mt-0.5 shrink-0 text-white/40 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        )}
                      </div>

                      {/* Expanded details */}
                      {hasExpandable && (
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "mt-3 max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className={`border-t border-white/10 pt-3 ${isLeft ? "text-left" : ""}`}>
                            {exp && exp.bullets && exp.bullets.length > 0 && (
                              <ul className="space-y-1.5 text-xs text-white/70">
                                {exp.bullets.map((bullet) => (
                                  <li key={bullet} className="flex gap-2">
                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {exp && exp.achievements && exp.achievements.length > 0 && (
                              <div className="mt-3">
                                <h5 className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Achievements</h5>
                                <ul className="space-y-1 text-xs">
                                  {exp.achievements.map((a) => (
                                    <li key={a} className="flex gap-2 text-accent">
                                      <span className="mt-0.5 shrink-0 text-[10px]">&#9733;</span>
                                      <span>{a}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {exp && exp.skills && exp.skills.length > 0 && (
                              <div className="mt-3">
                                <h5 className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Skills</h5>
                                <div className="flex flex-wrap gap-1.5">
                                  {exp.skills.map((skill) => (
                                    <Badge key={skill} className="border-accent/20 bg-accent/5 text-accent text-[10px] px-2 py-0.5">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                            {hasMilestoneBullets && (
                              <ul className={`space-y-1.5 text-xs text-white/70 ${exp ? "mt-3" : ""}`}>
                                {item.bullets!.map((bullet) => (
                                  <li key={bullet} className="flex gap-2">
                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {hasTopics && (
                              <div className={exp || hasMilestoneBullets ? "mt-3" : ""}>
                                <h5 className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Topics</h5>
                                <div className="flex flex-wrap gap-1.5">
                                  {item.topics!.map((topic) => (
                                    <Badge key={topic} className="border-accent/20 bg-accent/5 text-accent text-[10px] px-2 py-0.5">
                                      {topic}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile: single-column timeline ── */}
      <div className="relative md:hidden">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/40 via-accent/20 to-accent/40" />

        <div className="flex flex-col gap-4">
          {milestonesSection.items.map((item, index) => {
            const exp = item.targetId ? experienceMap.get(item.targetId) : null;
            const hasMilestoneBullets = item.bullets && item.bullets.length > 0;
            const expandId = item.targetId || (item.topics && item.topics.length > 0 ? `topics-${index}` : null) || (hasMilestoneBullets ? `bullets-${index}` : null);
            const isExpanded = expandedId === expandId;
            const hasTopics = item.topics && item.topics.length > 0;
            const hasExpandable = hasTopics || hasMilestoneBullets || (exp && ((exp.skills && exp.skills.length > 0) || (exp.achievements && exp.achievements.length > 0) || (exp.bullets && exp.bullets.length > 0)));
            const key = `m-${item.period}-${item.title}-${index}`;

            return (
              <div
                key={key}
                id={expandId ? `tl-m-${expandId}` : undefined}
                ref={(node) => {
                  if (expandId) {
                    if (node) entryRefs.current.set(expandId, node);
                    else entryRefs.current.delete(expandId);
                  }
                }}
                className="relative flex items-start gap-4"
              >
                {/* Node circle */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent/40 bg-midnight">
                  <CategoryIcon category={item.category} />
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <button
                    type="button"
                    disabled={!hasExpandable}
                    onClick={() => expandId && handleToggle(expandId)}
                    className={`w-full rounded-xl border border-white/10 bg-white/[0.06] p-4 text-left backdrop-blur-sm transition ${
                      hasExpandable ? "cursor-pointer hover:border-accent/30 hover:bg-white/[0.09]" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-semibold uppercase tracking-[0.15em] text-accent/70">{item.period}</span>
                        <h4 className="mt-0.5 text-sm font-semibold text-white">
                          {item.url ? (
                            <a href={item.url} target="_blank" rel="noreferrer" className="transition hover:text-accent" onClick={(e) => e.stopPropagation()}>
                              {item.title}
                            </a>
                          ) : item.title}
                        </h4>
                        {exp && (
                          <p className="mt-0.5 text-sm font-medium text-accent/80">
                            {exp.role}{exp.location && <span className="text-white/40"> · {exp.location}</span>}
                          </p>
                        )}
                        {item.description && <p className="mt-0.5 text-xs text-white/50">{item.description}</p>}
                      </div>
                      {item.logo && (
                        <Image
                          src={item.logo.src}
                          alt={item.logo.alt}
                          width={60}
                          height={20}
                          unoptimized={item.logo.src.endsWith(".svg")}
                          className={`h-5 w-auto shrink-0 object-contain ${item.logo.src.includes("mdx") ? "" : "brightness-0 invert"}`}
                        />
                      )}
                      {hasExpandable && (
                        <span className={`shrink-0 text-white/40 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      )}
                    </div>

                    {hasExpandable && (
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "mt-3 max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="border-t border-white/10 pt-3">
                          {exp && exp.bullets && exp.bullets.length > 0 && (
                            <ul className="space-y-1.5 text-xs text-white/70">
                              {exp.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-2">
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {exp && exp.achievements && exp.achievements.length > 0 && (
                            <div className="mt-3">
                              <h5 className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Achievements</h5>
                              <ul className="space-y-1 text-xs">
                                {exp.achievements.map((a) => (
                                  <li key={a} className="flex gap-2 text-accent">
                                    <span className="mt-0.5 shrink-0 text-[10px]">&#9733;</span>
                                    <span>{a}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {exp && exp.skills && exp.skills.length > 0 && (
                            <div className="mt-3">
                              <h5 className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Skills</h5>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.skills.map((skill) => (
                                  <Badge key={skill} className="border-accent/20 bg-accent/5 text-accent text-[10px] px-2 py-0.5">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          {hasMilestoneBullets && (
                            <ul className={`space-y-1.5 text-xs text-white/70 ${exp ? "mt-3" : ""}`}>
                              {item.bullets!.map((bullet) => (
                                <li key={bullet} className="flex gap-2">
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {hasTopics && (
                            <div className={exp || hasMilestoneBullets ? "mt-3" : ""}>
                              <h5 className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Topics</h5>
                              <div className="flex flex-wrap gap-1.5">
                                {item.topics!.map((topic) => (
                                  <Badge key={topic} className="border-accent/20 bg-accent/5 text-accent text-[10px] px-2 py-0.5">
                                    {topic}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
