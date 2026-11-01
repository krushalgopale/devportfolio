export const site = {
  name: "Krushal Gopale",
  role: "Software Engineer",
  email: "krushalgopale79@gmail.com",
  resume:
    "https://drive.google.com/file/d/1xR19sxohutV-vRcG5N8EqSnigIe4oWTN/view?usp=drive_link",
  github: "https://github.com/krushalgopale",
  linkedin: "https://www.linkedin.com/in/krushal-g-08b850318",
} as const;

export type Project = {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "HookFlow",
    description:
      "A multi-tenant Webhook-as-a-Service platform that ingests events and delivers them to registered endpoints. RabbitMQ drives asynchronous processing, a concurrent worker pool handles deliveries, and PostgreSQL persists events with message acknowledgments to recover from transient failures.",
    stack: ["Go", "RabbitMQ", "PostgreSQL"],
    github: "https://github.com/krushalgopale/HookFlow",
  },
  {
    name: "Memex",
    description:
      "A meme-sharing web app for uploading, liking, and exploring memes. RESTful APIs in Gin with JWT-based authentication, a responsive React frontend, and Cloudinary for media storage.",
    stack: ["Go (Gin)", "React.js", "PostgreSQL", "Cloudinary"],
    live: "https://memex-kpxj.onrender.com/",
  },
];
