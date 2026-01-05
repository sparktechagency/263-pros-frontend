"use client";

import Image from "next/image";

interface User {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
}

interface ChatSidebarProps {
  users: User[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

export function ChatSidebar({ users, activeId, onSelect }: ChatSidebarProps) {
  return (
    <div className="space-y-2">
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => onSelect(user.id)}
          className={`w-full flex items-center gap-4 p-4 rounded-xl transition-colors text-left group
            ${activeId === user.id ? "bg-[#EAEAEA]" : "hover:bg-gray-50"}
          `}
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
            <Image
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grow min-w-0">
            <div className="flex justify-between items-start mb-0.5">
              <h4 className="font-semibold text-gray-800 truncate text-[15px]">
                {user.name}
              </h4>
              <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap">
                {user.time}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[13px] text-gray-500 truncate">
                {user.lastMessage}
              </p>
              {user.unread > 0 && (
                <span className="bg-[#005C66] text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full ml-2">
                  {user.unread}
                </span>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
