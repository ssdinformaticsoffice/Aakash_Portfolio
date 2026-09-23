import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import TechnologyProjects from "./TechnologyProjects";
import BusinessSolutions from "./BusinessSolutions";
import Achievements from "./Achievements";



function Projects() {
  return (
    <main className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-white)]">
      <FeaturedProjects />
      <TechnologyProjects />
      <BusinessSolutions />
      <Achievements />
    </main>
  );
}

export default Projects;