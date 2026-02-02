"use client";

import React, { useState } from "react";
import { Input, Button, Form, ConfigProvider, AutoComplete } from "antd";
import Image from "next/image";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";

const Banner: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  // Mock data for services and locations
  const services = [
    { value: "House Cleaning" },
    { value: "Gardening" },
    { value: "Plumbing" },
    { value: "Electrical Services" },
    { value: "Carpentry" },
    { value: "Painting" },
    { value: "Pest Control" },
    { value: "Handyman Services" },
  ];

  const locations = [
    { value: "Avondale, Harare" },
    { value: "Borrowdale, Harare" },
    { value: "Mount Pleasant, Harare" },
    { value: "Mabelreign, Harare" },
    { value: "Bulawayo Central" },
    { value: "Mutare Urban" },
    { value: "Gweru Central" },
    { value: "Victoria Falls" },
  ];

  const [serviceOptions, setServiceOptions] = useState<{ value: string }[]>([]);
  const [locationOptions, setLocationOptions] = useState<{ value: string }[]>(
    [],
  );

  const onServiceSearch = (searchText: string) => {
    setServiceOptions(
      !searchText
        ? []
        : services.filter((item) =>
            item.value.toLowerCase().includes(searchText.toLowerCase()),
          ),
    );
  };

  const onLocationSearch = (searchText: string) => {
    setLocationOptions(
      !searchText
        ? []
        : locations.filter((item) =>
            item.value.toLowerCase().includes(searchText.toLowerCase()),
          ),
    );
  };

  const handleSearch = () => {
    const values = form.getFieldsValue();
    // console.log("Search values:", values);
    router.push(
      `/services?service=${values.service}&location=${values.location || ""}`,
    );
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl   font-semibold text-primary leading-tight mb-6 tracking-wide">
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
                <h2 className="text-xl font-semibold text-[#2E2E2E]">
                  What service do you need?
                </h2>
                <Form
                  form={form}
                  className="flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <div className="flex flex-1 overflow-hidden rounded-lg border border-[#005B6F]/20 bg-transparent ">
                    <div className="flex-1 border-b border-[#005B6F]/20 sm:border-b-0 sm:border-r">
                      <Form.Item name="service" className="mb-0!">
                        <AutoComplete
                          options={serviceOptions}
                          onSearch={onServiceSearch}
                          className="w-full h-12!"
                        >
                          <Input
                            placeholder="House cleaning, Gardening"
                            variant="borderless"
                          />
                        </AutoComplete>
                      </Form.Item>
                    </div>
                    <div className="flex flex-[0.8] items-center">
                      <Form.Item name="location" className="mb-0!">
                        <AutoComplete
                          options={locationOptions}
                          onSearch={onLocationSearch}
                          className="w-full h-12!"
                        >
                          <Input
                            placeholder="Avondale, Harare"
                            variant="borderless"
                            prefix={
                              <FaMapMarkerAlt className="text-[#005B6F] text-xl" />
                            }
                          />
                        </AutoComplete>
                      </Form.Item>
                    </div>
                  </div>
                  <Button
                    onClick={handleSearch}
                    type="primary"
                    icon={<Search />}
                    className="sm:px-8"
                  >
                    Search
                  </Button>
                </Form>
              </div>
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
      </section>
    </ConfigProvider>
  );
};

export default Banner;
