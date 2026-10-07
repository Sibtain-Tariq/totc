"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ProfileSettings() {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const supabase = createClient();
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError || !session) {
        router.push("/login");
        return;
      }
      
      setEmail(session.user.email || "");

      const { data, error: profileError } = await supabase
        .from('profiles')
        .select('full_name, avatar_url')
        .eq('id', session.user.id)
        .single();
        
      if (!profileError && data) {
        setFullName(data.full_name || "");
        setAvatarUrl(data.avatar_url || "");
      }
      
      setLoading(false);
    };
    
    fetchProfile();
  }, [router]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);

    const supabase = createClient();
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("Not authenticated");

      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          full_name: fullName,
          avatar_url: avatarUrl || null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', session.user.id);

      if (updateError) {
        setError(updateError.message);
      } else {
        setSuccess(true);
        // Dispatch an event so Header can update if needed, though Header will re-fetch on reload.
      }
    } catch (err: any) {
      setError(err.message || "An error occurred updating the profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen bg-white flex items-center justify-center">
        <p className="text-[#4CB9C0] font-medium">Loading profile...</p>
      </div>
    );
  }

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
                Profile Settings
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] mt-1 md:mt-2">
                Manage your personal information
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SETTINGS AREA */}
        <div className="w-full md:w-[47%] flex flex-col justify-center items-center px-6 py-12 md:px-16 md:py-16 overflow-y-auto">
          
          <div className="w-full max-w-[380px]">
            {/* Top text */}
            <p className="text-[#222222] text-[20px] md:text-[22px] font-semibold text-center mb-8">
              Update Profile
            </p>

            <form className="flex flex-col gap-6" onSubmit={handleUpdateProfile}>
              
              {/* CURRENT AVATAR PREVIEW */}
              <div className="flex flex-col items-center mb-2">
                <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden bg-gray-200 border-2 border-[#4CB9C0] flex items-center justify-center">
                  {avatarUrl ? (
                    <Image src={avatarUrl} alt="Avatar Preview" fill className="object-cover" />
                  ) : (
                    <span className="text-gray-500 font-bold text-2xl uppercase">{fullName.charAt(0) || email.charAt(0) || "U"}</span>
                  )}
                </div>
              </div>

              {/* EMAIL FIELD (READ-ONLY) */}
              <div className="flex flex-col gap-2">
                <label className="text-[#696969] text-[14px] font-medium ml-1">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  readOnly
                  disabled
                  className="w-full h-[48px] md:h-[50px] rounded-[25px] border border-gray-200 px-[20px] text-[14px] md:text-[15px] text-gray-500 bg-gray-50 cursor-not-allowed"
                />
              </div>

              {/* FULL NAME FIELD */}
              <div className="flex flex-col gap-2">
                <label className="text-[#696969] text-[14px] font-medium ml-1">Full Name</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="Enter your full name"
                  className="w-full h-[48px] md:h-[50px] rounded-[25px] border border-[#4CB9C0] px-[20px] text-[14px] md:text-[15px] text-[#222222] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-1 focus:ring-[#4CB9C0] transition-shadow"
                />
              </div>

              {/* AVATAR URL FIELD */}
              <div className="flex flex-col gap-2">
                <label className="text-[#696969] text-[14px] font-medium ml-1">Avatar Image URL (Optional)</label>
                <input 
                  type="url" 
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  placeholder="https://example.com/avatar.png"
                  className="w-full h-[48px] md:h-[50px] rounded-[25px] border border-[#4CB9C0] px-[20px] text-[14px] md:text-[15px] text-[#222222] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-1 focus:ring-[#4CB9C0] transition-shadow"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center -mb-2 mt-2">{error}</p>
              )}
              
              {success && (
                <p className="text-[#4CB9C0] text-sm text-center -mb-2 mt-2 font-medium">Profile updated successfully!</p>
              )}

              {/* UPDATE BUTTON */}
              <div className="w-full flex justify-center mt-4">
                <button type="submit" disabled={saving} className="w-full h-[48px] md:h-[50px] bg-[#4CB9C0] text-white text-[14px] md:text-[15px] font-semibold rounded-full hover:bg-[#3ca4a6] transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed">
                  {saving ? "Saving..." : "Update Profile"}
                </button>
              </div>
              
              {/* BACK TO DASHBOARD */}
              <div className="w-full flex justify-center mt-2">
                <Link href="/" className="text-[#696969] text-[14px] font-medium hover:text-[#4CB9C0] transition-colors">
                  Return to Dashboard
                </Link>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
