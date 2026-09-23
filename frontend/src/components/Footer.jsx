import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Cpu,
  Terminal,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { motion } from "motion/react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative pt-24 pb-12 border-t border-white/5 bg-transparent overflow-hidden">
      {/* Background glow matching moaarif.in */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] blur-[120px] rounded-full pointer-events-none"
        style={{
          backgroundColor: "var(--theme-soft)",
        }}
      />

      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16 mb-20 items-start">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div>
              <Link
                to="/"
                onClick={scrollToTop}
                className="text-2xl font-black tracking-tighter group flex items-center gap-2 select-none"
              >
                <span
                  className="w-2 h-8 block rounded-full"
                  style={{
                    backgroundColor: "var(--theme-accent)",
                    boxShadow: "0 0 14px var(--theme-accent)",
                  }}
                />

                <span className="uppercase text-white">
                  AKASH VERMA
                </span>

                {/* <span style={{ color: "var(--theme-accent)" }}>
                  .com
                </span> */}
              </Link>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Leading with vision, technology, and purpose. Building meaningful
              direction for people, business, and long-term growth through
              thoughtful leadership.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3.5 bg-white/5 border border-white/5 rounded-full text-slate-400 hover:text-white hover:border-white/20 transition-all hover:scale-110"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3.5 bg-white/5 border border-white/5 rounded-full text-slate-400 hover:text-white hover:border-white/20 transition-all hover:scale-110"
              >
                <FaLinkedinIn size={17} />
              </a>

              <Link
                to="/contact"
                aria-label="Contact Akash Verma"
                className="p-3.5 bg-white/5 border border-white/5 rounded-full text-slate-400 hover:text-white hover:border-white/20 transition-all hover:scale-110"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>

          {/* Neural Paths */}
          <div className="space-y-6">
            <h3
              className="text-[10px] font-black uppercase tracking-[0.3em]"
              style={{ color: "var(--theme-accent)" }}
            >
              Neural Paths
            </h3>

            <nav className="flex flex-col gap-3.5 font-bold uppercase tracking-widest text-[11px]">
              <Link
                to="/about"
                className="text-slate-400 hover:text-white hover:pl-2 transition-all"
              >
                About Me
              </Link>
              <Link
                to="/projects"
                className="text-slate-400 hover:text-white hover:pl-2 transition-all"
              >
                Works
              </Link>
              <Link
                to="/experience"
                className="text-slate-400 hover:text-white hover:pl-2 transition-all"
              >
                Experience Archiv
              </Link>
              <Link
                to="/contact"
                className="text-slate-400 hover:text-white hover:pl-2 transition-all"
              >
                Communication
              </Link>
            </nav>
          </div>

          {/* System Status (moaarif.in style) */}
          <div className="space-y-6">
            <h3
              className="text-[10px] font-black uppercase tracking-[0.3em]"
              style={{ color: "var(--theme-accent)" }}
            >
              Executive Profile
            </h3>

            <div className="space-y-4 font-bold uppercase tracking-widest text-[10px] text-slate-400">
              <div className="flex items-center gap-3">
                <Globe
                  size={14}
                  style={{ color: "var(--theme-accent)" }}
                />
                <span>BASE: LUCKNOW, INDIA</span>
              </div>

              <div className="flex items-center gap-3">
                <Cpu
                  size={14}
                  style={{ color: "var(--theme-accent)" }}
                />
                <span>FOCUS: TECHNOLOGY & BUSINESS</span>
              </div>

              <div className="flex items-center gap-3">
                <Terminal
                  size={14}
                  style={{ color: "var(--theme-accent)" }}
                />
                <span>ROLE: CHIEF EXECUTIVE OFFICER</span>
              </div>

              <div
                className="mt-6 p-3.5 rounded-xl border"
                style={{
                  backgroundColor: "var(--theme-soft)",
                  borderColor: "var(--theme-border-strong)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: "var(--theme-accent)" }}
                  />

                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: "var(--theme-accent)" }}
                  >
                    Leading with Vision & Purpose
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            © 2026 Akash Verma. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <span className="hidden sm:inline">
              Built with React & Framer Motion
            </span>

            <div className="flex items-center gap-2">
              <span>Ping: 14ms</span>
              <div
                className="w-1 h-3 rounded-full"
                style={{ backgroundColor: "var(--theme-accent)" }}
              />
              <div
                className="w-1 h-2 rounded-full"
                style={{ backgroundColor: "var(--theme-accent)", opacity: 0.6 }}
              />
              <div
                className="w-1 h-4 rounded-full"
                style={{ backgroundColor: "var(--theme-accent)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;