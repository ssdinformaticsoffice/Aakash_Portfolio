import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);

export const themes = {
  cyan: {
    name: "Cyber Cyan",
    accent: "#00f0ff",
    accentDark: "#0284c7",
    glow: "rgba(0, 240, 255, 0.35)",
    soft: "rgba(0, 240, 255, 0.1)",
    borderStrong: "rgba(0, 240, 255, 0.4)",
  },
  violet: {
    name: "Neon Violet",
    accent: "#8b5cf6",
    accentDark: "#7c3aed",
    glow: "rgba(139, 92, 246, 0.35)",
    soft: "rgba(139, 92, 246, 0.1)",
    borderStrong: "rgba(139, 92, 246, 0.4)",
  },
  emerald: {
    name: "Emerald",
    accent: "#10b981",
    accentDark: "#059669",
    glow: "rgba(16, 185, 129, 0.35)",
    soft: "rgba(16, 185, 129, 0.1)",
    borderStrong: "rgba(16, 185, 129, 0.4)",
  },
  crimson: {
    name: "Crimson",
    accent: "#ff1f3d",
    accentDark: "#d9102f",
    glow: "rgba(255, 31, 61, 0.35)",
    soft: "rgba(255, 31, 61, 0.1)",
    borderStrong: "rgba(255, 31, 61, 0.4)",
  },
  amber: {
    name: "Amber",
    accent: "#f59e0b",
    accentDark: "#d97706",
    glow: "rgba(245, 158, 11, 0.35)",
    soft: "rgba(245, 158, 11, 0.1)",
    borderStrong: "rgba(245, 158, 11, 0.4)",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "cyan";
  });

  useEffect(() => {
    const selectedTheme = themes[theme] || themes.cyan;

    const root = document.documentElement;

    root.style.setProperty("--theme-accent", selectedTheme.accent);
    root.style.setProperty("--theme-accent-dark", selectedTheme.accentDark);
    root.style.setProperty("--theme-glow", selectedTheme.glow);
    root.style.setProperty("--theme-soft", selectedTheme.soft);
    root.style.setProperty("--theme-border-strong", selectedTheme.borderStrong);

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};