import React from "react";
import {
  Users,
  Globe2,
  HeartHandshake,
  CircleCheck,
} from "lucide-react";

function Impact() {
  const areas = [
    {
      number: "01",
      icon: Users,
      title: "People",
      description:
        "Creating an environment where people can contribute, collaborate, learn, and grow.",
    },
    {
      number: "02",
      icon: Globe2,
      title: "Technology",
      description:
        "Using technology responsibly to create useful solutions and support positive progress.",
    },
    {
      number: "03",
      icon: HeartHandshake,
      title: "Relationships",
      description:
        "Building professional relationships through trust, clarity, collaboration, and mutual respect.",
    },
    {
      number: "04",
      icon: CircleCheck,
      title: "Purpose",
      description:
        "Keeping organizational progress connected to meaningful objectives and long-term value.",
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
            Impact
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
            Progress that creates{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              lasting value.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
            Impact extends beyond individual projects. It includes the people,
            relationships, systems, and ideas that continue creating value over
            time.
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
    </section>
  );
}

export default Impact;