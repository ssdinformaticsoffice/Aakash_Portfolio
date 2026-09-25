import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Menu, Moon, Sun } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, } from "react-icons/fa";


export const NAV = [
  { path: "/", label: "Home"},
  { path: "/About", label: "About" },
  { path: "/contact", label: "Contact" },
];

const NAME = "Akash Verma";
const first = NAME[0];
const rest = NAME.slice(1);

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akashverma7054",
    Icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/akashverma7054",
    Icon: FaGithub,
  },
  {
    label: "Insta",
    href: "https://www.instagram.com/a.kash.verma_?stkn=OWhzYXk4OHY0YnJu",
    Icon: FaInstagram,
  },
];

function linkSel({ isActive }) {
  return `nav-link ${isActive ? "active" : ""}`;
}

export default function Navbar({ dark, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="nav-holder"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <div className="nav">
          <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
            <span className="big">{first}</span>
            <span className="whitespace-nowrap">{rest}</span>
          </NavLink>

          <div className="nav-links">
            {NAV.map((n) => (
              <NavLink key={n.path} to={n.path} end={n.path === "/"} className={linkSel}>
                {({ isActive }) => (
                  <>
                    {n.icon && <n.icon size={15} />}
                    <span style={{ marginLeft: n.icon ? 6 : 0 }}>{n.label}</span>
                    {isActive && <motion.span layoutId="nav-dot" className="nav-dot" />}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="nav-actions">
            <div className="nav-socials">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-social-link"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={15} className="text-sky-600" />
                </a>
              ))}
            </div>

            <button className="icon-btn nav-theme-toggle" onClick={toggleTheme} title="Toggle dark mode" aria-label="Toggle dark mode">
              {dark ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button className="icon-btn nav-hamburger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              <Menu size={16} />
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
          >
            {NAV.map((n) => (
              <NavLink
                key={n.path}
                to={n.path}
                end={n.path === "/"}
                className={linkSel}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}