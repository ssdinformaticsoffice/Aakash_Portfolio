import React from "react";
import {
  Building2,
  Compass,
  Lightbulb,
  Target,
} from "lucide-react";
import { motion } from "motion/react";
import {
  fadeUp,
  fadeLeft,
  staggerContainer,
  scaleUp,
  glowPulse,
} from "../../utils/motion";

function CEOLLeadership() {
  const focusAreas = [
    {
      icon: Compass,
      number: "01",
      title: "Strategic Direction",
      description:
        "Creating clarity around priorities, decisions, and the long-term direction of the organization.",
    },
    {
      icon: Target,
      number: "02",
      title: "Business Focus",
      description:
        "Keeping people, technology, execution, and business objectives connected to a common purpose.",
    },
    {
      icon: Lightbulb,
      number: "03",
      title: "Innovation",
      description:
        "Encouraging practical ideas and new approaches that can create meaningful opportunities and progress.",
    },
    {
      icon: Building2,
      number: "04",
      title: "Organizational Growth",
      description:
        "Supporting an environment where people, capabilities, processes, and ideas can grow together.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-[var(--theme-border)] bg-[var(--theme-bg-secondary)] py-12 sm:py-18 lg:py-20">
      {/* Background Glow */}
      <motion.div
        animate={glowPulse}
        className="pointer-events-none absolute right-[-120px] top-20 h-96 w-96 rounded-full blur-3xl"
        style={{
          background: "var(--theme-glow)",
          opacity: 0.16,
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer(0.12, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <motion.div variants={fadeLeft}>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--theme-accent)" }}
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--theme-accent)" }}
              />
              CEO / Leadership
            </span>

            <div className="mt-6 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background: "var(--theme-soft)",
                  color: "var(--theme-accent)",
                }}
              >
                <Building2 size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[var(--theme-white)]">
                  Akash Verma
                </p>

                <p className="text-xs text-[var(--theme-dim)]">
                  CEO · SSD Informatics
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--theme-white)] sm:text-4xl lg:text-5xl">
              Leadership driven by{" "}
              <span style={{ color: "var(--theme-accent)" }}>
                clarity and purpose.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--theme-muted)]">
              Executive leadership is about creating direction, making
              thoughtful decisions, and bringing people, technology, and
              organizational goals together.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Leadership Area */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.25fr]">
          {/* CEO Identity */}
          <motion.div
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden rounded-3xl border p-8 sm:p-10"
            style={{
              background: "var(--theme-card)",
              borderColor: "var(--theme-border)",
            }}
          >
            <div
              className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full blur-3xl"
              style={{
                background: "var(--theme-soft)",
              }}
            />

            <div className="relative">
              <p
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: "var(--theme-accent)" }}
              >
                Executive Perspective
              </p>

              <h3 className="mt-6 text-2xl font-semibold leading-tight text-[var(--theme-white)] sm:text-3xl">
                Creating direction with a long-term perspective.
              </h3>

              <p className="mt-6 text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                As CEO of SSD Informatics, Akash&apos;s role brings together
                organizational responsibility, strategic thinking, and an
                understanding of technology.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)] sm:text-base">
                The focus is on understanding opportunities, supporting
                innovation, making purposeful decisions, and building toward
                sustainable growth.
              </p>

              <div
                className="mt-8 h-px w-full"
                style={{ background: "var(--theme-border)" }}
              />

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--theme-dim)]">
                    Role
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[var(--theme-white)]">
                    CEO
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--theme-dim)]">
                    Organization
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[var(--theme-white)]">
                    SSD Informatics
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leadership Focus Areas */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group cursor-pointer rounded-3xl border p-6 transition-colors duration-300 sm:p-7"
                  style={{
                    background: "var(--theme-card)",
                    borderColor: "var(--theme-border)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{
                        background: "var(--theme-soft)",
                        color: "var(--theme-accent)",
                      }}
                    >
                      <Icon size={19} />
                    </motion.div>

                    <span
                      className="font-mono text-xs"
                      style={{ color: "var(--theme-accent)" }}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[var(--theme-white)] transition-colors group-hover:text-[var(--theme-accent)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CEOLLeadership;