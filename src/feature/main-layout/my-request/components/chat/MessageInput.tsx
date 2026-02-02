"use client";

import { useState, useRef } from "react";
import { Input, Button, Image as AntdImage, Popover } from "antd";
import { SmileOutlined, CloseCircleFilled } from "@ant-design/icons";
import { Paperclip, Send } from "lucide-react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface MessageInputProps {
  onSend?: (text: string, mediaFiles: File[]) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState("");
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useRef<any>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const urls = files.map((file) => URL.createObjectURL(file));
    setMediaFiles((prev) => [...prev, ...files]);
    setPreviewUrls((prev) => [...prev, ...urls]);
  };

  // Remove selected file
  const handleRemoveMedia = (index: number) => {
    setMediaFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle send
  const handleSend = () => {
    if (!message.trim() && mediaFiles.length === 0) return;

    if (onSend) {
      onSend(message, mediaFiles);
    }
    // console.log("Sending message:", message);
    // console.log("Sending media:", mediaFiles);

    setMessage("");
    setMediaFiles([]);
    setPreviewUrls([]);
  };

  // Append emoji to message
  const onEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="relative flex items-center bg-white rounded-xl px-4 py-3">
      {/* Media preview section (above input) */}
      {previewUrls.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 px-1">
          {previewUrls.map((url, index) => {
            const file = mediaFiles[index];
            return (
              <div
                key={index}
                className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden bg-[#1A2942] group"
              >
                {file.type.startsWith("image/") ? (
                  <AntdImage
                    src={url}
                    alt="preview"
                    className="object-cover w-full h-full !m-0"
                    preview={false}
                  />
                ) : (
                  <video
                    src={url}
                    className="object-cover w-full h-full"
                    controls={false}
                    muted
                  />
                )}
                <Button
                  type="text"
                  icon={<CloseCircleFilled />}
                  onClick={() => handleRemoveMedia(index)}
                  className="absolute! top-0! right-0!  bg-gray-200!  rounded-full! p-0!"
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Input + Buttons */}
      <div className="flex items-center gap-2 lg:gap-3 w-full">
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Attachment button */}
        <Button
          type="text"
          icon={<Paperclip size={24} className="text-xl lg:text-2xl" />}
          className="text-gray-400 hover:text-gray-600 mr-2"
          onClick={() => fileInputRef.current?.click()}
        />

        {/* Text input */}
        <div className="flex-1 relative">
          <Input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onPressEnter={handleSend}
            placeholder="Type a message"
            suffix={
              <Popover
                content={<EmojiPicker onEmojiClick={onEmojiClick} />}
                trigger="click"
                placement="topLeft"
              >
                <Button
                  type="text"
                  icon={<SmileOutlined />}
                  className="text-gray-400! hover:text-white! h-8! w-8!"
                />
              </Popover>
            }
            className="grow bg-[#EBEBEB]! border-none! text-[16px]! text-gray-700 placeholder:text-gray-400 
           outline-none focus:outline-none focus:ring-0 w-full!"
          />
        </div>

        {/* Send button */}
        <Button
          type="primary"
          icon={<Send size={20} className="-ml-0.5 -mb-0.5" />}
          onClick={handleSend}
          className="h-10! w-10! bg-[#055E6E]! hover:!bg-[#055E6E]! border-none! rounded-full!"
        />
      </div>
    </div>
  );
}
