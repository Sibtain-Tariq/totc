import React from "react";

export default function CourseNavigation() {
  return (
    <div className="flex flex-wrap items-center gap-[12px] md:gap-[36px] mb-[40px]">
      <button 
        className="bg-[#4CB9BB] text-white w-[90px] md:w-[185px] h-[40px] md:h-[45px] rounded-[5px] md:rounded-[7px] text-[12px] md:text-[14px] font-semibold transition-colors font-bold"
      >
        Overview
      </button>
      {[1, 2, 3].map((item) => (
        <button 
          key={item} 
          className="bg-[#E5E5E5] text-[#696984] w-[90px] md:w-[185px] h-[40px] md:h-[45px] rounded-[5px] md:rounded-[7px] text-[12px] md:text-[14px] font-bold hover:bg-gray-200 transition-colors"
        >
          Overview
        </button>
      ))}
    </div>
  );
}
