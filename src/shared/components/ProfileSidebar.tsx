"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import {
  LayoutGrid,
  MessageSquare,
  Bell,
  CreditCard,
  Settings,
  LogOut,
  Star,
} from "lucide-react";
import { Button } from "antd";

const ProfileSidebar = () => {
  const pathname = usePathname();
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  const userRole = user ? user.role : null;

  const sidebarLinks = [
    ...(userRole === "customer"
      ? [
          {
            name: "Account Settings",
            href: "/profile",
            icon: <LayoutGrid size={20} />,
          },
          {
            name: "Notification",
            href: "/profile/notifications",
            icon: <Star size={20} />,
          },
        ]
      : [
          {
            name: "Requests",
            href: "/profile/requests",
            icon: <MessageSquare size={20} />,
          },
          {
            name: "Notification",
            href: "/profile/notifications",
            icon: <Bell size={20} />,
          },
          {
            name: "Subscription",
            href: "/profile/subscription",
            icon: <CreditCard size={20} />,
          },
          {
            name: "Account Setting",
            href: "/profile/settings",
            icon: <Settings size={20} />,
          },
        ]),
  ];

  return (
    <div className="w-full lg:w-[95%] bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-full">
      {/* Profile Info */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-40 h-40 mb-4">
          <Image
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
            alt="Profile Avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>

        <h2 className="lg:text-2xl text-xl font-semibold text-[#292929] mb-1">
          Danai Gurira
        </h2>
        <p className="text-[#6C6C6C] lg:text-[16px] text-sm mb-2.5">
          emample.email@gmail.com
        </p>

        {userRole === "customer" ? (
          <Button
            type="primary"
            size="large"
            className="bg-[#FFCB20]! text-primary! font-medium!"
          >
            Become a Provider
          </Button>
        ) : (
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className="fill-[#FFC107] text-[#FFC107]"
              />
            ))}
            <span className="text-[#242424] font-semibold lg:text-xl text-lg ml-1">
              (5.0)
            </span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors duration-200 
                ${
                  isActive
                    ? "bg-[#E6F0F2] text-[#242424] font-medium"
                    : "text-[#525252] hover:bg-gray-50"
                }`}
            >
              <div
                className={`${isActive ? "text-[#525252]" : "text-[#525252]"}`}
              >
                {link.icon}
              </div>
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="mt-4 pt-4">
        <button className="flex items-center gap-3 px-4 py-3 text-[#FF4D4F] hover:bg-red-50 rounded-lg w-full transition-colors font-medium">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
