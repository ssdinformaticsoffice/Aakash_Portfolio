import React from "react";
import { ArrowUpRight, Brain, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Philosophy() {
  const principles = [
    {
      icon: Brain,
      number: "01",
      title: "Think Clearly",
      description:
        "Good decisions begin with clarity. Understanding the problem, the opportunity, and the larger context creates a stronger foundation for action.",
    },
    {
      icon: Compass,
      number: "02",
      title: "Stay Purposeful",
      description:
        "Technology and business decisions should have a meaningful purpose and contribute toward a clearly understood direction.",
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Build Responsibly",
      description:
        "Long-term professional growth depends on responsibility, consistency, trust, and thoughtful execution.",
    },
    {
      icon: Sparkles,
      number: "04",
      title: "Keep Evolving",
      description:
        "Technology, markets, and organizations continue to change. Continuous learning and adaptation are essential to staying relevant.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--theme-bg-secondary)] py-24 sm:py-28 lg:py-32">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "var(--theme-glow)",
          opacity: 0.15,
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
              Philosophy
            </span>

            <p className="mt-5 text-sm text-[var(--theme-dim)]">
              Principles behind the perspective
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--theme-white)] sm:text-4xl lg:text-5xl">
              A simple philosophy:
              <span style={{ color: "var(--theme-accent)" }}>
                {" "}
                purpose before complexity.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)]">
              Professional growth is not only about technology or position.
              It is also about how decisions are made, how challenges are
              approached, and how long-term value is created.
            </p>
          </div>
        </div>

        {/* Philosophy Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8"
                style={{
                  background: "var(--theme-card)",
                  borderColor: "var(--theme-border)",
                }}
              >
                {/* Number */}
                <span
                  className="absolute right-7 top-6 font-mono text-xs opacity-70"
                  style={{ color: "var(--theme-accent)" }}
                >
                  {item.number}
                </span>

                {/* Icon */}
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: "var(--theme-soft)",
                    color: "var(--theme-accent)",
                  }}
                >
                  <Icon size={21} />
                </div>

                <h3 className="mt-7 text-xl font-semibold text-[var(--theme-white)]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div
                  className="mt-7 h-px w-12 transition-all duration-300 group-hover:w-20"
                  style={{ background: "var(--theme-accent)" }}
                />
              </article>
            );
          })}
        </div>

        {/* Core Philosophy */}
        <div
          className="relative mt-8 overflow-hidden rounded-3xl border p-8 sm:p-10 lg:p-12"
          style={{
            borderColor: "var(--theme-border-strong)",
            background:
              "linear-gradient(135deg, var(--theme-soft), transparent 60%)",
          }}
        >
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--theme-accent)" }}
              >
                Core Philosophy
              </span>

              <h3 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-[var(--theme-white)] sm:text-3xl lg:text-4xl">
                Build with purpose. Lead with clarity. Learn continuously.
              </h3>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                This philosophy brings together the professional identity of a
                technology-focused CEO: understanding the bigger picture,
                making thoughtful decisions, and continuously improving the
                way technology and business work together.
              </p>
            </div>

            <Link
              to="/experience"
              className="inline-flex w-fit items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-[var(--theme-white)] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--theme-border-strong)",
                background: "var(--theme-card)",
              }}
            >
              Explore Journey
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Closing Line */}
        <div className="mt-12 text-center">
          <p className="text-sm tracking-wide text-[var(--theme-dim)]">
            Leadership is a continuous process of learning, adapting, and
            creating direction.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;