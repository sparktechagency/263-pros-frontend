import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Image as AntdImage } from "antd";
import MessageInput from "./MessageInput";

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
  time: string;
  avatar?: string;
  images?: string[];
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Glad you liked it! It's called \"Midnight Pulse,\" I can send you the stems if you're ready.",
    sender: "other",
    time: "10:39 AM",
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1766655715/565703184_4277408822578873_474492462293572835_n_klygz5.jpg",
  },
  {
    id: 2,
    text: "Glad you liked it! It's called \"Midnight Pulse,\" I can send you the stems if you're ready.",
    sender: "me",
    time: "10:39 AM",
  },
  {
    id: 3, // Fixed IDs to be unique
    text: "Glad you liked it! It's called \"Midnight Pulse,\" I can send you the stems if you're ready.",
    sender: "other",
    time: "10:39 AM",
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1766655715/565703184_4277408822578873_474492462293572835_n_klygz5.jpg",
  },
  {
    id: 4,
    text: "Glad you liked it! It's called \"Midnight Pulse,\" I can send you the stems if you're ready.",
    sender: "me",
    time: "10:39 AM",
  },
  {
    id: 5,
    text: "Glad you liked it! It's called \"Midnight Pulse,\" I can send you the stems if you're ready.",
    sender: "other",
    time: "10:39 AM",
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1766655715/565703184_4277408822578873_474492462293572835_n_klygz5.jpg",
  },
  {
    id: 6,
    text: "Glad you liked it! It's called \"Midnight Pulse,\" I can send you the stems if you're ready.",
    sender: "me",
    time: "10:39 AM",
  },
  {
    id: 7,
    text: "Glad you liked it! It's called \"Midnight Pulse,\" I can send you the stems if you're ready.",
    sender: "other",
    time: "10:39 AM",
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1766655715/565703184_4277408822578873_474492462293572835_n_klygz5.jpg",
  },
  {
    id: 8,
    text: "Glad you liked it! It's called \"Midnight Pulse,\" I can send you the stems if you're ready.",
    sender: "me",
    time: "10:39 AM",
  },
  {
    id: 9,
    text: "Glad you liked it! It's called \"Midnight Pulse,\" I can send you the stems if you're ready.",
    sender: "other",
    time: "10:39 AM",
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1766655715/565703184_4277408822578873_474492462293572835_n_klygz5.jpg",
  },
  {
    id: 10,
    text: "Glad you liked it! It's called \"Midnight Pulse,\" I can send you the stems if you're ready.",
    sender: "me",
    time: "10:39 AM",
  },
  {
    id: 11,
    text: "Glad you liked it! It's called \"Midnight Pulse,\" I can send you the stems if you're ready.",
    sender: "me",
    time: "10:39 AM",
  },
];

export function ChatConversation({ user }: { user: any }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const el = containerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string, mediaFiles: File[]) => {
    const imageUrls = mediaFiles.map((file) => URL.createObjectURL(file));

    const newMessage: Message = {
      id: messages.length + 1,
      text,
      sender: "me", // Assuming user is always "me" for now
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      images: imageUrls,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Header */}
      <div className="p-4 flex items-center gap-4 border-b border-gray-50">
        <div className="relative w-11 h-11 rounded-full overflow-hidden">
          <Image
            src={user?.avatar || "/placeholder.svg"}
            alt="Avatar"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-[15px]">
            {user?.name}
          </h3>
          <p className="text-[12px] text-gray-400">last seen 5m ago</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto" ref={containerRef}>
        <div className="flex flex-col justify-end min-h-full p-6 space-y-6">
          {messages?.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-3 max-w-[85%] ${
                msg.sender === "me" ? "self-end flex-row-reverse" : "self-start"
              }`}
            >
              {msg.sender === "other" && (
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 mb-4">
                  <Image
                    src={msg.avatar || "/placeholder.svg"}
                    alt="Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="space-y-1">
                <div
                  className={`p-4 text-[14px] leading-relaxed ${
                    msg.sender === "me"
                      ? "bg-[#005C66] text-white rounded-[20px_20px_4px_20px]"
                      : "bg-[#C4C4C4]/60 text-gray-800 rounded-[20px_20px_20px_4px]"
                  }`}
                >
                  {msg.images && msg.images.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {msg.images.map((img, idx) => (
                        <div key={idx} className="rounded-lg overflow-hidden">
                          <AntdImage
                            src={img}
                            width={150}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {msg.text && <span>{msg.text}</span>}
                </div>
                <div
                  className={`flex items-center gap-1 text-[10px] text-gray-400 ${
                    msg.sender === "me" ? "justify-end" : "justify-start ml-2"
                  }`}
                >
                  {msg.time}
                  {msg.sender === "me" && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12L9 17L20 6"
                        stroke="#005C66"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 16L9 21L20 10"
                        stroke="#005C66"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.5"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
}
