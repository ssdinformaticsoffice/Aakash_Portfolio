import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--theme-bg-secondary)] py-24 sm:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "var(--theme-glow)",
          opacity: 0.1,
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10">
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{
            background: "var(--theme-soft)",
            color: "var(--theme-accent)",
          }}
        >
          <Sparkles size={24} />
        </div>

        <span
          className="mt-7 block text-xs font-semibold uppercase tracking-[0.28em]"
          style={{ color: "var(--theme-accent)" }}
        >
          Final Conversation
        </span>

        <h2 className="mt-5 text-3xl font-semibold leading-tight text-[var(--theme-white)] sm:text-4xl lg:text-6xl">
          Have something meaningful{" "}
          <span style={{ color: "var(--theme-accent)" }}>
            in mind?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--theme-muted)] sm:text-lg">
          Share your idea, challenge, or opportunity. The next meaningful
          conversation can start with a simple message.
        </p>

        <Link
          to="/contact"
          className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "var(--theme-accent)",
            boxShadow: "0 15px 40px var(--theme-glow)",
          }}
        >
          Let's Talk
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}

export default FinalCTA;