import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Palette,
  Check,
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const location = useLocation();
  const { theme, setTheme, themes } = useTheme();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Works", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path, hash = "") => {
    if (hash) {
      return location.pathname === "/" && location.hash === hash;
    }
    return location.pathname === path;
  };

  const handleThemeChange = (themeName) => {
    setTheme(themeName);
    setThemeOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] flex justify-center pt-4 sm:pt-6 px-3 sm:px-4 pointer-events-none">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="
          flex items-center justify-between gap-4 sm:gap-8 px-5 sm:px-8 py-3 sm:py-3.5
          rounded-full border border-white/10 backdrop-blur-3xl 
          transition-all duration-700 pointer-events-auto
          shadow-[0_20px_50px_rgba(0,0,0,0.5)]
          bg-white/[0.04] w-full max-w-6xl
        "
      >
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => {
            closeMenu();
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          }}
          className="text-lg sm:text-xl font-black tracking-tighter group flex items-center gap-2 select-none"
        >
          <span
            className="w-2 h-7 block rounded-full transition-all duration-300 group-hover:h-3.5"
            style={{
              backgroundColor: "var(--theme-accent)",
              boxShadow: "0 0 12px var(--theme-accent)",
            }}
          />
          <span className="text-white tracking-tight">akashverma
            <span
              style={{
                color: "var(--theme-accent)",
              }}
            >
              .com
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.path, link.hash);

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  relative px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300
                  ${active
                    ? "text-white bg-white/10 shadow-inner"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                  }
                `}
                style={{
                  color: active ? "var(--theme-accent)" : undefined,
                }}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="w-px h-5 bg-white/10 mx-2" />

          {/* Theme Switcher */}
          <div className="relative ml-1">
            <button
              type="button"
              onClick={() => setThemeOpen((prev) => !prev)}
              aria-label="Select theme"
              className="p-2.5 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all text-slate-400 hover:text-white flex items-center justify-center"
            >
              <Palette
                size={15}
                style={{
                  color: "var(--theme-accent)",
                }}
              />
            </button>

            <AnimatePresence>
              {themeOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="
                    absolute right-0 top-14 w-48 border border-white/10
                    p-2 rounded-2xl backdrop-blur-2xl shadow-2xl
                    bg-[#050814]/95
                  "
                >
                  <p className="px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">
                    Theme Presets
                  </p>

                  {Object.entries(themes).map(([key, item]) => {
                    const active = theme === key;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleThemeChange(key)}
                        className={`
                          flex w-full items-center gap-3 px-3 py-2 rounded-xl text-left transition-all duration-200
                          ${active ? "bg-white/10" : "hover:bg-white/5"}
                        `}
                      >
                        <span
                          className="h-3.5 w-3.5 shrink-0 rounded-full border border-white/20"
                          style={{
                            backgroundColor: item.accent,
                            boxShadow: active ? `0 0 10px ${item.accent}` : "none",
                          }}
                        />

                        <span
                          className="flex-1 text-[10px] font-bold uppercase tracking-wider"
                          style={{
                            color: active ? item.accent : "#94a3b8",
                          }}
                        >
                          {item.name}
                        </span>

                        {active && (
                          <Check
                            size={13}
                            style={{
                              color: item.accent,
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setThemeOpen((prev) => !prev)}
            className="p-2 rounded-full border border-white/10 text-slate-300"
            aria-label="Theme"
          >
            <Palette
              size={15}
              style={{
                color: "var(--theme-accent)",
              }}
            />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 text-white"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.25 }}
            className="
              fixed top-20 inset-x-4 max-w-lg mx-auto pointer-events-auto
              rounded-3xl border border-white/10 bg-[#050816]/95 backdrop-blur-3xl
              p-6 shadow-2xl z-50
            "
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path, link.hash);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className={`
                      px-4 py-3 text-sm font-black uppercase tracking-[0.2em] rounded-2xl transition-all
                      ${active
                        ? "bg-white/10 text-[var(--theme-accent)]"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="h-px bg-white/10 my-2" />

              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500 px-4">
                Themes
              </p>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {Object.entries(themes).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleThemeChange(key)}
                    className="flex items-center gap-2 p-2.5 rounded-xl border border-white/5 bg-white/[0.02]"
                  >
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.accent }}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;