import { certificationsSection } from "@/content/certifications";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

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
              <span
                key={cert.short}
                className="inline-flex items-stretch overflow-hidden rounded-full border border-white/10 text-xs"
              >
                <span className="flex flex-col justify-center bg-white/5 px-3 py-2 leading-tight">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-white transition hover:text-accent"
                    >
                      {cert.short}
                    </a>
                  ) : (
                    <span className="font-semibold text-white">{cert.short}</span>
                  )}
                  {cert.full ? (
                    <span className="mt-1 text-[10px] text-white/45">
                      {cert.full}
                    </span>
                  ) : null}
                </span>
              </span>
            ))}
          </div>
        </Card>
      </div>
    </Container>
  );
}
