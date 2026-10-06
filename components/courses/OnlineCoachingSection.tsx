import React from "react";

export default function OnlineCoachingSection() {
  return (
    <section className="w-full bg-white pt-[20px] pb-12 md:pt-[20px] md:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-[60px] xl:px-[80px]">
        <div className="w-full bg-[#272943] rounded-[24px] md:rounded-[30px] min-h-[320px] flex flex-col items-center justify-center text-center py-16 px-6 md:px-10">
          <h2 className="text-white text-[22px] md:text-[26px] lg:text-[28px] font-bold mb-4 md:mb-5">
            Online coaching lessons for remote learning.
          </h2>
          <p className="text-gray-200 text-[14px] md:text-[17px] lg:text-[18px] leading-[1.7] max-w-[900px] lg:max-w-[1000px] mx-auto mb-8 md:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <button className="bg-[#4CB9BB] text-white font-bold w-[165px] h-[44px] rounded-[7px] md:rounded-[8px] hover:bg-[#3ca4a6] transition-colors duration-300">
            Start learning now
          </button>
        </div>
      </div>
    </section>
  );
}
