"use client";
import React from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { Divider, Form, Input } from "antd";
import ChangePassword from "./ChangePassword";

const ProfileSettings = () => {
  return (
    <div className=" bg-white rounded-xl p-8 border border-gray-100 shadow-sm gap-8 h-[calc(100vh-100px)] overflow-y-auto">
      {/* Left: Avatar Edit */}
      <div className="  flex flex-col items-center justify-center h-fit">
        <div className="relative w-40 h-40 mb-2 group cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
            alt="Profile Avatar"
            fill
            className="rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute bottom-2 right-2 bg-gray-200 p-2 rounded-full border-2 border-white hover:bg-gray-300 transition-colors">
            <Camera size={20} className="text-gray-700" />
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="mb-2">
        <Form className="" layout="vertical">
          {/* Name */}
          <Form.Item name={"name"} label={ <p className="block text-[#525252] text-sm font-medium ">Name</p>}>      
            <Input 
              type="text" 
              defaultValue="Danai Gurira"
              className="w-full h-[45px]"
            />
          </Form.Item>

          {/* Phonenumber */}
          <Form.Item name={"phone"} label={ <p className="block text-[#525252] text-sm font-medium ">Phone number</p>}>
            <Input 
              type="text" 
              defaultValue="+123 4567 4567 456"
              className="w-full h-[45px]"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item name={"email"} label={ <p className="block text-[#525252] text-sm font-medium ">Email</p>}>
            <Input 
              type="email" 
              defaultValue="emample.email@gmail.com"
              className="w-full h-[45px]"
            />
          </Form.Item> 

          <Form.Item className="pt-6 flex justify-end" >
             <button 
                type="submit"
                className="bg-[#055e6e] hover:bg-[#044a57] text-white font-medium py-3 px-8 rounded-lg shadow-sm transition-colors"
             >
                Save Changes
             </button>
          </Form.Item>
        </Form>
      </div> 

      <Divider /> 
      <ChangePassword/>
    </div>
  );
};

export default ProfileSettings;
