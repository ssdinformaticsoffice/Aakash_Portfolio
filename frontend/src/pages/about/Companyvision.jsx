import React from "react";

/* =========================================================
   COMPANY VISION DATA
========================================================= */

const COMPANIES = [
    {
        id: "ssd",

        name: "SSD INFORMATICS PVT. LTD. LUCKNOW",

        fullName: "SSD Informatics Pvt. Ltd.",

        tagline: "Technology · Innovation · Growth",

        timezone: "GMT+5:30",

        paragraphs: [
            "SSD Informatics is a technology-driven company focused on building modern digital solutions that help businesses improve, scale, and adapt to an evolving digital world.",

            "We combine software development, digital transformation, and strategic technology thinking to create reliable and practical solutions for businesses and organizations.",

            "Our approach focuses on innovation, quality, and long-term partnerships, helping clients turn ideas into scalable digital products and systems.",

            "We believe in building technology with purpose — bringing together talented people, modern technologies, and business understanding to solve real-world challenges.",

            "Our vision is to grow as a trusted technology partner by continuously improving our capabilities and creating meaningful digital impact for businesses and communities.",
        ],
    },

    {
        id: "ug-pharma",

        name: "UG PHARMACEUTICALS PVT. LTD. LUCKNOW",

        fullName: "UG Pharmaceuticals Pvt. Ltd.",

        tagline: "Healthcare · Quality · Innovation",

        timezone: "GMT+5:30",

        paragraphs: [
            "UG Pharmaceuticals is focused on contributing to the healthcare sector by providing quality pharmaceutical products and building a responsible and reliable presence in the industry.",

            "Our approach combines quality, innovation, operational excellence, and a strong commitment to the evolving needs of healthcare and pharmaceutical markets.",

            "We aim to build long-term value by maintaining high standards of quality, developing trusted partnerships, and continuously improving our processes and capabilities.",

            "We believe that responsible business practices, collaboration, and a commitment to quality are essential for creating sustainable growth in the pharmaceutical industry.",

            "Our vision is to build a trusted pharmaceutical organization that contributes to better healthcare outcomes while creating lasting value for our partners, customers, employees, and society.",
        ],
    },
];

/* =========================================================
   COMPANY VISION
========================================================= */

function Companyvision() {
    return (
        <section
            id="vision"
            className="
        mx-auto
        w-full
        max-w-6xl
        px-3
        py-8
        sm:px-4
        md:px-8
        md:py-10
      "
        >
            {/* =====================================================
          COMPANIES
      ===================================================== */}

            <div className="space-y-16 sm:space-y-20">
                {COMPANIES.map((company) => (
                    <div
                        key={company.id}
                        className="
              w-full
            "
                    >
                        {/* =================================================
                COMPANY MAP CARD — TOP
            ================================================= */}

                        <div
                            className="
    glass-card
    relative
    h-[180px]
    w-full
    overflow-hidden
    sm:h-[150px]
    md:h-[180px]
  "
                        >
                            {/* Map Pattern */}

                            <div
                                className="
                  map-pattern
                  absolute
                  inset-0
                  opacity-60
                "
                            />

                            {/* Map Shade */}

                            <div
                                className="
                  map-shade
                  absolute
                  inset-0
                  opacity-80
                "
                            />

                            {/* Scan Line */}

                            <div
                                className="
                  map-scan-line
                  absolute
                  bottom-0
                  top-0
                  w-px
                  bg-blue-400/70
                  shadow-[0_0_10px_#008cff]
                "
                            />

                            {/* Background Glow */}

                            <div
                                className="
                  pointer-events-none
                  absolute
                  right-[-100px]
                  top-[-100px]
                  h-[300px]
                  w-[300px]
                  rounded-full
                  bg-blue-500/10
                  blur-[110px]
                "
                            />

                            {/* =================================================
                  COMPANY INFORMATION
              ================================================= */}

                            <div
                                className="
    absolute
    bottom-5
    left-4
    right-4
    z-10
    px-2
    sm:bottom-6
    sm:left-6
    sm:right-6
    sm:px-2
    md:bottom-8
    md:left-8
    md:right-8
    md:px-3
  "
                            >

                                {/* Company Name */}

                                <h2
                                    className="
    max-w-full
    break-words
    text-lg
    font-bold
    leading-tight
    tracking-wide
    text-[var(--fg)]
    sm:text-xl
    md:text-2xl
    lg:text-3xl
  "
                                >
                                    {company.name}
                                </h2>

                                {/* Tagline */}
                                <p
                                    className="
    mt-2
    font-mono
    text-[9px]
    tracking-[0.05em]
    muted
    sm:text-[10px]
    md:text-xs
  "
                                >
                                    {company.tagline}
                                </p>

                                {/* Timezone */}

                                <p
                                    className="
    mt-1
    font-mono
    text-[9px]
    font-semibold
    text-soft
    sm:text-[10px]
    md:text-xs
  "
                                >
                                    {company.timezone}
                                </p>
                            </div>
                        </div>

                        {/* =================================================
                FULL WIDTH DESCRIPTION CARD — BELOW MAP
            ================================================= */}

                        <div
                            className="
                glass-card
                relative
                mt-2
                w-full
                overflow-hidden
                p-5
                sm:mt-2.5
                sm:p-6
                md:mt-3
                md:p-8
              "
                        >
                            {/* Background Glow */}

                            <div
                                className="
                  pointer-events-none
                  absolute
                  right-[-100px]
                  top-[-100px]
                  h-[280px]
                  w-[280px]
                  rounded-full
                  bg-blue-500/10
                  blur-[110px]
                "
                            />

                            {/* Left Accent */}

                            <div
                                className="
                  absolute
                  bottom-6
                  left-0
                  top-6
                  w-px
                  bg-gradient-to-b
                  from-[var(--theme-accent)]
                  via-blue-400/40
                  to-transparent
                "
                            />

                            {/* Description Content */}

                            <div
                                className="
                  relative
                  pl-4
                  sm:pl-5
                  md:pl-6
                "
                            >
                                {/* Section Label */}

                                <div
                                    className="
                    mb-5
                    flex
                    items-center
                    gap-3
                    sm:mb-6
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
                      tracking-[0.25em]
                      text-[var(--theme-accent)]
                      sm:text-[10px]
                    "
                                    >
                                        Company Vision
                                    </span>
                                </div>

                                {/* Paragraphs */}

                                <div
                                    className="
                    max-w-5xl
                    space-y-4
                    sm:space-y-5
                  "
                                >
                                    {company.paragraphs.map(
                                        (paragraph, index) => (
                                            <p
                                                key={index}
                                                className="
                          text-sm
                          leading-7
                          text-soft
                          sm:text-base
                          sm:leading-8
                        "
                                            >
                                                {paragraph}
                                            </p>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Companyvision;