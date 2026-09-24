import React, { useEffect, useState } from "react";

type ParticleAnimationProps = {
  gridSize?: number;
  containerSize?: string;
  particleCount?: number;
  colors?: string[];
  animationDuration?: [number, number];
  perspective?: string;
  particleWidth?: string;
  particleHeight?: string;
  followCursor?: boolean;
};

type Particle = {
  id: number;
  duration: number;
  delay: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  color: string;
  transparentStop: number;
  left: number;
  top: number;
  size: number;
  driftX: number;
  driftY: number;
};

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export function ParticleAnimation({
  containerSize = "40vmin",
  particleCount = 500,
  colors = ["#00b8a9", "#f8f3d4", "#f6416c", "#ffde7d"],
  animationDuration = [1, 2],
  perspective = "10vmin",
  particleWidth = "40%",
  particleHeight = "1px",
  followCursor = false,
}: ParticleAnimationProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, id) => ({
      id,
      duration: random(animationDuration[0], animationDuration[1]),
      delay: -random(0.1, 2),
      rotateX: random(-180, 180),
      rotateY: random(-180, 180),
      rotateZ: random(-180, 180),
      color: colors[Math.floor(Math.random() * colors.length)],
      transparentStop: random(50, 100),
      left: random(0, 100),
      top: random(0, 100),
      size: random(1, 3.5),
      driftX: random(-35, 35),
      driftY: random(-35, 35),
    }));

    setParticles(newParticles);
  }, [animationDuration, colors, particleCount]);

  useEffect(() => {
    if (!followCursor) return undefined;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.055;
      currentY += (targetY - currentY) * 0.055;
      setCursorPosition({
        x: (currentX / window.innerWidth) * 100,
        y: (currentY / window.innerHeight) * 100,
      });
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(frame);
    };
  }, [followCursor]);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      style={{ perspective }}
      aria-hidden="true"
    >
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          width: followCursor ? "100vw" : containerSize,
          height: followCursor ? "100vh" : containerSize,
        }}
      >
        <div
          className="pointer-events-none absolute h-[42vmin] w-[42vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: `${cursorPosition.x}%`,
            top: `${cursorPosition.y}%`,
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.2), rgba(37, 99, 235, 0.08) 34%, transparent 70%)",
            filter: "blur(12px)",
            transition: "left 120ms ease-out, top 120ms ease-out",
          }}
        />
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
              willChange: "transform, opacity",
              animation: `particle-float-${particle.id} ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        ${particles
          .map(
            (particle) => `
          @keyframes particle-float-${particle.id} {
            0% {
              transform: translate3d(0, 0, 0) scale(0.65);
              opacity: 0.15;
            }
            50% {
              transform: translate3d(${particle.driftX}px, ${particle.driftY}px, 0) scale(1.35);
              opacity: 0.8;
            }
            100% {
              transform: translate3d(0, 0, 0) scale(0.65);
              opacity: 0.15;
            }
          }
        `,
          )
          .join("\n")}
      `}</style>
    </div>
  );
}