import React from "react";
import {
  Target,
  Lightbulb,
  TrendingUp,
  Layers3,
} from "lucide-react";

function BusinessSolutions() {
  const solutions = [
    {
      number: "01",
      icon: Target,
      title: "Business Alignment",
      description:
        "Connecting technology initiatives with business objectives, organizational priorities, and clear strategic direction.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Exploring practical ideas and new approaches that can improve processes, create value, and support better outcomes.",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Sustainable Growth",
      description:
        "Using technology as an enabler for operational improvement, business development, and long-term organizational growth.",
    },
    {
      number: "04",
      icon: Layers3,
      title: "Scalable Solutions",
      description:
        "Thinking beyond immediate requirements to create solutions that can adapt as teams, systems, and business needs evolve.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--theme-bg)] py-12 sm:py-18 lg:py-20">
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "var(--theme-glow)",
          opacity: 0.08,
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--theme-accent)" }}
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--theme-accent)" }}
              />
              Business Solutions
            </span>

            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[var(--theme-white)] sm:text-4xl lg:text-5xl">
              Turning technology into{" "}
              <span style={{ color: "var(--theme-accent)" }}>
                meaningful value.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--theme-muted)]">
              Technology becomes valuable when it supports real business
              needs. The focus is on connecting ideas, people, processes, and
              technology with a clear direction for sustainable growth.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-5 sm:grid-cols-2">
            {solutions.map((item) => {
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
                  <div className="flex items-center justify-between">
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
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessSolutions;