import React from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
  Cpu,
} from "lucide-react";
import { motion } from "motion/react";
import {
  fadeUp,
  staggerContainer,
  glowPulse,
} from "../../utils/motion";

function FeaturedProjects() {
  const projects = [
    {
      number: "01",
      title: "Technology & Strategy",
      category: "Executive Focus",
      description:
        "Bringing technology and business thinking together to create a clear direction for sustainable organizational growth.",
      tags: ["Strategy", "Technology", "Growth"],
      icon: BriefcaseBusiness,
    },
    {
      number: "02",
      title: "Digital Innovation",
      category: "Innovation",
      description:
        "Exploring practical digital solutions, automation, and emerging technologies that can improve the way businesses operate.",
      tags: ["Innovation", "Automation", "Digital"],
      icon: Cpu,
    },
    {
      number: "03",
      title: "Organizational Vision",
      category: "Leadership",
      description:
        "Building a professional direction around people, technology, execution, and long-term thinking.",
      tags: ["Leadership", "Vision", "Execution"],
      icon: ExternalLink,
    },
  ];

  return (
    <section className="relative mt-12 overflow-hidden border-t border-white/5 bg-transparent py-12 sm:py-18 lg:py-20">
      <motion.div
        animate={glowPulse}
        className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full blur-3xl"
        style={{
          background: "var(--theme-glow)",
          opacity: 0.1,
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span
              className="h-px w-8"
              style={{ background: "var(--theme-accent)" }}
            />

            <span
              className="text-[10px] font-black uppercase tracking-[0.4em]"
              style={{ color: "var(--theme-accent)" }}
            >
              Areas of Impact
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
            KEY{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              CONTRIBUTIONS
            </span>
          </h2>

          <p className="max-w-2xl text-base font-medium leading-relaxed text-slate-400 sm:text-lg">
            A focused view of the ideas, responsibilities, and professional
            areas that shape Akash Verma&apos;s approach to technology,
            leadership, and growth.
          </p>
        </motion.div>

        {/* Contributions Grid */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="
                  group relative flex cursor-pointer flex-col justify-between
                  overflow-hidden rounded-3xl border border-white/10
                  bg-white/[0.02] p-7 transition-all duration-300
                  hover:border-white/30 hover:bg-white/[0.04]
                  sm:p-8
                "
              >
                <div>
                  <div className="mb-6 flex items-start justify-between gap-5">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border"
                      style={{
                        backgroundColor: "var(--theme-soft)",
                        borderColor: "var(--theme-border-strong)",
                        color: "var(--theme-accent)",
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: "var(--theme-accent)" }}
                    >
                      {project.number} //
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[var(--theme-accent)]">
                    {project.title}
                  </h3>

                  <p className="line-clamp-3 text-xs leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    {project.category}
                  </span>

                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.2em] transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--theme-accent)" }}
                  >
                    EXPLORE →
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProjects;