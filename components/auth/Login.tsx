"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoEyeOffOutline } from "react-icons/io5";

export default function Login() {
  const router = useRouter();

  return (
    <div className="h-screen overflow-y-hidden bg-white flex items-center justify-center p-[12px] md:p-[16px] lg:p-[24px]">
      {/* MAIN LOGIN CONTAINER */}
      <div className="w-full min-h-[calc(100vh-24px)] md:min-h-[calc(100vh-32px)] lg:min-h-[calc(100vh-48px)] bg-white rounded-[24px] flex flex-col md:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
        
        {/* LEFT CLASSROOM IMAGE */}
        <div className="w-full md:w-[53%] relative h-[400px] md:h-auto p-4 md:p-5 shrink-0">
          <div className="w-full h-full relative rounded-[20px] overflow-hidden min-h-[610px]">
            <Image 
              src="/images/classroom.png" 
              alt="Classroom" 
              fill 
              className="object-cover"
              priority
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            
            {/* Text Overlay */}
            <div className="absolute left-[30px] md:left-[45px] bottom-[30px] md:bottom-[45px] z-20">
              <h2 className="text-white text-[26px] md:text-[32px] font-bold leading-tight">
                Lorem Ipsum is simply
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mt-1 md:mt-2">
                Lorem Ipsum is simply
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT LOGIN AREA */}
        <div className="w-full md:w-[47%] flex flex-col justify-center items-center px-6 py-12 md:px-16 md:py-16">
          
          <div className="w-full max-w-[380px]">
            {/* Top text */}
            <p className="text-[#222222] text-[16px] md:text-[17px] font-medium text-center mb-10">
              Welcome to lorem..!
            </p>

            {/* LOGIN / REGISTER TOGGLE */}
            <div className="w-[280px] h-[50px] bg-[#8DD8D8] rounded-full flex items-center p-1 mx-auto mb-10 relative">
              <Link href="/login" className="w-1/2 h-full bg-[#4CB9C0] rounded-full flex items-center justify-center z-10 shadow-sm cursor-pointer">
                <span className="text-white text-[14px] md:text-[15px] font-semibold tracking-wide">Login</span>
              </Link>
              <Link href="/register" className="w-1/2 h-full flex items-center justify-center z-10 cursor-pointer transition-colors hover:bg-white/10 rounded-full">
                <span className="text-white text-[14px] md:text-[15px] font-medium tracking-wide">Register</span>
              </Link>
            </div>

            {/* DESCRIPTION TEXT */}
            <p className="text-[#696969] text-[14px] md:text-[15px] leading-[1.7] max-w-[360px] mb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            {/* FORM */}
            <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); router.push('/'); }}>
              
              {/* USERNAME FIELD */}
              <div className="flex flex-col gap-3">
                <label className="text-[#696969] text-[14px] font-medium ml-1">User name</label>
                <input 
                  type="text" 
                  placeholder="Enter your User name"
                  className="w-full h-[48px] md:h-[50px] rounded-[25px] border border-[#4CB9C0] px-[20px] text-[14px] md:text-[15px] text-[#222222] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-1 focus:ring-[#4CB9C0] transition-shadow"
                />
              </div>

              {/* PASSWORD FIELD */}
              <div className="flex flex-col gap-3">
                <label className="text-[#696969] text-[14px] font-medium ml-1">Password</label>
                <div className="relative w-full">
                  <input 
                    type="password" 
                    placeholder="Enter your Password"
                    className="w-full h-[48px] md:h-[50px] rounded-[25px] border border-[#4CB9C0] pl-[20px] pr-[50px] text-[14px] md:text-[15px] text-[#222222] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-1 focus:ring-[#4CB9C0] transition-shadow"
                  />
                  <button type="button" aria-label="Toggle password visibility" className="absolute right-5 top-1/2 -translate-y-1/2 text-[#B0B0B0] hover:text-[#696969] transition-colors">
                    <IoEyeOffOutline size={22} />
                  </button>
                </div>
              </div>

              {/* REMEMBER / FORGOT PASSWORD */}
              <div className="flex items-center justify-between mt-2 mb-4 px-2">
                <div className="flex items-center gap-[10px] cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      className="peer w-[16px] h-[16px] rounded-[3px] border border-gray-300 appearance-none checked:bg-[#4CB9C0] checked:border-[#4CB9C0] cursor-pointer transition-colors" 
                    />
                    {/* Custom checkmark overlay */}
                    <svg className="absolute w-[12px] h-[12px] left-[2px] top-[2px] text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[#696969] text-[13px] group-hover:text-[#4CB9C0] transition-colors">Remember me</span>
                </div>
                <a href="#" className="text-[#696969] text-[13px] hover:text-[#4CB9C0] transition-colors">
                  Forgot Password ?
                </a>
              </div>

              {/* LOGIN BUTTON */}
              <div className="w-full flex justify-center mt-2">
                <button type="submit" className="w-[180px] md:w-[190px] h-[48px] md:h-[50px] bg-[#4CB9C0] text-white text-[14px] md:text-[15px] font-semibold rounded-full hover:bg-[#3ca4a6] transition-colors shadow-sm">
                  Login
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
