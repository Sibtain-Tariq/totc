import React from "react";
import Image from "next/image";

export default function WhatIsTotcCourses() {
  return (
    <section className="w-full bg-white pt-20 md:pt-[100px] pb-20 md:pb-[50px]">
      <div className="max-w-[1350px] mx-auto px-4 md:px-[50px] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[120px]">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start max-w-[500px]">
          
          <div className="relative z-10">
            {/* Decorative green circle */}
            <div className="absolute -top-[15px] -left-[15px] w-[45px] h-[45px] rounded-full bg-[#28E7A4] opacity-80 -z-10"></div>
            
            <h3 className="text-[24px] md:text-[31px]  max-w-[680px] font-medium leading-[1.3]">
              <span className="text-[#30378A]">Everything you can do in a physical classroom, </span>
              <span className="text-[#00C7B7]">you can do with TOTC</span>
            </h3>
          </div>

          <p className="mt-6 text-[#696984] text-[15px] md:text-[17px] leading-[1.8] max-w-[580px]">
            TOTC’s school management software helps traditional
            and online schools manage scheduling, attendance,
            payments and virtual classrooms all in one secure cloud-based system.
          </p>

          <a href="#learn-more" className="mt-8 text-[#696984] text-[13px] md:text-[14px] underline hover:text-[#30378A] transition-colors">
            Learn more
          </a>
        </div>

        {/* Right: Classroom Image/Video Card */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0">
          <div className="relative z-10 w-full max-w-[600px] h-[250px] md:h-[350px]">
            
            {/* Decorative shape: Upper-left turquoise */}
            <div className="absolute -top-[10px] -left-[10px] w-[80px] h-[80px] bg-[#23bdee] rounded-[12px] -z-10"></div>
            
            {/* Decorative shape: Lower-right green */}
            <div className="absolute -bottom-[10px] -right-[10px] w-[160px] h-[130px] bg-[#28E7A4] rounded-[20px] -z-10"></div>

            {/* Classroom Image Container */}
            <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-xl flex items-center justify-center">
              
              {/* Classroom Image */}
              <Image 
                src="/images/classroom.png" 
                alt="Classroom with teacher and students" 
                fill 
                className="object-cover z-10" 
              />
              
              {/* Z-20: Dark Translucent Overlay (Optional, for play button contrast if needed) */}
              <div className="absolute inset-0 bg-black/10 z-10"></div>

              {/* Play Button */}
              <button 
                aria-label="Play classroom video"
                className="relative z-20 w-[55px] md:w-[65px] h-[55px] md:h-[65px] bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              >
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-[#23bdee] border-b-[10px] border-b-transparent ml-1"></div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
