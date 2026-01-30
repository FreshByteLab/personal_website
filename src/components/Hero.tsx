import Image from "next/image";

import { site } from "@/content/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 sm:pt-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Personal Brand / CV
            </p>
            <h1 className="mt-4 font-display text-5xl text-gradient sm:text-6xl lg:text-7xl">
              {site.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              {site.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                label={site.hero.ctaPrimary.label}
                href={site.hero.ctaPrimary.href}
                variant="primary"
                size="lg"
              />
              <Button
                label={site.hero.ctaSecondary.label}
                href={site.hero.ctaSecondary.href}
                variant="secondary"
                size="lg"
              />
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {site.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="glass-panel px-6 py-4 text-left"
                >
                  <div className="text-3xl font-semibold text-white">
                    {metric.value}
                  </div>
                  <div className="text-sm text-white/70">{metric.label}</div>
                  {metric.helper && (
                    <div className="text-xs text-white/50">{metric.helper}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Card className="relative overflow-hidden p-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src={site.portrait.src}
                  alt={site.portrait.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-hero-gradient" />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-white/70">
                <span className="font-semibold text-white">{site.name}</span>
                <span className="text-xs text-white/50">{site.role}</span>
              </div>
            </Card>
            <div className="pointer-events-none absolute -right-12 -top-8 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
