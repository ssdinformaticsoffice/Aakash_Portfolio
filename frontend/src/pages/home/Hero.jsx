import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  fadeUp,
  staggerContainer,
} from "../../utils/motion";

const rotatingHeadlines = [
  ["BUILDING", "WHAT'S", "NEXT"],
  ["DESIGNING", "FOR", "IMPACT"],
  ["ENGINEERING", "BOLD", "IDEAS"],
  ["SCALING", "DIGITAL", "FUTURES"],
];

function Hero() {
  const [time, setTime] = useState("");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [typedHeadline, setTypedHeadline] = useState(0);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedHeadline(0);
      setHeadlineIndex((currentIndex) =>
        (currentIndex + 1) % rotatingHeadlines.length
      );
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const headline = rotatingHeadlines[headlineIndex].join(" ");
    const typingInterval = setInterval(() => {
      setTypedHeadline((currentLength) => {
        if (currentLength >= headline.length) {
          clearInterval(typingInterval);
          return currentLength;
        }

        return currentLength + 1;
      });
    }, 70);

    return () => clearInterval(typingInterval);
  }, [headlineIndex]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -(y / (rect.height / 2)) * 12;
    const rotateY = (x / (rect.width / 2)) * 12;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section className="relative min-h-[110vh] flex items-start pt-32 sm:pt-36 pb-4 overflow-hidden">
      {/* Laser line accents across the hero */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
        <div
          className="absolute top-[12%] left-[5%] w-[40%] h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--theme-accent), transparent)",
          }}
        />
        <div
          className="absolute top-[22%] right-[10%] w-[30%] h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--theme-accent), transparent)",
          }}
        />
        <div
          className="absolute bottom-[18%] left-[20%] w-[50%] h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--theme-accent), transparent)",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* =========================================
              LEFT COLUMN (Hero Content)
          ========================================= */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Status Pill Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{
                  borderColor: "var(--theme-border-strong)",
                  backgroundColor: "var(--theme-soft)",
                  color: "var(--theme-accent)",
                }}
              >
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
                Leading with Vision & Purpose
              </div>
            </motion.div>

            {/* Subtitle Telemetry */}
            <motion.div
              variants={fadeUp}
              className="font-black tracking-[0.35em] uppercase text-xs mb-6 select-none"
              style={{ color: "var(--theme-accent)" }}
            >
              VISIONARY LEADERSHIP • PURPOSEFUL GROWTH
            </motion.div>

            {/* Kinetic Typography with Stroke Text */}
            <motion.h1
              variants={fadeUp}
              className="max-w-full break-words 
                text-[clamp(2.5rem,10vw,5rem)]
                sm:text-[clamp(3rem,8vw,5rem)]
                lg:text-[clamp(3.5rem,5.5vw,5rem)]
                leading-[0.84] font-black italic tracking-tighter mb-10 select-none"
            >
              <span className="block stroke-text">AKASH VERMA</span>
              <span
                key={headlineIndex}
                className="block text-white min-h-[1em]"
                aria-live="polite"
              >
                {rotatingHeadlines[headlineIndex]
                  .join(" ")
                  .slice(0, typedHeadline)}
              </span>
            </motion.h1>

            {/* Intro Grid */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10"
            >
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-medium">
                I am{" "}
                <span
                  className="text-white font-bold underline underline-offset-4"
                  style={{ textDecorationColor: "var(--theme-accent)" }}
                >
                  Akash Verma
                </span>
                , CEO of SSD Informatics. Building scalable web systems,
                robust Python architectures, and purposeful business direction.
              </p>

              <div className="border-l border-white/10 pl-6 py-1 space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                    Current Status
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-white tracking-tight uppercase">
                    CEO @ SSD INFORMATICS
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                    Specialization
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-white tracking-tight uppercase">
                    SYSTEM ARCHITECTURE & PYTHON
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="
                    relative inline-flex items-center justify-center px-8 py-4
                    rounded-full font-bold uppercase tracking-wider text-xs
                    text-[#030712] shadow-2xl overflow-hidden group
                  "
                  style={{
                    backgroundColor: "var(--theme-accent)",
                    boxShadow: "0 0 35px var(--theme-glow)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Works
                    <ArrowUpRight size={16} />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md scale-150" />
                </Link>
              </motion.div>

              <a
                href="#about"
                className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400 group cursor-pointer"
              >
                <span
                  className="w-12 h-px bg-white/20 transition-all duration-500 group-hover:w-20"
                  style={{
                    backgroundColor: "var(--theme-accent)",
                  }}
                />
                <span className="group-hover:text-white transition-colors">
                  Scroll to explore
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN (Interactive 3D Tilt Card)
          ========================================= */}
          <div className="lg:col-span-5 relative">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative max-w-[340px] sm:max-w-[420px] mx-auto lg:mx-0 [perspective:1000px]"
            >
              <motion.div
                animate={{
                  rotateX: tilt.rotateX,
                  rotateY: tilt.rotateY,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  relative w-full aspect-[4/5] rounded-3xl overflow-hidden
                  border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.8)]
                  bg-white/[0.02] group cursor-pointer
                "
              >
                {/* Visual Image with Grayscale -> Color Hover */}
                <div
                  style={{ transform: "translateZ(40px)" }}
                  className="w-full h-full relative"
                >
                  <img
                    src="/images/vishal rajbhar.png"
                    alt="Akash Verma"
                    className="
                      absolute inset-0 h-full w-full object-cover object-center
                      grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100
                    "
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Top-Left Identification */}
                  <div className="absolute top-6 left-6 flex flex-col gap-1 pointer-events-none">
                    <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-white/40">
                      Identification
                    </span>
                    <span className="text-[12px] font-black tracking-tighter text-white">
                      VERMA_01.A
                    </span>
                  </div>

                  {/* Bottom-Right Verified Status with 4 Bars */}
                  <div className="absolute bottom-6 right-6 flex flex-col items-end gap-1.5 pointer-events-none">
                    <div className="flex gap-1">
                      <div
                        className="w-1 h-3 rounded-full"
                        style={{ backgroundColor: "var(--theme-accent)" }}
                      />
                      <div
                        className="w-1 h-3 rounded-full"
                        style={{ backgroundColor: "var(--theme-accent)" }}
                      />
                      <div
                        className="w-1 h-3 rounded-full"
                        style={{ backgroundColor: "var(--theme-accent)" }}
                      />
                      <div
                        className="w-1 h-3 rounded-full"
                        style={{ backgroundColor: "var(--theme-accent)" }}
                      />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                      Verified Identity
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Telemetry HUD Box */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="
                  absolute bottom-6 -left-6 sm:-left-10 w-48 p-4
                  bg-[#050816]/90 backdrop-blur-3xl border border-white/10
                  rounded-2xl shadow-2xl z-20 hidden sm:block
                "
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-[8px] uppercase font-bold text-slate-400">
                    <span>System Health</span>
                    <span style={{ color: "var(--theme-accent)" }}>99%</span>
                  </div>

                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "99%",
                        backgroundColor: "var(--theme-accent)",
                        boxShadow: "0 0 8px var(--theme-accent)",
                      }}
                    />
                  </div>

                  <div className="text-[9px] font-mono text-slate-300 leading-tight">
                    ARCH_X64_READY
                    <br />
                    CORE: ACTIVE
                    <br />
                    UI_RENDER: PASS
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;