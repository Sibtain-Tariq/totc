"use client";

import React from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { FaTwitter, FaFacebook, FaInstagramSquare, FaTelegram, FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
export default function CourseSidebar() {
  const router = useRouter();
  const params = useParams();

  return (
    <div className="bg-white rounded-[8px] md:rounded-[10px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full max-w-[390px] mx-auto lg:mx-0 lg:-mt-[170px] xl:-mt-[200px] relative z-20 flex flex-col overflow-hidden">
      
      {/* 1. Preview Image */}
<div className="w-full h-[175px] md:h-[200px] p-[19px] bg-white">
  <div className="relative w-full h-full overflow-hidden ">
    <Image 
      src="/images/resources/laptop1.png"
      alt="Course Preview"
      fill
      className="object-cover"
    />
  </div>
</div>

      <div className="p-[16px] md:p-[12px] flex flex-col">
        
        {/* 2. Price Row */}
        <div className="flex items-center gap-[35px] mb-[19px]">
          <span className="text-[#111111] text-[20px] md:text-[34px] font-bold leading-none">$49.65</span>
          <span className="text-[#888888] text-[11px] md:text-[20px] line-through leading-none font-bold">$99.99</span>
          <span className="text-[#888888] text-[11px] md:text-[20px]  leading-none font-bold">50% Off</span>
        </div>

        {/* 3. Limited Time Text */}
        <div className="text-[#4CB9BB] text-[11px] md:text-[13px] font-semibold text-center mb-[28px]">
          11 hour left at this price
        </div>

        {/* 4. Buy Button */}
        <button 
          onClick={() => router.push(`/courses/${params.courseId}/checkout`)}
          className="w-full h-[42px] md:h-[46px] bg-[#4CB9BB] text-white rounded-[5px] text-[12px] md:text-[13px] font-bold hover:bg-[#3ca4a6] transition-colors mb-[16px]"
        >
          Buy Now
        </button>

        {/* 5. Divider */}
        <div className="w-full border-t border-[#C9C9C9] mb-[16px]"></div>

        {/* 6. This Course Included */}
        <div className="mb-[16px]">
          <h3 className="text-[#111111] text-[22px] font-bold mb-[12px]">
            This Course included
          </h3>
          <ul className="flex flex-col gap-[10px]">
            <li className="flex items-center gap-[10px] text-[#696984] text-[10px] md:text-[12px]">
              <Image src="/icons/sun.png" alt="Money Back Guarantee" width={14} height={14} className="object-contain shrink-0" />
              <span>Money Back Guarantee</span>
            </li>
            <li className="flex items-center gap-[10px] text-[#696984] text-[10px] md:text-[12px]">
              <Image src="/icons/cam.png" alt="Access on all devices" width={14} height={14} className="object-contain shrink-0" />
              <span>Access on all devices</span>
            </li>
            <li className="flex items-center gap-[10px] text-[#696984] text-[10px] md:text-[12px]">
              <Image src="/icons/foil.png" alt="Certification of completion" width={14} height={14} className="object-contain shrink-0" />
              <span>Certification of completion</span>
            </li>
            <li className="flex items-center gap-[10px] text-[#696984] text-[10px] md:text-[12px]">
              <Image src="/icons/stonk.png" alt="32 Module" width={14} height={14} className="object-contain shrink-0" />
              <span>32 Module</span>
            </li>
          </ul>
        </div>

        {/* 7. Divider */}
        <div className="w-full border-t border-[#C9C9C9] mb-[16px]"></div>

        {/* 8. Training */}
        <div className="mb-[16px]">
          <h3 className="text-[#111111] text-[15px] md:text-[18px] font-bold mb-[12px]">
            Training 5 or more people
          </h3>
          <p className="text-[#696984] text-[9px] md:text-[13px] leading-[1.6] mb-[9px]">
            Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
          </p>
        </div>

        {/* 9. Divider */}
        <div className="w-full border-t border-[#C9C9C9] mb-[16px]"></div>

        {/* 10. Share */}
        <div>
          <h3 className="text-[#111111] text-[15px] md:text-[18px] font-bold mb-[25px]">
            Share this course
          </h3>
          <div className="flex items-center gap-[8px] md:gap-[15px]">
            
            {/* Facebook */}
            <button aria-label="Facebook" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] rounded-full bg-[#696984] flex items-center justify-center hover:bg-[#1f2125] transition-colors">
              <FaFacebook className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-white" />
            </button>
            
            {/* Twitter */}
            <button aria-label="Twitter" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] rounded-full bg-[#696984] flex items-center justify-center hover:bg-[#1f2125] transition-colors">
              <FaTwitter className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-white" />
            </button>

            {/* YouTube */}
            <button aria-label="YouTube" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] rounded-full bg-red-600 flex items-center justify-center hover:bg-[#1f2125] transition-colors relative">
              <div className="absolute w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-red-600 rounded-sm"></div>
              <FaYoutube className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] text-white relative z-10" />
            </button>

            {/* Instagram */}
            <button aria-label="Instagram" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] rounded-full bg-[#696984] flex items-center justify-center hover:bg-[#1f2125] transition-colors">
              <FaInstagramSquare className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-white" />
            </button>

            {/* Telegram */}
            <button aria-label="Telegram" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] rounded-full bg-[#696984] flex items-center justify-center hover:bg-[#1f2125] transition-colors">
              <FaTelegram className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-white" />
            </button>

            {/* WhatsApp */}
            <button aria-label="WhatsApp" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] rounded-full bg-[#696984] flex items-center justify-center hover:bg-[#1f2125] transition-colors">
              <FaWhatsappSquare className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-white" />
            </button>

          </div>
        </div>

      </div>

    </div>
  );
}
