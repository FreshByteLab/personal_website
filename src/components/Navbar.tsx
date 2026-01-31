"use client";

import { useEffect, useState } from "react";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import Container from "@/components/ui/Container";

const sectionIds = site.nav.map((item) => item.id);

export default function Navbar() {
  const [active, setActive] = useState(site.nav[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionIds.includes(hash)) {
      setActive(hash);
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6]
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.4em] text-white/80">
            {site.name}
          </span>
          {site.role ? (
            <span className="mt-1 text-xs text-white/50">{site.role}</span>
          ) : null}
        </div>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/60 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "relative transition hover:text-white",
                active === item.id ? "text-white" : ""
              )}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-2 left-0 h-px w-full bg-white/60 transition-opacity",
                  active === item.id ? "opacity-100" : "opacity-0"
                )}
              />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-xs text-white/70 md:hidden">
          <span className="rounded-full border border-white/10 px-3 py-1">
            {site.nav.find((item) => item.id === active)?.label ?? "Explore"}
          </span>
        </div>
      </Container>
      <div className="border-t border-white/5 bg-black/30 md:hidden">
        <Container className="flex gap-3 overflow-x-auto py-3 text-xs text-white/70">
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-full border border-white/10 px-4 py-2 transition",
                active === item.id
                  ? "border-accent/60 bg-white/10 text-white"
                  : "hover:text-white"
              )}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  );
}
