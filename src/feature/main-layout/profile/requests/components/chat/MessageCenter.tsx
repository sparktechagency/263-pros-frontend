"use client";
import { ChatSidebar } from "./ChatSidebar";
import { ChatConversation } from "./ChatConversation";

const users = [
  {
    id: "1",
    name: "Shariful Devidwar",
    lastMessage: "Babu Khaiso?",
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
    lastMessage: "Babu Khaiso?",
    time: "11:30 AM",
    unread: 2,
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1766655715/565703184_4277408822578873_474492462293572835_n_klygz5.jpg",
  },
  {
    id: "4",
    name: "Shariful Devidwar",
    lastMessage: "Babu Khaiso?",
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

  const selectUser = (id: string) => {
    setMessageId(id);
  };

  // Mobile view logic:
  // If id exists, show conversation. If not, show sidebar.
  if (messageId) {
      const selectedUser = users.find((u) => u.id === messageId) || users[0];
      return (
        <div className="h-[calc(100vh-245px)] flex flex-col">
          <button
            onClick={() => {
              setMessageId(null);
            }}
            className="mb-4 text-[#005C66] font-medium flex items-center gap-2 cursor-pointer"
          >
            ← Back
          </button>
          <ChatConversation user={selectedUser} />
        </div>
      );
    }
    return <ChatSidebar users={users} activeId={null} onSelect={selectUser} />;
  }