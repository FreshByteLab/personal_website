import { skillsSection } from "@/content/skills";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Skills() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {skillsSection.subtitle}
          </p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            {skillsSection.title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skillsSection.groups.map((group) => (
            <Card key={group.label} className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
