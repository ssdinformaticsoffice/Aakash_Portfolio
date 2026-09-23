import React from "react";
import {
  ArrowDown,
  BriefcaseBusiness,
  Building2,
  CircleDot,
} from "lucide-react";

function ProfessionalJourney() {
  const journey = [
    {
      number: "01",
      title: "Early Professional Experience",
      description:
        "The early stage of the professional journey, building practical experience through technology, problem-solving, project execution, and continuous learning.",
      icon: CircleDot,
    },
    {
      number: "02",
      title: "Technology & Professional Growth",
      description:
        "Expanding responsibilities across technology, software systems, business requirements, and execution while developing a broader professional perspective.",
      icon: BriefcaseBusiness,
    },
    {
      number: "03",
      title: "Executive Leadership",
      description:
        "Taking on greater responsibility across organizational direction, technology, decision-making, and long-term growth as part of the executive journey.",
      icon: Building2,
    },
  ];

  return (
    <section className="relative mt-12 overflow-hidden border-b border-[var(--theme-border)] bg-[var(--theme-bg)] py-12 sm:py-18 lg:py-20">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full blur-3xl"
        style={{
          background: "var(--theme-glow)",
          opacity: 0.14,
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--theme-accent)" }}
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--theme-accent)" }}
              />
              Experience
            </span>

            <p className="mt-5 text-sm text-[var(--theme-dim)]">
              Experience · Responsibility · Growth
            </p>
          </div>

          <div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
              Experience built through{" "}
              <span style={{ color: "var(--theme-accent)" }}>
                responsibility & growth.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
              A professional journey shaped by evolving responsibilities,
              technology, leadership, decision-making, and a growing
              understanding of how people and systems work together.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative mt-16">
          {/* Desktop Timeline Line */}
          <div
            className="absolute bottom-0 left-6 top-0 hidden w-px lg:block"
            style={{ background: "var(--theme-border)" }}
          />

          <div className="space-y-6">
            {journey.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="relative grid gap-6 lg:grid-cols-[80px_1fr]"
                >
                  {/* Timeline Number */}
                  <div className="hidden lg:flex lg:justify-center">
                    <div
                      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border text-xs font-semibold"
                      style={{
                        background: "var(--theme-bg)",
                        borderColor: "var(--theme-border-strong)",
                        color: "var(--theme-accent)",
                      }}
                    >
                      {item.number}
                    </div>
                  </div>

                  {/* Mobile Icon */}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl lg:hidden"
                    style={{
                      background: "var(--theme-soft)",
                      color: "var(--theme-accent)",
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Experience Content */}
                  <div
                    className="group rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8"
                    style={{
                      background: "var(--theme-card)",
                      borderColor: "var(--theme-border)",
                    }}
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-3xl">
                        <div className="hidden items-center gap-3 lg:flex">
                          <div
                            className="flex h-9 w-9 items-center justify-center rounded-xl"
                            style={{
                              background: "var(--theme-soft)",
                              color: "var(--theme-accent)",
                            }}
                          >
                            <Icon size={17} />
                          </div>

                          <span
                            className="font-mono text-xs"
                            style={{ color: "var(--theme-accent)" }}
                          >
                            EXPERIENCE_{item.number}
                          </span>
                        </div>

                        <h2 className="mt-2 text-xl font-semibold text-[var(--theme-white)] sm:text-2xl">
                          {item.title}
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                          {item.description}
                        </p>
                      </div>

                      <span className="text-xs uppercase tracking-[0.18em] text-[var(--theme-dim)]">
                        Stage {item.number}
                      </span>
                    </div>

                    {/* Progress Line */}
                    <div
                      className="mt-7 h-px w-16 transition-all duration-300 group-hover:w-28"
                      style={{ background: "var(--theme-accent)" }}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Experience Note */}
        <div
          className="mt-10 rounded-3xl border p-7 sm:p-9"
          style={{
            background: "var(--theme-bg-secondary)",
            borderColor: "var(--theme-border)",
          }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
              style={{
                background: "var(--theme-soft)",
                color: "var(--theme-accent)",
              }}
            >
              <ArrowDown size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[var(--theme-white)]">
                Experience continues to evolve.
              </p>

              <p className="mt-2 text-sm leading-7 text-[var(--theme-muted)]">
                The journey reflects continuous growth in technology,
                responsibility, leadership, and the ability to turn experience
                into meaningful direction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalJourney;