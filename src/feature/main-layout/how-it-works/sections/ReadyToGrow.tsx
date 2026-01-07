import React from "react";
import { Button } from "antd";

export default function ReadyToGrow({ isHome = false }: { isHome?: boolean }) {
  return (
    <section className={`${isHome ? "container my-16" : ""}`}>
      <div
        className={`bg-[#055E6E] py-16 lg:py-24 text-center text-white px-4 ${
          isHome ? "rounded-2xl" : ""
        }`}
      >
        <div className="container">
          {/* Pill Tag */}
          <div className="inline-block px-6 py-2 border border-[#00BCD1] bg-[#00BCD126]  rounded-full mb-8">
            <span className="text-sm font-medium tracking-wide text-white">
              Start Your Journey
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium mb-6 leading-tight bg-linear-to-r from-[#F1F1F1] via-[#05D9FF] to-[#F1F1F1] text-transparent bg-clip-text tracking-tight">
            Ready to Grow Your Business?
          </h2>

          {/* Subtitle */}
          <p className=" md:text-xl text-[#EBEBEB] mb-14 font-thin">
            Empowering businesses through smarter connections.
          </p>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4  ${
              isHome ? "" : "mb-16"
            }`}
          >
            <Button
              type="primary"
              className="h-12! rounded-xl bg-[#FFCB20]! border-0! text-[#1A1B1B]! font-medium! hover:bg-[#FFD64D]! hover:border-[#FFD64D]! transition-all! tracking-wide! w-full! md:w-auto!"
            >
              Register As a Service Provider
            </Button>
            <Button className="h-12! rounded-xl bg-[#FEFEFE]! border-0! text-[#2E2E2E]! font-medium! text-base hover:bg-white/90! hover:border-white/90! transition-all! tracking-wide! w-full! md:w-auto!">
              Contact Us for More Info
            </Button>
          </div>

          {/* Info Box */}
          <div
            className={`${
              isHome ? "hidden" : "block"
            } bg-white rounded-2xl p-8 md:p-12 text-[#2E2E2E] boxShadow`}
          >
            <h3 className="text-xl md:text-2xl lg:text-[28px] font-medium mb-4 text-primary">
              <span className="text-[#FFCB20] tracking-wide">
                Join for free.
              </span>{" "}
              Grow with access levels that match your capacity.
            </h3>
            <p className="text-[#545454] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              All verified service providers can join at no cost. Advanced
              tools, visibility, and lead access are available through optional
              membership levels your credibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
