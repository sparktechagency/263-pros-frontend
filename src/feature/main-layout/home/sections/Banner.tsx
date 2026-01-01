"use client";

import React, { useState } from "react";
import { Input, Button, Form, ConfigProvider } from "antd";
import Image from "next/image";
import { MapPin, Search } from "lucide-react";

const Banner: React.FC = () => {
  const [form] = Form.useForm();

  const handleSearch = (values: any) => {
    console.log("Search values:", values);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#005B6F",
          borderRadius: 8,
          colorTextBase: "#1f2937",
        },
        components: {
          Button: {
            controlHeight: 48,
            fontSize: 16,
            fontWeight: 600,
          },
          Input: {
            controlHeight: 48,
            fontSize: 16,
          },
        },
      }}
    >
      <section className="relative w-full bg-linear-to-b from-[#B1E5EE] to-[#FFFFFF] overflow-hidden pt-12 lg:pt-0  lg:max-h-[calc(100vh-73px)] flex items-center justify-center ">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 ">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-start">
              <h1 className="text-4xl lg:text-5xl   font-semibold text-primary leading-tight mb-6 tracking-wide">
                Find & Book Trusted Service Providers{" "}
                <span className="font-playfair italic font-normal text-primary">
                  Across Zimbabwe
                </span>
              </h1>

              <p className="text-[#525252] text-lg lg:text-xl mb-12 max-w-lg">
                Connect with verified service providers, receive tailored
                proposals, and book with confidence.
              </p>

              {/* Search Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  What service do you need?
                </h2>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex flex-1  overflow-hidden rounded-lg border border-[#005B6F]/20 bg-transparent  ">
                    <div className="flex-1 border-b border-[#005B6F]/20 sm:border-b-0 sm:border-r">
                      <Input
                        placeholder="House cleaning, Gardening"
                        variant="borderless"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-[0.8] items-center">
                      <Input
                        placeholder="Avondale, Harare"
                        variant="borderless"
                        prefix={<MapPin className="text-[#005B6F]" />}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <Button type="primary" icon={<Search />} className="sm:px-8">
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full aspect-4/3 lg:aspect-square">
                <Image
                  src="/assets/images/home/banner.png"
                  alt="Service Providers Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default Banner;
