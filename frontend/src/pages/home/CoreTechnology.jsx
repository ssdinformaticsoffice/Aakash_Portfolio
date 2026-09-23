import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "../../utils/motion";

const techStack = [
  {
    name: "Python / Django",
    level: "Expert",
    description: "Core backend architecture, REST APIs, and scalable services.",
    width: "95%",
  },
  {
    name: "FastAPI / Microservices",
    level: "Expert",
    description: "High-throughput asynchronous backends and distributed systems.",
    width: "90%",
  },
  {
    name: "React / Modern Frontend",
    level: "Advanced",
    description: "Component design systems, responsive interfaces, and state management.",
    width: "85%",
  },
  {
    name: "SQL & Data Modeling",
    level: "Senior",
    description: "PostgreSQL, MySQL, query optimization, and schema engineering.",
    width: "88%",
  },
  {
    name: "Docker / Cloud Ops",
    level: "Senior",
    description: "Containerization, CI/CD pipelines, and cloud server provisioning.",
    width: "82%",
  },
  {
    name: "Automation & AI Systems",
    level: "Advanced",
    description: "Workflow orchestration, LLM integration, and operational efficiency.",
    width: "86%",
  },
];

function CoreTechnology() {
  return (
    <section
      id="technology"
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
                Core Technology
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              ENGINEERING <span className="stroke-text">CAPABILITIES</span>
            </h2>
          </div>

          <Link
            to="/technology"
            className="
              group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]
              transition-all
            "
            style={{ color: "var(--theme-accent)" }}
          >
            <span>Explore All Tech</span>
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        {/* Skill Cards Grid with Animated Progress Bars (moaarif.in style) */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {techStack.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="
                group p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02]
                hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 cursor-pointer
              "
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm font-bold tracking-tight text-white group-hover:text-[var(--theme-accent)] transition-colors">
                  {item.name}
                </span>

                <span
                  className="text-[9px] uppercase font-black tracking-wider px-2 py-0.5 rounded-full border border-white/10"
                  style={{
                    color: "var(--theme-accent)",
                    backgroundColor: "var(--theme-soft)",
                  }}
                >
                  {item.level}
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                {item.description}
              </p>

              {/* Animated Progress Bar */}
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: item.width,
                    backgroundColor: "var(--theme-accent)",
                    boxShadow: "0 0 10px var(--theme-accent)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CoreTechnology;