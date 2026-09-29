import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

/* =========================================================
   CERTIFICATES DATA
========================================================= */

const CERTIFICATES = [
  {
    id: 1,
    year: "2026",
    title: "DevOps Developer Internship Certificate",
    image: "/images/skillmanthan.jpeg",
  },
  {
    id: 2,
    year: "2024",
    title: "Completed Python Certificate",
    image: "/images/digicoder.jpeg",
  },
  {
    id: 3,
    year: "2023",
    title: "Completed Python Certificate",
    image: "/images/ceryigificate1.jpg",
  },
];

/* =========================================================
   ANIMATION SETTINGS
========================================================= */

/*
  Har certificate ke segment me:
  
  0%  - waiting (invisible, screen ke bahar)
  30% - still waiting
  100% - completely in front
  
  Isse next certificate tabhi aayega jab current
  certificate poori tarah se settle ho chuka hoga.
*/

const HOLD_END = 0.3;

/*
  Image load hone se pehle fallback ratio (4:3),
  taaki layout load ke dauraan bhi sahi rahe.
*/

const DEFAULT_RATIO = 1446 / 1087;

/* =========================================================
   CERTIFICATE CARD
========================================================= */

function CertificateCard({
  certificate,
  index,
  progress,
  isActive,
}) {
  const total = CERTIFICATES.length;

  /*
    Har certificate ko equal scroll segment milega.
  */

  const start = index / total;
  const end = (index + 1) / total;

  /* =======================================================
     LOCAL TRAVEL PROGRESS
  ======================================================= */

  const travel = useTransform(progress, (value) => {
    if (index === 0) {
      return 1;
    }

    if (value <= start) {
      return 0;
    }

    if (value >= end) {
      return 1;
    }

    return (value - start) / (end - start);
  });

  /* =======================================================
     CERTIFICATE POSITION

     First:
     - below screen/stack

     Then:
     - hold

     Then:
     - smoothly comes to 0
  ======================================================= */

  const ySlide = useTransform(
    travel,
    [0, HOLD_END, 1],
    ["112%", "112%", "0%"]
  );

  /* =======================================================
     OPACITY

     Hold ke dauraan card invisible rehta hai,
     sirf slide start hone par hi dikhta hai.
     Isse next certificate pehle se dikhai nahi deta.
  ======================================================= */

  const opacitySlide = useTransform(
    travel,
    [HOLD_END, HOLD_END + 0.08, 1],
    [0, 1, 1],
    {
      clamp: true,
    }
  );

  /*
    First certificate always visible.
  */

  const y = index === 0 ? 0 : ySlide;

  const opacity =
    index === 0 ? 1 : opacitySlide;

  /* =======================================================
     IMAGE STATE

     Image load hone tak placeholder,
     load hone ke baad sirf clean frame.

     Image ka asli aspect ratio bhi store hota hai,
     taaki image box certificate ke exactly
     utna hi bada ho (koi khaali letterbox gap nahi).
  ======================================================= */

  const [imageStatus, setImageStatus] =
    useState("loading");

  const [imageRatio, setImageRatio] =
    useState(DEFAULT_RATIO);

  return (
    <motion.div
      style={{
        y,
        opacity,
        zIndex: isActive
          ? 100 + index
          : index,
      }}
      className="
        pointer-events-none
        absolute
        inset-0
        flex
        items-center
        justify-center
        px-0
        sm:px-4
      "
    >
      {/* =================================================
          CERTIFICATE CARD

          Card apne content ke hisaab se shrink hota hai
          aur available space me centered rehta hai,
          isliye year/title hamesha certificate ke
          bilkul neeche hi lagte hain.
      ================================================= */}

      <div
        style={{
          "--info-h": "4rem",
          "--cert-ratio": imageRatio,
          maxWidth:
            "calc((100cqh - var(--info-h)) * var(--cert-ratio))",
        }}
        className={`
          flex
          max-h-full
          w-full
          max-w-[720px]
          flex-col
          overflow-hidden
          rounded-xl
          border
          border-white/[0.08]
          bg-[#08111f]
          shadow-[0_25px_70px_rgba(0,0,0,0.45)]
          sm:rounded-2xl
          sm:[--info-h:5rem]
          ${
            isActive
              ? "pointer-events-auto"
              : ""
          }
        `}
      >
        {/* =================================================
            CERTIFICATE IMAGE

            aspect-ratio + card ka cqh based max-width =>
            image box poori tarah image ke hisaab se
            tight rehta hai, chahe screen choti ho ya badi.
        ================================================= */}

        <div
          style={{
            aspectRatio:
              "var(--cert-ratio)",
          }}
          className="
            relative
            w-full
            shrink-0
            overflow-hidden
            bg-[#0b1626]
          "
        >
          {/* Background Gradient */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#101d31]
              via-[#0b1626]
              to-[#050b16]
            "
          />

          {/* Actual Certificate */}

          {imageStatus !== "error" && (
            <img
              src={certificate.image}
              alt={certificate.title}
              className="
                absolute
                inset-0
                z-10
                h-full
                w-full
                object-contain
              "
              onLoad={(event) => {
                const { naturalWidth, naturalHeight } =
                  event.currentTarget;

                if (naturalWidth && naturalHeight) {
                  setImageRatio(
                    naturalWidth / naturalHeight
                  );
                }

                setImageStatus("loaded");
              }}
              onError={() =>
                setImageStatus("error")
              }
            />
          )}

          {/* Placeholder (jab tak image load na ho) */}

          {imageStatus !== "loaded" && (
            <div
              className="
                absolute
                inset-0
                z-20
                flex
                flex-col
                items-center
                justify-center
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--theme-border-strong)]
                  bg-[var(--theme-soft)]
                  text-lg
                  text-[var(--theme-accent)]
                  sm:h-14
                  sm:w-14
                  sm:text-2xl
                "
              >
                ✦
              </div>

              <p
                className="
                  mt-3
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[var(--theme-accent)]
                  sm:text-[10px]
                "
              >
                Certificate
              </p>
            </div>
          )}

          {/* Image Overlay */}

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

            Title left, year right.
        ================================================= */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            gap-3
            border-t
            border-white/[0.06]
            px-4
            py-2.5
            sm:gap-4
            sm:px-5
            sm:py-3.5
          "
        >
          {/* Title (left) */}

          <div className="min-w-0 flex-1">
            <h3
              className="
                m-0
                min-w-0
                text-sm
                font-semibold
                leading-5
                text-white
                sm:text-base
              "
            >
              {certificate.title}
            </h3>

            {/* Issuer */}

            {certificate.issuer && (
              <p
                className="
                  mt-1
                  mb-0
                  text-xs
                  text-slate-500
                "
              >
                {certificate.issuer}
              </p>
            )}
          </div>

          {/* Year + Number (right) */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-2
              sm:gap-3
            "
          >
            {/* Certificate Number */}

            <span
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
              {String(certificate.id).padStart(
                2,
                "0"
              )}
            </span>

            {/* Year */}

            <p
              className="
                m-0
                shrink-0
                text-right
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[var(--theme-accent)]
                sm:text-[11px]
              "
            >
              {certificate.year}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   CERTIFICATE PAGE
========================================================= */

function Cirtificate() {
  const certificateRef = useRef(null);

  const {
    scrollYProgress,
  } = useScroll({
    target: certificateRef,
    offset: [
      "start start",
      "end end",
    ],
  });

  const total = CERTIFICATES.length;

  const [activeIndex, setActiveIndex] =
    useState(0);

  /* =======================================================
     ACTIVE CERTIFICATE
  ======================================================= */

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (value) => {
      /*
        Active tabhi switch hota hai jab next card
        actually slide start karta hai.
      */

      const nextIndex = Math.min(
        total - 1,
        Math.max(
          0,
          Math.floor(
            value * total - HOLD_END
          )
        )
      );

      setActiveIndex((current) =>
        current === nextIndex
          ? current
          : nextIndex
      );
    }
  );

  return (
    <>
      {/* =====================================================
          CERTIFICATES SECTION
      ===================================================== */}

      <section
        ref={certificateRef}
        className="
          relative
          h-[320vh]
          sm:h-[350vh]
        "
      >
        {/* ===================================================
            STICKY VIEWPORT
        =================================================== */}

        <div
          className="
            sticky
            top-0
            h-svh
            overflow-hidden
          "
        >
          {/* =================================================
              MAIN CONTAINER
          ================================================= */}

          <div
            className="
              mx-auto
              flex
              h-full
              w-full
              max-w-6xl
              flex-col
              lg:grid
              lg:grid-cols-[0.8fr_1.7fr]
              [@media(min-width:640px)_and_(max-height:600px)]:grid
              [@media(min-width:640px)_and_(max-height:600px)]:grid-cols-[0.8fr_1.7fr]
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
                shrink-0
                items-center
                px-5
                py-4
                sm:px-8
                sm:py-8
                lg:px-10
                lg:py-10
              "
            >
              <div
                className="
                  relative
                  max-w-md
                  pl-4
                  sm:pl-7
                "
              >
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

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    sm:gap-3
                  "
                >
                  <span
                    className="
                      h-px
                      w-7
                      bg-[var(--theme-accent)]
                    "
                  />

                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[var(--theme-accent)]
                      sm:text-[9px]
                      sm:tracking-[0.3em]
                    "
                  >
                    Professional Recognition
                  </p>
                </div>

                {/* Main Heading */}

                <h2
                  className="
                    mt-2
                    text-[26px]
                    font-light
                    leading-[1]
                    tracking-[-0.03em]
                    text-[var(--fg)]
                    sm:mt-4
                    sm:text-5xl
                    lg:text-[4.2rem]
                  "
                >
                  Certificates
                </h2>

                {/* Accent Line */}

                <div
                  className="
                    mt-2
                    h-px
                    w-16
                    bg-[var(--theme-accent)]
                    shadow-[0_0_12px_var(--theme-glow)]
                    sm:mt-3
                  "
                />

                {/* Description */}

                <p
                  className="
                    mt-3
                    max-w-[340px]
                    text-[11px]
                    leading-5
                    text-[var(--mut)]
                    sm:mt-6
                    sm:text-[15px]
                    sm:leading-7
                  "
                >
                  A record of continuous
                  learning, professional
                  development, and meaningful
                  achievements.
                </p>

                {/* Certificate Count */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-4
                    sm:mt-8
                  "
                >
                  <span
                    className="
                      font-mono
                      text-xl
                      font-light
                      text-[var(--fg)]
                      sm:text-2xl
                    "
                  >
                    {String(total).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <div>
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[var(--mut-2)]
                        sm:text-[9px]
                      "
                    >
                      Certificates
                    </p>

                    <p
                      className="
                        mt-1
                        text-[8px]
                        uppercase
                        tracking-wider
                        text-[var(--theme-accent)]
                        sm:text-[9px]
                      "
                    >
                      Professional Journey
                    </p>
                  </div>
                </div>

                {/* Bottom Micro Detail */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    sm:mt-10
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
                      text-[7px]
                      uppercase
                      tracking-[0.2em]
                      text-[var(--mut-2)]
                      sm:text-[8px]
                      sm:tracking-[0.25em]
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
                min-h-0
                flex-1
                flex-col
                items-center
                justify-center
                px-1
                py-2
                sm:px-4
                sm:py-6
                lg:flex-none
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
                  h-[300px]
                  w-[300px]
                  -translate-y-1/2
                  rounded-full
                  bg-[var(--theme-glow)]
                  opacity-20
                  blur-[100px]
                  sm:h-[420px]
                  sm:w-[420px]
                  sm:blur-[130px]
                "
              />

              {/* =================================================
                  CERTIFICATE STACK

                  [container-type:size] => stack ki height
                  container unit (cqh) me available hoti hai,
                  jisse card apni height se match karke
                  image ko kabhi overflow nahi karata.

                  overflow-hidden => agla certificate
                  purane ke bahar se aakar nahi dikhega.
              ================================================= */}

              <div
                className="
                  relative
                  mx-auto
                  min-h-0
                  w-full
                  max-w-[720px]
                  max-h-[440px]
                  flex-1
                  overflow-hidden
                  [container-type:size]
                  sm:max-h-[480px]
                  lg:max-h-[560px]
                "
              >
                {CERTIFICATES.map(
                  (certificate, index) => (
                    <CertificateCard
                      key={certificate.id}
                      certificate={certificate}
                      index={index}
                      progress={
                        scrollYProgress
                      }
                      isActive={
                        activeIndex === index
                      }
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cirtificate;