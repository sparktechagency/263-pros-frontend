import Image from "next/image";
import { NotificationItem } from ".";
import { imgUrl } from "../../../../../helpers/imgUrl";
import moment from "moment";
import { myFetch } from "../../../../../helpers/myFetch";

const NotificationItemCard = ({ item }: { item: NotificationItem }) => {
  const handleRead = async () => {
    try {
      await myFetch(`/notification/${item._id}`, {
        method: "PATCH",
        // body: ,
      });
    } catch (error) {
      console.error(error);
    }
  }; 
  return (
    <div className="flex items-center justify-between rounded-lg transition-colors cursor-pointer group bg-gray-50 p-2" onClick={handleRead}>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 shrink-0">
          <Image
            src={item?.sender?.image?.startsWith("http")
              ? item?.sender?.image
              : imgUrl + item?.sender?.image}
            alt={item?.sender?.name}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#1A1A1A] font-medium lg:text-[16px] text-sm">
            {item?.sender?.name} <span className="font-normal text-[#525252]">{item?.text}</span>
          </p>
          <div className="flex items-center gap-2 text-[#A3A3A3] text-xs">
            <span className="font-normal text-[#525252]">{item?.message}</span>
            <span>{moment(item?.date).format("DD/MM/YYYY  hh:mm A")}</span>

          </div>
        </div>
      </div>
      <div>
        {!item?.read && (
          <div className="w-2.5 h-2.5 bg-[#FF3B30] rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default NotificationItemCard;