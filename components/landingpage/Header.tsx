"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mobileProfileDropdownOpen, setMobileProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      if (session?.user) {
        const { data } = await supabase
          .from('profiles')
          .select('full_name, avatar_url')
          .eq('id', session.user.id)
          .single();
        setProfile(data);
      } else {
        setProfile(null);
      }
    };

    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
        if (!session?.user) {
          setProfile(null);
        } else {
          supabase
            .from('profiles')
            .select('full_name, avatar_url')
            .eq('id', session.user.id)
            .single()
            .then(({ data }) => setProfile(data));
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  const isLandingPage = pathname === "/";

  const getNavClass = (path: string) => {
    const isActive = path === "/" ? pathname === path : pathname.startsWith(path);
    if (isLandingPage) {
      return isActive
        ? "text-[#003049] text-[16px] md:text-[17px] font-bold transition-all whitespace-nowrap"
        : "text-white text-[17px] font-normal hover:text-white/80 transition-all whitespace-nowrap";
    }
    return isActive
      ? "text-[#4CB9BB] text-[16px] md:text-[17px] font-bold transition-all whitespace-nowrap"
      : "text-[#5b5b5b] text-[17px] font-normal hover:text-[#4CB9BB] transition-all whitespace-nowrap";
  };

  const getMobileNavClass = (path: string) => {
    const isActive = path === "/" ? pathname === path : pathname.startsWith(path);
    if (isLandingPage) {
      return isActive
        ? "text-[#003049] text-[17px] font-bold py-3 border-b border-white/10 block"
        : "text-white text-[16px] font-normal hover:text-white/80 py-3 border-b border-white/10 block transition-colors";
    }
    return isActive
      ? "text-[#4CB9BB] text-[17px] font-bold py-3 border-b border-gray-200 block"
      : "text-[#303030] text-[16px] font-normal hover:text-[#4CB9BB] py-3 border-b border-gray-200 block transition-colors";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/pricing", label: "Pricing" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <header className={`w-full pt-6 md:pt-[32px] min-h-[100px] px-4 md:px-[60px] relative z-20 ${!isLandingPage ? "bg-[#FFFFFF]" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-[50px] h-[50px] relative flex items-center justify-center">
              {/* Diamond outline */}
              <div className={`absolute  w-[50px] h-[50px] rotate-45 rounded-sm border-[2.3px] ${isLandingPage ? "border-[#00fff0]" : "border-[#00fff0]"}`}></div>
              {/* TOTC text */}
              <span className={`relative pl-12 font-extrabold text-[23px] tracking-wide z-10 ${isLandingPage ? "text-white" : "text-[#5B5B5B]"}`}>TOTC</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-6 lg:gap-8 ${isLandingPage ? "md:ml-[200px] lg:ml-[400px]" : "md:ml-[290px] lg:ml-[550px]"}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={getNavClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons / Profile */}
        <div className="hidden md:flex items-center gap-4 relative">
          {!user ? (
            isLandingPage ? (
              <>
                <Link
                  href="/login"
                  className="flex items-center justify-center text-[17px] font-medium rounded-full w-[95px] h-[41px] transition-colors bg-white text-gray-800 hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center justify-center text-[17px] font-medium rounded-full w-[95px] h-[41px] transition-colors bg-white/20 text-white hover:bg-white/30"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center justify-center text-[17px] font-medium rounded-full w-[95px] h-[41px] transition-colors bg-[#4CB9BB] text-white hover:bg-[#3ca4a6]"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center justify-center text-[17px] font-medium rounded-full w-[95px] h-[41px] transition-colors bg-gray-100 text-[#303030] hover:bg-gray-200"
                >
                  Sign Up
                </Link>
              </>
            )
          ) : (
            <div className="relative">
              <button onClick={() => setProfileDropdownOpen(!profileDropdownOpen)} className="flex items-center gap-[10px] group transition-colors">
                <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden shrink-0 bg-gray-200 flex items-center justify-center">
                  {profile?.avatar_url ? (
                    <Image src={profile.avatar_url} alt="Profile" fill className="object-cover" />
                  ) : (
                    <span className="text-gray-500 font-bold text-sm uppercase">{profile?.full_name?.charAt(0) || user?.email?.charAt(0) || "U"}</span>
                  )}
                </div>
                <span className={`font-medium text-[16px] group-hover:text-[#4CB9BB] transition-colors ${isLandingPage ? "text-white" : "text-[#303030]"}`}>
                  {profile?.full_name || "User"}
                </span>
                <svg className={`w-4 h-4 group-hover:text-[#4CB9BB] transition-colors ${isLandingPage ? "text-white" : "text-[#303030]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* DROPDOWN */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg py-2 border border-gray-100 z-50">
                  <div className="px-4 py-3 border-b border-gray-50">
                    <p className="text-sm font-medium text-gray-900 truncate">{profile?.full_name || "User"}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>
                  <Link href="/profile" onClick={() => setProfileDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4CB9BB] transition-colors">
                    Profile Settings
                  </Link>
                  <button onClick={() => { setProfileDropdownOpen(false); handleLogout(); }} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            className={`p-2 ${isLandingPage ? "text-white" : "text-[#303030]"}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              /* X icon when open */
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <div>
                <div className={`w-6 h-[2px] mb-1.5 ${isLandingPage ? "bg-white" : "bg-[#303030]"}`}></div>
                <div className={`w-6 h-[2px] mb-1.5 ${isLandingPage ? "bg-white" : "bg-[#303030]"}`}></div>
                <div className={`w-6 h-[2px] ${isLandingPage ? "bg-white" : "bg-[#303030]"}`}></div>
              </div>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className={`md:hidden mt-4 mx-auto max-w-7xl backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl ${
          isLandingPage ? "bg-[#4CB9BB]/95" : "bg-white"
        }`}>
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getMobileNavClass(link.href)}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {!user ? (
            <div className="flex gap-4 mt-4 pt-2">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className={`flex-1 flex items-center justify-center text-[15px] font-medium rounded-full h-[40px] transition-colors ${isLandingPage ? "bg-white text-gray-800 hover:bg-gray-50" : "bg-[#4CB9BB] text-white hover:bg-[#3ca4a6]"}`}
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className={`flex-1 flex items-center justify-center text-[15px] font-medium rounded-full h-[40px] transition-colors ${isLandingPage ? "bg-white/20 text-white hover:bg-white/30" : "bg-gray-100 text-[#303030] hover:bg-gray-200"}`}
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex flex-col mt-4 pt-2 border-t border-gray-100/20">
              <button onClick={() => setMobileProfileDropdownOpen(!mobileProfileDropdownOpen)} className="flex items-center gap-[10px] group transition-colors py-2">
                <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden shrink-0 bg-gray-200 flex items-center justify-center">
                  {profile?.avatar_url ? (
                    <Image src={profile.avatar_url} alt="Profile" fill className="object-cover" />
                  ) : (
                    <span className="text-gray-500 font-bold text-sm uppercase">{profile?.full_name?.charAt(0) || user?.email?.charAt(0) || "U"}</span>
                  )}
                </div>
                <div className="flex flex-col items-start">
                  <span className={`font-medium text-[16px] group-hover:text-[#4CB9BB] transition-colors ${isLandingPage ? "text-white" : "text-[#303030]"}`}>
                    {profile?.full_name || "User"}
                  </span>
                </div>
                <svg className={`w-4 h-4 transition-transform ${mobileProfileDropdownOpen ? "rotate-180" : ""} ${isLandingPage ? "text-white" : "text-[#303030]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileProfileDropdownOpen && (
                <div className="flex flex-col pl-10 py-2 space-y-3">
                  <div className="mb-2">
                    <p className={`text-xs ${isLandingPage ? "text-white/70" : "text-gray-500"} truncate`}>{user?.email}</p>
                  </div>
                  <Link href="/profile" onClick={() => setMobileOpen(false)} className={`text-[15px] font-medium transition-colors ${isLandingPage ? "text-white hover:text-white/80" : "text-[#303030] hover:text-[#4CB9BB]"}`}>
                    Profile Settings
                  </Link>
                  <button onClick={() => { setMobileOpen(false); handleLogout(); }} className="text-left text-[15px] font-medium text-red-500 hover:text-red-600 transition-colors">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

    </header>
  );
}
