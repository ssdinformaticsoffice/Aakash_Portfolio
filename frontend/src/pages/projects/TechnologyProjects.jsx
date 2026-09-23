import React from "react";
import {
  Code2,
  Database,
  Bot,
  Workflow,
} from "lucide-react";

function TechnologyProjects() {
  const areas = [
    {
      number: "01",
      icon: Code2,
      title: "Python Development",
      description:
        "Projects and technical initiatives built with Python, focusing on practical applications, scalable solutions, and efficient development.",
    },
    {
      number: "02",
      icon: Database,
      title: "Backend Systems",
      description:
        "Backend projects focused on application architecture, APIs, data management, and reliable system foundations.",
    },
    {
      number: "03",
      icon: Bot,
      title: "AI & Intelligent Systems",
      description:
        "Technology projects exploring AI and intelligent systems for automation, smarter workflows, and modern digital applications.",
    },
    {
      number: "04",
      icon: Workflow,
      title: "Automation Solutions",
      description:
        "Projects designed to simplify repetitive operations, connect processes, and create more efficient technology-driven workflows.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--theme-bg-secondary)] py-12 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="max-w-4xl">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--theme-accent)" }}
          >
            <span
              className="h-px w-8"
              style={{ background: "var(--theme-accent)" }}
            />
            Technology Projects
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
            Selected work across{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              technology & innovation.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
            A focused collection of technical projects and areas of work
            spanning software development, backend systems, intelligent
            technologies, and automation.
          </p>
        </div>

        {/* Technology Projects */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {areas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8"
                style={{
                  background: "var(--theme-card)",
                  borderColor: "var(--theme-border)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      background: "var(--theme-soft)",
                      color: "var(--theme-accent)",
                    }}
                  >
                    <Icon size={21} />
                  </div>

                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--theme-accent)" }}
                  >
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-[var(--theme-white)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                  {item.description}
                </p>

                <div
                  className="mt-7 h-px w-10 transition-all duration-300 group-hover:w-20"
                  style={{ background: "var(--theme-accent)" }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechnologyProjects;