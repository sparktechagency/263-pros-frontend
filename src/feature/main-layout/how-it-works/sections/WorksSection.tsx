"use client";

import React from "react";
import { WorksCard } from "./works-for/WorksCard";

interface WorksItem {
  title: string;
  description: string;
  image: string;
}

interface WorksSectionProps {
  title: React.ReactNode;
  items: WorksItem[];
}

export const WorksSection: React.FC<WorksSectionProps> = ({ title, items }) => {
  return (
    <div className="pt-10 lg:pt-16">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl 2xl:text-[40px] font-semibold text-[#055E6E] text-center mb-16">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {items?.map((item, index) => (
            <WorksCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
