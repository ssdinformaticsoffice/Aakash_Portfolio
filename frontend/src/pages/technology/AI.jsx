import React from "react";
import {
  BrainCircuit,
  Sparkles,
  Bot,
  Lightbulb,
} from "lucide-react";

function AI() {
  const areas = [
    {
      number: "01",
      icon: BrainCircuit,
      title: "Intelligent Technology",
      description:
        "Exploring AI as an emerging technology capable of supporting modern products, services, and decision-making.",
    },
    {
      number: "02",
      icon: Bot,
      title: "AI Applications",
      description:
        "Considering practical ways intelligent systems can support automation, productivity, and business processes.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Emerging Possibilities",
      description:
        "Keeping an open perspective toward new AI capabilities and their potential impact on technology and business.",
    },
    {
      number: "04",
      icon: Lightbulb,
      title: "Purposeful Innovation",
      description:
        "Evaluating innovation through usefulness, responsibility, and the value it can create.",
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
            Artificial Intelligence
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
            Exploring the future of{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              intelligent technology.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
            AI is approached as a technology opportunity — one that should be
            explored thoughtfully and connected to real-world use cases.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((item) => {
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
                <Icon
                  size={22}
                  style={{ color: "var(--theme-accent)" }}
                />

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

export default AI;