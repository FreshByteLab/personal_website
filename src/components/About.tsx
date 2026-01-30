import { site } from "@/content/site";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export default function About() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
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
        <Card className="p-6">
          <ul className="space-y-4 text-sm text-white/70">
            {site.about.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Container>
  );
}
