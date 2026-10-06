import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#252641] flex flex-col items-center justify-center min-h-[300px] md:min-h-[320px] px-4 md:px-[60px] py-16 md:py-[40px]">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* BRANDING AREA */}
        <div className="flex flex-row items-center justify-center gap-[24px] md:gap-[40px]">
          
          {/* Logo Block */}
          <Link href="/" className="flex items-center justify-center w-[60px] md:w-[70px] h-[45px] md:h-[50px] relative shrink-0 group">
            {/* Diamond Outline */}
            <div className="absolute w-[40px] md:w-[46px] h-[40px] md:h-[46px] border-[2px] border-[#00C7B7] rotate-45 rounded-[6px] md:rounded-[8px] transition-transform group-hover:scale-105"></div>
            {/* TOTC Text */}
            <span className="relative text-white font-bold text-[18px] md:text-[22px] pl-11 tracking-widest z-10 mt-[1px]">
              TOTC
            </span>
          </Link>

          {/* Vertical Divider */}
          <div className="w-[1px] h-[45px] md:h-[50px] bg-white/25 shrink-0"></div>

          {/* Tagline */}
          <div className="flex flex-col justify-center text-white/90 text-[14px] md:text-[16px] font-bold leading-[1.4] text-left tracking-wide">
            <span>Virtual Class</span>
            <span>for Zoom</span>
          </div>

        </div>

        {/* NEWSLETTER SECTION */}
        <h3 className="text-[#B5B5CC] text-[18px] md:text-[20px] font-medium tracking-[0.05em] text-center mt-5 md:mt-[50px] mb-8 md:mb-3">
          Subscribe to get our Newsletter
        </h3>

        {/* Newsletter Form */}
        <form className="flex items-center justify-center gap-3">
          <input 
            type="email" 
            placeholder="Your Email" 
            required
            className="w-[235px] md:w-[250px] h-[36px] md:h-[40px] bg-transparent border border-[#696984] rounded-full px-5 text-[13px] md:text-[14px] text-white placeholder-white/50 focus:outline-none focus:border-[#00C7B7] transition-colors"
          />
          <button 
            type="submit" 
            className="w-[105px] md:w-[115px] h-[36px] md:h-[40px] bg-[#00C7B7] text-white text-[13px] md:text-[14px] font-semibold rounded-full hover:bg-[#00a89a] transition-colors"
          >
            Subscribe
          </button>
        </form>

       {/* BOTTOM LINKS & COPYRIGHT */}
<div className="flex flex-col items-center justify-center w-full max-w-[500px] mt-[45px] md:mt-[60px] text-[#B5B5CC] text-[13px] md:text-[14px] tracking-wide gap-6 md:gap-3">

  {/* Links */}
  <div className="flex items-center gap-5 md:gap-10">
    <Link href="#" className="hover:text-white transition-colors">
      Careers
    </Link>

    <div className="w-[1px] h-[12px] bg-[#696984]"></div>

    <Link href="#" className="hover:text-white transition-colors">
      Privacy Policy
    </Link>

    <div className="w-[1px] h-[12px] bg-[#696984]"></div>

    <Link href="#" className="hover:text-white transition-colors">
      Terms & Conditions
    </Link>
  </div>

  {/* Copyright — below the links */}
  <p className="opacity-80 ">
    © 2021 Class Technologies Inc.
  </p>

</div>

      </div>
    </footer>
  );
}
