import { certificationsSection } from "@/content/certifications";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Certifications() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {certificationsSection.subtitle}
          </p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            {certificationsSection.title}
          </h2>
        </div>
        <Card className="p-6">
          <p className="text-sm text-white/70">{certificationsSection.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {certificationsSection.items.map((cert) => (
              <Badge key={cert.short} className="px-4 py-2 text-xs">
                <span className="font-semibold text-white">{cert.short}</span>
                {cert.full ? (
                  <span className="ml-2 text-[11px] text-white/60">{cert.full}</span>
                ) : null}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </Container>
  );
}
