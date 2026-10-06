"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { createClient } from "@/lib/supabase/client";
import { createBrowserClient } from "@supabase/ssr";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resetMsg, setResetMsg] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResetMsg(null);

    // Initialize client locally to inject dynamic cookieOptions for 'remember me'
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';
    
    let supabase;
    if (!rememberMe) {
      supabase = createBrowserClient(supabaseUrl, supabaseKey, {
        cookieOptions: {
          maxAge: undefined, // undefined makes it a session cookie
        }
      });
    } else {
      supabase = createClient();
    }
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        router.push("/");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setLoading(true);
    setError(null);
    setResetMsg(null);

    const supabase = createClient();
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) {
        setError("Error sending password reset link. Please try again.");
      } else {
        setResetMsg("Password reset link sent. Please check your email.");
      }
    } catch (err: any) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

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
            {isForgotPassword ? (
              <form className="flex flex-col gap-8" onSubmit={handleForgotPassword}>
                <div className="flex flex-col gap-3">
                  <label className="text-[#696969] text-[14px] font-medium ml-1">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your Email Address"
                    className="w-full h-[48px] md:h-[50px] rounded-[25px] border border-[#4CB9C0] px-[20px] text-[14px] md:text-[15px] text-[#222222] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-1 focus:ring-[#4CB9C0] transition-shadow"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center -mb-2 -mt-2">{error}</p>
                )}
                
                {resetMsg && (
                  <p className="text-[#4CB9C0] text-sm text-center -mb-2 -mt-2">{resetMsg}</p>
                )}

                <div className="w-full flex justify-center gap-4 mt-2">
                  <button type="button" onClick={() => { setIsForgotPassword(false); setError(null); setResetMsg(null); }} className="w-[140px] md:w-[150px] h-[48px] md:h-[50px] bg-white border border-[#4CB9C0] text-[#4CB9C0] text-[14px] md:text-[15px] font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                    Back to Login
                  </button>
                  <button type="submit" disabled={loading} className="w-[140px] md:w-[150px] h-[48px] md:h-[50px] bg-[#4CB9C0] text-white text-[14px] md:text-[15px] font-semibold rounded-full hover:bg-[#3ca4a6] transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? "Sending..." : "Send Reset Link"}
                  </button>
                </div>
              </form>
            ) : (
              <form className="flex flex-col gap-8" onSubmit={handleLogin}>
                
                {/* EMAIL FIELD */}
                <div className="flex flex-col gap-3">
                  <label className="text-[#696969] text-[14px] font-medium ml-1">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your Email Address"
                    className="w-full h-[48px] md:h-[50px] rounded-[25px] border border-[#4CB9C0] px-[20px] text-[14px] md:text-[15px] text-[#222222] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-1 focus:ring-[#4CB9C0] transition-shadow"
                  />
                </div>

                {/* PASSWORD FIELD */}
                <div className="flex flex-col gap-3">
                  <label className="text-[#696969] text-[14px] font-medium ml-1">Password</label>
                  <div className="relative w-full">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your Password"
                      className="w-full h-[48px] md:h-[50px] rounded-[25px] border border-[#4CB9C0] pl-[20px] pr-[50px] text-[14px] md:text-[15px] text-[#222222] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-1 focus:ring-[#4CB9C0] transition-shadow"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility" className="absolute right-5 top-1/2 -translate-y-1/2 text-[#B0B0B0] hover:text-[#696969] transition-colors">
                      {showPassword ? <IoEyeOutline size={22} /> : <IoEyeOffOutline size={22} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center -mb-2 -mt-2">{error}</p>
                )}
                
                {resetMsg && (
                  <p className="text-[#4CB9C0] text-sm text-center -mb-2 -mt-2">{resetMsg}</p>
                )}

                {/* REMEMBER / FORGOT PASSWORD */}
                <div className="flex items-center justify-between mt-2 mb-4 px-2">
                  <div className="flex items-center gap-[10px] cursor-pointer group" onClick={() => setRememberMe(!rememberMe)}>
                    <div className="relative flex items-center">
                      <input 
                        type="checkbox" 
                        checked={rememberMe}
                        readOnly
                        className="peer w-[16px] h-[16px] rounded-[3px] border border-gray-300 appearance-none checked:bg-[#4CB9C0] checked:border-[#4CB9C0] cursor-pointer transition-colors" 
                      />
                      {/* Custom checkmark overlay */}
                      <svg className="absolute w-[12px] h-[12px] left-[2px] top-[2px] text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-[#696969] text-[13px] group-hover:text-[#4CB9C0] transition-colors">Remember me</span>
                  </div>
                  <button type="button" onClick={() => { setIsForgotPassword(true); setError(null); setResetMsg(null); }} className="text-[#696969] text-[13px] hover:text-[#4CB9C0] transition-colors bg-transparent border-none p-0 cursor-pointer">
                    Forgot Password ?
                  </button>
                </div>

                {/* LOGIN BUTTONS */}
                <div className="w-full flex justify-center gap-4 mt-2">
                  <button type="button" onClick={() => router.push("/")} className="w-[140px] md:w-[150px] h-[48px] md:h-[50px] bg-[#4CB9C0] text-white text-[14px] md:text-[15px] font-semibold rounded-full hover:bg-[#3ca4a6] transition-colors shadow-sm">
                    Direct Login
                  </button>
                  <button type="submit" disabled={loading} className="w-[140px] md:w-[150px] h-[48px] md:h-[50px] bg-[#4CB9C0] text-white text-[14px] md:text-[15px] font-semibold rounded-full hover:bg-[#3ca4a6] transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
