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
    year: "2023 – Present",
    role: "CEO · SSD Informatics Pvt. Ltd.",
    description:
      "Leading product strategy, business growth and technology innovation.",
  },
  {
    year: "2021 – 2023",
    role: "Co-Founder & Business Strategist",
    description:
      "Worked on digital transformation initiatives, client solutions and scalable business models.",
  },
  {
    year: "2018 – 2021",
    role: "Technology & Operations",
    description:
      "Managed product development, system architecture and cross-functional collaboration.",
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

      {/* =====================================================
          LASER / AMBIENT LINES
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">

        <div
          className="absolute left-[5%] top-[12%] h-px w-[40%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--theme-accent), transparent)",
          }}
        />

        <div
          className="absolute right-[10%] top-[22%] h-px w-[30%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--theme-accent), transparent)",
          }}
        />

        <div
          className="absolute bottom-[18%] left-[20%] h-px w-[50%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--theme-accent), transparent)",
          }}
        />

      </div>

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

            {/* TELEMETRY */}
            <motion.div
              variants={fadeUp}
              className="
                mb-6 select-none
                text-xs font-black
                uppercase tracking-[0.35em]
              "
              style={{
                color: "var(--theme-accent)",
              }}
            >
              VISIONARY LEADERSHIP • PURPOSEFUL GROWTH
            </motion.div>

            {/* =================================================
                MAIN TYPOGRAPHY
            ================================================= */}

            <motion.h1
              variants={fadeUp}
              className="
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
                mb-9 grid
                grid-cols-1
                items-start gap-8
                md:grid-cols-2
              "
            >

              {/* DESCRIPTION */}

              <p
                className="
                  text-base font-medium
                  leading-relaxed
                  hero-description
                  sm:text-lg
                "
              >
                I am{" "}

                <span
                  className="
                    font-bold hero-emphasis
                    underline underline-offset-4
                  "
                  style={{
                    textDecorationColor:
                      "var(--theme-accent)",
                  }}
                >
                  Akash Verma
                </span>

                , CEO of SSD Informatics.
                Building scalable web systems,
                robust Python architectures,
                and purposeful business direction.
              </p>

              {/* STATUS INFORMATION */}

              <div
                className="
                  space-y-4
                  hero-divider border-l
                  py-1 pl-6
                "
              >

                <div className="flex flex-col gap-1">

                  <span className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-widest
                    hero-label
                  ">
                    Current Status
                  </span>

                  <span className="
                    text-xs
                    font-mono
                    font-bold
                    uppercase
                    tracking-tight
                    hero-value
                    sm:text-sm
                  ">
                    CEO @ SSD INFORMATICS
                  </span>

                </div>

                <div className="flex flex-col gap-1">

                  <span className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-widest
                    hero-label
                  ">
                    Specialization
                  </span>

                  <span className="
                    text-xs
                    font-mono
                    font-bold
                    uppercase
                    tracking-tight
                    hero-value
                    sm:text-sm
                  ">
                    SYSTEM ARCHITECTURE & PYTHON
                  </span>

                </div>

              </div>

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

              {/* =================================================
                  FLOATING HUD
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  absolute
                  bottom-6
                  -left-6
                  z-20
                  hidden w-48
                  rounded-2xl
                  border border-white/10
                  bg-[#050816]/90
                  p-4
                  shadow-2xl
                  backdrop-blur-3xl
                  sm:-left-10
                  sm:block
                "
              >

                <div className="
                  flex flex-col gap-2.5
                ">

                  <div className="
                    flex items-center
                    justify-between
                    text-[8px]
                    font-bold
                    uppercase
                    text-slate-400
                  ">
                    <span>
                      System Health
                    </span>

                    <span
                      style={{
                        color:
                          "var(--theme-accent)",
                      }}
                    >
                      99%
                    </span>
                  </div>

                  <div className="
                    h-1 w-full
                    overflow-hidden
                    rounded-full
                    bg-white/10
                  ">
                    <div
                      className="
                        h-full
                        rounded-full
                      "
                      style={{
                        width: "99%",
                        backgroundColor:
                          "var(--theme-accent)",
                        boxShadow:
                          "0 0 8px var(--theme-accent)",
                      }}
                    />
                  </div>

                  <div className="
                    text-[9px]
                    font-mono
                    leading-tight
                    text-slate-300
                  ">
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

        {/* =====================================================
            EXPERIENCE SECTION
        ===================================================== */}

        <div className="mt-16 grid grid-cols-1 gap-3 lg:grid-cols-12">

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

              <span className="
                font-mono
                text-xs
                tracking-widest
                text-soft
              ">
                Career
              </span>

            </div>

            {/* EXPERIENCE LIST */}

            <div className="space-y-4">

              {EXPERIENCES.map(
                (experience) => (
                  <div
                    key={experience.year}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >

                    <span
                      className="
                        accent-dot
                        mt-2
                        h-2 w-2
                        shrink-0
                        rounded-full
                      "
                    />

                    <div className="
                      min-w-0
                      flex-1
                    ">

                      <div className="
                        flex
                        flex-wrap
                        items-baseline
                        gap-x-3
                        gap-y-1
                      ">

                        <span className="
                          font-mono
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-widest
                          muted
                        ">
                          {experience.year}
                        </span>

                        <h4 className="
                          text-sm
                          font-medium
                          sm:text-base
                        ">
                          {experience.role}
                        </h4>

                      </div>

                      <p className="
                        mt-1
                        text-xs
                        leading-5
                        muted
                        sm:text-sm
                        sm:leading-6
                      ">
                        {experience.description}
                      </p>

                    </div>

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
              flex min-h-[68px]
              flex-col
              items-center
              justify-around
              gap-3
              px-4 py-3
              sm:flex-row
              lg:col-span-8
            "
          >

            {/* REFINING */}

            <div className="
              flex
              items-center
              gap-3
            ">

              <span className="
                h-2 w-2
                shrink-0
                animate-pulse
                rounded-full
                bg-red-500
                shadow-[0_0_10px_rgba(239,68,68,0.6)]
              " />

              <div>

                <p className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-wider
                  text-soft
                ">
                  Refining Craft
                </p>

                <p className="
                  text-sm
                  font-medium
                ">
                  Technology · Leadership · Strategy
                </p>

              </div>

            </div>

            <div className="
              hidden
              h-6 w-px
              hairline
              sm:block
            " />

            {/* OPEN TO */}

            <div className="
              flex
              items-center
              gap-3
            ">

              <span className="
                h-2 w-2
                shrink-0
                animate-pulse
                rounded-full
                bg-green-500
                shadow-[0_0_10px_rgba(34,197,94,0.6)]
              " />

              <div>

                <p className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-wider
                  text-soft
                ">
                  Open To
                </p>

                <p className="
                  text-sm
                  font-medium
                ">
                  Vision · Innovation · Growth
                </p>

              </div>

            </div>

          </div>

          {/* ===================================================
              CLOCK
          =================================================== */}

          <div
            className="
              glass-card
              flex min-h-[68px]
              items-center
              justify-center
              px-3 py-2
              lg:col-span-3
            "
          >

            <span className="
              font-mono
              text-2xl
              font-light
              tracking-[0.15em]
              text-soft
            ">
              {time || "00:00:00"}
            </span>

          </div>

          {/* ===================================================
              COMMAND
          =================================================== */}

          <Link
            to="/contact"
            className="
              glass-card
              card-hover
              flex min-h-[68px]
              items-center
              justify-center
              rounded-xl
              lg:col-span-1
            "
            title="Contact"
          >

            <kbd className="
              flex
              items-center
              gap-1.5
              font-sans
              text-sm
              font-medium
              text-soft
            ">
              <Command size={15} />
              K
            </kbd>

          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;