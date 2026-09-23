import React from "react";
import { ArrowUpRight, Code2, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

function Python() {
  return (
    <section className="relative overflow-hidden bg-[var(--theme-bg)] py-24 sm:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full blur-3xl"
        style={{
          background: "var(--theme-glow)",
          opacity: 0.1,
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Left */}
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--theme-accent)" }}
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--theme-accent)" }}
              />
              Primary Technology
            </span>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--theme-white)] sm:text-5xl lg:text-6xl">
              Python
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
              Python is a core part of Akash's technology identity, supporting
              practical development, automation, backend thinking, and modern
              technology exploration.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-[var(--theme-white)] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--theme-border-strong)",
                background: "var(--theme-soft)",
              }}
            >
              Discuss Technology
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Right */}
          <div
            className="rounded-3xl border p-7 sm:p-9"
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
                <Code2 size={22} />
              </div>

              <span
                className="font-mono text-xs"
                style={{ color: "var(--theme-accent)" }}
              >
                PYTHON / CORE
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-[var(--theme-white)]">
              Technology with purpose
            </h3>

            <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
              The focus is not simply on writing code. Technology should solve
              useful problems, support business objectives, and create a
              foundation for continuous improvement.
            </p>

            <div
              className="mt-8 flex items-center gap-3 rounded-2xl border p-4"
              style={{
                borderColor: "var(--theme-border)",
                background: "var(--theme-bg-secondary)",
              }}
            >
              <Terminal
                size={18}
                style={{ color: "var(--theme-accent)" }}
              />

              <span className="font-mono text-sm text-[var(--theme-muted)]">
                Build · Automate · Improve
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Python;