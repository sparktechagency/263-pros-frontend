"use client";
import notificationsData from "@/constants/notifications";
import React from "react";
import NotificationItemCard from "./NotificationItemCard";

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
      <div className="mb-6">
        <h1 className="lg:text-2xl text-xl font-medium text-[#292929] mb-1">Notification</h1>
        <p className="text-[#919191] text-sm">Stay update with your latest notification</p>
      </div>

      {/* Today Section */}
      <div className="mb-8">
        <h2 className="text-[#525252] lg:text-lg font-medium mb-2">Today</h2>
        <div className="space-y-5">
          {todayNotifications.map((item) => (
            <NotificationItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Yesterday Section */}
      <div>
        <h2 className="text-[#525252] lg:text-lg font-medium mb-2">Yesterday</h2>
        <div className="space-y-4">
          {yesterdayNotifications.map((item) => (
            <NotificationItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;