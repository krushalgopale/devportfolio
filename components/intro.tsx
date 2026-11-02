import { FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { IconLink } from "@/components/icon-link";
import { AnimatedMascot } from "@/components/animated-mascot";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/site";

export function Intro() {
  return (
    <header className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="hero-prompt">
            <svg
              aria-hidden="true"
              className="hero-prompt-connector"
              viewBox="0 0 16 62"
              preserveAspectRatio="none"
            >
              <path
                className="hero-prompt-connector-light"
                d="M15 19H8Q1 19 1 26V44Q1 50 7 50H15"
              />
              <path
                className="hero-prompt-connector-dark"
                d="M15 19H8Q1 19 1 26V44Q1 50 7 50H15"
              />
            </svg>
            <h1 className="hero-heading flex flex-nowrap items-center gap-x-2 whitespace-nowrap font-mono text-[clamp(1rem,5vw,1.5rem)] font-bold italic tracking-tight sm:text-[1.75rem]">
              <span>{"Hey, I'm Krushal"}</span>
              <AnimatedMascot />
            </h1>
            <p className="hero-role text-base text-muted-foreground">
              <span className="hero-prompt-symbol font-mono text-lg not-italic text-[#659C35]">
                $
              </span>
              <span className="font-sans not-italic">
                {site.role}
                <span aria-hidden="true" className="role-cursor" />
              </span>
            </p>
          </div>
        </div>
        <ThemeToggle />
      </div>
      <nav
        aria-label="Profiles"
        className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm"
      >
        <IconLink href={site.resume} icon={<FileText />}>
          Resume
        </IconLink>
        <IconLink href={site.github} icon={<GitHubIcon />}>
          GitHub
        </IconLink>
        <IconLink
          href={site.linkedin}
          icon={<LinkedInIcon />}
          hoverColor="#0A66C2"
        >
          LinkedIn
        </IconLink>
      </nav>
    </header>
  );
}
