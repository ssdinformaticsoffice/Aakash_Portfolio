import { useEffect, useRef } from "react";
import { ParticleAnimation } from "./ui/particle-animation-1.tsx";

const STARS = Array.from({ length: 60 }, (_, i) => ({
  left: `${(i * 137) % 100}%`,
  top: `${(i * 89) % 100}%`,
  delay: `${(i % 9) * 0.35}s`,
}));

export default function Particles() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight * 0.4;
    let x = targetX;
    let y = targetY;
    let raf = 0;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.05;
      y += (targetY - y) * 0.05;
      glow.style.transform = `translate3d(${x - 310}px, ${y - 310}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient-particles">
        <ParticleAnimation
          particleCount={260}
          colors={["#2563eb", "#06b6d4", "#14b8a6", "#93c5fd"]}
          animationDuration={[2.5, 6]}
          containerSize="100vw"
          particleWidth="30%"
          particleHeight="1px"
          followCursor
        />
      </div>
      <div ref={glowRef} className="ambient-glow" />
      {STARS.map((s, i) => (
        <span
          key={i}
          className="ambient-star"
          style={{ left: s.left, top: s.top, animationDelay: s.delay }}
        />
      ))}
    </div>
  );
}