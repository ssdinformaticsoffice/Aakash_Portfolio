import React from "react";
import { ArrowUpRight, BriefcaseBusiness, Building2, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  fadeUp,
  fadeLeft,
  staggerContainer,
  scaleUp,
  glowPulse,
} from "../../utils/motion";

function AboutAkash() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--theme-border)] bg-[var(--theme-bg)] mt-12 py-14 sm:py-28 lg:py-25">
      {/* Background Glow */}
      <motion.div
        animate={glowPulse}
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full blur-3xl"
        style={{
          background: "var(--theme-glow)",
          opacity: 0.35,
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-4xl"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--theme-accent)" }}
          >
            <span
              className="h-px w-8"
              style={{ background: "var(--theme-accent)" }}
            />
            About Akash
          </span>
          <h1 className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--theme-white)] sm:text-4xl lg:text-5xl">
            Technology,
            <br />
            leadership &{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              vision.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
            Akash Verma leads SSD Informatics with a focus on technology,
            thoughtful execution, and building solutions designed for long-term
            growth.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Story Card */}
          <motion.div
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden rounded-3xl border p-7 sm:p-9 lg:p-10"
            style={{
              background: "var(--theme-card)",
              borderColor: "var(--theme-border)",
            }}
          >
            <div
              className="absolute right-0 top-0 h-40 w-40 rounded-full blur-3xl"
              style={{
                background: "var(--theme-soft)",
              }}
            />

            <div className="relative">
              <span
                className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--theme-accent)" }}
              >
                The Person Behind The Role
              </span>

              <h2 className="mt-5 text-2xl font-semibold text-[var(--theme-white)] sm:text-3xl">
                Leadership built around technology and purpose.
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                <p>
                  As CEO of SSD Informatics, Akash represents a leadership
                  approach where technology is not treated as an isolated
                  function, but as a foundation for creating practical
                  solutions and sustainable business direction.
                </p>

                <p>
                  His professional identity combines an understanding of
                  technology with strategic thinking, execution, and a focus
                  on building meaningful value through the organization.
                </p>

                <p>
                  The portfolio reflects this identity through three central
                  ideas: leadership, technology, and long-term vision.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="mt-8 inline-block"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-[var(--theme-white)] transition-colors duration-300 hover:border-[var(--theme-accent)]"
                  style={{
                    borderColor: "var(--theme-border-strong)",
                    background: "var(--theme-soft)",
                  }}
                >
                  Start a Conversation
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Identity Cards */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {/* Role */}
            <motion.div
              variants={fadeLeft}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border p-6 cursor-pointer transition-colors duration-300"
              style={{
                background: "var(--theme-card)",
                borderColor: "var(--theme-border)",
              }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  color: "var(--theme-accent)",
                  background: "var(--theme-soft)",
                }}
              >
                <BriefcaseBusiness size={20} />
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--theme-dim)]">
                Professional Role
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[var(--theme-white)]">
                CEO
              </h3>
            </motion.div>

            {/* Company */}
            <motion.div
              variants={fadeLeft}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border p-6 cursor-pointer transition-colors duration-300"
              style={{
                background: "var(--theme-card)",
                borderColor: "var(--theme-border)",
              }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  color: "var(--theme-accent)",
                  background: "var(--theme-soft)",
                }}
              >
                <Building2 size={20} />
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--theme-dim)]">
                Organization
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[var(--theme-white)]">
                SSD Informatics
              </h3>
            </motion.div>

            {/* Technology */}
            <motion.div
              variants={fadeLeft}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border p-6 cursor-pointer transition-colors duration-300"
              style={{
                background: "var(--theme-card)",
                borderColor: "var(--theme-border)",
              }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  color: "var(--theme-accent)",
                  background: "var(--theme-soft)",
                }}
              >
                <Code2 size={20} />
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--theme-dim)]">
                Primary Technology
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[var(--theme-white)]">
                Python
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutAkash;