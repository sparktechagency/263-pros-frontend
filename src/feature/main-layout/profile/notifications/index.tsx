"use client";
import React, { useEffect, useMemo } from "react";
import NotificationItemCard from "./NotificationItemCard";
import { myFetch } from "../../../../../helpers/myFetch";
import { io } from 'socket.io-client';
import { imgUrl } from "../../../../../helpers/imgUrl";
import { revalidateTags } from "../../../../../helpers/revalidateTags";
export interface NotificationItem {
  _id: string;
  user: string;
  sender: {
    name: string;
    image: string;
  };
  avatar: string;
  message: string;
  text: string;
  date: string;
  time: string;
  read: boolean;
  timestamp: string;
}

const Notifications = () => {
  const [allNotifications, setAllNotifications] = React.useState<NotificationItem[]>([]);

  const socket = useMemo(() => io(imgUrl), [])
   socket.on('new_notificaiton', () => {
     // refetch(); 
     revalidateTags(["notification"]);
  });

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await myFetch("/notification", {
          method: "GET",
          cache: "no-store",
          tags: ["notification"],
        });

        setAllNotifications(res?.data || []);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <div className=" w-full">
      <div className="mb-6">
        <h1 className="lg:text-2xl text-xl font-medium text-[#292929] mb-1">Notification</h1>
        <p className="text-[#919191] text-sm">Stay update with your latest notification</p>
      </div>

      {/* Today Section */}
      <div className="mb-8">
        <h2 className="text-[#525252] lg:text-lg font-medium mb-2">All Notifications</h2>
        <div className="space-y-5">
          {allNotifications.map((item, index) => (
            <div key={index}>
              <NotificationItemCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;