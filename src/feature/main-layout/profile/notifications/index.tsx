"use client";
import notificationsData from "@/constants/notifications";
import Image from "next/image";
import React from "react";

 export interface NotificationItem {
  id: string;
  user: string;
  avatar: string;
  message: string;
  date: string;
  time: string;
  isRead: boolean;
  timestamp: string;
}

const Notifications = () => {
  const todayNotifications = notificationsData.slice(0, 4);
  const yesterdayNotifications = notificationsData.slice(4);

  return (
    <div className=" w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-[#292929] mb-1">Notification</h1>
        <p className="text-[#919191] text-sm">Stay update with your latest notification</p>
      </div>

      {/* Today Section */}
      <div className="mb-8">
        <h2 className="text-[#525252] text-lg font-medium mb-4">Today</h2>
        <div className="space-y-5">
          {todayNotifications.map((item) => (
            <NotificationItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Yesterday Section */}
      <div>
        <h2 className="text-[#525252] text-lg font-medium mb-4">Yesterday</h2>
        <div className="space-y-4">
          {yesterdayNotifications.map((item) => (
            <NotificationItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const NotificationItemCard = ({ item }: { item: NotificationItem }) => {
  return (
    <div className="flex items-center justify-between rounded-lg transition-colors cursor-pointer group">
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 shrink-0">
          <Image
            src={item.avatar}
            alt={item.user}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#1A1A1A] font-medium text-[16px]">
            {item.user} <span className="font-normal text-[#525252]">{item.message}</span>
          </p>
          <div className="flex items-center gap-2 text-[#A3A3A3] text-xs">
            <span>{item.date}</span>
            <span className="w-px h-3 bg-[#A3A3A3]"></span>
            <span>{item.time}</span>
          </div>
        </div>
      </div>
      <div>
        {!item.isRead && (
          <div className="w-2.5 h-2.5 bg-[#FF3B30] rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default Notifications;