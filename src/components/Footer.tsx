import { site } from "@/content/site";
import { uiText } from "@/content/ui";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{site.name}</p>
          <p className="text-xs text-white/50">{uiText.footerTagline}</p>
        </div>
        <div className="text-xs text-white/50">
          <p>
            {site.domain} ? {site.hosting.registrar} ? {site.hosting.dnssec}
          </p>
        </div>
      </Container>
    </footer>
  );
}
