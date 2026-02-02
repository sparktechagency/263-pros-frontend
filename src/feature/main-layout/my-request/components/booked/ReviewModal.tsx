"use client";

import { Modal, Button, Rate, Input } from "antd";
import { useState } from "react";

const { TextArea } = Input;

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: { review: number; message: string }) => void;
}

export function ReviewModal({ isOpen, onClose, onSubmit }: ReviewModalProps) {
  const [review, setRating] = useState(0);
  const [message, setReview] = useState("");

  const handleSubmit = () => {
    onSubmit({ review, message });
    setRating(0);
    setReview("");
    onClose();
  };

  return (
    <Modal
      title={<span className="text-2xl font-semibold">Rating & Review</span>}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={600}
      centered
      className="review-modal"
    >
      <div className="pt-4">
        <div className="mb-8">
          <h4 className="text-lg font-medium text-[#292929] mb-4">
            How was the service?
          </h4>
          <Rate
            value={review}
            onChange={setRating}
            className="text-3xl text-gray-400"
          />
        </div>

        <div className="mb-10">
          <h4 className="text-lg font-medium text-[#292929] mb-4">
            Write a Review
          </h4>
          <TextArea
            rows={6}
            placeholder="Write here"
            value={message}
            onChange={(e) => setReview(e.target.value)}
            className="rounded-lg border-[#EBEBEB] focus:border-[#055E6E] focus:ring-1 focus:ring-[#055E6E] transition-all resize-none text-[15px] p-4"
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="primary"
            onClick={handleSubmit}
            className="bg-[#055E6E]! hover:bg-[#004A52]! text-white! h-11! px-12! rounded-lg! text-lg! font-medium! border-none!"
          >
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
}
