"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <div className="hidden md:flex items-center gap-4 ">
          {isLandingPage ? (
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
            <button className="flex items-center gap-[10px] group transition-colors">
              <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden shrink-0">
                <Image src="/images/girl.png" alt="Lina" fill className="object-cover" />
              </div>
              <span className="text-[#303030] font-medium text-[16px] group-hover:text-[#4CB9BB] transition-colors">Lina</span>
              <svg className="w-4 h-4 text-[#303030] group-hover:text-[#4CB9BB] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
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
          {isLandingPage ? (
            <div className="flex gap-4 mt-4 pt-2">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center text-[15px] font-medium rounded-full h-[40px] transition-colors bg-white text-gray-800 hover:bg-gray-50"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center text-[15px] font-medium rounded-full h-[40px] transition-colors bg-white/20 text-white hover:bg-white/30"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 mt-4 pt-2">
              <button className="flex items-center gap-[10px] group transition-colors">
                <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden shrink-0">
                  <Image src="/images/girl.png" alt="Lina" fill className="object-cover" />
                </div>
                <span className="text-[#303030] font-medium text-[16px] group-hover:text-[#4CB9BB] transition-colors">Lina</span>
                <svg className="w-4 h-4 text-[#303030] group-hover:text-[#4CB9BB] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

    </header>
  );
}
