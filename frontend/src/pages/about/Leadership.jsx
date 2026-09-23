import React from "react";
import {
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Award,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";

function Education() {
  const educationPoints = [
    {
      icon: GraduationCap,
      number: "01",
      title: "Academic Foundation",
      description:
        "A strong educational foundation that shaped a structured approach to learning, problem-solving, and professional growth.",
    },
    {
      icon: BookOpen,
      number: "02",
      title: "Continuous Learning",
      description:
        "A commitment to continuously developing knowledge across technology, business, and emerging digital practices.",
    },
    {
      icon: Brain,
      number: "03",
      title: "Technical Knowledge",
      description:
        "Building practical understanding of technology and systems through learning, experience, and real-world application.",
    },
    {
      icon: Award,
      number: "04",
      title: "Professional Growth",
      description:
        "Combining education with practical experience to develop a broader perspective on technology and business.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-[var(--theme-border)] bg-[var(--theme-bg)] py-12 sm:py-18 lg:py-20">
      {/* Background Accent */}
      <div
        className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full blur-3xl"
        style={{
          background: "var(--theme-glow)",
          opacity: 0.18,
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-4xl">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--theme-accent)" }}
          >
            <span
              className="h-px w-8"
              style={{ background: "var(--theme-accent)" }}
            />
            Education
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[var(--theme-white)] sm:text-4xl lg:text-5xl">
            Learning that shaped a foundation for{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              technology and growth.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
            Education has played an important role in developing the
            knowledge, discipline, and problem-solving perspective that
            continues to support Akash Verma's professional journey.
          </p>
        </div>

        {/* Main Education Layout */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Education Statement */}
          <div
            className="relative overflow-hidden rounded-3xl border p-8 sm:p-10"
            style={{
              background: "var(--theme-card)",
              borderColor: "var(--theme-border)",
            }}
          >
            <div
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
              style={{
                background: "var(--theme-soft)",
              }}
            />

            <div className="relative">
              <p
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: "var(--theme-accent)" }}
              >
                Educational Perspective
              </p>

              <h3 className="mt-6 text-2xl font-semibold leading-tight text-[var(--theme-white)] sm:text-3xl">
                Learn deeply. Apply practically. Keep evolving.
              </h3>

              <p className="mt-6 text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                Education provides the foundation, while continuous learning
                turns knowledge into practical capability. The focus remains
                on understanding ideas, applying them to real situations, and
                continuing to grow with a changing technology landscape.
              </p>

              <div
                className="mt-8 h-px w-full"
                style={{ background: "var(--theme-border)" }}
              />

              <div className="mt-7 flex items-center gap-4">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{
                    background: "var(--theme-soft)",
                    color: "var(--theme-accent)",
                  }}
                >
                  <GraduationCap size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[var(--theme-white)]">
                    Education
                  </p>

                  <p className="mt-1 text-xs text-[var(--theme-dim)]">
                    Foundation for continuous growth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Principles */}
          <div className="grid gap-4 sm:grid-cols-2">
            {educationPoints.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7"
                  style={{
                    background: "var(--theme-card)",
                    borderColor: "var(--theme-border)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{
                        background: "var(--theme-soft)",
                        color: "var(--theme-accent)",
                      }}
                    >
                      <Icon size={19} />
                    </div>

                    <span
                      className="font-mono text-xs"
                      style={{ color: "var(--theme-accent)" }}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[var(--theme-white)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">
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

export default Education;

