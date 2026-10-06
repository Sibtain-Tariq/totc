import React from "react";
import Image from "next/image";

const orderItems = [
  {
    image: "/images/resources/laptop1.png",
    title: "adipiscing elit, sed do eiusmod tempor",
    subtitle: "Lorem ipsum dollar...",
    price: "$24.69"
  },
  {
    image: "/images/resources/laptop2.png",
    title: "adipiscing elit, sed do eiusmod tempor",
    subtitle: "Lorem ipsum dollar...",
    price: "$24.69"
  }
];

export default function OrderSummary() {
  return (
    <div className="bg-[#EAF4FC] rounded-[10px]  p-6 md:p-8 w-full max-w-[450px] max-h-[440px] mx-auto lg:mx-0">
      
      <h2 className="text-[#222222] text-[20px] font-medium mb-5">
        Summary
      </h2>

      <div className="flex flex-col">
        {orderItems.map((item, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-4">
              <div className="relative w-[110px] h-[75px] rounded-[8px] overflow-hidden shrink-0 bg-gray-200">
                <Image
                  src={item.image}
                  alt="Course Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col flex-grow justify-center overflow-hidden">
                <p className="text-[#222222] text-[14px] font-medium truncate">
                  {item.title}
                </p>
                <p className="text-[#696984] text-[13px] mt-[2px]">
                  {item.subtitle}
                </p>
                <p className="text-[#222222] text-[16px] font-semibold mt-[4px]">
                  {item.price}
                </p>
              </div>
            </div>

            {/* Divider after each item */}
            <div className="w-full border-t border-[#C9C9C9] mt-4 mb-1"></div>
          </React.Fragment>
        ))}
      </div>

      {/* Pricing Breakdown */}
      <div className="flex flex-col mb-4 mt-0">
        
        <div className="flex items-center justify-between py-2">
          <span className="text-[#696984] text-[14px] md:text-[15px] font-bold">Subtotal</span>
          <span className="text-[#696984] text-[14px] md:text-[15px] font-bold">$51.38</span>
        </div>
        <div className="w-full border-t border-[#C9C9C9]"></div>
        
        <div className="flex items-center justify-between py-2">
          <span className="text-[#696984] text-[14px] md:text-[15px] font-bold">Coupon Discount</span>
          <span className="text-[#696984] text-[14px] md:text-[15px] font-bold">0 %</span>
        </div>
        <div className="w-full border-t border-[#C9C9C9]"></div>
        
        <div className="flex items-center justify-between py-2">
          <span className="text-[#696984] text-[14px] md:text-[15px] font-bold">TAX</span>
          <span className="text-[#696984] text-[14px] md:text-[15px] font-bold">5</span>
        </div>
        <div className="w-full border-t border-[#C9C9C9]"></div>

        {/* Total */}
        <div className="flex items-center justify-between py-2">
          <span className="text-[#222222] text-[16px] md:text-[17px] font-bold">Total</span>
          <span className="text-[#222222] text-[16px] md:text-[17px] font-bold">$56.38</span>
        </div>
      </div>

    </div>
  );
}
