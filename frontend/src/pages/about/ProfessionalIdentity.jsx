import React from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Target,
  Layers3,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

function ProfessionalIdentity() {
  const identityPoints = [
    {
      icon: BriefcaseBusiness,
      number: "01",
      title: "Executive Leadership",
      description:
        "Leading with clarity, responsibility, and a long-term view of organizational growth.",
    },
    {
      icon: Target,
      number: "02",
      title: "Strategic Thinking",
      description:
        "Connecting business goals with technology to turn direction into meaningful execution.",
    },
    {
      icon: Layers3,
      number: "03",
      title: "Business Perspective",
      description:
        "Understanding how people, processes, technology, and execution come together to create value.",
    },
    {
      icon: Cpu,
      number: "04",
      title: "Technology Focus",
      description:
        "Maintaining a strong technology perspective with Python and digital systems as key areas of expertise.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-[var(--theme-border)] bg-[var(--theme-bg-secondary)] py-12 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--theme-accent)" }}
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--theme-accent)" }}
              />
              Professional Identity
            </span>

            <p className="mt-5 text-sm text-[var(--theme-dim)]">
              CEO · SSD Informatics
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--theme-white)] sm:text-4xl lg:text-[2.8rem]">
              Leadership shaped by{" "}
              <span style={{ color: "var(--theme-accent)" }}>
                vision and execution.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
              Akash Verma brings together executive leadership, strategic
              thinking, and technology to build a clear professional direction
              focused on meaningful growth.
            </p>
          </div>
        </div>

        {/* Identity Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {identityPoints.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8"
                style={{
                  background: "var(--theme-card)",
                  borderColor: "var(--theme-border)",
                }}
              >
                {/* Accent Line */}
                <div
                  className="absolute left-0 top-0 h-full w-[2px] opacity-60 transition-all duration-300 group-hover:opacity-100"
                  style={{ background: "var(--theme-accent)" }}
                />

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

                <h3 className="mt-6 text-xl font-semibold text-[var(--theme-white)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--theme-muted)]">
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

export default ProfessionalIdentity;

