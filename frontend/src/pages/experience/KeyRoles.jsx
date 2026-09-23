import React from "react";
import {
  BriefcaseBusiness,
  Code2,
  Users,
  Target,
} from "lucide-react";

function KeyRoles() {
  const roles = [
    {
      icon: BriefcaseBusiness,
      number: "01",
      title: "Executive Leadership",
      description:
        "Providing clear organizational direction while connecting business priorities, technology, and long-term growth.",
    },
    {
      icon: Code2,
      number: "02",
      title: "Technology Leadership",
      description:
        "Bringing a technology-focused perspective to decisions, solutions, and opportunities across the organization.",
    },
    {
      icon: Users,
      number: "03",
      title: "People & Collaboration",
      description:
        "Creating alignment between people, ideas, responsibilities, and execution to support effective collaboration.",
    },
    {
      icon: Target,
      number: "04",
      title: "Strategic Direction",
      description:
        "Maintaining focus on meaningful priorities, innovation, continuous improvement, and sustainable progress.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--theme-bg)] py-12 sm:py-18 lg:py-20">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "var(--theme-glow)",
          opacity: 0.12,
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
            Key Roles
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
            The responsibilities behind the{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              leadership role.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
            Executive leadership brings together multiple perspectives.
            These areas reflect the connection between technology, people,
            strategy, and organizational direction.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <article
                key={role.number}
                className="group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8"
                style={{
                  background: "var(--theme-card)",
                  borderColor: "var(--theme-border)",
                }}
              >
                {/* Number */}
                <span
                  className="absolute right-7 top-7 font-mono text-xs"
                  style={{ color: "var(--theme-accent)" }}
                >
                  {role.number}
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

                {/* Content */}
                <h3 className="mt-7 text-xl font-semibold text-[var(--theme-white)]">
                  {role.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                  {role.description}
                </p>

                {/* Accent */}
                <div
                  className="mt-7 h-px w-12 transition-all duration-300 group-hover:w-24"
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

export default KeyRoles;