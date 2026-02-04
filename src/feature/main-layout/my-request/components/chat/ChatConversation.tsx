import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { Image as AntdImage } from "antd";
import MessageInput from "./MessageInput";
import { myFetch } from "../../../../../../helpers/myFetch";
import { imgUrl } from "../../../../../../helpers/imgUrl";
import getProfile from "../../../../../../helpers/getProfile";
import { toast } from "sonner";
import { io } from "socket.io-client";
import { revalidateTags } from "../../../../../../helpers/revalidateTags";
import { useRouter } from "next/navigation";

export function ChatConversation({
  messageId,
  activeUser,
}: {
  messageId: any;
  activeUser: any;
}) {
  const [messages, setMessages] = useState<any[]>([]);
  const [userId, setUserId] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const socket = useMemo(() => io(imgUrl), []);

  useEffect(() => {
    socket.on(`getMessage::${messageId}`, (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, [socket, messageId]);

  const scrollToBottom = () => {
    const el = containerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string, mediaFiles: File[]) => {
    const formData = new FormData();

    formData.append("text", text);
    formData.append("chatId", messageId);

    mediaFiles.forEach((file) => {
      formData.append("image", file);
    });
    try {
      const res = await myFetch(`/message`, {
        method: "POST",
        body: formData,
        tags: ["chat"],
      });
      if (res?.success) {
        setMessages((prev) => [...prev, res.data]);
        revalidateTags(["chat"]);
      }
      // console.log(res, "res");
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  const getChatMessages = async () => {
    try {
      const res = await myFetch(`/message/${messageId}`, {
        method: "GET",
        tags: ["chat"],
      });
      // console.log(res, "messages");
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChatMessages();
  }, [messageId, handleSendMessage, router]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfile();
        setUserId(profileData?._id);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [messageId]);

  // console.log(messages);
  return (
    <div className="bg-white border border-gray-100 rounded-2xl flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Header */}
      <div className="p-4 flex items-center gap-4 border-b border-gray-50">
        <div className="relative w-11 h-11 rounded-full overflow-hidden">
          <Image
            src={
              activeUser?.participants[0]?.image
                ? imgUrl + activeUser?.participants[0]?.image
                : "/assets/images/provider/no_user.png"
            }
            alt="Avatar"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-[15px]">
            {activeUser?.participants[0]?.name}
          </h3>
          {/* <p className="text-[12px] text-gray-400">last seen 5m ago</p> */}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto" ref={containerRef}>
        <div className="flex flex-col justify-end min-h-full p-6 space-y-6">
          {messages?.map((msg: any) => (
            <div
              key={msg._id}
              className={`flex items-end gap-3 max-w-[85%] ${
                msg.sender === userId
                  ? "self-end flex-row-reverse"
                  : "self-start"
              }`}
            >
              {msg.sender !== userId ? (
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 mb-4">
                  <Image
                    src={
                      activeUser?.participants[0]?.image
                        ? imgUrl + activeUser?.participants[0]?.image
                        : "/assets/images/provider/no_user.png"
                    }
                    alt="Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="space-y-1">
                <div
                  className={`p-4 text-[14px] leading-relaxed ${
                    msg.sender === userId
                      ? "bg-[#005C66] text-white rounded-[20px_20px_4px_20px]"
                      : "bg-[#C4C4C4]/60 text-gray-800 rounded-[20px_20px_20px_4px]"
                  }`}
                >
                  {/* {msg.image && msg.image.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {msg.images.map((img: any, idx: number) => (
                        <div key={idx} className="rounded-lg overflow-hidden">
                          <AntdImage
                            src={imgUrl + img}
                            width={150}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )} */}

                  {msg?.image && msg?.image.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      <div className="rounded-lg overflow-hidden">
                        <AntdImage
                          src={imgUrl + msg.image}
                          width={150}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {msg.text && <span>{msg.text}</span>}
                </div>
                <div
                  className={`flex items-center gap-1 text-[10px] text-gray-400 ${
                    msg.sender === userId ? "justify-end" : "justify-start ml-2"
                  }`}
                >
                  {new Date(msg.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  {msg.sender === userId && (
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
