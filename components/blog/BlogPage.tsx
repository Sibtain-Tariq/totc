import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* 1. HERO / FEATURED BLOG SECTION */}
      <section className="w-full bg-[#EAF4FC] py-16 md:py-[70px] flex items-center">
        <div className="max-w-[1350px] mx-auto w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-[60px]">
          
          {/* Left Content (approx 48%) */}
          <div className="w-full md:w-[48%] flex flex-col items-start justify-center">
            
            {/* Category / Author Text */}
            <div className="text-[13px] md:text-[15px] mb-[12px] md:mb-[16px] font-medium tracking-wide">
              <span className="text-[#303030]">By Themadbrains in </span>
              <span className="text-[#00C7B7]">inspiration</span>
            </div>
            
            {/* Hero Title */}
            <h1 className="text-[#30378A] text-[30px] md:text-[36px] font-bold leading-[1.25] mb-[16px] md:mb-[20px] max-w-[570px]">
              Why Swift UI Should Be on the<br className="hidden md:block"/>
              Radar of Every Mobile<br className="hidden md:block"/>
              Developer
            </h1>
            
            {/* Hero Description */}
            <p className="text-[#696984] text-[14px] md:text-[16px] leading-[1.7] mb-[26px] md:mb-[32px] max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br className="hidden md:block"/>
              sed do eiusmod tempos lorem ipsum dolor sitamet,<br className="hidden md:block"/>
              consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            
            {/* Start Learning Button (PADDING-BASED) */}
            <button className="bg-[#4CB9BB] text-white rounded-[6px] px-6 py-2.5 md:px-[24px] md:py-[12px] text-[13px] md:text-[14px] font-semibold hover:bg-[#3ca4a6] transition-colors shadow-sm">
              Start learning now
            </button>
            
          </div>

          {/* Right Content (approx 42%) - Image */}
          <div className="w-full md:w-[42%] flex justify-center md:justify-end mt-12 md:mt-0">
            <div className="relative w-full max-w-[400px] md:max-w-[5600px] h-[245px] md:h-[420px] rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm">
              <Image
                src="/images/resources/laptop1.png"
                alt="Featured blog article"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. READING BLOG LIST SECTION */}
      <section className="w-full bg-white py-20 md:py-[85px]">
        <div className="max-w-[1250px] mx-auto px-4 md:px-[10px]">
          
          <h2 className="text-[#222222] text-[22px] md:text-[26px] font-bold mb-8 md:mb-10 text-left">
            Reading blog list
          </h2>
          
          {/* 3. BLOG CATEGORY CARD GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[44px] justify-items-center md:justify-items-stretch">
            
            {/* Card 1 */}
            <div className="relative w-full max-w-[240px] md:max-w-[270px] h-[220px] rounded-[12px] md:rounded-[14px] overflow-hidden group cursor-pointer shadow-sm">
              <Image 
                src="/images/students.png"
                alt="UX/UI"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 min-w-[110px] px-5 py-[10px] bg-white/90 backdrop-blur-sm rounded-[8px] flex items-center justify-center shadow-sm whitespace-nowrap">
                <span className="text-[#222222] text-[14px] md:text-[16px] font-bold">UX/UI</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full max-w-[240px] md:max-w-[270px] h-[220px] rounded-[12px] md:rounded-[14px] overflow-hidden group cursor-pointer shadow-sm">
              <Image 
                src="/images/instructor.png"
                alt="React"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 min-w-[110px] px-5 py-[10px] bg-white/90 backdrop-blur-sm rounded-[8px] flex items-center justify-center shadow-sm whitespace-nowrap">
                <span className="text-[#222222] text-[14px] md:text-[16px] font-bold">React</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-full max-w-[240px] md:max-w-[270px] h-[220px] rounded-[12px] md:rounded-[14px] overflow-hidden group cursor-pointer shadow-sm">
              <Image 
                src="/images/testimonial.png"
                alt="PHP"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 min-w-[110px] px-5 py-[10px] bg-white/90 backdrop-blur-sm rounded-[8px] flex items-center justify-center shadow-sm whitespace-nowrap">
                <span className="text-[#222222] text-[14px] md:text-[16px] font-bold">PHP</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative w-full max-w-[240px] md:max-w-[270px] h-[220px] rounded-[12px] md:rounded-[14px] overflow-hidden group cursor-pointer shadow-sm">
              <Image 
                src="/images/resources/laptop2.png"
                alt="JavaScript"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 min-w-[110px] px-5 py-[10px] bg-white/90 backdrop-blur-sm rounded-[8px] flex items-center justify-center shadow-sm whitespace-nowrap">
                <span className="text-[#222222] text-[14px] md:text-[16px] font-bold">JavaScript</span>
              </div>
            </div>

          </div>

        </div>
      </section>
      
    </div>
  );
}
