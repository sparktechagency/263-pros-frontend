"use client";

import { Modal, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { myFetch } from "../../../../../../helpers/myFetch";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface QuotationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  quotation: {
    avatar: string;
    providerName: string;
    serviceName: string;
    price: string;
    note: string;
    id: string | number;
    messageId: string;
  } | null;
  setActiveTab: any;
}

export function QuotationDetailModal({
  isOpen,
  onClose,
  quotation,
  setActiveTab,
}: QuotationDetailModalProps) {
  if (!quotation) return null;
  console.log(quotation.id);
  // submit form
  const router = useRouter();
  const bookQuotation = async () => {
    try {
      toast.promise(
        myFetch(`/service-booking/${quotation.id}`, {
          method: "PATCH",
          body: {
            bookingStatus: "confirmed",
          },
        }),
        {
          loading: "Booking quotation...",
          success: (res) => {
            if (res?.success) {
              onClose();
              return res?.message || "Quotation booked successfully";
            }
            throw new Error(res?.message || "Quotation booking failed");
          },
          error: (err) => err.message || "Error booking quotation",
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChat = () => {
    console.log(quotation.messageId);

    toast.promise(
      myFetch(`/chat-room/${quotation.messageId}`, {
        method: "POST",
        tags: ["create-room"],
      }),
      {
        loading: "Creating chat...",
        success: (res) => {
          if (res?.success) {
            setActiveTab("message");
            onClose();
            return res?.message;
          }
          throw new Error(res?.message || "Chat creation failed");
        },
        error: (err) => err.message || "Error creating chat",
      },
    );
  };
  return (
    <Modal
      title={<span className="text-2xl font-semibold">Request details</span>}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={600}
      centered
      className="quotation-detail-modal"
    >
      <div className="pt-4">
        {/* Provider Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-100 shrink-0">
            <Image
              src={quotation.avatar}
              alt={quotation.providerName}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h4 className="text-xl font-semibold text-[#292929]">
                {quotation.providerName}
              </h4>
              <Link
                href={`/provider/${quotation.id}`}
                className="bg-[#E6F2F2]! text-[#055E6E]! text-xs! font-medium! px-3! py-1! rounded-md! hover:bg-[#D1EAEA]! transition-colors!"
              >
                View profile
              </Link>
            </div>
            <p className="text-[#6C6C6C] text-lg mt-0.5">
              {quotation.serviceName}
            </p>
          </div>
        </div>

        {/* Service Price */}
        <div className="flex justify-between items-center mb-10">
          <h5 className="text-xl font-semibold text-[#292929]">
            Service Price
          </h5>
          <span className="text-2xl font-semibold text-[#292929]">
            ${quotation.price}
          </span>
        </div>

        {/* Note Section */}
        <div className="mb-10">
          <h5 className="text-xl font-semibold text-[#292929] mb-4">Note</h5>
          <p className="text-[#6C6C6C] leading-relaxed text-[15px]">
            {quotation.note}
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-4">
          <Button
            className="flex-1 h-12 text-lg border-[#055E6E] text-[#292929] hover:text-[#055E6E]! hover:border-[#055E6E]! font-medium rounded-lg"
            onClick={handleChat}
          >
            Message
          </Button>
          <Button
            className="flex-1 h-12 text-lg bg-[#055E6E]! hover:bg-[#004A52]! text-white! border-none! font-medium rounded-lg"
            onClick={bookQuotation}
          >
            Book Service
          </Button>
        </div>
      </div>
    </Modal>
  );
}
