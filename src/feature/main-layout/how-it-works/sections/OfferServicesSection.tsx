import React from "react";
import { offerServicesData } from "@/constants/how-it-works/offerServices";

export default function OfferServicesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl 2xl:text-[40px] font-semibold text-[#055E6E] text-center mb-10">
          Offer your Service on 263 <span className="text-[#FFCB20]">Pros</span>
        </h2>
        <div className="bg-[#F9F9F9] border border-[#EBEBEB] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-8 gap-x-8">
            {offerServicesData.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-5 h-5 bg-[#055E6E] rounded-md shrink-0"></div>
                <span className="text-lg lg:text-xl font-medium text-[#2E2E2E]">
                  {item}
                </span>
              </div>
            ))}
            {/* <div className="flex items-center gap-4">
              <span className="text-lg lg:text-xl font-medium text-[#055E6E] cursor-pointer hover:underline">
                and More
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
