import React from "react";
import {
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function Achievements() {
  const achievements = [
    {
      number: "01",
      icon: Award,
      title: "Professional Milestones",
      description:
        "A record of important professional milestones, leadership responsibilities, and experiences that have shaped the journey.",
    },
    {
      number: "02",
      icon: CheckCircle2,
      title: "Successful Initiatives",
      description:
        "Selected initiatives and projects that reflect practical execution, technology adoption, and meaningful organizational progress.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Innovation & Impact",
      description:
        "Highlights of ideas, improvements, and technology-driven initiatives that contributed to better ways of working and creating value.",
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
            Achievements
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
            A journey shaped by{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              progress & impact.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
            A selection of professional milestones, successful initiatives,
            and meaningful contributions built through technology, leadership,
            and continuous growth.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {achievements.map((item) => {
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

                <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">
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

export default Achievements;