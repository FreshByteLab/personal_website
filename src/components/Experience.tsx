import { experienceSection } from "@/content/experience";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export default function Experience() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {experienceSection.subtitle}
          </p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            {experienceSection.title}
          </h2>
        </div>
        <div className="grid gap-6">
          {experienceSection.items.map((item) => (
            <Card
              key={`${item.role}-${item.company}`}
              className="border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm text-white/70">{item.company}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {item.dates}
                </span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
