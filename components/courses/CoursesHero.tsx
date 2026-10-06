import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WelcomeBackCardProps {
  imageSrc: string;
}

function WelcomeBackCard({ imageSrc }: WelcomeBackCardProps) {
  return (
    <div className="bg-[#FFFFFF] rounded-[12px] p-[16px] shadow-sm flex flex-col w-full h-[320px]">
      
      {/* Course Image */}
      <div className="relative w-full h-[160px] rounded-[10px] overflow-hidden mb-[16px] shrink-0">
        <Image src={imageSrc} alt="Course" fill className="object-cover" />
      </div>

      {/* Course Title */}
      <h3 className="text-[#111111] text-[16px] md:text-[17px] font-bold leading-[1.4] mb-[12px] line-clamp-2">
        AWS Certified Solutions Architect
      </h3>

      {/* Instructor */}
      <div className="flex items-center gap-[8px] mb-auto">
        <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden shrink-0">
          <Image src="/images/girl.png" alt="Lina" fill className="object-cover"/>
        </div>
        <span className="text-[#222222] text-[13px] md:text-[14px] font-medium">Lina</span>
      </div>

      {/* Progress Bar */}
      <div className="mt-[16px] w-full">
        <div className="w-full h-[5px] bg-[#E0E0E0] rounded-full overflow-hidden mb-[8px]">
          <div className="h-full bg-[#00C7B7] rounded-full" style={{ width: '70%' }}></div>
        </div>
        <div className="flex justify-end">
          <span className="text-[#696984] text-[9px] md:text-[10px]">Lesson 5 of 7</span>
        </div>
      </div>

    </div>
  );
}

export default function CoursesHero() {
  return (
    <section className="w-full bg-[#EAF4FC] pt-[50px] md:pt-[60px] pb-[40px] md:pb-[50px]">
      <div className="max-w-[1350px] mx-auto px-4 md:px-[50px]">
        
        {/* Header Area */}
        <div className="flex items-center justify-between mb-[30px] md:mb-[40px]">
          <h1 className="text-[#111111] text-[20px] md:text-[22px] font-bold">
            Welcome back, ready for your next lesson?
          </h1>
          <button className="text-[#00C7B7] text-[13px] md:text-[14px] font-medium hover:underline underline-offset-4">
            View history
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[30px]">
          <WelcomeBackCard imageSrc="/images/resources/laptop1.png" />
          <WelcomeBackCard imageSrc="/images/students.png" />
          <WelcomeBackCard imageSrc="/images/resources/laptop1.png" />
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-end mt-[35px] md:mt-[45px] gap-[10px]">
          <button 
            className="w-[40px] h-[40px] rounded-[3px] bg-[#8ED8DD] text-white shadow-sm flex items-center justify-center hover:bg-[#7bc8cd] transition-colors"
            aria-label="Previous"
          >
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="w-[40px] h-[40px] rounded-[3px] bg-[#4CB9BB] text-white shadow-sm flex items-center justify-center hover:bg-[#3ca4a6] transition-colors"
            aria-label="Next"
          >
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
