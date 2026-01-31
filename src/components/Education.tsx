import Image from "next/image";

import { educationSection } from "@/content/education";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export default function Education() {
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
        <Card className="p-6">
          <ul className="space-y-4 text-sm text-white/70">
            {educationSection.items.map((item) => (
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
                <div className="flex-1">
                  <span>{item.text}</span>
                  {item.topics && item.topics.length > 0 && (
                    <ul className="mt-2 list-disc pl-5 text-white/50">
                      {item.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Container>
  );
}
