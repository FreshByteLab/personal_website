import Image from "next/image";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export default function About() {
  const hasHighlights = site.about.highlights.length > 0;

  return (
    <Container>
      <div
        className={cn(
          "grid gap-10",
          hasHighlights ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
        )}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {site.about.subtitle}
          </p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            {site.about.title}
          </h2>
          <p className="mt-6 text-base text-white/70 sm:text-lg">
            {site.about.paragraph}
          </p>
        </div>
        {hasHighlights ? (
          <Card className="p-6">
            <ul className="space-y-5 text-sm text-white/70">
              {site.about.highlights.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div className="flex-1">
                    {item.title && (
                      <span className="font-semibold text-white">{item.title} — </span>
                    )}
                    <span>{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        ) : null}
      </div>
    </Container>
  );
}
