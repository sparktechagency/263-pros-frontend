"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle, XCircle } from "lucide-react";
import { Button, Empty } from "antd";
import { getImageUrl } from "@/lib/helpers/getImageUrl";
import { toast } from "sonner";
import { myFetch } from "../../../../helpers/myFetch";
import { revalidateTags } from "../../../../helpers/revalidateTags";
import { useRouter } from "next/navigation";

export default function ProviderProfilePage({ provider }: { provider: any }) {
  const router = useRouter();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
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

  const handleChat = () => {
    toast.promise(
      myFetch(`/chat-room/${provider?._id}`, {
        method: "POST",
        tags: ["create-room"],
      }),
      {
        loading: "Creating chat...",
        success: (res) => {
          if (res?.success) {
            revalidateTags(["chat-room"]);
            router.push("/my-requests?tab=message");
            return res?.message;
          }
          throw new Error(res?.message || "Chat creation failed");
        },
        error: (err) => err.message || "Error creating chat",
      },
    );
  };

  return (
    <div className="container py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 flex flex-col items-center text-center h-fit lg:sticky lg:top-20">
          <div className="relative w-40 h-40 mb-6 group">
            <Image
              src={getImageUrl(provider?.image)}
              alt="Provider Profile"
              fill
              className="rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>

          <h1 className="text-2xl font-semibold text-[#292929] mb-1 text-center">
            {provider?.name || "N/A"}
          </h1>
          {/* business name */}
          {provider?.isBusinessAccount && (
            <p className="text-[#6C6C6C]  text-center mb-2">
              {provider?.isBusinessAccount?.businessName}
            </p>
          )}
          <p className="text-[#6C6C6C]  text-center mb-2">
            {provider?.email || "N/A"}
          </p>
          <p className="text-[#6C6C6C]  text-center mb-2">
            {provider?.location}
          </p>

          {/* <div className="flex items-center gap-1 mb-6 mt-4">
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
          </div> */}

          <div className="flex flex-col md:flex-row w-full gap-3 my-8">
            {/* <Button
              type="primary"
              className="h-11! rounded-lg bg-[#055E6E]! text-white! font-semibold! w-full!"
            >
              Request quote
            </Button> */}
            <Button
              onClick={handleChat}
              className="h-11! rounded-lg border-[#EBEBEB] text-[#2E2E2E]! font-semibold! hover:border-[#055E6E]! hover:text-[#055E6E]! w-full!"
            >
              Message
            </Button>
          </div>

          <div className="flex items-center gap-2 text-[#4CAF50] font-medium">
            {provider?.verified ? (
              <CheckCircle size={20} />
            ) : (
              <XCircle size={20} />
            )}
            <span>
              {provider?.verified ? "Verified by 263 Pros" : "Not Verified"}
            </span>
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
              <p>{provider?.about}</p>
            </div>
          </section>

          {/* Business Photos Section */}
          <section id="images" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-8">
              Business Photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {provider?.businessImage?.map((photo: any, index: number) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden group shadow-sm"
                >
                  <Image
                    src={getImageUrl(photo)}
                    alt={`Business photo ${index + 1}`}
                    fill
                    draggable={false}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-10">
              Reviews{" "}
              <span className="text-[#6C6C6C] font-normal">
                ({provider?.rating?.length})
              </span>
            </h2>

            <div className="space-y-12">
              {provider?.rating?.length > 0 ? (
                provider?.rating?.map((review: any) => (
                  <div
                    key={review?._id}
                    className="flex flex-col gap-4 border-b border-[#EBEBEB] pb-8 last:border-0"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <Image
                          src={getImageUrl(review?.user?.image)}
                          alt={review?.user?.name}
                          width={56}
                          height={56}
                          className=" h-[56px] w-[56px] rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-lg font-bold text-[#2E2E2E]">
                            {review?.user?.name}
                          </h4>
                          <div className="flex gap-1 mt-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                size={14}
                                className={`${
                                  star <= review?.review
                                    ? "text-[#FFCB20] fill-[#FFCB20]"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* <span className="text-sm text-[#9F9F9F] font-medium">
                        {review.date}
                      </span> */}
                    </div>
                    <p className="text-[#6C6C6C] leading-relaxed">
                      {review?.message}
                    </p>
                  </div>
                ))
              ) : (
                <Empty description="No reviews yet" />
              )}
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
