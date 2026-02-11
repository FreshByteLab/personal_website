import { site } from "@/content/site";
import Container from "@/components/ui/Container";

const socialLinks = [
  {
    label: "LinkedIn",
    href: site.socials.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3V9zm7 0h3.8v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.9-3-1.9 0-2.2 1.4-2.2 2.9V21h-4V9z"
        />
      </svg>
    )
  },
  {
    label: "GitHub",
    href: site.socials.github,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 2C6.5 2 2 6.6 2 12.2c0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8.7 1.5 1.1.2-.8.6-1.3 1-1.6-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.8-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.4 2.6-.4.9 0 1.8.1 2.6.4 2-1.3 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.6.8 1 1.7 1 2.8 0 3.9-2.3 4.7-4.5 5 .6.5 1.1 1.4 1.1 2.9v2.2c0 .3.2.6.7.5 4-1.3 6.9-5 6.9-9.4C22 6.6 17.5 2 12 2z"
        />
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">
            {site.displayName || site.name}
          </p>
          <p className="text-xs text-white/50">{site.role}</p>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-white/15 p-3 transition hover:border-white/40 hover:text-white"
              aria-label={link.label}
              rel="noreferrer"
              target="_blank"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
