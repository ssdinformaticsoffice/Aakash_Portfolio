import React from "react";
import {
  TrendingUp,
  MoveUpRight,
  Building2,
  Repeat2,
} from "lucide-react";

function Growth() {
  const areas = [
    {
      number: "01",
      icon: TrendingUp,
      title: "Sustainable Growth",
      description:
        "Focusing on progress that can be maintained over time rather than short-term gains alone.",
    },
    {
      number: "02",
      icon: MoveUpRight,
      title: "Continuous Progress",
      description:
        "Building a mindset where improvement remains an ongoing part of professional and organizational development.",
    },
    {
      number: "03",
      icon: Building2,
      title: "Organizational Development",
      description:
        "Strengthening the foundations that allow people, processes, technology, and business direction to evolve together.",
    },
    {
      number: "04",
      icon: Repeat2,
      title: "Long-Term Thinking",
      description:
        "Considering how today's decisions can influence future opportunities, capabilities, and organizational direction.",
    },
  ];

  return (
    <section className="bg-[var(--theme-bg)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--theme-accent)" }}
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--theme-accent)" }}
              />
              Growth
            </span>

            <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--theme-white)] sm:text-4xl lg:text-5xl">
              Growth through{" "}
              <span style={{ color: "var(--theme-accent)" }}>
                continuous progress.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--theme-muted)]">
              Meaningful growth comes from improving systems, developing
              people, learning continuously, and staying focused on the future.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {areas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8"
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

export default Growth;