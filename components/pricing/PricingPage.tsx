import React from "react";
import Image from "next/image";
import Footer from "@/components/landingpage/Footer";
import PricingFAQSection from "@/components/pricing/PricingFAQSection";
import StudentTestimonialsSection from "@/components/pricing/StudentTestimonialsSection";
import TeacherCoursectorSection from "@/components/pricing/TeacherCoursectorSection";

export default function PricingPage() {
  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen flex flex-col">
      
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-[60px] pb-20">
        
        {/* Pricing Heading */}
        <h1 className="text-[#49B9BD] text-[34px] md:text-[44px] font-bold text-center mt-12 md:mt-24 mb-16 md:mb-20">
          Affordable pricing
        </h1>

        {/* Pricing Cards Container */}
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 items-center">
          
          {/* LEFT PLAN */}
          <div className="bg-white rounded-[12px] p-6 md:p-8 flex flex-col items-start w-full min-h-[420px]">
            <span className="text-[#49B9BD] text-[14px] font-bold mb-4">Like a pussy</span>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-[#303030] text-[30px] md:text-[34px] font-bold">Free</span>
              <span className="text-[#696969] text-[12px] uppercase tracking-wider font-semibold">/ FOREVER</span>
            </div>
            
            <ul className="flex flex-col gap-5 mb-10 flex-grow w-full">
              {[
                "Components-driven system",
                "Sales-boosting landing pages",
                "Awesome Feather icons pack"
              ].map((text, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-[18px] md:w-[20px] h-[18px] md:h-[20px] rounded-full bg-[#E6E6E6] flex items-center justify-center mr-3 shrink-0">
                    <svg className="w-3 h-3 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-[#303030] text-[14px]">{text}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full max-w-[690px] mx-auto md:mx-0 bg-white border border-[#E5E5E5] text-[#49B9BD] font-semibold text-[15px] rounded-[8px] h-[40px] md:h-[42px] mt-auto hover:bg-gray-50 transition-colors">
              Try for free
            </button>
          </div>

          {/* CENTER PLAN */}
          <div className="bg-white rounded-[12px] shadow-[0_12px_25px_rgba(0,0,0,0.10)] p-6 md:p-[20px] flex flex-col items-start w-full min-h-[520px] md:min-h-[350px] relative z-10 md:-my-6">
            
            <div className="flex justify-between items-center w-full mb-4">
              <div className="flex items-center relative w-[100px] h-[25px]">
                <Image src="/images/individual.png" alt="Individual" fill className="object-contain object-left" />
              </div>
      <span className="border border-[#6C5CE7] text-[#000000] text-[10px] uppercase font-bold tracking-[2px] px-2.5 py-1 rounded-full bg-white">
  BEST!
</span>
            </div>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-[#303030] text-[32px] md:text-[36px] font-bold">$24</span>
              <span className="text-[#696969] text-[12px] uppercase tracking-wider font-semibold">/ MONTH</span>
            </div>
            
            <ul className="flex flex-col gap-5 mb-10 flex-grow w-full">
              {[
                "Components-driven system",
                "Sales-boosting landing pages",
                "Awesome Feather icons pack",
                "Themed into 3 different styles",
                "Will help to learn Figma"
              ].map((text, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-[18px] md:w-[20px] h-[18px] md:h-[20px] rounded-full bg-[#FFC857] flex items-center justify-center mr-3 shrink-0">
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-[#303030] text-[14px]">{text}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-[#49B9BD] text-white font-semibold text-[18px] rounded-[8px] h-[40px] md:h-[44px] mt-auto hover:bg-[#3ca4a6] transition-colors">
              Regular license
            </button>
          </div>

          {/* RIGHT PLAN */}
          <div className="bg-white rounded-[12px] p-6 md:p-8 flex flex-col items-start w-full min-h-[420px]">
            
            <div className="flex items-center mb-4 relative w-[100px] h-[25px]">
              <Image src="/images/corporate.png" alt="Corporate" fill className="object-contain object-left" />
            </div>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-[#303030] text-[30px] md:text-[34px] font-bold">$12</span>
              <span className="text-[#696969] text-[12px] uppercase tracking-wider font-semibold">/ EDITOR</span>
            </div>
            
            <ul className="flex flex-col gap-5 mb-10 flex-grow w-full">
              {[
                "Components-driven system",
                "Sales-boosting landing pages",
                "Awesome Feather icons pack",
                "Themed into 3 different styles"
              ].map((text, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-[18px] md:w-[20px] h-[18px] md:h-[20px] rounded-full bg-[#A8EBDD] flex items-center justify-center mr-3 shrink-0">
                    <svg className="w-3 h-3 text-[#303030]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-[#303030] text-[14px]">{text}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full max-w-[690px] mx-auto md:mx-0 bg-white border border-[#E5E5E5] text-[#49B9BD] font-semibold text-[15px] rounded-[8px] h-[40px] md:h-[42px] mt-auto hover:bg-gray-50 transition-colors">
              Extended license
            </button>
          </div>

        </div>

        {/* Dark Coaching CTA */}
        <div className="w-full max-w-[1150px] mx-auto bg-[#252641] rounded-[14px] mt-24 md:mt-32 flex flex-col items-center justify-center text-center px-4 py-12 md:py-14 shadow-lg">
          <h2 className="text-white text-[18px] md:text-[35px] font-semibold md:font-bold mb-4">
            Online coaching lessons for remote learning.
          </h2>
          <p className="text-white/80 text-[12px] md:text-[17px] max-w-[820px] leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor<br className="hidden md:block" />
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <button className="bg-[#4CB9BB] text-white rounded-[6px] w-[160px] h-[50px] text-[10px] md:text-[14px] font-medium hover:bg-[#3ca4a6] transition-colors shadow-sm flex items-center justify-center">
            Start learning now
          </button>
        </div>

      </main>

      <PricingFAQSection />
      <StudentTestimonialsSection />
      <TeacherCoursectorSection />

      <Footer />
    </div>
  );
}
