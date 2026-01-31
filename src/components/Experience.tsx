import { experienceSection } from "@/content/experience";
import { milestonesSection } from "@/content/milestones";
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
        <Card className="border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {milestonesSection.subtitle}
          </p>
          <h3 className="mt-3 font-display text-2xl text-white">
            {milestonesSection.title}
          </h3>
          <div className="relative mt-6">
            <div className="pointer-events-none absolute left-0 right-0 top-7 h-px bg-white/10" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/50 to-transparent" />
            <div className="flex gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory">
              {milestonesSection.items.map((item, index) => (
                <div
                  key={`${item.period}-${item.title}`}
                  className={`relative min-w-[220px] max-w-[260px] snap-start ${
                    index % 2 === 0 ? "mt-0" : "mt-6"
                  }`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(159,178,200,0.6)]" />
                    <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {item.period}
                    </span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <h4 className="text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-white/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
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
