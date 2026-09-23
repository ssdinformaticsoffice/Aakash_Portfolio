import React, { useEffect, useRef } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let animationFrame;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      if (
        target.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-pointer"
        )
      ) {
        ring.classList.add("cursor-hover");
        dot.classList.add("cursor-dot-hover");
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;

      if (
        target.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-pointer"
        )
      ) {
        ring.classList.remove("cursor-hover");
        dot.classList.remove("cursor-dot-hover");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        aria-hidden="true"
      />

      <div
        ref={ringRef}
        className="custom-cursor-ring"
        aria-hidden="true"
      />
    </>
  );
}

export default CustomCursor;