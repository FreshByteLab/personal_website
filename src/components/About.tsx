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
            <ul className="space-y-4 text-sm text-white/70">
              {site.about.highlights.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  {item.logo ? (
                    <span className="flex h-9 w-28 items-center justify-center rounded-full bg-white/90 px-3">
                      <Image
                        src={item.logo.src}
                        alt={item.logo.alt}
                        width={120}
                        height={36}
                        unoptimized={item.logo.src.endsWith(".svg")}
                        className="h-5 w-auto object-contain"
                      />
                    </span>
                  ) : null}
                  <span className="flex-1">{item.text}</span>
                </li>
              ))}
            </ul>
          </Card>
        ) : null}
      </div>
    </Container>
  );
}
