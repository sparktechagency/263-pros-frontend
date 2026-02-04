"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ServiceRequestModal } from "./ServiceRequestModal";
import { imgUrl } from "../../../helpers/imgUrl";
import getProfile from "../../../helpers/getProfile";
import { toast } from "sonner";

interface ServiceCardProps {
  service: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
}: ServiceCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const img = service?.image.startsWith("http")
    ? service?.image
    : `${imgUrl}${service?.image}`;
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfile();
        setUser(profileData);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleModal = (open: boolean) => {
    if (user) {
      setIsModalOpen(open);
    } else {
      toast.error("Please login to request a service");
    }
  };

  return (
    <>
      <div
        onClick={() => handleModal(true)}
        className="group block h-full cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
          {/* Image Container */}
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src={img}
              alt={service?.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex h-full">
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
        serviceId={service?.id}
      />
    </>
  );
};

export default ServiceCard;
