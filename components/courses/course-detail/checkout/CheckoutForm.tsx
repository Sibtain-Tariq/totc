import React from "react";

export default function CheckoutForm() {
  return (
    <div className="bg-white rounded-[24px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-8 md:p-12 w-full">
      
      <h1 className="text-[#222222] text-[28px] md:text-[34px] font-bold mb-8">
        Checkout
      </h1>

      {/* Cart Type */}
      <p className="text-[#5B5B5B] text-[14px] md:text-[15px] font-semibold  tracking-wider mb-5">
        Cart Type
      </p>

      {/* Payment Method Options */}
      <div className="flex flex-wrap gap-4 mb-10">
        {[
          { id: "paypal", alt: "PayPal", src: "/images/chechout/paypal.png", w: 95, h: 90 },
          { id: "american", alt: "American Express", src: "/images/chechout/american.png", w: 95, h: 90 },
          { id: "visa", alt: "Visa", src: "/images/chechout/visa.png", w: 105, h: 110 },
          { id: "master", alt: "Mastercard", src: "/images/chechout/master.png", w: 75, h: 70 }
        ].map((method) => (
          <button
            key={method.id}
            className={`flex items-center justify-center w-[100px] md:w-[110px] h-[55px] md:h-[60px] rounded-[12px] hover:border-[#00C7B7] transition-colors ${method.id === 'master' ? 'border border-gray-200' : ''}`}
          >
            <img 
              src={method.src} 
              alt={method.alt} 
              style={{ width: method.w, height: method.h, objectFit: 'contain' }}
            />
          </button>
        ))}
      </div>

      {/* Name on Card */}
      <div className="mb-6">
        <label className="block text-[#5B5B5B] mt-12 text-[15px] md:text-[16px] font-semibold mb-2">
          Name on Card
        </label>
        <input
          type="text"
          placeholder="Enter name on Card"
          className="w-full border border-gray-200 rounded-[12px] px-5 py-4 text-[15px] text-[#222222] placeholder-gray-400 focus:outline-none focus:border-[#00C7B7] focus:ring-2 focus:ring-[#00C7B7]/20 transition-all bg-white"
        />
      </div>

      {/* Card Number */}
      <div className="mb-6">
        <label className="block text-[#5B5B5B] text-[15px] md:text-[16px] font-semibold mb-2">
          Card Number
        </label>
        <input
          type="text"
          placeholder="Enter Card Number"
          className="w-full border border-gray-200 rounded-[12px] px-5 py-4 text-[15px] text-[#222222] placeholder-gray-400 focus:outline-none focus:border-[#00C7B7] focus:ring-2 focus:ring-[#00C7B7]/20 transition-all bg-white"
        />
      </div>

      {/* Expiration Date + CVC row */}
      <div className="flex flex-col sm:flex-row gap-5 mb-4">
        <div className="sm:w-[360px]">
          <label className="block text-[#5B5B5B] text-[15px] md:text-[16px] font-semibold mb-2">
            Expiration Date (MM / YY)
          </label>
          <input
            type="text"
            placeholder="Enter Expiration Date"
            className="w-full border border-gray-200 rounded-[12px] px-5 py-4 text-[15px] text-[#222222] placeholder-gray-400 focus:outline-none focus:border-[#00C7B7] focus:ring-2 focus:ring-[#00C7B7]/20 transition-all bg-white"
          />
        </div>
        <div className="sm:w-[310px]">
          <label className="block text-[#5B5B5B] text-[15px] md:text-[16px] font-semibold mb-2">
            CVC
          </label>
          <input
            type="text"
            placeholder="Enter CVC"
            className="w-full border border-gray-200 rounded-[12px] px-5 py-4 text-[15px] text-[#222222] placeholder-gray-400 focus:outline-none focus:border-[#00C7B7] focus:ring-2 focus:ring-[#00C7B7]/20 transition-all bg-white"
          />
        </div>
      </div>

      {/* Save Info Checkbox */}
      <label className="flex items-center gap-2 cursor-pointer mb-10 group">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-gray-400 accent-[#00C7B7] cursor-pointer"
        />
        <span className="text-gray-400 text-[14px] md:text-[15px] group-hover:text-[#00C7B7] transition-colors">
          Save my information for faster checkout
        </span>
      </label>

      {/* Confirm Payment Button */}
      <button className="w-full bg-[#49BBBD] text-white text-[16px] md:text-[22px] font-medium py-2 md:py-2 rounded-[12px] hover:bg-[#00b3a4] transition-colors shadow-md">
        Confirm Payment
      </button>

    </div>
  );
}
