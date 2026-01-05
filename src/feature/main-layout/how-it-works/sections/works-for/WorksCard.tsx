"use client";

import Image from "next/image";
import React from "react";

interface WorksCardProps {
  title: string;
  description: string;
  image?: string;
}

export const WorksCard: React.FC<WorksCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative w-full aspect-4/3 mb-6 rounded-2xl overflow-hidden bg-[#F9F9F9] boxShadow transition-shadow duration-300 group-hover:shadow-md">
        <Image
          src={image || ""}
          alt={title}
          width={800}
          height={800}
          className="object-cover h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h4 className="text-xl font-semibold text-[#2E2E2E] mb-3">{title}</h4>
      <p className="text-[#545454] text-[16px] leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  );
};
