import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { fadeUp } from "../../utils/motion";

function QuickIntroduction() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden bg-transparent border-t border-white/5">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          {/* Mission Status Badge */}
          <div className="mb-10 flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "var(--theme-accent)" }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: "var(--theme-accent)" }}
              />
            </span>
            <span
              className="text-[10px] font-black uppercase tracking-[0.25em]"
              style={{ color: "var(--theme-accent)" }}
            >
              MISSION STATUS: READY FOR COLLABORATION
            </span>
          </div>

          {/* Kinetic Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-tight uppercase mb-8">
            LET'S BUILD THE <br />
            <span className="stroke-text">NEXT</span> DECADE.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            Bridging the gap between software engineering, scalable architecture,
            and executive vision. Available for high-stakes digital initiatives
            and technology leadership.
          </p>

          {/* Magnetic CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="
                group relative inline-flex items-center justify-center px-10 py-5
                rounded-full font-black uppercase text-xs tracking-[0.25em]
                text-[#030712] shadow-2xl overflow-hidden
              "
              style={{
                backgroundColor: "var(--theme-accent)",
                boxShadow: "0 0 35px var(--theme-glow)",
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                GET IN TOUCH
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
              <div className="absolute inset-0 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md scale-150" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default QuickIntroduction;