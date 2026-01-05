import { Button } from "antd";

const requests = [
  {
    title: "Domestic Cleaning",
    day: "Saturday",
  },
  {
    title: "Pool Cleaning",
    day: "Monday",
  },
];

export function RequestOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {requests.map((request, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-8 flex flex-col items-center text-center boxShadow"
        >
          <h3 className="text-xl font-semibold text-[#292929] mb-1">
            {request.title}
          </h3>
          <p className="text-[#6C6C6C] mb-6">{request.day}</p>

          <div className="bg-[#E6F2F2] p-4 rounded-lg mb-8 w-full">
            <p className="text-[#34C759] text-sm leading-relaxed max-w-[320px] mx-auto">
              Your request has been successfully Submitted. Please wait a while
              you will get quotes from providers.
            </p>
          </div>

          <Button
            size="large"
            className="bg-[#055E6E]! hover:bg-[#004A52]! text-white! h-11!  transition-colors! "
          >
            View Request
          </Button>
        </div>
      ))}
    </div>
  );
}
