"use client";

import { Button, Empty } from "antd";
import Image from "next/image";
import { useState } from "react";
import { QuotationDetailModal } from "./QuotationDetailModal";
import { imgUrl } from "../../../../../../helpers/imgUrl";

export function QuotationsList({
  quotations,
  setActiveTab,
}: {
  quotations: any[];
  setActiveTab: any;
}) {
  const [selectedQuote, setSelectedQuote] = useState<
    (typeof quotations)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewRequest = (quote: (typeof quotations)[0]) => {
    setSelectedQuote(quote);
    setIsModalOpen(true);
  };
  return (
    <div className="space-y-6">
      {quotations?.length === 0 ? (
        <Empty description="No quotations found" />
      ) : (
        quotations?.map((quote) => (
          <div
            key={quote._id}
            className="bg-[#FBFBFB] border border-[#EBEBEB] rounded-xl p-6 "
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex flex-col md:flex-row md:items-end md:gap-3">
                  <h3 className="text-xl font-medium text-[#292929]">
                    {quote?.request?.serviceId?.title}
                  </h3>
                  <span className="text-xs text-gray-400">
                    {quote.updatedAt
                      ? new Date(quote.updatedAt).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "N/A"}
                  </span>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={
                        quote?.provider?.image
                          ? imgUrl + quote?.provider?.image
                          : "/assets/images/provider/no_user.png"
                      }
                      alt="Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[#6C6C6C]! text-[16px]! leading-snug! w-full md:max-w-sm">
                    {quote?.provider?.name} wants to assist you with your{" "}
                    {quote?.request?.serviceId?.title} request.
                  </p>
                </div>
              </div>
              <div className="text-lg md:text-2xl font-medium text-[#333333]">
                ${quote.price}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-2">
              <Button
                type="default"
                className="border-[#FF383C]! text-[#FF4D4F]! hover:bg-red-50! hover:text-[#FF4D4F]! h-8! transition-colors!  bg-transparent"
              >
                Close Request
              </Button>
              <Button
                className="bg-[#055E6E]! hover:bg-[#004A52]! text-white! h-8! transition-colors! border border-[#055E6E]"
                onClick={() => handleViewRequest(quote)}
              >
                View Request
              </Button>
            </div>
          </div>
        ))
      )}

      <QuotationDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        quotation={
          selectedQuote
            ? {
                avatar: selectedQuote?.provider?.image
                  ? imgUrl + selectedQuote?.provider?.image
                  : "/assets/images/provider/no_user.png",
                providerName: selectedQuote?.provider?.name,
                serviceName: selectedQuote?.request?.serviceId?.title,
                price: selectedQuote?.price,
                note: selectedQuote?.note,
                id: selectedQuote?._id,
                messageId: selectedQuote?.provider?._id,
              }
            : null
        }
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
