"use client";

import { useSearchParams } from "next/navigation";
import { Tabs } from "antd";
import { QuotationsList } from "./components/quotation/QuotationsList";
import { BookedList } from "./components/booked/BookedList";
import { MessageCenter } from "./components/chat/MessageCenter";
import { useState } from "react";
import "./style.css"
const tabs = [
  { key: "quotation", label: "Quotations" },
  { key: "booked", label: "Booked" },
  { key: "message", label: "Message" },
];

export function Requests() {
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "quotation"
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
                {tab.key === "quotation" && <QuotationsList />}
                {tab.key === "booked" && <BookedList />}
                {tab.key === "message" && (
                  <MessageCenter
                    messageId={messageId}
                    setMessageId={setMessageId}
                  />
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
