"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ServiceRequestModal } from "./ServiceRequestModal";

interface ServiceCardProps {
  service: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
}: ServiceCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="group block h-full cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          {/* Image Container */}
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src={service?.image}
              alt={service?.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-sm md:text-[16px] text-[#6C6C6C] transition-colors group-hover:text-primary line-clamp-2">
              {service?.title}
            </h3>
          </div>
        </div>
      </div>

      <ServiceRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={service?.title}
      />
    </>
  );
};

export default ServiceCard;
