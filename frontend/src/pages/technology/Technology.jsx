import React from "react";
import Python from "./Python";
import Backend from "./Backend";
import Automation from "./Automation";
import AI from "./AI";
import Data from "./Data";
import DevelopmentTools from "./DevelopmentTools";


function Technology() {
  return (
    <main className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-white)]">
      <Python />
      <Backend />
      <Automation />
      <AI />
      <Data />
      <DevelopmentTools />
    </main>
  );
}

export default Technology;