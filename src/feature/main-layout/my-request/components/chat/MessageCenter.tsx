"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ChatSidebar } from "./ChatSidebar";
import { Grid } from "antd";
import { ChatConversation } from "./ChatConversation";

const users = [
  {
    id: "1",
    name: "Shariful Devidwar",
    lastMessage: "Yo Bro! Whats up??",
    time: "11:30 AM",
    unread: 2,
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1766655715/565703184_4277408822578873_474492462293572835_n_klygz5.jpg",
  },
  {
    id: "2",
    name: "Shariful Devidwar",
    lastMessage: "Babu Ki koro?",
    time: "11:30 AM",
    unread: 2,
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1766655715/565703184_4277408822578873_474492462293572835_n_klygz5.jpg",
  },
  {
    id: "3",
    name: "Shariful Devidwar",
    lastMessage: "Yo Bro! Whats up??",
    time: "11:30 AM",
    unread: 2,
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1766655715/565703184_4277408822578873_474492462293572835_n_klygz5.jpg",
  },
  {
    id: "4",
    name: "Shariful Devidwar",
    lastMessage: "Yo Bro! Whats up??",
    time: "11:30 AM",
    unread: 2,
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1766655715/565703184_4277408822578873_474492462293572835_n_klygz5.jpg",
  },
];

interface MessageCenterProps {
  messageId: string | null;
  setMessageId: (id: string | null) => void;
}

export function MessageCenter({ messageId, setMessageId }: MessageCenterProps) {
  const { lg } = Grid.useBreakpoint();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // On desktop, if no ID is selected, default to the first user
  useEffect(() => {
    if (lg && !messageId && users.length > 0) {
      // const params = new URLSearchParams(searchParams.toString());
      // params.set("id", users[0].id);
      // router.replace(`${pathname}?${params.toString()}`);
      setMessageId(users[0].id);
    }
  }, [lg, messageId, router, searchParams, pathname]);

  const selectUser = (id: string) => {
    // const params = new URLSearchParams(searchParams.toString());
    // params.set("id", id);
    // router.push(`${pathname}?${params.toString()}`);
    setMessageId(id);
  };

  // Mobile view logic:
  // If id exists, show conversation. If not, show sidebar.
  if (!lg) {
    if (messageId) {
      const selectedUser = users.find((u) => u.id === messageId) || users[0];
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
          <ChatConversation user={selectedUser} />
        </div>
      );
    }
    return <ChatSidebar users={users} activeId={null} onSelect={selectUser} />;
  }

  // Desktop view
  const activeUser = users.find((u) => u.id === messageId) || users[0];

  return (
    <div className="flex gap-6 h-[700px]">
      <div className="w-[320px] shrink-0">
        <ChatSidebar users={users} activeId={messageId} onSelect={selectUser} />
      </div>
      <div className="grow">
        <ChatConversation user={activeUser} />
      </div>
    </div>
  );
}
