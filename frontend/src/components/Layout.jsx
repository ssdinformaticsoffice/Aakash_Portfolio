import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import LoadingScreen from "./LoadingScreen.jsx";
import Particles from "./Particles.jsx";
import Cursor from "./Cursor.jsx";

export default function Layout() {
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "#000000" : "#f5f5f5";
  }, [dark]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className={dark ? "shell" : "shell light"}>
      <Particles />
      <Cursor />

      <div className="shell-inner">
        <Navbar dark={dark} toggleTheme={() => setDark((d) => !d)} />

        <motion.main
          key={pathname}
          className="page-main"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="wrap">
            <Outlet />
          </div>
        </motion.main>

        <Footer />
      </div>

      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>
    </div>
  );
}