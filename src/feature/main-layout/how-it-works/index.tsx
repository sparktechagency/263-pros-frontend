import React from "react";
import WorksBanner from "./sections/WorksBanner";
import { WorksSection } from "./sections/WorksSection";
import WorksForSection from "./sections/works-for/WorksForSection";

export default function HowItWorks() {
  return (
    <section>
      <WorksBanner />
      <WorksForSection />
    </section>
  );
}
