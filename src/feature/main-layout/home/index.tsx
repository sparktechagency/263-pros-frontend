import React from "react";
import Banner from "./sections/Banner";
import HomeServices from "./sections/HomeServices";
import ReadyToGrow from "../how-it-works/sections/ReadyToGrow";

export default function HomePage() {
  return (
    <section>
      <Banner />
      <HomeServices />
      <ReadyToGrow isHome={true} />
    </section>
  );
}
