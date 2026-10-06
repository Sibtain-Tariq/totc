import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function TestimonialSection() {
  return (
    <section className="w-full bg-white py-20 md:py-[10px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-[60px] flex flex-col md:flex-row items-center justify-between gap-16 md:gap-10">
        
        {/* Left Content */}
        <div className="w-full md:w-[45%] flex flex-col items-start">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-3">
            <div className="w-[80px] h-[1.5px] bg-[#696984]/50"></div>
            <span className="text-[#696984] text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-semibold">Testimonial</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-[#30378A] text-[32px] md:text-[38px] font-bold leading-[1.3] mt-2">
            What They Say?
          </h2>
          
          {/* Paragraphs */}
          <p className="mt-6 text-[#696984] text-[15px] md:text-[17px] leading-[1.8] max-w-[480px]">
            TOTC has got more than 100k positive ratings from our users around the world.
          </p>
          
          <p className="mt-5 text-[#696984] text-[15px] md:text-[17px] leading-[1.8] max-w-[480px]">
            Some of the students and teachers were greatly helped by the Skilline.
          </p>
          
          <p className="mt-5 text-[#696984] text-[15px] md:text-[17px] leading-[1.8] max-w-[480px]">
            Are you too? Please give your assessment
          </p>
          
          {/* Write Assessment Button */}
          <button className="mt-10 flex items-center justify-between group rounded-full border border-[#00C7B7] bg-white w-max h-[50px] md:h-[60px] pl-6 pr-[6px] gap-6 transition-colors hover:bg-gray-50">
            <span className="text-[#00C7B7] text-[14px] md:text-[16px] font-semibold tracking-wide">
              Write your assessment
            </span>
            <div className="w-[40px] md:w-[48px] h-[40px] md:h-[48px] rounded-full border border-[#00C7B7] flex items-center justify-center shrink-0 group-hover:bg-[#00C7B7] transition-colors text-[#00C7B7] group-hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </button>
        </div>
        
        {/* Right Content */}
        <div className="w-full md:w-[65%] flex justify-center md:justify-end relative mt-16 md:mt-30 min-h-[460px] md:min-h-[500px]">
          
          {/* Background panel for image */}
          <div className="relative w-[280px] md:w-[350px] h-[340px] md:h-[420px] bg-[#A9DDF7] rounded-[10px] md:rounded-[12px] md:mr-[120px]">
            
            {/* Person Image */}
            <Image 
              src="/images/testimonial.png" 
              alt="Testimonial author"
              fill
              className="object-contain object-bottom"
              priority
            />

            {/* Next Arrow Button */}
            <button aria-label="Next testimonial" className="absolute top-1/2 -right-[25px] -translate-y-1/2 w-[50px] h-[50px] bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#00C7B7] hover:scale-105 transition-transform z-10">
              <MdOutlineKeyboardArrowRight className="text-[28px] md:text-[32px]" />
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="absolute bottom-0 right-0 md:bottom-[40px] md:right-10 w-[92%] sm:w-[350px] md:w-[380px] h-[165px] md:h-[195px] bg-white rounded-[10px] md:rounded-[14px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex items-stretch p-5 md:p-6 z-20">
            
            {/* Pink Left Border */}
            <div className="absolute left-0 top-0 bottom-0 w-[20px] md:w-[15px] bg-[#F67766] rounded-l-[10px] md:rounded-l-[14px] z-10"></div>
            
            {/* Content Container */}
            <div className="flex flex-col justify-between w-full h-full border-l-[2px] border-[#D8D8E5]/50 ml-[8px] pl-4 md:pl-5">
              
              <p className="text-[#696984] text-[12px] md:text-[14px] leading-[1.6] relative">
                "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."
              </p>
              
              <div className="flex items-end justify-between mt-3 md:mt-4">
                <span className="text-[#696984] text-[13px] md:text-[15px] font-bold">Gloria Rose</span>
                
                <div className="flex flex-col items-end gap-[2px]">
                  <div className="flex items-center text-[#F48C06] text-[12px] md:text-[14px] gap-[1px]">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-[#696984] text-[9px] md:text-[11px]">
                    12 reviews at Yelp
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
