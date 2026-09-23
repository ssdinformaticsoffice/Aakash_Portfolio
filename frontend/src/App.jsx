import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Technology from "./pages/technology/Technology";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Vision from "./pages/vision/Vision";
import Contact from "./pages/contact/Contact";
import CustomCursor from "./components/CustomCursor";
import ParticleCanvas from "./components/ParticleCanvas";
import ScrollShader from "./components/ScrollShader";

import PageTransition from "./components/PageTransition";
import { AnimatePresence } from "motion/react";

function AppShell() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = location.hash.replace("#", "");

    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    });
  }, [location]);

  return (
    <>
      <CustomCursor />
      <ParticleCanvas />
      <ScrollShader />

      {/* SVG Film Grain Noise Texture (matching moaarif.in) */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient Rotating Cosmic Nebula Orbs (matching moaarif.in) */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030712] pointer-events-none">
        <div
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-40 blur-[75px] animate-spin-nebula"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, #030712 70%)",
          }}
        >
          <div
            className="absolute top-[20%] left-[30%] w-[55vw] h-[55vw] rounded-full opacity-35 blur-[90px] animate-float-nebula"
            style={{ backgroundColor: "var(--theme-accent)" }}
          />
          <div
            className="absolute top-[40%] right-[20%] w-[45vw] h-[45vw] rounded-full bg-violet-600 opacity-30 blur-[90px] animate-float-nebula"
            style={{ animationDelay: "-5s" }}
          />
          <div
            className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-indigo-600 opacity-25 blur-[90px] animate-float-nebula"
            style={{ animationDelay: "-10s" }}
          />
        </div>
      </div>

      <Header />

      <main className="min-h-screen text-white relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/experience"
              element={
                <PageTransition>
                  <Experience />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/technology"
              element={
                <PageTransition>
                  <Technology />
                </PageTransition>
              }
            />
            <Route
              path="/vision"
              element={
                <PageTransition>
                  <Vision />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;