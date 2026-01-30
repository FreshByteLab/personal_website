import { projectsSection } from "@/content/projects";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function Projects() {
  const featured = projectsSection.items.find((item) => item.featured);
  const rest = projectsSection.items.filter((item) => !item.featured);

  return (
    <Container>
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {projectsSection.subtitle}
          </p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            {projectsSection.title}
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featured ? (
            <Card className="relative overflow-hidden p-8 lg:col-span-2">
              <div className="absolute inset-0 bg-card-sheen opacity-80" />
              <div className="relative">
                <h3 className="text-2xl font-semibold text-white">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm text-white/70">
                  {featured.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="mt-6">
                  <Button
                    label={featured.cta ?? "Learn More"}
                    href={featured.href ?? "#contact"}
                    variant="secondary"
                  />
                </div>
              </div>
            </Card>
          ) : null}
          <div className="grid gap-6 lg:col-span-1">
            {rest.map((item) => (
              <Card
                key={item.title}
                className="p-6 transition hover:-translate-y-1 hover:border-white/20"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
