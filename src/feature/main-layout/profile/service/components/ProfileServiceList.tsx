"use client";
import React from "react";
import { Plus } from "lucide-react";
import ProfileServiceCard from "./ProfileServiceCard";
import { mockServices } from "@/constants/service/popularTags";
import ServiceModal from "./ServiceModal";

const ProfileServiceList = () => {  
  const [open, setOpen] = React.useState(false); 
  const [serviceData , setServiceData] = React.useState({})

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#242424]">All Services</h2>
        <button onClick={() => setOpen(true)} className="flex items-center gap-2 px-5 py-2.5 bg-[#055e6e] text-white rounded-lg text-sm font-medium hover:bg-[#044a57] transition-colors shadow-sm">
          <Plus size={18} />
          <span>Add Service</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4  overflow-y-auto h-[calc(100vh-200px)]">
        {mockServices.map((service) => (
          <ProfileServiceCard
            key={service.id}
            {...service}
            onEdit={() =>{setOpen(true); setServiceData(service)}}
            onDelete={() => console.log("Delete", service.id)}
          />
        ))}
      </div>
      <ServiceModal open={open} setOpen={setOpen} serviceData={serviceData} />
    </div>
  );
};

export default ProfileServiceList;
