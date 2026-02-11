import { skillsSection } from "@/content/skills";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Skills() {
  return (
    <Container>
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {skillsSection.subtitle}
          </p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            {skillsSection.title}
          </h2>
        </div>

        {/* Zone 1: Strengths */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillsSection.strengths.map((s) => (
            <Card
              key={s.title}
              className="group p-5 transition-colors hover:border-white/20"
            >
              <span className="text-2xl" aria-hidden="true">
                {s.icon}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/50">
                {s.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Zone 2: Skills & Technologies */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Markets + Quant badges */}
          <Card className="p-6">
            <div className="space-y-6">
              {skillsSection.groups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                    {group.label}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Technologies pill grid */}
          <Card className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Technologies
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skillsSection.technologies.map((tech) => (
                <Badge
                  key={tech}
                  className="border-accent/20 bg-accent/5 text-accent"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Zone 3: Languages */}
        <Card className="p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Languages
          </h3>
          <div className="mt-5 space-y-4">
            {skillsSection.languages.map((lang) => (
              <div key={lang.name}>
                <div className="mb-1.5 flex items-baseline justify-between text-sm">
                  <span className="font-medium text-white">{lang.name}</span>
                  <span className="text-xs text-white/50">{lang.level}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent/70 to-accent"
                    style={{ width: `${lang.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Container>
  );
}
