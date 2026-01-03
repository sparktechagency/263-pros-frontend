"use client";
import React from "react";
import { Filter, Check } from "lucide-react";
import { categories } from "@/constants/servicesData";
import ServiceCard from "@/shared/components/ServiceCard";
import { useSearchParams, useRouter } from "next/navigation";
import { Dropdown, Button, Typography } from "antd";
const { Title } = Typography;
export default function ServicesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get("category");
  const searchQuery = searchParams.get("service")?.toLowerCase();

  const handleFilter = (categoryId: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId) {
      params.set("category", categoryId);
    } else {
      params.delete("category");
    }
    // Clear search when switching categories for better UX
    params.delete("service");
    router.push(`/services?${params.toString()}`, { scroll: false });
    document
      .getElementById("service-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  let filteredServices = currentCategory
    ? categories.find((cat) => cat.id === currentCategory)?.services || []
    : categories.flatMap((cat) => cat.services);

  if (searchQuery) {
    filteredServices = filteredServices.filter(
      (s) =>
        s.title.toLowerCase().includes(searchQuery) ||
        s.category.toLowerCase().includes(searchQuery)
    );
  }

  const filterItems = [
    {
      key: "all",
      label: (
        <div className="flex items-center justify-between w-full min-w-[150px]">
          <span>All Services</span>
          {!currentCategory && (
            <Check size={14} className="ml-2 text-primary" />
          )}
        </div>
      ),
      onClick: () => handleFilter(null),
    },
    ...categories.map((cat) => ({
      key: cat.id,
      label: (
        <div className="flex items-center justify-between w-full min-w-[150px]">
          <span>{cat.name}</span>
          {currentCategory === cat.id && (
            <Check size={14} className="ml-2 text-primary" />
          )}
        </div>
      ),
      onClick: () => handleFilter(cat.id),
    })),
  ];

  return (
    <section className="container mx-auto px-4 py-12 lg:py-16">
      {/* Header Section */}
      <div
        id="service-grid"
        className="flex items-center justify-between mb-8 pb-4 "
      >
        <div>
          <Title level={2} className="mb-1!">
            {currentCategory
              ? categories.find((cat) => cat.id === currentCategory)?.name
              : "All Services"}
          </Title>
          <p className="text-gray-500">
            {filteredServices.length}{" "}
            {filteredServices.length === 1 ? "service" : "services"} available
          </p>
        </div>

        <Dropdown
          menu={{ items: filterItems }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <Button
            type="default"
            icon={<Filter size={18} />}
            className="flex items-center gap-2 h-10 border-gray-200 hover:border-primary hover:text-primary"
          >
            Filter
          </Button>
        </Dropdown>
      </div>

      <div className="min-h-[600px]">
        {/* Services Grid */}
        {filteredServices?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {filteredServices?.map((service) => (
              <div key={service.id} className="flex flex-col">
                <ServiceCard
                  title={service.title}
                  image={service.image}
                  link={`/services/${service.slug}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="p-4 bg-gray-50 rounded-full mb-4">
              <Filter size={40} className="text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              No services found
            </h3>
            <p className="text-gray-500 mt-2">
              Try selecting a different filter option.
            </p>
            <Button
              type="primary"
              className="bg-primary! h-12! w-sm mt-6"
              onClick={() => handleFilter(null)}
            >
              Show All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
