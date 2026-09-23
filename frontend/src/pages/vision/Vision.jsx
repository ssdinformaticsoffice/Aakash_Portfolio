import React from "react";

import VisionStatement from "./VisionStatement";
import Innovation from "./Innovation";
import Growth from "./Growth";
import Impact from "./Impact";
import Excellence from "./Excellence";

function Vision() {
  return (
    <main className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-white)]">
      <VisionStatement />
      <Innovation />
      <Growth />
      <Impact />
      <Excellence />
    </main>
  );
}

export default Vision;