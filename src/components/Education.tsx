"use client";

import { useState } from "react";
import Image from "next/image";

import { educationSection } from "@/content/education";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export default function Education() {
  const [expandedDegree, setExpandedDegree] = useState<string | null>(null);

  return (
    <Container>
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {educationSection.subtitle}
          </p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            {educationSection.title}
          </h2>
        </div>
        <div className="space-y-3">
          {educationSection.items.map((item) => {
            const isExpanded = expandedDegree === item.degree;
            const hasTopics = item.topics && item.topics.length > 0;

            return (
              <Card
                key={item.degree}
                className="border border-white/10 bg-white/5 p-5"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() =>
                    setExpandedDegree(isExpanded ? null : item.degree)
                  }
                >
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      {item.institution}
                      <span className="text-white/40">
                        {" "}
                        &middot; {item.location}
                      </span>
                      <span className="text-white/40">
                        {" "}
                        &middot; {item.year}
                      </span>
                    </p>
                  </div>
                  {item.logo ? (
                    item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${item.logo.alt} website`}
                        className="shrink-0 transition hover:opacity-70"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Image
                          src={item.logo.src}
                          alt={item.logo.alt}
                          width={120}
                          height={36}
                          unoptimized={item.logo.src.endsWith(".svg")}
                          className={`h-8 w-auto object-contain ${item.logo.src.includes("mdx") ? "" : "brightness-0 invert"}`}
                        />
                      </a>
                    ) : (
                      <Image
                        src={item.logo.src}
                        alt={item.logo.alt}
                        width={120}
                        height={36}
                        unoptimized={item.logo.src.endsWith(".svg")}
                        className={`h-8 w-auto shrink-0 object-contain ${item.logo.src.includes("mdx") ? "" : "brightness-0 invert"}`}
                      />
                    )
                  ) : null}
                  {hasTopics && (
                    <span
                      className={`ml-2 shrink-0 text-white/40 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    >
                      ▾
                    </span>
                  )}
                </button>
                {hasTopics && isExpanded && (
                  <ul className="mt-4 space-y-1.5 text-sm text-white/70">
                    {item.topics!.map((topic) => (
                      <li key={topic} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
