import { Button, Input, Modal, Divider, Empty } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import { imgUrl } from "../../../../../../../helpers/imgUrl";
import { toast } from "sonner";
import { myFetch } from "../../../../../../../helpers/myFetch";
import { revalidateTags } from "../../../../../../../helpers/revalidateTags";

export function EnquiryList({
  enquiries,
  setActiveTab,
}: {
  enquiries: any[];
  setActiveTab: (tab: string) => void;
}) {
  const [selectedEnquiry, setSelectedEnquiry] = useState<any | null>(null);
  const [price, setPrice] = useState("");
  const [note, setNote] = useState("");

  const handleOpenModal = (enquiry: any) => {
    setSelectedEnquiry(enquiry);
  };
  console.log(selectedEnquiry);

  const handleCloseModal = () => {
    setSelectedEnquiry(null);
  };

  const handleSendQuote = () => {
    // console.log(selectedEnquiry?._id);
    const payload = {
      price: Number(price),
      note,
      bookingStatus: "accepted",
    };
    if (!price) {
      toast.error("Please enter price");
      return;
    }
    if (!note) {
      toast.error("Please enter note");
      return;
    }
    toast.promise(
      myFetch(`/service-booking/${selectedEnquiry?._id}`, {
        method: "PATCH",
        body: payload,
      }),
      {
        loading: "Sending quotation...",
        success: async (res) => {
          if (res?.success) {
            revalidateTags(["service-booking"]);
            setPrice("");
            setNote("");
            handleCloseModal();
            return res?.message || "Quotation sent successfully";
          }
          throw new Error(res?.message || "Quotation sending failed");
        },
        error: (err) => err.message || "Error sending quotation",
      },
    );
  };
  // console.log(enquiries);

  // chat
  const handleChat = () => {
    toast.promise(
      myFetch(`/chat-room/${selectedEnquiry?.request?.user?._id}`, {
        method: "POST",
        tags: ["create-room"],
      }),
      {
        loading: "Creating chat...",
        success: (res) => {
          if (res?.success) {
            setActiveTab("message");
            revalidateTags(["create-room"]);
            handleCloseModal();
            return res?.message;
          }
          throw new Error(res?.message || "Chat creation failed");
        },
        error: (err) => err.message || "Error creating chat",
      },
    );
  };
  return (
    <div className="flex flex-col gap-4">
      {enquiries?.length === 0 ? (
        <Empty description="No enquiries found" className="" />
      ) : (
        enquiries?.map((enquiry) => (
          <div
            key={enquiry._id}
            className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start gap-4"
          >
            <div className="shrink-0">
              {/* Use a colored div fallback if image is missing/broken in dev */}
              <div className="w-16 h-16 rounded-full overflow-hidden relative bg-gray-200">
                <Image
                  src={
                    enquiry?.request?.user?.image
                      ? imgUrl + enquiry?.request?.user?.image
                      : "/assets/images/provider/no_user.png"
                  }
                  alt={enquiry?.request?.user?.name}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {enquiry?.request?.user?.name} Requesting quote for{" "}
                {enquiry?.request?.serviceId?.title}.
              </h3>
              <p className="text-gray-500 mb-4 line-clamp-2">
                A service provider profile description is a comprehensive
                overview of an individual or company offering services,
                detailing who they are, what they do (services, tasks,
                expertise)
              </p>
              <div className="flex justify-end">
                <Button
                  type="primary"
                  className="bg-[#0f5b66] hover:bg-[#0b454d] h-10 px-6 rounded-md"
                  onClick={() => handleOpenModal(enquiry)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))
      )}

      {/* Details Modal */}
      <Modal
        title={<span className="text-2xl font-semibold">Service details</span>}
        open={!!selectedEnquiry}
        onCancel={handleCloseModal}
        footer={null}
        width={600}
        centered
        className="enquiry-details-modal"
      >
        {selectedEnquiry && (
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={
                    selectedEnquiry?.request?.user?.image
                      ? imgUrl + selectedEnquiry?.request?.user?.image
                      : "/assets/images/provider/no_user.png"
                  }
                  width={48}
                  height={48}
                  draggable={false}
                  alt={selectedEnquiry?.request?.user?.name}
                  className="w-auto h-auto object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-base">
                  {selectedEnquiry?.request?.user?.name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {selectedEnquiry?.request?.location}
                </p>
              </div>
            </div>

            <Divider className="my-4" />

            <div className="space-y-3 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">Required Service</span>
                <span className="font-medium">
                  : {selectedEnquiry?.request?.serviceId?.title}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">Location</span>
                <span className="font-medium">
                  : {selectedEnquiry?.request?.location}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">Date</span>
                <span className="font-medium">
                  :{" "}
                  {selectedEnquiry?.createdAt
                    ? new Date(selectedEnquiry?.createdAt).toLocaleString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        },
                      )
                    : ""}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">Urgent request</span>
                <span className="font-medium">
                  : {selectedEnquiry?.request?.urgency ? "Yes" : "No"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">Budget</span>
                <span className="font-medium">
                  : {selectedEnquiry?.request?.budgetRange}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">Number of people or guest</span>
                <span className="font-medium">
                  : {selectedEnquiry?.request?.numberOfPeople}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">
                Service description
              </h4>
              <p className="text-gray-500 leading-relaxed">
                {selectedEnquiry?.request?.serviceDetails}
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Enter your price
              </label>
              <Input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="eg: $40.00"
                className="h-11 border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-8">
              <label className="block text-lg font-semibold mb-2">Note</label>
              <Input.TextArea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write here"
                rows={4}
                className="border-gray-300 rounded-md"
              />
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleChat}
                className="h-11 flex-1 border-gray-400 rounded-md text-base hover:text-gray-700 hover:border-gray-500"
              >
                Message
              </Button>
              <Button
                onClick={handleSendQuote}
                type="primary"
                className="h-11 flex-1 bg-[#0f5b66] hover:bg-[#0b454d] rounded-md text-base"
              >
                Send quote
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
