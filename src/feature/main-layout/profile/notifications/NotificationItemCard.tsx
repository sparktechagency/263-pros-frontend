import Image from "next/image";
import { NotificationItem } from ".";

const NotificationItemCard = ({ item }: { item: NotificationItem }) => {
  return (
    <div className="flex items-center justify-between rounded-lg transition-colors cursor-pointer group bg-gray-50 p-2">
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
          <p className="text-[#1A1A1A] font-medium lg:text-[16px] text-sm">
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

export default NotificationItemCard;