"use client";

import { useSearchParams } from "next/navigation";
import { Button, Tabs } from "antd";
import { RequestOverview } from "./components/RequestOverview";
import { QuotationsList } from "./components/quotation/QuotationsList";
import { BookedList } from "./components/booked/BookedList";
import { MessageCenter } from "./components/chat/MessageCenter";
import { useState } from "react";

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

      <style jsx global>{`
        .custom-antd-tabs .ant-tabs-nav {
          margin-bottom: 0 !important;
        }

        .custom-antd-tabs .ant-tabs-nav::before {
          display: none;
        }

        .custom-antd-tabs .ant-tabs-tab {
          margin: 0 32px 0 0 !important;
        }

        .custom-antd-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #005c66 !important;
        }

        .custom-antd-tabs .ant-tabs-ink-bar {
          background: #005c66 !important;
          height: 3px !important;
          border-radius: 2px;
        }

        .custom-antd-tabs .ant-tabs-tab:hover {
          color: #005c66 !important;
        }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          .custom-antd-tabs .ant-tabs-tab {
            margin: 0 16px 0 0 !important;
            padding: 8px 0 !important;
          }

          .custom-antd-tabs .ant-tabs-tab-btn {
            font-size: 14px !important;
          }

          .custom-antd-tabs .ant-tabs-ink-bar {
            height: 2px !important;
          }
        }
      `}</style>
    </div>
  );
}
