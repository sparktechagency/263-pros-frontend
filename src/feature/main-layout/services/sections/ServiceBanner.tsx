"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Input, Button, Form, ConfigProvider, AutoComplete } from "antd";
import { MapPin, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
export default function ServiceBanner() {
  const [form] = Form.useForm();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Sync search parameters with form
  useEffect(() => {
    form.setFieldsValue({
      service: searchParams.get("service") || "",
      location: searchParams.get("location") || "",
    });
  }, [searchParams, form]);
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
    []
  );

  const onServiceSearch = (searchText: string) => {
    setServiceOptions(
      !searchText
        ? []
        : services.filter((item) =>
            item.value.toLowerCase().includes(searchText.toLowerCase())
          )
    );
  };

  const onLocationSearch = (searchText: string) => {
    setLocationOptions(
      !searchText
        ? []
        : locations.filter((item) =>
            item.value.toLowerCase().includes(searchText.toLowerCase())
          )
    );
  };

  const handleSearch = () => {
    const values = form.getFieldsValue();
    console.log("Search values:", values);
    router.push(
      `/services?service=${values.service}&location=${values.location}`
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
      <section className="relative w-full bg-linear-to-b from-[#B1E5EE] to-[#FFFFFF] overflow-hidden pt-12  ">
        <div className="container flex flex-col items-center text-start">
          <h1 className="text-4xl lg:text-5xl   font-semibold text-primary leading-tight mb-6 tracking-wide">
            Explore All Services on 263 Pros
          </h1>

          {/* Search Section */}
          <div className="space-y-4">
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
                        prefix={<MapPin className="text-[#005B6F]" />}
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
        <div className="mt-16 text-start container ">
          <h4 className="text-2xl font-semibold text-[#2E2E2E] ">
            Everything you need, all in one place
          </h4>
          <p className="text-[#545454] mt-4 max-w-[600px] text-lg">
            From home maintenance to professional support, discover trusted
            services near you and book in minutes.
          </p>
        </div>
      </section>
    </ConfigProvider>
  );
}
