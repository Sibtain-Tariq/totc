"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { createClient } from "@/lib/supabase/client";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const supabase = createClient();
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-y-hidden bg-white flex items-center justify-center p-[20px] md:p-[24px] lg:p-[30px]">
      {/* MAIN REGISTER CONTAINER */}
      <div className="w-full min-h-[calc(100vh-40px)] md:min-h-[calc(100vh-48px)] lg:min-h-[calc(100vh-60px)] bg-white rounded-[24px] flex flex-col md:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
        
        {/* LEFT CLASSROOM IMAGE */}
        <div className="w-full md:w-[53%] relative h-[400px] md:h-auto p-4 md:p-5 shrink-0">
          <div className="w-full h-full relative rounded-[20px] overflow-hidden min-h-[560px]">
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
              <h2 className="text-white text-[26px] md:text-[30px] font-bold leading-tight">
                Lorem Ipsum is simply
              </h2>
              <p className="text-white/90 text-[17px] md:text-[18px] mt-1 md:mt-2">
                Lorem Ipsum is simply
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT REGISTER AREA */}
        <div className="w-full md:w-[47%] flex flex-col justify-center items-center px-6 py-10 md:px-12 md:py-10">
          
          <div className="w-full max-w-[350px]">
            {/* Top text */}
            <p className="text-[#222222] text-[14px] md:text-[15px] font-medium text-center mb-8">
              Welcome to lorem..!
            </p>

            {/* LOGIN / REGISTER TOGGLE */}
            <div className="w-[270px] h-[46px] md:h-[48px] bg-[#8DD8D8] rounded-full flex items-center p-1 mx-auto mb-8 relative">
              <Link href="/login" className="w-1/2 h-full flex items-center justify-center z-10 cursor-pointer transition-colors hover:bg-white/10 rounded-full">
                <span className="text-white text-[13px] md:text-[14px] font-medium tracking-wide">Login</span>
              </Link>
              <Link href="/register" className="w-1/2 h-full bg-[#4CB9C0] rounded-full flex items-center justify-center z-10 shadow-sm cursor-pointer">
                <span className="text-white text-[13px] md:text-[14px] font-semibold tracking-wide">Register</span>
              </Link>
            </div>

            {/* DESCRIPTION TEXT */}
            <p className="text-[#696969] text-[13px] md:text-[14px] leading-[1.6] max-w-[350px] mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            {/* FORM */}
            <form className="flex flex-col gap-6" onSubmit={handleRegister}>
              
              {/* EMAIL ADDRESS FIELD */}
              <div className="flex flex-col gap-[10px]">
                <label className="text-[#696969] text-[13px] font-medium ml-1">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your Email Address"
                  className="w-full h-[44px] md:h-[46px] rounded-[25px] border border-[#4CB9C0] px-[20px] text-[13px] md:text-[14px] text-[#222222] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-1 focus:ring-[#4CB9C0] transition-shadow"
                />
              </div>

              {/* USERNAME FIELD */}
              <div className="flex flex-col gap-[10px]">
                <label className="text-[#696969] text-[13px] font-medium ml-1">User name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your User name"
                  className="w-full h-[44px] md:h-[46px] rounded-[25px] border border-[#4CB9C0] px-[20px] text-[13px] md:text-[14px] text-[#222222] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-1 focus:ring-[#4CB9C0] transition-shadow"
                />
              </div>

              {/* PASSWORD FIELD */}
              <div className="flex flex-col gap-[10px]">
                <label className="text-[#696969] text-[13px] font-medium ml-1">Password</label>
                <div className="relative w-full">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your Password"
                    className="w-full h-[44px] md:h-[46px] rounded-[25px] border border-[#4CB9C0] pl-[20px] pr-[50px] text-[13px] md:text-[14px] text-[#222222] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-1 focus:ring-[#4CB9C0] transition-shadow"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility" className="absolute right-5 top-1/2 -translate-y-1/2 text-[#B0B0B0] hover:text-[#696969] transition-colors">
                    {showPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              {success && (
                <p className="text-[#4CB9C0] text-sm text-center">Registration successful! Please check your email to confirm your account.</p>
              )}

              {/* REMEMBER / FORGOT PASSWORD */}
              <div className="flex items-center justify-between mt-2 mb-2 px-2">
                <div className="flex items-center gap-[8px] cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      className="peer w-[14px] h-[14px] rounded-[3px] border border-gray-300 appearance-none checked:bg-[#4CB9C0] checked:border-[#4CB9C0] cursor-pointer transition-colors" 
                    />
                    {/* Custom checkmark overlay */}
                    <svg className="absolute w-[10px] h-[10px] left-[2px] top-[2px] text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[#696969] text-[12px] group-hover:text-[#4CB9C0] transition-colors">Remember me</span>
                </div>
                <a href="#" className="text-[#696969] text-[12px] hover:text-[#4CB9C0] transition-colors">
                  Forgot Password ?
                </a>
              </div>

              {/* REGISTER BUTTONS */}
              <div className="w-full flex justify-center gap-4 mt-2">
                <button type="button" onClick={() => router.push("/")} className="w-[130px] md:w-[140px] h-[44px] md:h-[46px] bg-[#4CB9C0] text-white text-[13px] md:text-[14px] font-semibold rounded-full hover:bg-[#3ca4a6] transition-colors shadow-sm">
                  Direct Register
                </button>
                <button type="submit" disabled={loading} className="w-[130px] md:w-[140px] h-[44px] md:h-[46px] bg-[#4CB9C0] text-white text-[13px] md:text-[14px] font-semibold rounded-full hover:bg-[#3ca4a6] transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed">
                  {loading ? "Registering..." : "Register"}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
