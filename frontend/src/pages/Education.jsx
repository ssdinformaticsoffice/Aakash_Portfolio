import { useState } from "react";
import LogoMarquee from "./LogoMarquee.jsx";

const educationData = [
  {
    year: "2024 - 2026",
    title: "Master of Computer Applications",
    college: "Maharishi University of Information Technology, Lucknow",
    image: "/images/muilt.png",
    fallback: "MUIT · Lucknow",
  },
  {
    year: "2021 - 2024",
    title: "Bachelor of Computer Applications",
    college: "Tula's Institute, Dehradun",
    image: "/images/tulas.png",
    fallback: "Tula's Institute · Dehradun",
  },
];

const PARAGRAPHS = [
  "I’m Akash Verma, CEO of SSD Informatics, with a strong interest in technology, innovation, and purposeful business growth. I believe great ideas become meaningful when they are supported by clear vision, strategic thinking, and consistent execution.",
  "My focus is on building technology-driven solutions, encouraging innovation, and creating an environment where people and ideas can grow together. I approach leadership with curiosity, responsibility, and a long-term perspective.",
  "For me, leadership is not just about building a business — it is about creating direction, solving meaningful problems, and continuously moving forward.",
];

const PASSION =
  "I bring together technology, strategic thinking, and purposeful leadership to turn ideas into meaningful solutions. I’m passionate about exploring emerging technologies, driving innovation, and building collaborative environments where people, ideas, and businesses can grow together."
function Education() {
  const [activeEducation, setActiveEducation] = useState(null);

  return (
    <>
      {/* --------------------------------------------------------------About----------------------------------------------------------- */}

      <section className="mx-auto w-full max-w-6xl px-3 py-10 sm:px-4 md:px-8 md:py-14">
        <div className="grid grid-cols-1 gap-2 sm:gap-2.5 lg:grid-cols-3 lg:gap-3">
          {/* ==================== LEFT COLUMN ==================== */}
          <div className="space-y-2 sm:space-y-2.5 lg:space-y-3">
            <div className="glass-card flex flex-col items-center justify-center p-4 sm:p-5">
              <h2 className="text-2xl font-light tracking-tight sm:text-3xl md:text-4xl">
                About Me
              </h2>
            </div>

            <div className="glass-card relative h-40 overflow-hidden sm:h-48 md:h-52 lg:h-48">
              <div className="map-pattern absolute inset-0 opacity-60" />
              <div className="map-shade absolute inset-0 opacity-80" />

              <div className="map-scan-line absolute bottom-0 top-0 w-px bg-blue-400/70 shadow-[0_0_10px_#008cff]" />

              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl font-bold tracking-wide">INDIA</h3>
                <p className="font-mono text-xs tracking-[0.08em] muted">
                  20.5937° N, 78.9629° E
                </p>
                <p className="mt-1 font-mono text-xs font-semibold text-soft">
                  GMT+5:30
                </p>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT TEXT CARD ==================== */}
          <div className="glass-card relative space-y-3 overflow-hidden p-4 sm:p-5 md:space-y-4 md:p-6 lg:col-span-2">
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="relative space-y-3 sm:space-y-4">
              {PARAGRAPHS.map((paragraph, i) => (
                <p key={i} className="text-sm text-soft leading-relaxed sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  -------------------------------------------------------Education--------------------------------------------------------- */}

      <section id="education" className="mx-auto w-full max-w-6xl px-3 pb-2 sm:px-4 md:px-8 lg:pb-6">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ==================== EDUCATION TIMELINE ==================== */}
          <div>
            <h2 className="mb-6 text-2xl font-light tracking-tight sm:mb-8 sm:text-3xl md:text-4xl">
              Education & Journey
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {educationData.map((education, index) => (
                <div
                  key={education.year}
                  className="timeline-item group relative cursor-pointer pl-6 pb-4 sm:pl-8"
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") {
                      setActiveEducation(index);
                    }
                  }}
                  onPointerLeave={(event) => {
                    if (event.pointerType === "mouse") {
                      setActiveEducation(null);
                    }
                  }}
                  onClick={() =>
                    setActiveEducation((current) =>
                      current === index ? null : index,
                    )
                  }
                >
                  <span className="absolute -left-[5px] top-0 h-[9px] w-[9px] rounded-full bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.6)]" />

                  <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest muted sm:text-sm">
                    {education.year}
                  </p>

                  <h3 className="text-lg font-light leading-snug sm:text-xl md:text-2xl">
                    {education.title}
                  </h3>

                  <p className="mt-1 text-sm muted sm:text-base">
                    {education.college}
                  </p>

                  <div
                    className={`mt-4 overflow-hidden rounded-lg transition-all duration-500 ${activeEducation === index
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="relative h-32 w-full sm:h-40">
                      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#0b1220] to-[#0a0a18] text-xs muted">
                        {education.fallback}
                      </div>
                      <img
                        src={education.image}
                        alt={education.college}
                        className="absolute inset-0 h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== SKILLS & EXPERTISE ==================== */}
          <div>
            <h2 className="mb-6 text-2xl font-light tracking-tight sm:mb-8 sm:text-3xl md:text-4xl">
              Skills & Expertise
            </h2>

            <div className="glass-card mb-6 flex min-h-[100px] items-center justify-center rounded-xl p-3 sm:min-h-[120px] sm:p-4">
              <LogoMarquee />
            </div>

            <div className="glass-card rounded-xl p-4 sm:p-5">
              <div className="flex items-start gap-4">
                <span className="accent-dot mt-2 h-2.5 w-2.5 shrink-0 rounded-full" />
                <p className="text-sm text-soft leading-relaxed sm:text-base">
                  {PASSION}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Education;