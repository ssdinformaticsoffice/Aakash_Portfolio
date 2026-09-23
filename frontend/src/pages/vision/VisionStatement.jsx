import React from "react";
import { ArrowUpRight, Compass, Target } from "lucide-react";
import { Link } from "react-router-dom";

function VisionStatement() {
  return (
    <section className="relative overflow-hidden bg-[var(--theme-bg)] py-24 sm:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl"
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
              Vision
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--theme-white)] sm:text-5xl lg:text-6xl">
              Building with{" "}
              <span style={{ color: "var(--theme-accent)" }}>
                purpose.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
              A clear vision creates direction. Technology, people, and
              innovation become more meaningful when they contribute to a
              larger purpose.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-[var(--theme-white)] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--theme-border-strong)",
                background: "var(--theme-soft)",
              }}
            >
              Explore Identity
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
            <div className="grid gap-5 sm:grid-cols-2">
              <div
                className="rounded-2xl border p-6"
                style={{
                  borderColor: "var(--theme-border)",
                  background: "var(--theme-bg-secondary)",
                }}
              >
                <Compass
                  size={23}
                  style={{ color: "var(--theme-accent)" }}
                />

                <h3 className="mt-6 text-xl font-semibold text-[var(--theme-white)]">
                  Direction
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">
                  Creating clarity around where the organization is going and
                  why that direction matters.
                </p>
              </div>

              <div
                className="rounded-2xl border p-6"
                style={{
                  borderColor: "var(--theme-border)",
                  background: "var(--theme-bg-secondary)",
                }}
              >
                <Target
                  size={23}
                  style={{ color: "var(--theme-accent)" }}
                />

                <h3 className="mt-6 text-xl font-semibold text-[var(--theme-white)]">
                  Purpose
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">
                  Keeping decisions connected to meaningful objectives,
                  responsible growth, and long-term value.
                </p>
              </div>
            </div>

            <div
              className="mt-5 rounded-2xl border p-6"
              style={{
                borderColor: "var(--theme-border-strong)",
                background:
                  "linear-gradient(135deg, var(--theme-soft), transparent 75%)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--theme-accent)" }}
              >
                Vision Perspective
              </p>

              <p className="mt-4 text-lg leading-8 text-[var(--theme-white)]">
                “Technology becomes powerful when it serves a clear purpose.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionStatement;