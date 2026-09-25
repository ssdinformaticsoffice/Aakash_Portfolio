import React from "react";
import {
  Lightbulb,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";

function MyAproach() {
  const APPROACH = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Exploring new ideas and turning them into meaningful solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Building strong teams and encouraging shared perspectives.",
    },
    {
      icon: Target,
      title: "Impact",
      description:
        "Creating value that has meaningful and lasting results.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "Continuously learning, improving, and moving forward.",
    },
  ];

  return (
    <section
      className="
        relative
        mx-auto
        w-full
        max-w-6xl
        overflow-hidden
        px-4
        py-12
        sm:px-6
        md:px-8
        md:py-16
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-1/2
          h-[350px]
          w-[350px]
          -translate-y-1/2
          rounded-full
          bg-[var(--theme-glow)]
          opacity-10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          grid
          grid-cols-1
          items-center
          gap-8
          lg:grid-cols-[0.75fr_1.8fr]
          lg:gap-12
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="max-w-sm">
          <div
            className="
              mb-3
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-8
                bg-[var(--theme-accent)]
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
              Leadership & Values
            </span>
          </div>

          <h2
            className="
              text-3xl
              font-light
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            My{" "}
            <span className="text-[var(--theme-accent)]">
              Approach
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-sm
              text-sm
              leading-6
              text-slate-400
              sm:text-[15px]
            "
          >
            I believe meaningful progress comes from combining
            clear thinking, collaboration, innovation, and a
            long-term perspective.
          </p>
        </div>

        {/* =================================================
            RIGHT APPROACH CARDS
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-2.5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {APPROACH.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  min-h-[150px]
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-white/[0.015]
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[var(--theme-border-strong)]
                  hover:bg-[var(--theme-soft)]
                "
              >
                {/* Number */}

                <span
                  className="
                    absolute
                    right-3
                    top-2
                    font-mono
                    text-[8px]
                    tracking-widest
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
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--theme-border-strong)]
                    bg-[var(--theme-soft)]
                    text-[var(--theme-accent)]
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:shadow-[0_0_20px_var(--theme-glow)]
                  "
                >
                  <Icon
                    size={16}
                    strokeWidth={1.6}
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-5
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-2
                    text-[10px]
                    leading-5
                    text-slate-500
                  "
                >
                  {item.description}
                </p>

                {/* Bottom Accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[var(--theme-accent)]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MyAproach;