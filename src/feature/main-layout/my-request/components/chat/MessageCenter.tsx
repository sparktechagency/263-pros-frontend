"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ChatSidebar } from "./ChatSidebar";
import { Grid } from "antd";
import { ChatConversation } from "./ChatConversation";

interface MessageCenterProps {
  messageId: string | null;
  setMessageId: (id: string | null) => void;
  chatRooms: any[];
}

export function MessageCenter({
  messageId,
  setMessageId,
  chatRooms,
}: MessageCenterProps) {
  const { lg } = Grid.useBreakpoint();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [activeUser, setActiveUser] = useState<any>(null);

  // On desktop, if no ID is selected, default to the first user
  useEffect(() => {
    if (lg && !messageId && chatRooms.length > 0) {
      // const params = new URLSearchParams(searchParams.toString());
      // params.set("id", users[0].id);
      // router.replace(`${pathname}?${params.toString()}`);
      setActiveUser(chatRooms[0]);
      setMessageId(chatRooms[0]._id);
    }
  }, [lg, messageId, router, searchParams, pathname]);

  const selectUser = (user: any) => {
    // const params = new URLSearchParams(searchParams.toString());
    // params.set("id", id);
    // router.push(`${pathname}?${params.toString()}`);
    setActiveUser(user);
    setMessageId(user._id);
  };

  // Mobile view logic:
  // If id exists, show conversation. If not, show sidebar.
  if (!lg) {
    if (messageId) {
      const selectedUser =
        chatRooms.find((u) => u._id === messageId) || chatRooms[0];
      return (
        <div className="min-h-[600px] flex flex-col">
          <button
            onClick={() => {
              // const params = new URLSearchParams(searchParams.toString());
              // params.delete("id");
              // router.push(`${pathname}?${params.toString()}`);
              setMessageId(null);
            }}
            className="mb-4 text-[#005C66] font-medium flex items-center gap-2"
          >
            ← Back to Messages
          </button>
          <ChatConversation activeUser={selectedUser} messageId={messageId} />
        </div>
      );
    }
    return (
      <ChatSidebar
        messageId={null}
        onSelect={selectUser}
        chatRooms={chatRooms}
      />
    );
  }

  // Desktop view

  return (
    <div className="flex gap-6 h-[700px]">
      <div className="w-[320px] shrink-0">
        <ChatSidebar
          messageId={messageId}
          onSelect={selectUser}
          chatRooms={chatRooms}
        />
      </div>
      <div className="grow">
        <ChatConversation messageId={messageId} activeUser={activeUser} />
      </div>
    </div>
  );
}
