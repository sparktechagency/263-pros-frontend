"use client";
import React from "react";
import Image from "next/image";
import { Camera } from "lucide-react";

const ProfileSettings = () => {
  return (
    <div className="grid grid-cols-1 bg-white rounded-xl p-8 border border-gray-100 shadow-sm gap-8">
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
      <div className=" ">
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-[#525252] text-sm font-medium mb-2">Name</label>
            <input 
              type="text" 
              defaultValue="Danai Gurira"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#055e6e] focus:ring-1 focus:ring-[#055e6e] outline-none transition-colors text-[#242424]"
            />
          </div>

          {/* Phonenumber */}
          <div>
            <label className="block text-[#525252] text-sm font-medium mb-2">Phone number</label>
            <input 
              type="text" 
              defaultValue="+123 4567 4567 456"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#055e6e] focus:ring-1 focus:ring-[#055e6e] outline-none transition-colors text-[#242424]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#525252] text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              defaultValue="emample.email@gmail.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#055e6e] focus:ring-1 focus:ring-[#055e6e] outline-none transition-colors text-[#242424]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[#525252] text-sm font-medium mb-2">Password</label>
            <button 
              type="button"
              className="px-6 py-3 rounded-lg border border-[#055e6e] text-[#055e6e] font-medium hover:bg-cyan-50 transition-colors"
            >
              Change Password
            </button>
          </div>

          <div className="pt-4">
             <button 
                type="submit"
                className="bg-[#055e6e] hover:bg-[#044a57] text-white font-medium py-3 px-8 rounded-lg shadow-sm transition-colors"
             >
                Save Changes
             </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
