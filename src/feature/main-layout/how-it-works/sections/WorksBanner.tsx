"use client";

import React from "react";
import { Button, ConfigProvider } from "antd";
import Image from "next/image";
import RegisterProviderForm from "@/shared/components/RegisterProviderForm";

const WorksBanner: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
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
                Grow Your Service Business{" "}
                <span className="font-playfair italic font-normal text-primary">
                  Across Zimbabwe
                </span>
              </h1>

              <p className="text-[#525252] text-lg lg:text-xl mb-12 max-w-lg">
                Join <span className="text-primary font-medium">263</span>{" "}
                <span className="text-[#FFCB20] font-medium">Pros</span> today
                to receive genuine customer enquiries, build trust with
                customers, and grow your visibility beyond your local area.
              </p>

              {/* Search Section */}
              <Button
                type="primary"
                onClick={() => setModalVisible(true)}
                className="text-[#2E2E2E]! bg-[#FFCB20]! py-3 rounded-lg w-[300px]! font-medium! text-center hidden md:block"
              >
                Register as Service Provider
              </Button>
            </div>

            {/* Right Illustration */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full aspect-4/3 lg:aspect-square">
                <Image
                  src="/assets/images/home/banner.png"
                  alt="Service Providers Illustration"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-contain"
                  priority
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
        <RegisterProviderForm
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
        />
      </section>
    </ConfigProvider>
  );
};

export default WorksBanner;
