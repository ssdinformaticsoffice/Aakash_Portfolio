import { useEffect } from "react";
import { motion } from "framer-motion";

const NAME = "Akash Verma";

export default function LoadingScreen({ onDone }) {
  const word = NAME.toUpperCase();

  useEffect(() => {
    const t = setTimeout(onDone, 2600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div style={{ position: "relative" }}>
        <motion.svg
          viewBox="0 0 600 120"
          width="min(78vw, 600px)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fill="#050505"
            stroke="#3B82F6"
            strokeWidth={2}
            paintOrder="stroke"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 72,
              letterSpacing: "-0.02em",
            }}
            initial={{ strokeDasharray: 800, strokeDashoffset: 800, opacity: 0 }}
            animate={{ strokeDashoffset: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.text>
        </motion.svg>
        <motion.div
          className="loading-bar"
          style={{ transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}