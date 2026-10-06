"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { createClient } from "@/lib/supabase/client";

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError(null);

    const supabase = createClient();
    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during password reset.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-y-hidden bg-white flex items-center justify-center p-[12px] md:p-[16px] lg:p-[24px]">
      {/* MAIN CONTAINER */}
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
                Reset your password
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mt-1 md:mt-2">
                Create a new password for your account
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT RESET AREA */}
        <div className="w-full md:w-[47%] flex flex-col justify-center items-center px-6 py-12 md:px-16 md:py-16">
          
          <div className="w-full max-w-[380px]">
            {/* Top text */}
            <p className="text-[#222222] text-[20px] md:text-[22px] font-semibold text-center mb-8">
              Update Password
            </p>

            {success ? (
              <div className="flex flex-col items-center">
                <p className="text-[#4CB9C0] text-center mb-8 font-medium">
                  Your password has been updated successfully!
                </p>
                <Link 
                  href="/login" 
                  className="w-[180px] h-[50px] flex items-center justify-center bg-[#4CB9C0] text-white text-[15px] font-semibold rounded-full hover:bg-[#3ca4a6] transition-colors shadow-sm"
                >
                  Return to Login
                </Link>
              </div>
            ) : (
              <form className="flex flex-col gap-8" onSubmit={handleResetPassword}>
                
                {/* NEW PASSWORD FIELD */}
                <div className="flex flex-col gap-3">
                  <label className="text-[#696969] text-[14px] font-medium ml-1">New Password</label>
                  <div className="relative w-full">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter new Password"
                      className="w-full h-[48px] md:h-[50px] rounded-[25px] border border-[#4CB9C0] pl-[20px] pr-[50px] text-[14px] md:text-[15px] text-[#222222] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-1 focus:ring-[#4CB9C0] transition-shadow"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility" className="absolute right-5 top-1/2 -translate-y-1/2 text-[#B0B0B0] hover:text-[#696969] transition-colors">
                      {showPassword ? <IoEyeOutline size={22} /> : <IoEyeOffOutline size={22} />}
                    </button>
                  </div>
                </div>

                {/* CONFIRM PASSWORD FIELD */}
                <div className="flex flex-col gap-3">
                  <label className="text-[#696969] text-[14px] font-medium ml-1">Confirm Password</label>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm new Password"
                    className="w-full h-[48px] md:h-[50px] rounded-[25px] border border-[#4CB9C0] px-[20px] text-[14px] md:text-[15px] text-[#222222] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-1 focus:ring-[#4CB9C0] transition-shadow"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center -mb-2 -mt-2">{error}</p>
                )}

                {/* RESET BUTTON */}
                <div className="w-full flex justify-center mt-4">
                  <button type="submit" disabled={loading} className="w-full h-[48px] md:h-[50px] bg-[#4CB9C0] text-white text-[14px] md:text-[15px] font-semibold rounded-full hover:bg-[#3ca4a6] transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? "Updating..." : "Update Password"}
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
