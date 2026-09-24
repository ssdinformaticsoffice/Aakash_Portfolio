const PARAGRAPHS = [
  "I’m Akash Verma, CEO of SSD Informatics, with a strong interest in technology, innovation, and purposeful business growth. I believe great ideas become meaningful when they are supported by clear vision, strategic thinking, and consistent execution.",
  "My focus is on building technology-driven solutions, encouraging innovation, and creating an environment where people and ideas can grow together. I approach leadership with curiosity, responsibility, and a long-term perspective.",
  "For me, leadership is not just about building a business — it is about creating direction, solving meaningful problems, and continuously moving forward.",
];

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-3 py-10 sm:px-4 md:px-8 md:py-14">
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

            <div className="absolute bottom-0 left-1/2 top-0 w-px bg-blue-400/70 shadow-[0_0_10px_#008cff]" />

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
  );
}

export default About;