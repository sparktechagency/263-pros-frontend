"use client";
import React, { useState } from "react";
import ProfileSidebar from "@/shared/components/ProfileSidebar";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<"Customer" | "Provider">(
    "Provider"
  );
  return (
    <div className="h-[calc(100vh+100px)]  bg-[#ffffff] py-8 ">
      <div className="container mx-auto flex-center ">
        <div className="lg:w-[85%]">
          <div className="flex-center mb-8 gap-4 ">
            {/* Toggle */}
            <div className="bg-[#f1f1f1] p-1 ps-0 rounded-lg inline-flex w-full md:w-auto">
              {["Customer", "Provider"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "Customer" | "Provider")}
                  className={`flex-1 md:flex-none px-14.5 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-[#055e6e] text-white shadow-sm"
                      : "text-[#525252] hover:bg-[#055e6e20]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
            {/* Sidebar Area */}
            <aside className="lg:col-span-1 self-start max-h-fit">
              <ProfileSidebar />
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-2">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
