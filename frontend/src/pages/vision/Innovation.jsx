import React from "react";
import {
  Lightbulb,
  FlaskConical,
  RefreshCw,
  Sparkles,
} from "lucide-react";

function Innovation() {
  const principles = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Ideas",
      description:
        "Encouraging ideas that challenge existing approaches and open possibilities for meaningful improvement.",
    },
    {
      number: "02",
      icon: FlaskConical,
      title: "Experimentation",
      description:
        "Exploring new technologies and approaches while keeping practical objectives at the center.",
    },
    {
      number: "03",
      icon: RefreshCw,
      title: "Adaptation",
      description:
        "Continuously learning and adapting as technology, markets, people, and organizational needs evolve.",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Value Creation",
      description:
        "Turning innovation into something useful rather than treating innovation as an objective by itself.",
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
            Innovation
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
            Innovation should create{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              meaningful change.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
            Innovation is about asking better questions, exploring new
            possibilities, and finding practical ways to move forward.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1"
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

export default Innovation;