"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  { name: "Bulkin Simons", text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmodisicing elit, sed do eiusmod tempor", image: "/images/resources/person1.png" },
  { name: "Bulkin Simons", text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmodisicing elit, sed do eiusmod tempor", image: "/images/resources/person1.png" },
  { name: "Bulkin Simons", text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmodisicing elit, sed do eiusmod tempor", image: "/images/resources/person1.png" },
  { name: "Bulkin Simons", text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed doeiusmodisicing elit, sed do eiusmod tempor", image: "/images/resources/person1.png" }
];

export default function StudentTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    // Basic wrap around for a group
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="w-full bg-[#EAF4FF] pt-20 md:pt-18 pb-0">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 relative">
        
        {/* Heading */}
        <h2 className="text-[#303030] text-[26px] md:text-[30px] font-bold text-left mb-16 md:mb-12">
          What our students have to say
        </h2>

        {/* Testimonials Carousel Area */}
        <div className="relative w-full">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-[36px] h-[36px] rounded-full bg-[#49B9BD] items-center justify-center z-10 shadow-md hover:bg-[#3ca4a6] transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          {/* Cards Container */}
          {/* Currently we just show the grid based on desktop=4, tablet=2, mobile=1 without a complex sliding track to keep it simple and responsive as requested */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-[14px] p-5 md:p-6 flex flex-col items-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow min-h-[250px] block`}
              >
                <div className="w-[80px] h-[80px] rounded-[6px] overflow-hidden relative mb-5 shrink-0 bg-gray-200">
                  <Image 
                    src={t.image} 
                    alt={t.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[#303030] text-[16px] md:text-[18px] font-bold mb-4">
                  {t.name}
                </h3>
                <p className="text-[#777794] text-[14px] md:text-[15px] leading-relaxed text-center whitespace-pre-line">
                  {t.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-[36px] h-[36px] rounded-full bg-[#49B9BD] items-center justify-center z-10 shadow-md hover:bg-[#3ca4a6] transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Large Empty Space before App Banner */}
        <div className="h-[100px] md:h-[110px]"></div>

        {/* App Download Banner */}
        <div className="w-full bg-[#242642] rounded-[24px] px-8 py-10 md:px-16 md:py-0 md:h-[140px] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative z-20 -mb-[90px] md:-mb-[70px]">
          <h2 className="text-white text-[22px] md:text-[24px] font-bold text-center md:text-left">
            APP is available for free
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button className="flex items-center justify-center gap-3 bg-[#29b9e7] text-white font-semibold text-[15px] md:text-[16px] rounded-[8px] w-full sm:w-[165px] h-[44px] hover:bg-[#3ca4a6] transition-colors">
              <div className="relative w-5 h-5 shrink-0">
                <Image src="/icons/android.png" alt="Android" fill className="object-contain" />
              </div>
              Android APP
            </button>
            <button className="flex items-center justify-center gap-3 bg-[#49B9BD] text-white font-semibold text-[15px] md:text-[16px] rounded-[8px] w-full sm:w-[165px] h-[44px] hover:bg-[#3ca4a6] transition-colors">
              <div className="relative w-5 h-5 shrink-0">
                <Image src="/icons/ios.png" alt="IOS" fill className="object-contain" />
              </div>
              IOS APP
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
