import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, link }) => {
  return (
    <Link href={link} className="group block h-full">
      <div className="relative overflow-hidden rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-4/3 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-sm md:text-[16px] text-[#6C6C6C] transition-colors group-hover:text-primary line-clamp-2">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
