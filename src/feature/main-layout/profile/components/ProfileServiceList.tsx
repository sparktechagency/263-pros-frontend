"use client";
import React from "react";
import { Plus } from "lucide-react";
import ProfileServiceCard from "./ProfileServiceCard";

const mockServices = [
  {
    id: 1,
    title: "Domestic cleaning",
    category: "Home, Domestic & Professional Cleaning Services",
    description: "A service provider profile description is a comprehensive overview of an individual or company offering services, detailing who they are, what they do (services, tasks, expertise)",
    image: "https://images.unsplash.com/photo-1581578731117-104f8a746950?q=80&w=2680&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Post- Construction Cleaning",
    category: "Home, Domestic & Professional Cleaning Services",
    description: "A service provider profile description is a comprehensive overview of an individual or company offering services, detailing who they are, what they do (services, tasks, expertise)",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
  },
];

const ProfileServiceList = () => {

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#242424]">All Services</h2>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#055e6e] text-white rounded-lg text-sm font-medium hover:bg-[#044a57] transition-colors shadow-sm">
          <Plus size={18} />
          <span>Add Service</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockServices.map((service) => (
          <ProfileServiceCard
            key={service.id}
            {...service}
            onEdit={() => console.log("Edit", service.id)}
            onDelete={() => console.log("Delete", service.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileServiceList;
