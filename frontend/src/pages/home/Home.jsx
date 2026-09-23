import React from "react";
import Hero from "./Hero";
import CompanyIdentity from "./CompanyIdentity";
import Professional from "./Professional";
import QuickIntroduction from "./QuickIntroduction";
import CoreTechnology from "./CoreTechnology";
import ContactForm from "../contact/ContactForm";

function Home() {
  return (
    <main className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-white)]">
      <Hero />
      <CompanyIdentity />
      <CoreTechnology />
      <Professional />
      <QuickIntroduction />
      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}

export default Home;