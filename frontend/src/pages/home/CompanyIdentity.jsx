import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { fadeUp, fadeLeft, staggerContainer } from "../../utils/motion";

function CompanyIdentity() {
  return (
    <section
      id="about"
      className="py-12 sm:py-20 relative overflow-hidden bg-transparent border-t border-white/5"
    >
      {/* Background dot matrix */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Sticky Journey */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-8"
            >
              <div>
                <span
                  className="text-[10px] uppercase font-black tracking-[0.4em] block mb-4"
                  style={{ color: "var(--theme-accent)" }}
                >
                  The Journey
                </span>

                <h2 className="text-4xl sm:text-6xl font-black tracking-tighter leading-tight select-none">
                  <span>BUILDING</span>
                  <br />
                  <span className="stroke-text">IDEAS.</span>
                  <br />
                  <span>CREATING IMPACT.</span>
                </h2>
              </div>

              <div className="space-y-6 text-slate-400 font-medium leading-relaxed">
                <p>
                  I am Akash Verma, a technology leader focused on turning
                  ambitious ideas into meaningful digital solutions. As CEO of
                  SSD Informatics, I work at the intersection of technology,
                  business, and innovation.
                </p>

                <p>
                  My journey is driven by a simple belief — great technology
                  should not only work exceptionally well, but should create
                  lasting value for people, teams, and businesses.
                </p>
              </div>

              {/* Stats Counters */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                <div>
                  <div
                    className="text-3xl sm:text-4xl font-black tracking-tighter"
                    style={{ color: "var(--theme-white)" }}
                  >
                    05+
                  </div>

                  <div className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mt-1">
                    Years in Technology
                  </div>
                </div>

                <div>
                  <div
                    className="text-3xl sm:text-4xl font-black tracking-tighter"
                    style={{ color: "var(--theme-accent)" }}
                  >
                    30+
                  </div>

                  <div className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mt-1">
                    Systems & Projects
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-16">
            <motion.div
              variants={staggerContainer(0.12, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-8"
            >
              <motion.div variants={fadeUp}>
                <span
                  className="text-[10px] uppercase font-black tracking-[0.4em] block mb-3"
                  style={{ color: "var(--theme-accent)" }}
                >
                  Leadership Philosophy
                </span>

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Technology creates possibilities — leadership turns them
                  into lasting impact.
                </h3>
              </motion.div>

              {/* Cards Grid */}
              <motion.div
                variants={staggerContainer(0.1, 0.15)}
                className="grid gap-4 sm:grid-cols-2"
              >
                {[
                  {
                    title: "Vision & Strategy",
                    desc: "Turning long-term vision into clear priorities, practical strategies, and meaningful business outcomes.",
                  },
                  {
                    title: "Technology Leadership",
                    desc: "Bringing technical thinking and business perspective together to build reliable and scalable digital solutions.",
                  },
                  {
                    title: "Innovation & Growth",
                    desc: "Exploring better ways to solve problems, improve processes, and create opportunities for sustainable growth.",
                  },
                  {
                    title: "People & Leadership",
                    desc: "Building strong teams through trust, clarity, ownership, and a culture focused on continuous improvement.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(255, 255, 255, 0.25)",
                    }}
                    transition={{ duration: 0.25 }}
                    className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md cursor-pointer transition-colors hover:bg-white/[0.04]"
                  >
                    <div
                      className="text-xs font-mono font-bold mb-3"
                      style={{ color: "var(--theme-accent)" }}
                    >
                      0{i + 1} //
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="pt-4">
                <Link
                  to="/about"
                  className="
                    group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]
                    transition-all duration-300
                  "
                  style={{ color: "var(--theme-accent)" }}
                >
                  <span>Explore My Journey</span>

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyIdentity;

