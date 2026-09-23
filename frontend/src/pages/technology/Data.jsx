import React from "react";
import {
  Database,
  BarChart3,
  SearchCode,
  LineChart,
} from "lucide-react";

function Data() {
  const areas = [
    {
      number: "01",
      icon: Database,
      title: "Data Foundations",
      description:
        "Understanding data as a fundamental part of modern applications, operations, and technology systems.",
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Data Understanding",
      description:
        "Using structured information to understand patterns, requirements, and opportunities.",
    },
    {
      number: "03",
      icon: SearchCode,
      title: "Analytical Thinking",
      description:
        "Approaching technology and business questions through structured analysis and evidence.",
    },
    {
      number: "04",
      icon: LineChart,
      title: "Growth Insights",
      description:
        "Connecting useful information with strategic thinking and continuous organizational improvement.",
    },
  ];

  return (
    <section className="bg-[var(--theme-bg)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--theme-accent)" }}
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--theme-accent)" }}
              />
              Data
            </span>

            <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--theme-white)] sm:text-4xl lg:text-5xl">
              Turning information into{" "}
              <span style={{ color: "var(--theme-accent)" }}>
                better understanding.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--theme-muted)]">
              Data provides context. A thoughtful approach to data can help
              organizations understand situations, identify opportunities, and
              make more informed decisions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {areas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="rounded-3xl border p-7"
                  style={{
                    background: "var(--theme-card)",
                    borderColor: "var(--theme-border)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={22}
                      style={{ color: "var(--theme-accent)" }}
                    />

                    <span
                      className="font-mono text-xs"
                      style={{ color: "var(--theme-accent)" }}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-semibold text-[var(--theme-white)]">
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

export default Data;