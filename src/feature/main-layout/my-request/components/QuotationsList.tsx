import { Button } from "antd";
import Image from "next/image";

const quotations = [
  {
    id: 1,
    title: "Domestic Cleaning",
    date: "Sunday, 12 March",
    price: "$40.00",
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1767587212/7a1854772f4fe0fcbe6d3e95cac1b7b491a89c55_hvpjfp.png",
    message:
      "Mr Micheal wants to assist you with your domestic cleaning request.",
  },
  {
    id: 2,
    title: "Pool Cleaning",
    date: "Sunday, 12 March",
    price: "$48.00",
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1767595457/1481ecdc6f9b1f9cfcb912fd04caa42d17c310ca_g6hf5o.jpg",
    message:
      "Mr Micheal wants to assist you with your domestic cleaning request.",
  },
  {
    id: 3,
    title: "Domestic Cleaning",
    date: "Sunday, 12 March",
    price: "$60.00",
    avatar:
      "https://res.cloudinary.com/dsxkxo9zl/image/upload/v1767595457/d2875c224ee5d99909e1fbeb6e600ab621d9ac96_t7kvu1.jpg",
    message:
      "Mr Micheal wants to assist you with your domestic cleaning request.",
  },
];

export function QuotationsList() {
  return (
    <div className="space-y-6">
      {quotations.map((quote) => (
        <div
          key={quote.id}
          className="bg-[#FBFBFB] border border-[#EBEBEB] rounded-xl p-6 "
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex flex-col md:flex-row md:items-end md:gap-3">
                <h3 className="text-xl font-medium text-[#292929]">
                  {quote.title}
                </h3>
                <span className="text-xs text-gray-400">{quote.date}</span>
              </div>
              <div className="flex items-start gap-4 mt-4">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={quote?.avatar || "/placeholder.svg"}
                    alt="Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#6C6C6C]! text-[16px]! leading-snug! w-full md:max-w-sm">
                  {quote.message}
                </p>
              </div>
            </div>
            <div className="text-lg md:text-2xl font-medium text-[#333333]">
              {quote.price}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <Button
              type="default"
              className="border-[#FF383C]! text-[#FF4D4F]! hover:bg-red-50! hover:text-[#FF4D4F]! h-8! transition-colors!  bg-transparent"
            >
              Close Request
            </Button>
            <Button className="bg-[#055E6E]! hover:bg-[#004A52]! text-white! h-8! transition-colors! border border-[#055E6E]">
              View Request
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
