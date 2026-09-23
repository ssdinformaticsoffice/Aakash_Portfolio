import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const hexToRgb = (hex) => {
  const value = hex.replace("#", "");
  const normalized = value.length === 3
    ? value.split("").map((character) => character + character).join("")
    : value;

  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  };
};

function ScrollShader() {
  const canvasRef = useRef(null);
  const { theme, themes } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const color = hexToRgb(themes[theme]?.accent || themes.cyan.accent);
    const streams = Array.from({ length: 28 }, (_, index) => ({
      offset: (index / 28) * Math.PI * 2,
      depth: 0.35 + Math.random() * 0.65,
      width: 0.5 + Math.random() * 1.8,
    }));

    let width = 0;
    let height = 0;
    let direction = 1;
    let scrollEnergy = 0;
    let hasScrolled = false;
    let lastScrollY = window.scrollY;
    let frameId;
    let lastFrame = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (Math.abs(delta) > 0.5) {
        hasScrolled = true;
        direction = delta > 0 ? 1 : -1;
        scrollEnergy = Math.min(1, scrollEnergy + Math.min(Math.abs(delta) / 80, 0.28));
      }

      lastScrollY = currentScrollY;
    };

    const render = (now) => {
      const elapsed = Math.min((now - lastFrame) / 1000, 0.05);
      lastFrame = now;
      scrollEnergy = Math.max(0, scrollEnergy - elapsed * 0.7);

      context.clearRect(0, 0, width, height);
      if (!hasScrolled) {
        frameId = requestAnimationFrame(render);
        return;
      }

      context.globalCompositeOperation = "screen";

      streams.forEach((stream, index) => {
        const wave = now * 0.00035 * direction * (0.6 + stream.depth);
        const origin = (index / streams.length) * width;
        const energy = 0.3 + scrollEnergy * 1.5;
        const alpha = (0.025 + stream.depth * 0.045) * energy;

        context.beginPath();
        for (let y = -40; y <= height + 40; y += 22) {
          const x = origin
            + Math.sin(y * 0.009 + wave + stream.offset) * (22 + stream.depth * 44)
            + Math.cos(y * 0.003 - wave * 0.7) * 16;
          if (y === -40) context.moveTo(x, y);
          else context.lineTo(x, y);
        }

        context.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
        context.lineWidth = stream.width + scrollEnergy * 1.5;
        context.stroke();
      });

      context.globalCompositeOperation = "source-over";
      frameId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, [theme, themes]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-15 opacity-75 mix-blend-screen"
    />
  );
}

export default ScrollShader;