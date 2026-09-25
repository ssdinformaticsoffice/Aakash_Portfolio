import React from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";

function AboutHero() {
  const focusPoints = [
    {
      icon: BriefcaseBusiness,
      title: "Leadership",
      text: "Clear direction",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      text: "Purposeful ideas",
    },
    {
      icon: Target,
      title: "Strategy",
      text: "Long-term focus",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      text: "Sustainable progress",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_70%_45%,var(--theme-soft),transparent_30%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[-120px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[var(--theme-glow)]
          opacity-20
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          left-[-100px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[var(--theme-glow)]
          opacity-10
          blur-[120px]
        "
      />


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[520px]
          w-full
          max-w-7xl
          items-center
          px-4
          py-14
          sm:px-6
          md:min-h-[580px]
          md:px-8
          lg:px-10
          lg:py-20
        "
      >

        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[1.15fr_0.85fr_0.55fr]
            lg:gap-8
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-10 max-w-2xl">

            {/* Small Label */}

            <div
              className="
                mb-5
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[var(--theme-accent)]
                  shadow-[0_0_12px_var(--theme-glow)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[var(--theme-accent)]
                "
              >
                About · Akash Verma
              </span>
            </div>


            {/* Heading */}

            <h1
              className="
                max-w-xl
                text-4xl
                font-light
                leading-[1.05]
                tracking-[-0.03em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-[4.5rem]
              "
            >
              Building with{" "}
              <span
                className="
                  text-[var(--theme-accent)]
                  drop-shadow-[0_0_25px_var(--theme-glow)]
                "
              >
                Purpose.
              </span>
            </h1>

            <h2
              className="
                mt-2
                text-2xl
                font-light
                tracking-tight
                text-slate-300
                sm:text-3xl
              "
            >
              Leading with{" "}
              <span className="text-[var(--theme-accent)]">
                Vision.
              </span>
            </h2>


            {/* Description */}

            <div
              className="
                mt-6
                max-w-xl
                space-y-3
              "
            >
              <p
                className="
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-[15px]
                "
              >
                I’m Akash Verma, CEO of SSD Informatics, with a
                focus on technology, innovation, and purposeful
                business growth.
              </p>

              <p
                className="
                  text-sm
                  leading-7
                  text-slate-500
                  sm:text-[15px]
                "
              >
                My approach combines strategic thinking,
                technology perspective, and long-term vision
                to create meaningful direction and sustainable
                progress.
              </p>
            </div>


            {/* Signature / Identity */}

            <div
              className="
                mt-7
                flex
                items-end
                gap-4
              "
            >

              <div>
                <div
                  className="
                    font-[cursive]
                    text-xl
                    italic
                    text-white/80
                  "
                >
                  Akash Verma
                </div>

                <div
                  className="
                    mt-1
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-slate-500
                  "
                >
                  CEO · SSD Informatics
                </div>
              </div>

            </div>

          </div>


          {/* =================================================
              CENTER IMAGE
          ================================================= */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[330px]
              lg:max-w-[350px]
            "
          >

            {/* Outer glow */}

            <div
              className="
                absolute
                inset-[-20px]
                rounded-[28px]
                bg-[var(--theme-glow)]
                opacity-20
                blur-[45px]
              "
            />


            {/* Image Frame */}

            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-2xl
                border
                border-[var(--theme-border-strong)]
                bg-[#08111f]
                shadow-[0_25px_70px_rgba(0,0,0,0.45)]
              "
            >

              {/* Accent frame */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-3
                  z-20
                  rounded-xl
                  border
                  border-[var(--theme-accent)]/20
                "
              />

              {/* Image */}

              <img
                src="/images/akash-verma.png"
                alt="Akash Verma"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                  grayscale-[15%]
                  transition-all
                  duration-700
                  hover:scale-105
                  hover:grayscale-0
                "
              />

              {/* Bottom gradient */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  h-1/2
                  bg-gradient-to-t
                  from-[#050b16]
                  via-[#050b16]/40
                  to-transparent
                "
              />

              {/* Name on image */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  z-30
                "
              >
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[var(--theme-accent)]
                  "
                >
                  CEO
                </p>

                <p
                  className="
                    mt-1
                    text-lg
                    font-medium
                    text-white
                  "
                >
                  Akash Verma
                </p>
              </div>

            </div>


            {/* Small corner accent */}

            <div
              className="
                absolute
                -right-2
                -top-2
                h-12
                w-12
                rounded-tr-2xl
                border-r
                border-t
                border-[var(--theme-accent)]
              "
            />

            <div
              className="
                absolute
                -bottom-2
                -left-2
                h-12
                w-12
                rounded-bl-2xl
                border-b
                border-l
                border-[var(--theme-accent)]
              "
            />

          </div>


          {/* =================================================
              RIGHT FOCUS PANEL
          ================================================= */}

          <div
            className="
              relative
              space-y-2
            "
          >

            <div
              className="
                mb-4
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-slate-600
              "
            >
              Core Focus
            </div>


            {focusPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    border
                    border-white/[0.06]
                    bg-white/[0.015]
                    px-3
                    py-3
                    transition-all
                    duration-300
                    hover:border-[var(--theme-border-strong)]
                    hover:bg-[var(--theme-soft)]
                  "
                >

                  {/* Number */}

                  <span
                    className="
                      absolute
                      right-2
                      top-1
                      text-[8px]
                      font-mono
                      text-slate-700
                    "
                  >
                    0{index + 1}
                  </span>


                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-[var(--theme-border-strong)]
                      bg-[var(--theme-soft)]
                      text-[var(--theme-accent)]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </div>


                  {/* Text */}

                  <div>
                    <p
                      className="
                        text-xs
                        font-semibold
                        text-white
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[9px]
                        text-slate-500
                      "
                    >
                      {item.text}
                    </p>
                  </div>

                </div>
              );
            })}


            {/* Bottom identity */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-between
                border-t
                border-white/[0.06]
                pt-4
              "
            >
              <div>
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-slate-600
                  "
                >
                  Organization
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    font-medium
                    text-slate-300
                  "
                >
                  SSD Informatics Pvt. Ltd.
                </p>
              </div>

              <ArrowUpRight
                size={15}
                className="text-[var(--theme-accent)]"
              />
            </div>

          </div>

        </div>
      </div>


      {/* =====================================================
          BOTTOM LINE
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-[calc(100%-2rem)]
          max-w-6xl
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[var(--theme-border-strong)]
          to-transparent
        "
      />

    </section>
  );
}

export default AboutHero;