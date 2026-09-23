import React from "react";
import {
  Server,
  Database,
  ShieldCheck,
  Layers3,
} from "lucide-react";

function Backend() {
  const areas = [
    {
      number: "01",
      icon: Server,
      title: "Server Architecture",
      description:
        "Understanding backend systems as the foundation that connects applications, data, and business requirements.",
    },
    {
      number: "02",
      icon: Database,
      title: "Data Systems",
      description:
        "Working with structured data and application requirements to support reliable technology solutions.",
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Security",
      description:
        "Keeping security, access, reliability, and responsible technology practices in the broader development perspective.",
    },
    {
      number: "04",
      icon: Layers3,
      title: "Scalable Architecture",
      description:
        "Thinking about systems that can evolve as organizational requirements and technology needs change.",
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
            Backend
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
            Strong systems behind{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              meaningful products.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
            Backend technology provides the foundation for applications,
            services, data, security, and scalable digital operations.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
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

                <h3 className="mt-7 text-xl font-semibold text-[var(--theme-white)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
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

export default Backend;