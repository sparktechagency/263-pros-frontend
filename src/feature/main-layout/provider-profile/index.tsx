"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle } from "lucide-react";
import { Button } from "antd";
import { businessPhotos, reviews } from "@/constants/provider/providerData";

export default function ProviderProfilePage({ id }: { id: string }) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left h-fit lg:sticky lg:top-20">
          <div className="relative w-40 h-40 mb-6 group">
            <Image
              src="https://res.cloudinary.com/dsxkxo9zl/image/upload/v1767587212/7a1854772f4fe0fcbe6d3e95cac1b7b491a89c55_hvpjfp.png"
              alt="Provider Profile"
              fill
              className="rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>

          <h1 className="text-2xl font-semibold text-[#292929] mb-1">
            Danai Gurira
          </h1>
          <p className="text-[#6C6C6C] mb-4">emample.email@gmail.com</p>

          <div className="flex items-center gap-1 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className="text-[#FFCB20] fill-[#FFCB20]"
                />
              ))}
            </div>
            <span className="text-lg font-bold text-[#2E2E2E] ml-1">(5.0)</span>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-3 mb-8">
            <Button
              type="primary"
              className="h-11! rounded-lg bg-[#055E6E]! text-white! font-semibold! w-full!"
            >
              Request quote
            </Button>
            <Button className="h-11! rounded-lg border-[#EBEBEB] text-[#2E2E2E]! font-semibold! hover:border-[#055E6E]! hover:text-[#055E6E]! w-full!">
              Message
            </Button>
          </div>

          <div className="flex items-center gap-2 text-[#4CAF50] font-medium">
            <CheckCircle size={20} />
            <span>Verified by 263 Pros</span>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-9">
          {/* Navigation Bar */}
          <div className="flex gap-8 border-b border-[#EBEBEB] pb-4 mb-10 bg-white z-10">
            {["About", "Images", "Reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab.toLowerCase())}
                className="text-lg font-medium text-[#6C6C6C] hover:text-[#055E6E] transition-colors relative group"
              >
                {tab}
                <span className="absolute -bottom-[17px] left-0 w-0 h-0.5 bg-[#055E6E] transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* About Section */}
          <section id="about" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">About</h2>
            <div className="text-[#6C6C6C] leading-relaxed space-y-4 text-[16px]">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
          </section>

          {/* Business Photos Section */}
          <section id="images" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-8">
              Business Photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {businessPhotos?.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden group shadow-sm"
                >
                  <Image
                    src={photo}
                    alt={`Business photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-10">
              Reviews <span className="text-[#6C6C6C] font-normal">(32)</span>
            </h2>

            <div className="space-y-12">
              {reviews?.map((review) => (
                <div
                  key={review.id}
                  className="flex flex-col gap-4 border-b border-[#EBEBEB] pb-8 last:border-0"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-[#2E2E2E]">
                          {review.name}
                        </h4>
                        <div className="flex gap-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={14}
                              className="text-[#FFCB20] fill-[#FFCB20]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-[#9F9F9F] font-medium">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-[#6C6C6C] leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button
                type="primary"
                size="large"
                className="h-11!  rounded-lg bg-[#055E6E]! text-white! font-medium!"
              >
                View All Reviews
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
