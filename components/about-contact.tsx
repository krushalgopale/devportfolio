import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/brand-icons";
import { IconLink } from "@/components/icon-link";
import { Section } from "@/components/section";
import { site } from "@/lib/site";

export function About() {
  return (
    <Section id="about" title="About Me" bordered>
      <p className="text-sm leading-normal text-muted-foreground text-pretty sm:text-[15px]">
        {
          "I'm a backend-focused software engineer interested in building applications, dabbling in distributed systems and AI, and understanding the engineering behind them. Most recently, I interned as a Backend Developer at KrtrimaIQ Cognitive Solutions, where I built timesheet and asset management modules for an intranet portal and automated attendance tracking with the Microsoft Graph API."
        }
      </p>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact Me">
      <p className="text-sm text-muted-foreground sm:text-[15px]">
        Feel free to reach out.
      </p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
        <IconLink
          href={`mailto:${site.email}`}
          icon={<Mail />}
          external={false}
        >
          {site.email}
        </IconLink>
      </div>
    </Section>
  );
}
