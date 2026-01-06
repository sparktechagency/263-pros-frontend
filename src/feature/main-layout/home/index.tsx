import React from "react";
import Banner from "./sections/Banner";
import HomeServices from "./sections/HomeServices";
import ReadyToGrow from "../how-it-works/sections/ReadyToGrow";
import TestimonialSection from "./sections/TestimonialSection";

export default function HomePage() {
  return (
    <section>
      <Banner />
      <HomeServices />
      <TestimonialSection />
      <ReadyToGrow isHome={true} />
    </section>
  );
}
