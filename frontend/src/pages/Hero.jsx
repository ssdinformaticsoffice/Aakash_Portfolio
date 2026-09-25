import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Command,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "../utils/motion";

/* =========================================================
   HERO ROTATING HEADLINES
========================================================= */

const rotatingHeadlines = [
  ["BUILDING", "WHAT'S", "NEXT"],
  ["DESIGNING", "FOR", "IMPACT"],
  ["ENGINEERING", "BOLD", "IDEAS"],
  ["SCALING", "DIGITAL", "FUTURES"],
];

/* =========================================================
   EXPERIENCE DATA
========================================================= */

const EXPERIENCES = [
  {
    year: "2026 – Present",
    role: "CTO at UG Pharmaceuticals Pvt. Ltd.",
    description:
      "Driving technology strategy, innovation, and business growth while aligning digital initiatives with long-term organizational goals.",
  },
  {
    year: "2022 – Present",
    role: "CEO & Founding Director at SSD Informatics",
   description:
      "Leading business direction, technology initiatives, client solutions, and organizational growth with a long-term strategic perspective.",
  },
  {
    year: "2020 – Present",
    role: "Proprietor · Atharv Infratech ",
     description:
      "Managing business operations, client relationships, strategic initiatives, and sustainable business development.",
  },
];

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const [time, setTime] = useState("");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [typedHeadline, setTypedHeadline] = useState(0);

  const cardRef = useRef(null);

  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  /* =======================================================
     LIVE CLOCK
  ======================================================= */

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     CHANGE HEADLINE
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedHeadline(0);

      setHeadlineIndex(
        (currentIndex) =>
          (currentIndex + 1) % rotatingHeadlines.length
      );
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     TYPE HEADLINE
  ======================================================= */

  useEffect(() => {
    const headline =
      rotatingHeadlines[headlineIndex].join(" ");

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

  /* =======================================================
     3D IMAGE MOUSE MOVE
  ======================================================= */

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      rect.width / 2;

    const y =
      e.clientY -
      rect.top -
      rect.height / 2;

    const rotateX =
      -(y / (rect.height / 2)) * 10;

    const rotateY =
      (x / (rect.width / 2)) * 10;

    setTilt({
      rotateX,
      rotateY,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
    });
  };

  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        pt-28 pb-6
        sm:pt-15
        md:pt-20
      "
    >

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">

        {/* ===================================================
            MAIN HERO
        =================================================== */}

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">

          {/* =================================================
              LEFT HERO CONTENT
          ================================================= */}

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 lg:col-span-7"
          >

            {/* STATUS */}
            <motion.div
              variants={fadeUp}
              className="mb-6"
            >
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full border
                  px-3.5 py-1.5
                  text-[10px] font-bold
                  uppercase tracking-[0.2em]
                "
                style={{
                  borderColor:
                    "var(--theme-border-strong)",
                  backgroundColor:
                    "var(--theme-soft)",
                  color: "var(--theme-accent)",
                }}
              >
                <span className="relative flex h-2 w-2">

                  <span
                    className="
                      absolute inline-flex
                      h-full w-full
                      animate-ping
                      rounded-full opacity-75
                    "
                    style={{
                      backgroundColor:
                        "var(--theme-accent)",
                    }}
                  />

                  <span
                    className="
                      relative inline-flex
                      h-2 w-2 rounded-full
                    "
                    style={{
                      backgroundColor:
                        "var(--theme-accent)",
                    }}
                  />

                </span>

                Leading with Vision & Purpose
              </div>
            </motion.div>


            {/* =================================================
                MAIN TYPOGRAPHY
            ================================================= */}

            <motion.h1
              variants={fadeUp}
              className="
                relative
                mb-8 max-w-full
                break-words
                text-[clamp(2.4rem,8vw,4.2rem)]
                font-black italic
                leading-[0.84]
                tracking-tighter
                select-none
                sm:text-[clamp(2.7rem,7vw,4.5rem)]
                lg:text-[clamp(3.1rem,4.8vw,4.7rem)]
              "
            >

              <span
                className="pointer-events-none absolute -top-5 left-0 h-px w-[55%] opacity-70"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--theme-accent), transparent)",
                }}
              />

              <span className="hero-name block">
                AKASH VERMA
              </span>

              <span
                key={headlineIndex}
                className="
                  block min-h-[1em]
                  hero-heading-fill
                "
                aria-live="polite"
              >
                {rotatingHeadlines[headlineIndex]
                  .join(" ")
                  .slice(0, typedHeadline)}
                <span
                  className="ml-1 inline-block animate-pulse"
                  style={{
                    color:
                      "var(--theme-accent)",
                  }}
                >
                  |
                </span>
              </span>

            </motion.h1>

            {/* =================================================
    INTRO INFORMATION
================================================= */}

            <motion.div
              variants={fadeUp}
              className="
    mb-9
    w-full
  "
            >
              {/* DESCRIPTION */}
              <p
                className="
      hero-description
      w-full
      max-w-3xl
      text-base
      font-medium
      leading-relaxed
      sm:text-lg
      lg:max-w-4xl
    "
              >
                I am{" "}

                <span
                  className="
        hero-emphasis
        font-bold
        underline
        underline-offset-4
      "
                  style={{
                    textDecorationColor: "var(--theme-accent)",
                  }}
                >
                  Akash Verma
                </span>

                , CEO of SSD Informatics. I bridge technology and business
                to build scalable systems, strong teams, and meaningful
                digital direction.
              </p>
            </motion.div>


          </motion.div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="relative order-1 lg:order-2 lg:col-span-5">

            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="
                relative mx-auto
                max-w-[380px]
                sm:max-w-[460px]
                lg:mx-0
                [perspective:1000px]
              "
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
                  group relative
                  aspect-[4/5]
                  w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.02]
                  shadow-[0_30px_70px_rgba(0,0,0,0.8)]
                "
              >

                {/* IMAGE */}

                <div
                  className="relative h-full w-full"
                  style={{
                    transform:
                      "translateZ(40px)",
                  }}
                >

                  <img
                    src="/images/akash-verma.png"
                    alt="Akash Verma"
                    className="
    absolute inset-0
    h-full w-full
    scale-105
    object-cover
    object-center
    transition-all
    duration-1000
    group-hover:scale-100
    group-hover:grayscale
  "
                  />

                  {/* GRADIENT */}

                  <div className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#030712]
                    via-transparent
                    to-transparent
                    opacity-80
                  " />

                  {/* BOTTOM STATUS */}

                  <div className="
                    pointer-events-none
                    absolute bottom-6
                    right-6
                    flex flex-col
                    items-end gap-1.5
                  ">

                    <div className="flex gap-1">

                      {[1, 2, 3, 4].map(
                        (bar) => (
                          <div
                            key={bar}
                            className="
                              h-3 w-1
                              rounded-full
                            "
                            style={{
                              backgroundColor:
                                "var(--theme-accent)",
                            }}
                          />
                        )
                      )}

                    </div>

                    <span className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-white/70
                    ">
                      Verified Identity
                    </span>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

        {/* =====================================================
            EXPERIENCE SECTION
        ===================================================== */}

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-16 lg:grid-cols-12">

          <div
            className="
              glass-card
              flex min-h-[270px]
              flex-col
              justify-start
              p-5
              sm:min-h-[280px]
              sm:p-6
              lg:col-span-12
            "
          >

            {/* EXPERIENCE HEADER */}

            <div
              className="
                hairline-b
                mb-4
                flex
                items-center
                justify-between
                pb-4
              "
            >

              <div>

                <p className="
                  mb-1
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-soft
                ">
                  Career Journey
                </p>

                <h3 className="
                  text-xl
                  font-light
                  tracking-tight
                  sm:text-2xl
                ">
                  Experience
                </h3>

              </div>

            </div>

            {/* EXPERIENCE LIST */}

            <div className="space-y-6 sm:space-y-8">

              {EXPERIENCES.map(
                (experience) => (
                  <div
                    key={experience.year}
                    className="
                      timeline-item
                      relative
                      pl-6
                      pb-4
                      sm:pl-8
                    "
                  >

                    <span
                      className="
                        absolute
                        -left-[5px]
                        top-0
                        h-[9px]
                        w-[9px]
                        rounded-full
                        bg-[#3B82F6]
                        shadow-[0_0_8px_rgba(59,130,246,0.6)]
                      "
                    />

                    <span className="font-mono text-[11px] font-semibold uppercase tracking-widest muted sm:text-sm">
                      {experience.year}
                    </span>

                    <h4 className="mt-2 text-base font-medium sm:text-lg">
                      {experience.role}
                    </h4>

                    <p className="mt-1 text-xs leading-5 muted sm:text-sm sm:leading-6">
                      {experience.description}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

          {/* ===================================================
              REFINING / OPEN TO
          =================================================== */}

          <div
            className="
    glass-card
    flex
    min-h-[68px]
    flex-row
    items-center
    justify-between
    gap-3
    px-5 py-3
    sm:px-4
    lg:col-span-8
  "
          >
            {/* REFINING */}
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <span
                className="
        h-2 w-2
        shrink-0
        mt-6
        animate-pulse
        rounded-full
        bg-red-500
        shadow-[0_0_10px_rgba(239,68,68,0.6)]
      "
              />

              <div className="min-w-0">
                <p
                  className="
          text-[9px]
          font-semibold
          uppercase
          tracking-wider
          text-soft
          sm:text-[10px]
        "
                >
                  Refining Craft
                </p>

                <p
                  className="
          truncate
          text-[11px]
          font-medium
          sm:text-sm
        "
                >
                  Technology · Leadership · Strategy
                </p>
              </div>
            </div>

            {/* DIVIDER */}
            <div
              className="
      h-8 w-px
      shrink-0
      hairline
    "
            />

            {/* OPEN TO */}
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <span
                className="
        h-2 w-2
        shrink-0
        mt-6
        animate-pulse
        rounded-full
        bg-green-500
        shadow-[0_0_10px_rgba(34,197,94,0.6)]
      "
              />

              <div className="min-w-0">
                <p
                  className="
          text-[9px]
          font-semibold
          uppercase
          tracking-wider
          text-soft
          sm:text-[10px]
        "
                >
                  Open To
                </p>

                <p
                  className="
          truncate
          text-[11px]
          font-medium
          sm:text-sm
        "
                >
                  Vision · Innovation · Growth
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================
    CLOCK + COMMAND
=================================================== */}

          <div
            className="
    grid
    grid-cols-[minmax(0,1fr)_68px]
    gap-2
    lg:contents
  "
          >

            {/* ===================================================
      CLOCK
  =================================================== */}

            <div
              className="
      glass-card
      flex min-h-[68px]
      items-center justify-center
      rounded-xl
      px-3 py-2
      lg:col-span-3
    "
            >
              <span
                className="
        font-mono
        text-xl
        font-light
        tracking-[0.12em]
        text-soft
        sm:text-2xl
        sm:tracking-[0.15em]
      "
              >
                {time || "00:00:00"}
              </span>
            </div>


            {/* ===================================================
      COMMAND / ORBIT
  =================================================== */}

            <div
              className="
      glass-card
      card-hover
      flex min-h-[68px]
      items-center justify-center
      rounded-xl
      lg:col-span-1
    "
            >
              <div className="relative h-12 w-12">

                {/* Soft outer glow */}
                <div
                  className="
          absolute inset-0
          animate-pulse
          rounded-full
          bg-white/5
          blur-md
        "
                />

                {/* Main orbit ring */}
                <div
                  className="
          absolute inset-1
          rounded-full
          border border-white/10
        "
                />

                {/* Inner subtle ring */}
                <div
                  className="
          absolute inset-2
          rounded-full
          border border-white/[0.06]
        "
                />

                {/* White glowing center */}
                <div
                  className="
          absolute left-1/2 top-1/2
          h-4 w-4
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/90
          shadow-[0_0_18px_rgba(255,255,255,0.55)]
        "
                />

                {/* Green orbit */}
                <div
                  className="
          absolute inset-0
          animate-[spin_4s_linear_infinite]
        "
                >
                  <span
                    className="
            absolute
            right-[2px]
            top-[5px]
            h-2 w-2
            rounded-full
            bg-green-500
            shadow-[0_0_10px_rgba(34,197,94,0.9)]
          "
                  />
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;