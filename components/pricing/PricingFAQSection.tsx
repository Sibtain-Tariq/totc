"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "Consectetur adipiscing elit, sed do eiusmod tempor?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    question: "Incididunt ut labore et dolore magna aliqua?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    question: "Ut enim ad minim veniam, quis nostrud exercitation?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    question: "Ullamco laboris nisi ut aliquip ex ea commodo?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
  }
];

export default function PricingFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(3);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col">
      
      {/* PART 1: FAQ AREA */}
      <section className="w-full bg-[#FFFFFF] py-20 md:py-2">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-[40px]">
          
          {/* FAQ Heading */}
          <h2 className="text-[#303030] text-[26px] md:text-[34px] font-semibold text-center mb-16 md:mb-14">
            Online coaching lessons for remote learning
          </h2>

          {/* FAQ List */}
          <div className="w-full flex flex-col md:mb-14">
            {[
              "Lorem ipsum dolor sit amet",
              "Consectetur adipiscing elit, sed do",
              "Eiusmod tempos Lorem ipsum",
              "Lorem ipsum dolor sit amet",
              "Lorem ipsum dolor sit amet"
            ].map((question, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="w-full border-b border-[#DCDDE5]"
                >
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none min-h-[60px] py-2"
                  >
                    <div className="flex items-center">
                      <div className="w-[14px] h-[14px] rounded-full bg-[#A8F0E2] shrink-0 mr-6"></div>
                      <span className="text-[#303030] text-[15px] md:text-[18px] font-medium">
                        {question}
                      </span>
                    </div>
                    
                    <div className="shrink-0 ml-6 flex items-center justify-center">
                      {isOpen ? (
                        <svg className="w-[18px] h-[18px] text-[#777794]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
                        </svg>
                      ) : (
                        <svg className="w-[18px] h-[18px]  text-[#777794]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                        </svg>
                      )}
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="pb-4 pl-[46px] pr-8 animate-in slide-in-from-top-1 fade-in duration-200">
                      <p className="text-[#777794] text-[12px] md:text-[13px] leading-[1.8]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
