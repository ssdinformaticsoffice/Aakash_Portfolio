import React from "react";
import {
  Workflow,
  Zap,
  RefreshCw,
  Settings2,
} from "lucide-react";

function Automation() {
  const points = [
    {
      number: "01",
      icon: Workflow,
      title: "Process Automation",
      description:
        "Using technology to simplify repetitive workflows and reduce unnecessary manual effort.",
    },
    {
      number: "02",
      icon: Zap,
      title: "Efficiency",
      description:
        "Identifying opportunities where automation can improve speed, consistency, and operational efficiency.",
    },
    {
      number: "03",
      icon: RefreshCw,
      title: "Continuous Improvement",
      description:
        "Automation can support an ongoing approach to improving how systems and processes operate.",
    },
    {
      number: "04",
      icon: Settings2,
      title: "Practical Implementation",
      description:
        "Keeping automation connected to real business requirements rather than adopting technology without purpose.",
    },
  ];

  return (
    <section className="bg-[var(--theme-bg)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--theme-accent)" }}
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--theme-accent)" }}
              />
              Automation
            </span>

            <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--theme-white)] sm:text-4xl lg:text-5xl">
              Making technology{" "}
              <span style={{ color: "var(--theme-accent)" }}>
                work smarter.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--theme-muted)]">
              Automation can turn repetitive processes into structured
              workflows, allowing people and organizations to focus more on
              meaningful work.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="rounded-3xl border p-7 sm:p-8"
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

export default Automation;