import Image from "next/image";

import { site } from "@/content/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/AnimatedCounter";

function getYearsOfExperience(): number {
  const start = new Date(site.careerStart);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  if (
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())
  ) {
    years--;
  }
  return years;
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pt-28">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/22 via-black/14 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <div className="flex items-center">
              <span className="h-px w-20 bg-white/50" />
            </div>
            <h1 className="mt-6 font-blade text-5xl text-white sm:text-6xl lg:text-7xl">
              {site.hero.headline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              {site.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                label={site.hero.ctaPrimary.label}
                href={site.hero.ctaPrimary.href}
                variant="primary"
                size="md"
              />
              <Button
                label={site.hero.ctaSecondary.label}
                href={site.hero.ctaSecondary.href}
                variant="secondary"
                size="md"
              />
            </div>
            <div className="mt-10 h-px w-full bg-white/10" />
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {site.metrics.map((metric) => {
                const parsed = metric.value.match(/^(\d+)\s*(.*)$/);
                const target =
                  metric.value === "dynamic"
                    ? getYearsOfExperience()
                    : parsed
                      ? parseInt(parsed[1], 10)
                      : 0;
                const suffix =
                  metric.value === "dynamic"
                    ? " +"
                    : parsed?.[2]
                      ? ` ${parsed[2]}`
                      : "";

                return (
                  <div key={metric.label}>
                    <div className="text-4xl font-semibold text-white sm:text-5xl">
                      <AnimatedCounter target={target} suffix={suffix} />
                    </div>
                    <div className="mt-1 text-sm font-medium text-white/70">
                      {metric.label}
                    </div>
                    {metric.helper ? (
                      <div className="mt-0.5 text-xs text-white/40">
                        {metric.helper}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -right-16 -top-12 h-52 w-52 rounded-full bg-white/5 blur-3xl" />
              <div
                className="relative aspect-[3/4]"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(70% 78% at 50% 35%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                  maskImage:
                    "radial-gradient(70% 78% at 50% 35%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)"
                }}
              >
                <Image
                  src={site.portrait.src}
                  alt={site.portrait.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover grayscale contrast-110 object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/35" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
