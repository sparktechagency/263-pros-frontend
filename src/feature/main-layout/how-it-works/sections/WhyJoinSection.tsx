import React from "react";
import Image from "next/image";
import { whyJoinData } from "@/constants/how-it-works/whyJoin";

export default function WhyJoinSection() {
  return (
    <section className="bg-[#E6EFF4] py-16 ">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl 2xl:text-[40px] font-semibold text-[#055E6E] text-center mb-16">
          Why Service Providers Join{" "}
          <span className="text-[#FFCB20]">263 Pros</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyJoinData.map((item, index) => (
            <div
              key={index}
              className="bg-[#FEF8DE] rounded-xl p-2 boxShadow border border-[#FFE8B3] flex flex-col items-center h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div className="relative w-full aspect-square h-[200px] mb-6 bg-white rounded-xl overflow-hidden flex items-center justify-center ">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-xl font-semibold text-[#2E2E2E] mb-3 text-center">
                {item.title}
              </h4>
              <p className="text-[#545454] text-center text-xs lg:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
