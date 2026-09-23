import React from "react";
import {
  Briefcase,
  CalendarDays,
  CircleHelp,
} from "lucide-react";

function PreviousExperience() {
  const experienceAreas = [
    {
      icon: Briefcase,
      title: "Previous Roles",
      description:
        "Earlier professional roles that contributed to the experience, knowledge, and perspective developed throughout the career.",
    },
    {
      icon: CalendarDays,
      title: "Career Timeline",
      description:
        "A chronological view of professional positions, responsibilities, and key stages across the career journey.",
    },
    {
      icon: CircleHelp,
      title: "Responsibilities",
      description:
        "The responsibilities and experiences from each role that helped shape a broader professional and leadership perspective.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-[var(--theme-border)] bg-[var(--theme-bg)] py-12 sm:py-18 lg:py-20">
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
            Previous Experience
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
            Experience that shaped the{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              journey.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
            Every professional role adds a different perspective. Previous
            experience builds the knowledge, responsibility, and understanding
            that influence the next stage of the journey.
          </p>
        </div>

        {/* Experience Areas */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {experienceAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8"
                style={{
                  background: "var(--theme-card)",
                  borderColor: "var(--theme-border)",
                }}
              >
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

                <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">
                  {item.description}
                </p>

                <div
                  className="mt-7 h-px w-12 transition-all duration-300 group-hover:w-20"
                  style={{ background: "var(--theme-accent)" }}
                />
              </article>
            );
          })}
        </div>

        {/* Career Information Block */}
        <div
          className="mt-8 overflow-hidden rounded-3xl border"
          style={{
            background: "var(--theme-bg-secondary)",
            borderColor: "var(--theme-border)",
          }}
        >
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            {/* Left */}
            <div
              className="border-b p-7 sm:p-9 lg:border-b-0 lg:border-r"
              style={{
                borderColor: "var(--theme-border)",
              }}
            >
              <p
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: "var(--theme-accent)" }}
              >
                Career Background
              </p>

              <h3 className="mt-5 text-2xl font-semibold text-[var(--theme-white)]">
                Previous professional roles
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">
                A structured record of earlier professional experiences,
                responsibilities, and the knowledge gained along the way.
              </p>
            </div>

            {/* Right */}
            <div className="p-7 sm:p-9">
              <div className="flex gap-4">
                <div
                  className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: "var(--theme-accent)" }}
                />

                <div>
                  <p className="text-sm font-semibold text-[var(--theme-white)]">
                    Building experience through every role
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">
                    Previous roles can be presented with the organization,
                    position, duration, responsibilities, and key contributions
                    to provide a clear view of the professional progression.
                  </p>
                </div>
              </div>

              <div
                className="my-7 h-px"
                style={{ background: "var(--theme-border)" }}
              />

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--theme-dim)]">
                    Organization
                  </p>

                  <p className="mt-2 text-sm text-[var(--theme-muted)]">
                    Career History
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--theme-dim)]">
                    Position
                  </p>

                  <p className="mt-2 text-sm text-[var(--theme-muted)]">
                    Professional Role
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--theme-dim)]">
                    Timeline
                  </p>

                  <p className="mt-2 text-sm text-[var(--theme-muted)]">
                    Career Progression
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreviousExperience;