import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let visible = true;
    let raf = 0;

    document.body.classList.add("custom-cursor");

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dot) dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      const t = e.target;
      const interactive = !!(t && t.closest && t.closest("a, button, [role='button'], input, textarea, select"));
      if (ring) ring.classList.toggle("is-hover", interactive);
    };

    const onLeave = () => {
      visible = false;
      if (!visible) {
        if (ring) ring.style.opacity = "0";
        if (dot) dot.style.opacity = "0";
      }
    };

    const onEnter = () => {
      visible = true;
      if (ring) ring.style.opacity = "1";
      if (dot) dot.style.opacity = "1";
    };

    const tick = () => {
      if (visible) {
        rx += (x - rx) * 0.14;
        ry += (y - ry) * 0.14;
        if (ring) ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 1 }} />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 1 }} />
    </>
  );
}