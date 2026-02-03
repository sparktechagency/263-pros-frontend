"use client";
import React, { useEffect } from "react";
import { Plus } from "lucide-react";
import ProfileServiceCard from "./ProfileServiceCard";
import ServiceModal from "./ServiceModal";
import { myFetch } from "../../../../../../helpers/myFetch"; 
import { imgUrl } from "../../../../../../helpers/imgUrl";

interface ProfileServiceListProps {  
  _id: string;
  serviceData :{
    service:{ 
      _id: string;
      title: string;
    } 
    category: {
      _id: string;
      name: string;
    }
    description: string;
    image: string;
  }
}

const ProfileServiceList = () => {  
  const [open, setOpen] = React.useState(false); 
  const [serviceData , setServiceData] = React.useState({})  
  const [allServices, setAllServices] = React.useState<ProfileServiceListProps[]>([]); 

    useEffect(() => {
      const fetchService = async () => {
        try {
          const res = await myFetch("/service-record", {
            method: "GET",
            tags: ["service-record"],
          });
          setAllServices(res?.data || []);
        } catch (error) {
          console.error("Error fetching Services:", error);
        }
      };
      fetchService();
    }, []); 


  return (
    <div className=" h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium text-[#242424]">All Services</h2>
        <button onClick={() => setOpen(true)} className="flex items-center gap-2 px-5 py-2.5 bg-[#055e6e] text-white rounded-lg text-sm font-medium hover:bg-[#044a57] transition-colors shadow-sm">
          <Plus size={18} />
          <span>Add Service</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4  overflow-y-auto h-[calc(100vh-200px)]">
        {allServices?.map((service , index) => (
          <ProfileServiceCard
            key={index}
            _id={service._id}
            title={service.serviceData.service.title}
            category={service.serviceData.category.name}
            description={service.serviceData.description}
            image={service.serviceData.image?.startsWith("http") ? service.serviceData.image : `${imgUrl}${service.serviceData.image}`}
            onEdit={() =>{setOpen(true); setServiceData(service)}}

          />
        ))}
      </div>
      <ServiceModal open={open} setOpen={setOpen} serviceData={serviceData} />
    </div>
  );
};

export default ProfileServiceList;
