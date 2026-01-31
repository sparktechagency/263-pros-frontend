"use client";
import { ChatSidebar } from "./ChatSidebar";
import { ChatConversation } from "./ChatConversation";
import { LuArrowLeft } from "react-icons/lu";
import { users } from "@/constants/messageList";

interface MessageCenterProps {
  messageId: string | null;
  setMessageId: (id: string | null) => void;
}

export function MessageCenter({ messageId, setMessageId }: MessageCenterProps) {
  const selectUser = (id: string) => {
    setMessageId(id);
  };

  if (messageId) {
    const selectedUser = users.find((u) => u.id === messageId) || users[0];
    return (
      <div className="h-[calc(100vh-260px)] flex flex-col">
        <button
          onClick={() => {
            setMessageId(null);
          }}
          className="mb-4 text-gray-600 font-medium flex items-center gap-1 cursor-pointer "
        >
          <span>
            <LuArrowLeft size={20} />{" "}
          </span>{" "}
          <span className="text-[16px]"> Back </span>
        </button>
        <ChatConversation user={selectedUser} />
      </div>
    );
  }
  return <ChatSidebar users={users} activeId={null} onSelect={selectUser} />;
}
