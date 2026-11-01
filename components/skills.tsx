import {
  siCplusplus,
  siDjango,
  siDocker,
  siGin,
  siGit,
  siGo,
  siJavascript,
  siMysql,
  siPostgresql,
  siPython,
  siRabbitmq,
  siReact,
  siRedis,
  type SimpleIcon,
} from "simple-icons";
import { Section } from "@/components/section";

type Skill = { name: string; icon: SimpleIcon; image?: string; dark?: string };

const skills: Skill[] = [
  { name: "Go", icon: siGo, image: "/skills/go.svg" },
  { name: "Python", icon: siPython, image: "/skills/python.svg" },
  { name: "C++", icon: siCplusplus, dark: "#659AD2" },
  { name: "JavaScript", icon: siJavascript },
  { name: "Gin", icon: siGin },
  { name: "Django", icon: siDjango, dark: "#44B78B" },
  { name: "React.js", icon: siReact },
  {
    name: "PostgreSQL",
    icon: siPostgresql,
    image: "/skills/postgresql.svg",
    dark: "#699ECA",
  },
  { name: "MySQL", icon: siMysql, image: "/skills/mysql.svg", dark: "#5D9BD6" },
  { name: "Redis", icon: siRedis },
  { name: "Docker", icon: siDocker },
  { name: "Git", icon: siGit },
  { name: "RabbitMQ", icon: siRabbitmq },
];

export function Skills() {
  return (
    <Section id="skills" title="Tech Stack" bordered>
      <ul className="flex flex-wrap gap-2">
        {skills.map(({ name, icon, image, dark }) => (
          <li
            key={name}
            className="theme-border flex min-w-[5.2rem] flex-1 basis-[5.2rem] flex-col items-center justify-center gap-1.5 rounded-md border px-2 py-2 text-center"
            style={
              {
                "--brand": `#${icon.hex}`,
                "--brand-dark": dark ?? `#${icon.hex}`,
              } as React.CSSProperties
            }
          >
            {image ? (
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="size-6 shrink-0 object-contain"
              />
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-4 shrink-0 fill-(--brand) dark:fill-(--brand-dark)"
              >
                <path d={icon.path} />
              </svg>
            )}
            <span className="text-[11px] leading-tight text-foreground/90">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
