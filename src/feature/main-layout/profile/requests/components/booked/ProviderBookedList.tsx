import { Button, Modal, Divider, Empty, Tag } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import { imgUrl } from "../../../../../../../helpers/imgUrl";

export default function ProviderBookedList({ bookings }: { bookings: any[] }) {
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);

  const handleOpenModal = (booking: any) => {
    setSelectedBooking(booking);
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "green";
      case "completed":
        return "blue";
      case "cancelled":
        return "red";
      default:
        return "default";
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {bookings?.length === 0 ? (
        <Empty description="No bookings found" />
      ) : (
        bookings?.map((booking) => (
          <div
            key={booking._id}
            className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start gap-4"
          >
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden relative bg-gray-200">
                <Image
                  src={
                    booking?.request?.user?.image
                      ? imgUrl + booking?.request?.user?.image
                      : "/assets/images/provider/no_user.png"
                  }
                  alt={booking?.request?.user?.name}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {booking?.request?.user?.name}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    Service:{" "}
                    <span className="font-medium">
                      {booking?.request?.serviceId?.title}
                    </span>
                  </p>
                  <div className="mb-4">
                    <Tag
                      color={getStatusColor(booking?.status)}
                      className="capitalize"
                    >
                      {booking?.status}
                    </Tag>
                  </div>
                </div>
                <Button
                  type="primary"
                  className="bg-[#0f5b66] hover:bg-[#0b454d] h-9 px-4 rounded-md"
                  onClick={() => handleOpenModal(booking)}
                >
                  View Details
                </Button>
              </div>

              <p className="text-gray-500 line-clamp-2 text-sm">
                {booking?.request?.serviceDetails}
              </p>
            </div>
          </div>
        ))
      )}

      {/* Details Modal */}
      <Modal
        title={<span className="text-2xl font-semibold">Booking Details</span>}
        open={!!selectedBooking}
        onCancel={handleCloseModal}
        footer={null}
        width={600}
        centered
        className="booking-details-modal"
      >
        {selectedBooking && (
          <div className="mt-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 relative">
                <Image
                  src={
                    selectedBooking?.request?.user?.image
                      ? imgUrl + selectedBooking?.request?.user?.image
                      : "/assets/images/provider/no_user.png"
                  }
                  fill
                  alt={selectedBooking?.request?.user?.name}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  {selectedBooking?.request?.user?.name}
                </h4>
                <p className="text-gray-500">
                  {selectedBooking?.request?.location}
                </p>
                <Tag
                  color={getStatusColor(selectedBooking?.status)}
                  className="mt-1 capitalize"
                >
                  {selectedBooking?.status}
                </Tag>
              </div>
            </div>

            <Divider className="my-4" />

            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">Service</span>
                <span className="font-medium">
                  {selectedBooking?.request?.serviceId?.title}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">Booking Date</span>
                <span className="font-medium">
                  {selectedBooking?.request?.date
                    ? new Date(selectedBooking?.request?.date).toLocaleString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )
                    : "N/A"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">Location</span>
                <span className="font-medium">
                  {selectedBooking?.request?.location}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">Urgency</span>
                <span className="font-medium">
                  {selectedBooking?.request?.urgency ? "Yes" : "No"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">Budget Range</span>
                <span className="font-medium">
                  {selectedBooking?.request?.budgetRange}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">People</span>
                <span className="font-medium">
                  {selectedBooking?.request?.numberOfPeople}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4">
                <span className="text-gray-500">Agreed Price</span>
                <span className="font-medium text-lg text-[#0f5b66]">
                  ${selectedBooking?.price}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">
                Service Description
              </h4>
              <div className="bg-gray-50 p-4 rounded-md text-gray-700 leading-relaxed">
                {selectedBooking?.request?.serviceDetails}
              </div>
            </div>

            {selectedBooking?.note && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Your Note</h4>
                <div className="bg-yellow-50 p-4 rounded-md text-gray-700 border border-yellow-100">
                  {selectedBooking?.note}
                </div>
              </div>
            )}

            <div className="flex justify-end pt-4">
              <Button onClick={handleCloseModal} className="h-10 px-8">
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
