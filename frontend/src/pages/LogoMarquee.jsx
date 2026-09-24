import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiMongodb, SiDocker, SiKubernetes, SiLinux, SiGit, SiPostman } from "react-icons/si";

export const TECH_LOGOS = [
  { name: "JavaScript", color: "#F7DF1E", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Python", color: "#3776AB", href: "https://www.python.org" },
  { name: "React", color: "#61DAFB", href: "https://react.dev" },
  { name: "Node.js", color: "#5FA04E", href: "https://nodejs.org" },
  { name: "MongoDB", color: "#47A248", href: "https://www.mongodb.com" },
  { name: "Docker", color: "#2496ED", href: "https://www.docker.com" },
  { name: "Kubernetes", color: "#326CE5", href: "https://kubernetes.io" },
  { name: "Linux", color: "#FCC624", href: "https://www.linux.org" },
  { name: "Git", color: "#F05032", href: "https://git-scm.com" },
  { name: "Postman", color: "#FF6C37", href: "https://www.postman.com" },
];

const ICONS = {
  JavaScript: SiJavascript,
  Python: SiPython,
  React: SiReact,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Linux: SiLinux,
  Git: SiGit,
  Postman: SiPostman,
};

export function TechLogo({ name, color, href }) {
  const Icon = ICONS[name];
  return (
    <a className="logo-item" href={href} target="_blank" rel="noreferrer">
      <Icon color={color} />
      <span>{name}</span>
    </a>
  );
}

export default function LogoMarquee() {
  const doubled = [...TECH_LOGOS, ...TECH_LOGOS];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <TechLogo key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}