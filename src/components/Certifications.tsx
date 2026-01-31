import Image from "next/image";

import { certificationsSection } from "@/content/certifications";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Certifications() {
  const logoShell =
    "flex h-10 w-28 items-center justify-center rounded-full px-2";
  const logoShellLight =
    "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(255,255,255,0.45)_45%,rgba(255,255,255,0.12)_70%,rgba(255,255,255,0)_100%)] shadow-inner shadow-white/15";
  const logoShellDarkCenter =
    "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.55),rgba(0,0,0,0.25)_45%,rgba(255,255,255,0.12)_75%,rgba(255,255,255,0.3)_100%)]";

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
              <Badge
                key={cert.short}
                className="gap-3 px-4 py-2 text-xs text-white/70"
              >
                {cert.logo ? (
                  <span
                    className={`${logoShell} ${
                      cert.logoStyle === "dark-center"
                        ? logoShellDarkCenter
                        : logoShellLight
                    }`}
                  >
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${cert.short} issuer website`}
                        className="transition hover:opacity-90"
                      >
                        <Image
                          src={cert.logo.src}
                          alt={cert.logo.alt}
                          width={140}
                          height={40}
                          unoptimized={cert.logo.src.endsWith(".svg")}
                          className="h-6 w-auto object-contain sm:h-7"
                        />
                      </a>
                    ) : (
                      <Image
                        src={cert.logo.src}
                        alt={cert.logo.alt}
                        width={140}
                        height={40}
                        unoptimized={cert.logo.src.endsWith(".svg")}
                        className="h-6 w-auto object-contain sm:h-7"
                      />
                    )}
                  </span>
                ) : null}
                <span className="flex flex-col leading-tight">
                  <span className="font-semibold text-white">{cert.short}</span>
                  {cert.full ? (
                    <span className="mt-1 text-[10px] text-white/45">
                      {cert.full}
                    </span>
                  ) : null}
                </span>
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </Container>
  );
}
