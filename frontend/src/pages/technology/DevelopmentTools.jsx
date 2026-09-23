import React from "react";
import {
  Wrench,
  GitBranch,
  TerminalSquare,
  CloudCog,
} from "lucide-react";

function DevelopmentTools() {
  const tools = [
    {
      number: "01",
      icon: TerminalSquare,
      title: "Development Environment",
      description:
        "Tools and environments that support structured software development and experimentation.",
    },
    {
      number: "02",
      icon: GitBranch,
      title: "Version Control",
      description:
        "Maintaining organized development workflows and keeping technology work manageable over time.",
    },
    {
      number: "03",
      icon: CloudCog,
      title: "Deployment & Infrastructure",
      description:
        "Understanding the broader path from development to usable digital systems and services.",
    },
    {
      number: "04",
      icon: Wrench,
      title: "Engineering Tools",
      description:
        "Using appropriate tools to improve development workflows, reliability, collaboration, and execution.",
    },
  ];

  return (
    <section className="bg-[var(--theme-bg-secondary)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--theme-accent)" }}
          >
            <span
              className="h-px w-8"
              style={{ background: "var(--theme-accent)" }}
            />
            Development Tools
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
            The tools behind{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              effective execution.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
            Tools are valuable when they make development more organized,
            reliable, collaborative, and aligned with the objective.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--theme-card)",
                  borderColor: "var(--theme-border)",
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background: "var(--theme-soft)",
                    color: "var(--theme-accent)",
                  }}
                >
                  <Icon size={20} />
                </div>

                <span
                  className="mt-6 block font-mono text-xs"
                  style={{ color: "var(--theme-accent)" }}
                >
                  {item.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-[var(--theme-white)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DevelopmentTools;