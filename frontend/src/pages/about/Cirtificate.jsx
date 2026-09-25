import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* =========================================================
   ABOUT CONTENT
========================================================= */

const PARAGRAPHS = [
    "I’m Akash Verma, CEO of SSD Informatics, with a strong interest in technology, innovation, and purposeful business growth. I believe great ideas become meaningful when they are supported by clear vision, strategic thinking, and consistent execution.",

    "My focus is on building technology-driven solutions, encouraging innovation, and creating an environment where people and ideas can grow together. I approach leadership with curiosity, responsibility, and a long-term perspective.",

    "For me, leadership is not just about building a business — it is about creating direction, solving meaningful problems, and continuously moving forward.",
];


/* =========================================================
   CERTIFICATES DATA
   Replace image paths later with real certificates.
========================================================= */

const CERTIFICATES = [
    {
        id: 1,
        year: "2024",
        title: "Professional Certificate",
        issuer: "Certificate Issuer",
        image: "/images/certificates/certificate-1.jpg",
    },
    {
        id: 2,
        year: "2023",
        title: "Technology & Leadership",
        issuer: "Professional Organization",
        image: "/images/certificates/certificate-2.jpg",
    },
    {
        id: 3,
        year: "2022",
        title: "Business & Strategy",
        issuer: "Professional Organization",
        image: "/images/certificates/certificate-3.jpg",
    },
    {
        id: 4,
        year: "2021",
        title: "Professional Achievement",
        issuer: "Professional Organization",
        image: "/images/certificates/certificate-4.jpg",
    },
];


/* =========================================================
   CERTIFICATE CARD
========================================================= */

function CertificateCard({
    certificate,
    index,
    progress,
}) {
    const total = CERTIFICATES.length;

    const start = index / total;
    const end = Math.min(start + 0.28, 1);

    const yTransform = useTransform(
        progress,
        index === 1 ? [0, start, end] : [start, end],
        index === 1 ? ["78%", "78%", "0%"] : ["120%", "0%"]
    );

    const scaleTransform = useTransform(
        progress,
        [start, end],
        [0.92, 1]
    );

    /*
      First certificate should be visible
      immediately when the section starts.
    */

    const y = index === 0 ? 0 : yTransform;
    const opacity = 0.68;
    const scale = index === 0 ? 1 : scaleTransform;

    return (
        <motion.div
            style={{
                y,
                opacity,
                scale,
                zIndex: index + 1,
            }}
            className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        px-2
        sm:px-4
      "
        >
            <div
                className="
          w-full
          max-w-[720px]
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.08]
          bg-[#08111f]
          shadow-[0_25px_70px_rgba(0,0,0,0.45)]
        "
            >

                {/* =================================================
            CERTIFICATE IMAGE
        ================================================= */}

                <div
                    className="
            relative
            aspect-[16/10]
            w-full
            overflow-hidden
            bg-[#0b1626]
          "
                >

                    {/* Actual image path */}
                    <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="
              absolute
              inset-0
              z-10
              h-full
              w-full
              object-cover
            "
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />

                    {/* =================================================
              DUMMY CERTIFICATE
              Visible until real image is added.
          ================================================= */}

                    <div
                        className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              bg-gradient-to-br
              from-[#101d31]
              via-[#0b1626]
              to-[#050b16]
            "
                    >
                        <div
                            className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[var(--theme-border-strong)]
                bg-[var(--theme-soft)]
                text-2xl
                text-[var(--theme-accent)]
              "
                        >
                            ✦
                        </div>

                        <p
                            className="
                mt-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[var(--theme-accent)]
              "
                        >
                            Certificate
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                            Dummy Certificate Image
                        </p>
                    </div>

                    {/* Image overlay */}
                    <div
                        className="
              pointer-events-none
              absolute
              inset-0
              z-20
              bg-gradient-to-t
              from-[#050b16]/40
              via-transparent
              to-transparent
            "
                    />
                </div>


                {/* =================================================
            CERTIFICATE INFORMATION
        ================================================= */}

                <div
                    className="
            flex
            items-center
            justify-between
            gap-4
            border-t
            border-white/[0.06]
            px-4
            py-3
            sm:px-5
            sm:py-4
          "
                >
                    <div>

                        <p
                            className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[var(--theme-accent)]
              "
                        >
                            {certificate.year}
                        </p>

                        <h3
                            className="
                mt-1
                text-sm
                font-semibold
                text-white
                sm:text-base
              "
                        >
                            {certificate.title}
                        </h3>

                        <p
                            className="
                mt-1
                text-xs
                text-slate-500
              "
                        >
                            {certificate.issuer}
                        </p>

                    </div>


                    {/* Certificate Number */}

                    <div
                        className="
              hidden
              shrink-0
              rounded-full
              border
              border-white/[0.08]
              px-3
              py-1
              text-[9px]
              uppercase
              tracking-wider
              text-slate-500
              sm:block
            "
                    >
                        {String(certificate.id).padStart(2, "0")}
                    </div>

                </div>
            </div>
        </motion.div>
    );
}


/* =========================================================
   ABOUT PAGE
========================================================= */

function Cirtificate() {
    const certificateRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: certificateRef,
        offset: ["start start", "end end"],
    });

    return (
        <>
            {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

            <section
                id="about"
                className="
          mx-auto
          w-full
          max-w-6xl
          px-3
          py-10
          sm:px-4
          md:px-8
          md:py-14
        "
            >

                <div
                    className="
            grid
            grid-cols-1
            gap-2
            sm:gap-2.5
            lg:grid-cols-3
            lg:gap-3
          "
                >

                    {/* =================================================
              LEFT COLUMN
          ================================================= */}

                    <div className="space-y-2 sm:space-y-2.5 lg:space-y-3">

                        {/* ABOUT TITLE */}

                        <div
                            className="
                glass-card
                flex
                flex-col
                items-center
                justify-center
                p-4
                sm:p-5
              "
                        >
                            <h2
                                className="
                  text-2xl
                  font-light
                  tracking-tight
                  sm:text-3xl
                  md:text-4xl
                "
                            >
                                About Me
                            </h2>
                        </div>


                        {/* INDIA MAP */}

                        <div
                            className="
                glass-card
                relative
                h-40
                overflow-hidden
                sm:h-48
                md:h-52
                lg:h-48
              "
                        >

                            <div
                                className="
                  map-pattern
                  absolute
                  inset-0
                  opacity-60
                "
                            />

                            <div
                                className="
                  map-shade
                  absolute
                  inset-0
                  opacity-80
                "
                            />

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

                            <div
                                className="
                  absolute
                  bottom-4
                  left-6
                "
                            >

                                <h3
                                    className="
                    text-2xl
                    font-bold
                    tracking-wide
                  "
                                >
                                    INDIA
                                </h3>

                                <p
                                    className="
                    font-mono
                    text-xs
                    tracking-[0.08em]
                    muted
                  "
                                >
                                    20.5937° N, 78.9629° E
                                </p>

                                <p
                                    className="
                    mt-1
                    font-mono
                    text-xs
                    font-semibold
                    text-soft
                  "
                                >
                                    GMT+5:30
                                </p>

                            </div>
                        </div>

                    </div>


                    {/* =================================================
              RIGHT ABOUT TEXT
          ================================================= */}

                    <div
                        className="
              glass-card
              relative
              space-y-3
              overflow-hidden
              p-4
              sm:p-5
              md:space-y-4
              md:p-6
              lg:col-span-2
            "
                    >

                        <div
                            className="
                pointer-events-none
                absolute
                right-[-80px]
                top-[-80px]
                h-[260px]
                w-[260px]
                rounded-full
                bg-blue-500/10
                blur-[100px]
              "
                        />

                        <div
                            className="
                relative
                space-y-3
                sm:space-y-4
              "
                        >

                            {PARAGRAPHS.map((paragraph, i) => (
                                <p
                                    key={i}
                                    className="
                    text-sm
                    leading-relaxed
                    text-soft
                    sm:text-base
                  "
                                >
                                    {paragraph}
                                </p>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          CERTIFICATES SECTION

          Left  = Text
          Right = Sticky Certificate Animation
      ===================================================== */}

            <section
                ref={certificateRef}
                className="
          relative
          h-[350vh]
        "
            >

                <div
                    className="
            sticky
            top-0
            h-screen
            overflow-hidden
          "
                >

                    <div
                        className="
              mx-auto
              grid
              h-full
              w-full
              max-w-6xl
              grid-cols-1
              lg:grid-cols-[0.8fr_1.7fr]
            "
                    >

                        {/* =================================================
    LEFT TEXT SIDE
================================================= */}

                        <div
                            className="
    relative
    z-20
    flex
    items-center
    px-5
    py-10
    sm:px-8
    lg:px-10
  "
                        >
                            <div className="relative max-w-md pl-5 sm:pl-7">

                                {/* Vertical Accent Line */}

                                <div
                                    className="
        absolute
        bottom-0
        left-0
        top-0
        w-px
        bg-gradient-to-b
        from-[var(--theme-accent)]
        via-[var(--theme-border-strong)]
        to-transparent
      "
                                />

                                {/* Small Label */}

                                <div className="flex items-center gap-3">

                                    <span
                                        className="
          h-px
          w-7
          bg-[var(--theme-accent)]
        "
                                    />

                                    <p
                                        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.3em]
          text-[var(--theme-accent)]
        "
                                    >
                                        Professional Recognition
                                    </p>

                                </div>


                                {/* Main Heading */}

                                <h2
                                    className="
        mt-4
        text-4xl
        font-light
        leading-[1]
        tracking-[-0.03em]
        text-white
        sm:text-5xl
        lg:text-[4.2rem]
      "
                                >
                                    Certificates
                                </h2>


                                {/* Accent Heading */}

                                <div
                                    className="
        mt-3
        h-px
        w-16
        bg-[var(--theme-accent)]
        shadow-[0_0_12px_var(--theme-glow)]
      "
                                />


                                {/* Description */}

                                <p
                                    className="
        mt-6
        max-w-[340px]
        text-sm
        leading-7
        text-slate-400
        sm:text-[15px]
      "
                                >
                                    A record of continuous learning, professional
                                    development, and meaningful achievements.
                                </p>


                                {/* Certificate Count */}

                                <div
                                    className="
        mt-8
        flex
        items-center
        gap-4
      "
                                >

                                    <span
                                        className="
          font-mono
          text-2xl
          font-light
          text-white
        "
                                    >
                                        04
                                    </span>

                                    <div>
                                        <p
                                            className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-slate-500
          "
                                        >
                                            Certificates
                                        </p>

                                        <p
                                            className="
            mt-1
            text-[9px]
            uppercase
            tracking-wider
            text-[var(--theme-accent)]
          "
                                        >
                                            Professional Journey
                                        </p>
                                    </div>

                                </div>


                                {/* Bottom Micro Detail */}

                                <div
                                    className="
        mt-10
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
          shadow-[0_0_10px_var(--theme-glow)]
        "
                                    />

                                    <span
                                        className="
          text-[8px]
          uppercase
          tracking-[0.25em]
          text-slate-600
        "
                                    >
                                        Selected Recognition
                                    </span>

                                </div>

                            </div>
                        </div>


                        {/* =================================================
                RIGHT CERTIFICATE SIDE
            ================================================= */}

                        <div
                            className="
                relative
                flex
                items-center
                justify-center
                px-3
                pb-8
                lg:px-6
                lg:py-10
              "
                        >

                            {/* Background Glow */}

                            <div
                                className="
                  pointer-events-none
                  absolute
                  right-[15%]
                  top-1/2
                  h-[420px]
                  w-[420px]
                  -translate-y-1/2
                  rounded-full
                  bg-[var(--theme-glow)]
                  opacity-20
                  blur-[130px]
                "
                            />


                            {/* =================================================
                  CERTIFICATE STACK
              ================================================= */}

                            <div
                                className="
                  relative
                  h-[360px]
                  w-full
                  sm:h-[430px]
                  lg:h-[500px]
                "
                            >

                                {CERTIFICATES.map((certificate, index) => (
                                    <CertificateCard
                                        key={certificate.id}
                                        certificate={certificate}
                                        index={index}
                                        progress={scrollYProgress}
                                    />
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default Cirtificate;
