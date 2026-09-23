import React from "react";
import ProfessionalJourney from "./ProfessionalJourney";
import CEOLLeadership from "./CEOLLeadership";
import PreviousExperience from "./PreviousExperience";
import KeyRoles from "./KeyRoles";


function Experience() {
  return (
    <main className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-white)]">
      <ProfessionalJourney />
      <CEOLLeadership />
      <PreviousExperience />
      <KeyRoles />
    </main>
  );
}

export default Experience;