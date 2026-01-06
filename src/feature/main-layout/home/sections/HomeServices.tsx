import React from "react";
import ServiceCard from "@/shared/components/ServiceCard";
import { categories } from "@/constants/servicesData";
import { ArrowRight } from "lucide-react";
import { Button } from "antd";
import Link from "next/link";

const HomeServices: React.FC = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container space-y-16">
        {categories?.slice(0, 8).map((category) => (
          <div key={category?.id} className="space-y-6">
            {/* Category Header */}
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-[#2E2E2E]">
                {category?.name}
              </h2>
              <Link
                href={`/services?category=${category?.id}`}
                className="group flex items-center gap-2 text-[#6C6C6C] font-semibold transition-all hover:gap-3 text-nowrap"
              >
                View All
                <ArrowRight size={20} className="transition-transform" />
              </Link>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category?.services?.slice(0, 4).map((service) => (
                <ServiceCard key={service?.id} service={service} />
              ))}
            </div>
          </div>
        ))}
        <Link href="/services" className="flex-center">
          <Button type="primary" className="bg-primary! h-12! w-sm">
            View All Services
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HomeServices;
