import { useState } from "react";
import LogoMarquee from "./LogoMarquee.jsx";

const educationData = [
  {
    year: "2022 - 2026",
    title: "Bachelor of Technology in Computer Science and Engineering",
    college: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
    image: "/images/aktu.jpg",
    fallback: "AKTU · Lucknow",
  },
  {
    year: "2009 - 2022",
    title: "Highschool and Junior College",
    college: "St. Joseph's College, Allahabad",
    image: "/images/school.jpg",
    fallback: "SJC · Allahabad",
  },
];

const PASSION =
  "I am deeply passionate about collaborative innovation, always eager to participate in high stakes hackathons and contribute to the global open source community.";

function Education() {
  const [activeEducation, setActiveEducation] = useState(null);

  return (
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
                onMouseEnter={() => setActiveEducation(index)}
                onMouseLeave={() => setActiveEducation(null)}
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
                  className={`mt-4 overflow-hidden rounded-lg transition-all duration-500 ${
                    activeEducation === index
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
  );
}

export default Education;