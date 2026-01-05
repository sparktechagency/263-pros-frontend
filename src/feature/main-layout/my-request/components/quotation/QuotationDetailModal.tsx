"use client";

import { Modal, Button } from "antd";
import Image from "next/image";

interface QuotationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  quotation: {
    avatar: string;
    providerName: string;
    serviceName: string;
    price: string;
    note: string;
  } | null;
}

export function QuotationDetailModal({
  isOpen,
  onClose,
  quotation,
}: QuotationDetailModalProps) {
  if (!quotation) return null;

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
              <button className="bg-[#E6F2F2] text-[#055E6E] text-xs font-medium px-3 py-1 rounded-md hover:bg-[#D1EAEA] transition-colors">
                View profile
              </button>
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
            {quotation.price}
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
            onClick={onClose}
          >
            Message
          </Button>
          <Button
            className="flex-1 h-12 text-lg bg-[#055E6E]! hover:bg-[#004A52]! text-white! border-none! font-medium rounded-lg"
            onClick={onClose}
          >
            Book Service
          </Button>
        </div>
      </div>
    </Modal>
  );
}
