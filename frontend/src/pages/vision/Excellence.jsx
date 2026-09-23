import React from "react";
import { ArrowUpRight, Award, Brain, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

function Excellence() {
  const principles = [
    {
      number: "01",
      icon: Award,
      title: "Quality",
      description:
        "Maintaining a commitment to thoughtful execution, useful solutions, and professional standards.",
    },
    {
      number: "02",
      icon: Brain,
      title: "Learning",
      description:
        "Continuously developing knowledge and perspective as technology and business environments evolve.",
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Responsibility",
      description:
        "Making decisions with awareness of their broader impact on people, organizations, and long-term objectives.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--theme-bg)] py-24 sm:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full blur-3xl"
        style={{
          background: "var(--theme-glow)",
          opacity: 0.1,
        }}
      />

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
            Excellence
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
            Excellence is a{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              continuous standard.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
            Excellence is not a destination. It comes from learning,
            improving, taking responsibility, and consistently raising the
            quality of execution.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--theme-card)",
                  borderColor: "var(--theme-border)",
                }}
              >
                <div className="flex items-center justify-between">
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

                <h3 className="mt-8 text-xl font-semibold text-[var(--theme-white)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div
          className="mt-8 rounded-3xl border p-8 sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, var(--theme-soft), transparent 70%)",
            borderColor: "var(--theme-border-strong)",
          }}
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p
                className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--theme-accent)" }}
              >
                Vision in Practice
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight text-[var(--theme-white)] sm:text-3xl">
                Think long term. Build with purpose. Keep improving.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                Vision becomes meaningful when it influences everyday
                decisions, technology choices, relationships, and execution.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-[var(--theme-white)] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--theme-border-strong)",
                background: "var(--theme-card)",
              }}
            >
              Connect
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Excellence;