import React from "react";
import WorksBanner from "./sections/WorksBanner";
import WorksForSection from "./sections/works-for/WorksForSection";
import WhyJoinSection from "./sections/WhyJoinSection";
import OfferServicesSection from "./sections/OfferServicesSection";
import ReadyToGrow from "./sections/ReadyToGrow";

export default function HowItWorks() {
  return (
    <section>
      <WorksBanner />
      <WorksForSection />
      <WhyJoinSection />
      <OfferServicesSection />
      <ReadyToGrow />
    </section>
  );
}
