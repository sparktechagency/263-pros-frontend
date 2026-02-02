"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Button, Empty, Tabs } from "antd";
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
interface serviceRequest {
  requests: any[];
  quotations: any[];
  chatRooms: any[];
}

export function MyRequestsContent({
  requests,
  quotations,
  chatRooms,
}: serviceRequest) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "quotation",
  );

  const [messageId, setMessageId] = useState(searchParams.get("id"));
  console.log(messageId, "messageId");

  return (
    <div className="container py-16 space-y-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">My Requests</h1>
        <Button
          onClick={() => router.push("/services")}
          size="large"
          className="bg-[#B0D6D8]! hover:bg-[#8FBDBD] text-[#055E6E]! border-none! h-10! rounded-lg! transition-colors!"
        >
          Place New Request
        </Button>
      </div>

      {/* Top Cards Overview */}
      <RequestOverview requests={requests} />

      {/* Tabs Section */}
      <div id="request-tabs" className="mt-8">
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
                {tab.key === "quotation" && (
                  <QuotationsList
                    quotations={quotations}
                    setActiveTab={setActiveTab}
                  />
                )}
                {tab.key === "booked" && <BookedList />}
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

      <style jsx global>{`
        .custom-antd-tabs .ant-tabs-nav {
          margin-bottom: 0 !important;
        }

        .custom-antd-tabs .ant-tabs-nav::before {
          display: none;
        }

        .custom-antd-tabs .ant-tabs-tab {
          margin: 0 32px 0 0 !important;
          padding: 12px 0 !important;
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
