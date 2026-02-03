"use client";
import React from "react";
import Image from "next/image";
import { myFetch } from "../../../../../../helpers/myFetch";
import { revalidateTags } from "../../../../../../helpers/revalidateTags";
import { toast } from "sonner";
import { Modal } from "antd";

interface ProfileServiceCardProps {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  onEdit: () => void;

}

const ProfileServiceCard: React.FC<ProfileServiceCardProps> = ({
  _id,
  title,
  category,
  description,
  image,
  onEdit,
}) => {


  const confirmDelete = () => {
    Modal.confirm({
    title: "Delete Service",
    content: "Are you sure you want to delete this service",
    okText: "Yes, Delete",
    okType: "danger",
    cancelText: "Cancel",
    onOk: () => onDelete(),
    })
    } 

  const onDelete = async () => { 
  try {
    const res = await myFetch(`/service-record/${_id}`, {
      method: "DELETE",
    });

    if (res?.success) {
      toast.success(res.message, { id: "service" });
      revalidateTags(["service-record"]);
    } else {
      if (Array.isArray(res?.error)) {
        res.error.forEach((err: { message: string }) =>
          toast.error(err.message, { id: "service" })
        );
      } else {
        toast.error(res?.message || "Something went wrong!", {
          id: "service",
        });
      }
    }
  } catch (error) {
    console.error("Service delete failed:", error);
    toast.error("Server error. Please try again.", { id: "service" });
  }
}
return (
  <div className="bg-[#F8F9FA] rounded-xl p-4 md:p-3 flex flex-col md:flex-row gap-5 mb-5 border border-transparent hover:border-gray-200 transition-colors max-h-[230px]">
    {/* Image */}
    <div className="relative w-full md:w-40 h-40 md:h-40 shrink-0 rounded-lg ">
      <Image
        src={image}
        alt={title}
        fill
        className=" hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col">
      <div className="flex-1 mb-4">
        <h3 className="text-primary text-lg md:text-2xl font-medium mb-1">
          {title}
        </h3>
        <p className="text-[#242424] font-medium text-sm md:text-base mb-3">
          {category}
        </p>
        <p className="text-[#6C6C6C] text-sm md:text-base leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 mt-auto border-t border-gray-100 pt-3 md:border-none md:pt-0">
        <button
          onClick={confirmDelete}
          className="px-6 py-2 rounded-lg border border-[#FF4D4F] text-[#FF4D4F] text-sm font-medium hover:bg-red-50 transition-colors cursor-pointer"
        >
          Delete service
        </button>
        <button
          onClick={onEdit}
          className="px-6 py-2 rounded-lg bg-[#055e6e] text-white text-sm font-medium hover:bg-[#044a57] transition-colors"
        >
          Edit service
        </button>
      </div>
    </div>
  </div>
);
};

export default ProfileServiceCard;
