import { Button, Modal } from "antd";
import { useState } from "react";
import Image from "next/image";
import { imgUrl } from "../../../../../helpers/imgUrl";

interface ServiceRequest {
  title: string;
  day: string;
  provider: {
    name: string;
    location: string;
    avatar: string;
  };
  details: {
    requiredService: string;
    location: string;
    date: string;
    urgentRequest: string;
    budget: string;
    visitors: string;
    description: string;
  };
}

// const requests: ServiceRequest[] = [
//   {
//     title: "Domestic Cleaning",
//     day: "Saturday",
//     provider: {
//       name: "Matata",
//       location: "Avondale",
//       avatar:
//         "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1766655715/565703184_4277408822578873_474492462293572835_n_klygz5.jpg",
//     },
//     details: {
//       requiredService: "Domestic Cleaning",
//       location: "Harare",
//       date: "12 January, 2026",
//       urgentRequest: "No",
//       budget: "Not sure yet",
//       visitors: "02 People",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed arcu in odio fringilla feugiat non at felis. Sed ut massa porta, lobortis nibh eu, pellentesque nisl. Vivamus ultricies convallis nisi in gravida. Mauris eu purus lorem.",
//     },
//   },
//   {
//     title: "Pool Cleaning",
//     day: "Monday",
//     provider: {
//       name: "Sarah Jones",
//       location: "Borrowdale",
//       avatar:
//         "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1766655715/565703184_4277408822578873_474492462293572835_n_klygz5.jpg",
//     },
//     details: {
//       requiredService: "Pool Cleaning",
//       location: "Harare",
//       date: "15 January, 2026",
//       urgentRequest: "Yes",
//       budget: "$50 - $100",
//       visitors: "01 Person",
//       description:
//         "Need a thorough pool cleaning after the weekend party. The filters might need checking as well.",
//     },
//   },
// ];

export function RequestOverview({ requests }: any) {
  const [selectedRequest, setSelectedRequest] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewRequest = (request: ServiceRequest) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {requests?.map((request: any) => (
        <div
          key={request?._id}
          className="bg-white rounded-xl p-8 flex flex-col items-center text-center boxShadow"
        >
          <h3 className="text-xl font-semibold text-[#292929] mb-1">
            {request?.serviceId?.title}
          </h3>
          <p className="text-[#6C6C6C] mb-6">
            {request?.date
              ? new Date(request.date).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
              : ""}
          </p>

          <div className="bg-[#E6F2F2] p-4 rounded-lg mb-8 w-full">
            <p className="text-[#34C759] text-sm leading-relaxed max-w-[320px] mx-auto">
              Your request has been successfully Submitted. Please wait a while
              you will get quotes from providers.
            </p>
          </div>

          <Button
            size="large"
            className="bg-[#055E6E]! hover:bg-[#004A52]! text-white! h-11! px-8! rounded-lg! transition-colors! border-none!"
            onClick={() => handleViewRequest(request)}
          >
            View Request
          </Button>
        </div>
      ))}

      <Modal
        title={<span className="text-2xl font-semibold">Service details</span>}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={600}
        centered
        className="request-detail-modal"
      >
        {selectedRequest && (
          <div className="pt-4">
            {/* Provider Section */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-100">
                <Image
                  src={
                    selectedRequest.user?.image
                      ? imgUrl + selectedRequest.user?.image
                      : "/assets/images/provider/no_user.png"
                  }
                  alt={selectedRequest.user?.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#292929]">
                  {selectedRequest.user?.name}
                </h4>
                <p className="text-[#6C6C6C]">
                  {selectedRequest.user?.location}
                </p>
              </div>
            </div>

            {/* Details Table */}
            <div className="space-y-4 mb-8">
              {[
                {
                  label: "Required Service",
                  value: selectedRequest.serviceId?.title,
                },
                { label: "Location", value: selectedRequest.location },
                {
                  label: "Date",
                  value: selectedRequest.date
                    ? new Date(selectedRequest.date).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })
                    : "",
                },
                {
                  label: "Urgent request",
                  value: selectedRequest.urgency ? "Yes" : "No",
                },
                { label: "Budget", value: selectedRequest.budgetRange },
                {
                  label: "Number of people or guest",
                  value: selectedRequest.numberOfPeople,
                },
              ].map((item, i) => (
                <div key={i} className="flex text-[15px]">
                  <span className="w-1/2 text-[#6C6C6C] font-normal">
                    {item.label}
                  </span>
                  <span className="w-1/2 text-[#292929] font-medium">
                    : {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xl font-semibold text-[#292929] mb-4">
                Service description
              </h4>
              <p className="text-[#6C6C6C] leading-relaxed text-[15px]">
                {selectedRequest.serviceDetails}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
