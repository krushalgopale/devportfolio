import { Globe, Pin } from "lucide-react";
import { GitHubIcon } from "@/components/brand-icons";
import { IconLink } from "@/components/icon-link";
import { Section } from "@/components/section";
import { projects } from "@/lib/site";

export function Projects() {
  return (
    <Section id="projects" title="Things I've Built" bordered>
      <ul className="flex flex-col gap-3.5">
        {projects.map((project) => (
          <li key={project.name} className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-0.5">
              <h3 className="flex items-center gap-1.5 text-[15px] font-medium">
                <Pin aria-hidden="true" className="size-3.5 shrink-0 -rotate-45 text-muted-foreground" />
                {project.name}
              </h3>
              <div className="flex items-center gap-4 text-[13px]">
                {project.github && (
                  <IconLink href={project.github} icon={<GitHubIcon />}>
                    GitHub
                  </IconLink>
                )}
                {project.live && (
                  <IconLink href={project.live} icon={<Globe />}>
                    Live
                  </IconLink>
                )}
              </div>
            </div>
            <p className="text-sm leading-normal text-muted-foreground text-pretty">
              {project.description}
            </p>
            <p className="text-[13px] text-muted-foreground/80">
              <span className="sr-only">Built with </span>
              {project.stack.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
