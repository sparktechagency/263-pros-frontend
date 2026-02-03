"use client";

import { useSearchParams } from "next/navigation";
import { Empty, Tabs } from "antd";

import { useState } from "react";
import "./style.css";
import { EnquiryList } from "./components/enquiries/EnquiryList";
import { MessageCenter } from "../../my-request/components/chat/MessageCenter";
import ProviderBookedList from "./components/booked/ProviderBookedList";
const tabs = [
  { key: "enquiries", label: "Enquiries" },
  { key: "booked", label: "Booked" },
  { key: "message", label: "Message" },
];

export function Requests({
  enquiries,
  chatRooms,
  bookings,
}: {
  enquiries: any[];
  chatRooms: any[];
  bookings: any[];
}) {
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "enquiries",
  );

  const [messageId, setMessageId] = useState(searchParams.get("id"));

  return (
    <div className=" ">
      {/* Tabs Section */}
      <div id="request-tabs" className="">
        <Tabs
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key)}
          items={tabs.map((tab) => ({
            key: tab.key,
            label: (
              <span className="text-lg font-medium px-2">{tab.label}</span>
            ),
            children: (
              <div className="py-6">
                {tab.key === "enquiries" && (
                  <EnquiryList
                    enquiries={enquiries}
                    setActiveTab={setActiveTab}
                  />
                )}
                {tab.key === "booked" && (
                  <ProviderBookedList bookings={bookings} />
                )}
                {tab.key === "message" && (
                  <>
                    {chatRooms.length > 0 ? (
                      <MessageCenter
                        messageId={messageId}
                        setMessageId={setMessageId}
                        chatRooms={chatRooms}
                      />
                    ) : (
                      <Empty description="No chat rooms found" />
                    )}
                  </>
                )}
              </div>
            ),
          }))}
          className="custom-antd-tabs"
        />
      </div>
    </div>
  );
}
