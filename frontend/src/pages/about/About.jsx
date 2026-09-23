import React from "react";
import AboutAkash from "./AboutAkash";
import ProfessionalIdentity from "./ProfessionalIdentity";
import Leadership from "./Leadership";
import Philosophy from "./Philosophy";


function About() {
    return (
        <main className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-white)]">
            <AboutAkash />
            <Leadership />
            <ProfessionalIdentity />
        </main>
    );
}

export default About;