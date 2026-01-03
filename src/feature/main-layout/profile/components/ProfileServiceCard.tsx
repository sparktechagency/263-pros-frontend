"use client";
import React from "react";
import Image from "next/image";

interface ProfileServiceCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  onEdit: () => void;
  onDelete: () => void;
}

const ProfileServiceCard: React.FC<ProfileServiceCardProps> = ({
  title,
  category,
  description,
  image,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-[#F8F9FA] rounded-xl p-4 md:p-5 flex flex-col md:flex-row gap-5 mb-5 border border-transparent hover:border-gray-200 transition-colors">
      {/* Image */}
      <div className="relative w-full md:w-[240px] h-[160px] md:h-auto shrink-0 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 mb-4">
          <h3 className="text-[#055e6e] text-lg md:text-xl font-semibold mb-1">
            {title}
          </h3>
          <p className="text-[#242424] font-medium text-sm mb-3">
            {category}
          </p>
          <p className="text-[#525252] text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-auto border-t border-gray-100 pt-3 md:border-none md:pt-0">
          <button
            onClick={onDelete}
            className="px-6 py-2 rounded-lg border border-[#FF4D4F] text-[#FF4D4F] text-sm font-medium hover:bg-red-50 transition-colors"
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
