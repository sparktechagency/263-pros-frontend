import Image from "next/image";
import { Paperclip, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
  time: string;
  avatar?: string;
}

const mockMessages: Message[] = [
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
];

export function ChatConversation({ user }: { user: any }) {
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
      <div className="grow overflow-y-auto p-6 space-y-6 flex flex-col">
        <div className="flex justify-center my-4">
          <span className="text-[12px] text-gray-400 font-medium bg-white px-4">
            Sunday, 12 March
          </span>
        </div>

        {mockMessages?.map((msg) => (
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
                {msg.text}
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

      {/* Input */}
      <div className="p-6 pt-2">
        <div className="relative flex items-center bg-[#EDEDED] rounded-xl px-4 py-3">
          <button className="text-gray-400 hover:text-gray-600 mr-2">
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            placeholder="Type here"
            className="grow bg-transparent border-none text-[14px] text-gray-700 placeholder:text-gray-400 
           outline-none focus:outline-none focus:ring-0"
          />
          <button className="bg-[#005C66] text-white p-2.5 rounded-lg ml-2 hover:bg-[#004A52] transition-colors">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
