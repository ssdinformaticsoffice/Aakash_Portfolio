import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "../../utils/motion";

const professionalJourney = [
  {
    number: "01",
    period: "2024 - PRESENT",
    organization: "SSD Informatics",
    role: "Chief Executive Officer",
    description:
      "Leading technology direction, architecture standards, and organizational growth. Aligning full-stack software initiatives with long-term business objectives.",
  },
  {
    number: "02",
    period: "2022 - 2024",
    organization: "Enterprise Engineering",
    role: "Lead Systems Architect & Python Specialist",
    description:
      "Architected backend microservices, optimized high-volume databases, and directed full-lifecycle software delivery across multi-disciplinary teams.",
  },
  {
    number: "03",
    period: "2020 - 2022",
    organization: "Tech Solutions",
    role: "Senior Software Engineer",
    description:
      "Engineered automated workflows, data processing pipelines, and reliable API backends with focused emphasis on high availability and clean architecture.",
  },
];

function Professional() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-20 relative overflow-hidden bg-transparent border-t border-white/5"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="h-px w-8"
                style={{ backgroundColor: "var(--theme-accent)" }}
              />
              <span
                className="text-[10px] uppercase font-black tracking-[0.4em]"
                style={{ color: "var(--theme-accent)" }}
              >
                Career Path
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              PROFESSIONAL <span className="stroke-text">TRAJECTORY</span>
            </h2>
          </div>

          <Link
            to="/experience"
            className="
              group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]
              transition-all
            "
            style={{ color: "var(--theme-accent)" }}
          >
            <span>View Full Journey</span>
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        {/* Professional Path Timeline (moaarif.in style) */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-12"
        >
          {professionalJourney.map((item) => (
            <motion.div
              key={item.number}
              variants={fadeUp}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
              className="
                group relative grid grid-cols-1 md:grid-cols-12 gap-6 items-start
                p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.015]
                hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer
              "
            >
              {/* Timeline Number */}
              <div className="md:col-span-1">
                <span
                  className="text-4xl sm:text-5xl font-black transition-colors duration-500 opacity-20 group-hover:opacity-80"
                  style={{ color: "var(--theme-accent)" }}
                >
                  {item.number}
                </span>
              </div>

              {/* Meta */}
              <div className="md:col-span-3 pt-1">
                <div
                  className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md w-fit mb-2 font-bold"
                  style={{
                    color: "var(--theme-accent)",
                    backgroundColor: "var(--theme-soft)",
                    border: "1px solid var(--theme-border-strong)",
                  }}
                >
                  {item.period}
                </div>

                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {item.organization}
                </div>
              </div>

              {/* Role & Description */}
              <div className="md:col-span-8 pt-1">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-[var(--theme-accent)] transition-colors">
                  {item.role}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Professional;