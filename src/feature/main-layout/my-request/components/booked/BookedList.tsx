import { Button } from "antd";
import Image from "next/image";
import { toast } from "sonner";
import { useState } from "react";
import { ReviewModal } from "./ReviewModal";
import { imgUrl } from "../../../../../../helpers/imgUrl";
import { myFetch } from "../../../../../../helpers/myFetch";
import { revalidateTags } from "../../../../../../helpers/revalidateTags";

export function BookedList({ bookings }: { bookings: any[] }) {
  console.log(bookings);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<number | null>(
    null,
  );

  const handleOpenReview = (id: number) => {
    setSelectedBookingId(id);
    setIsReviewModalOpen(true);
  };

  const handleReviewSubmit = (values: { rating: number; review: string }) => {
    // console.log("Submitting review for booking:", selectedBookingId, values);
    toast.success("Review submitted successfully!");
  };

  const completeBooking = async (id: string) => {
    try {
      toast.promise(
        myFetch(`/service-booking/confirm/${id}`, {
          method: "PATCH",
          body: {
            bookingStatus: "completed",
          },
          tags: ["service-booking"],
        }),
        {
          loading: "completing booking...",
          success: async (res) => {
            if (res?.success) {
              revalidateTags(["service-booking"]);
              setIsReviewModalOpen(false);
              return res?.message || "Booking completed successfully";
            }
            throw new Error(res?.message || "Booking completion failed");
          },
          error: (err) => err.message || "Error completing booking",
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-6">
      {bookings?.map((booking) => (
        <div
          key={booking._id}
          className="bg-[#FBFBFB] border border-[#EBEBEB] rounded-xl p-6 "
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex flex-col md:flex-row md:items-end md:gap-3">
                <h3 className="text-lg font-medium text-[#292929]">
                  {booking?.request?.serviceId?.title}
                </h3>
                <span className="text-xs text-[#6C6C6C]">
                  {new Date(booking?.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-start gap-4 mt-4">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={
                      booking?.provider?.image
                        ? imgUrl + booking?.provider?.image
                        : "/assets/image/provider/no_user.png"
                    }
                    alt="Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#6C6C6C]! text-[16px]! leading-snug! max-w-sm">
                  {booking?.note}
                </p>
              </div>
            </div>
            <div className="text-lg md:text-2xl font-medium text-[#333333]">
              ${booking?.price}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-2">
            {booking.status === "confirmed" ? (
              <>
                <Button
                  type="default"
                  className="border-[#FF383C]! text-[#FF4D4F]! hover:bg-red-50! hover:text-[#FF4D4F]! h-8! transition-colors!  bg-transparent"
                >
                  Cancel booking
                </Button>
                <Button
                  onClick={() => completeBooking(booking._id)}
                  className="bg-[#055E6E]! hover:bg-[#004A52]! text-white! h-8! transition-colors! border border-[#055E6E]"
                >
                  Mark as Complete
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="default"
                  onClick={() => handleOpenReview(booking.id)}
                  className="border-[#FAAD14]! text-[#FAAD14]! hover:bg-orange-50! hover:text-[#FAAD14]! rounded-lg! h-8! transition-colors! font-medium! bg-transparent!"
                >
                  Review
                </Button>
                <Button
                  onClick={() => toast.info("Feature coming soon")}
                  className="bg-[#055E6E]! hover:bg-[#004A52]! text-white! h-8! transition-colors! border border-[#055E6E] "
                >
                  Complete
                </Button>
              </>
            )}
          </div>
        </div>
      ))}

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmit={handleReviewSubmit}
      />
    </div>
  );
}
