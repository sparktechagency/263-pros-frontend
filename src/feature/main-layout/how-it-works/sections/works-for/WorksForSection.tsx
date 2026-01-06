import React from "react";
import { WorksSection } from "../WorksSection";
import { customerSteps } from "@/constants/how-it-works/customerSteps";
import { providerSteps } from "@/constants/how-it-works/providerSteps";

export default function WorksForSection() {
  return (
    <section className="pb-10 lg:pb-16">
      <WorksSection
        title={
          <>
            How 263 <span className="text-[#FFCB20]">Pros</span> Works for{" "}
            <span className="text-[#055E6E]">Customer</span>
          </>
        }
        items={customerSteps}
      />

      <WorksSection
        title={
          <>
            How 263 <span className="text-[#FFCB20]">Pros</span> Works for{" "}
            <span className="text-[#055E6E]">Service Providers</span>
          </>
        }
        items={providerSteps}
      />
    </section>
  );
}
