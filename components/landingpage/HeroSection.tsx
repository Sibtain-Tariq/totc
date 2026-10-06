import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#4CB9BB] md:min-h-[580px] flex overflow-hidden pt-10 md:pt-0">
      {/*
        bg-[#4CB9BB]: section owns its turquoise color independently.
        overflow-hidden: clips girl overflow so it doesn't bleed below.
        We use flex items-stretch so the columns take full height, allowing the right column to anchor to the bottom.
      */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-[60px] flex flex-col md:flex-row items-stretch justify-between relative z-10">

        {/* ── LEFT CONTENT ── */}
        <div className="w-full md:w-1/2 text-left pt-8 pb-[80px] md:pb-[90px] flex flex-col justify-center">
          <h1 className="text-white text-[32px] md:text-[46px] font-bold leading-[1.25] max-w-[550px]">
            <span className="text-[#FF7A00]">Studying</span> Online is now<br />
            much easier
          </h1>

          <p className="text-white text-[13px] md:text-[15px] leading-[1.6] max-w-[400px] mt-6">
            TOTC is an interesting platform that will teach<br className="hidden md:block" />
            you in more an interactive way
          </p>

          <div className="flex items-center gap-6 mt-10">
            <button className="bg-[#5AC5C7] text-white text-[13px] md:text-[17px] font-medium rounded-full w-[130px] h-[52px] shadow-sm hover:bg-[#52B8BA] transition-colors">
              Join for free
            </button>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#23bdee] border-b-[8px] border-b-transparent ml-1"></div>
              </div>
              <span className="text-gray-900 text-[12px] md:text-[16px] font-medium">
                Watch how it works
              </span>
            </div>
          </div>
        </div>

        {/*
          ── RIGHT CONTENT ──
          items-end anchors this column's content to the very bottom of the flex container,
          which now extends all the way to the bottom of the Hero section.
        */}
        <div className="w-full md:w-1/2 relative mt-10 md:mt-0 flex justify-center items-end">
          
          {/* Inner wrapper to maintain height and relative positioning for cards */}
          <div className="relative w-full h-[380px] md:h-[540px]">
            
            {/* Main student image anchored to the Hero bottom */}
            <div className="absolute bottom-0 left-0 w-full h-full z-20">
              <Image
                src="/images/girl.png"
                alt="Student smiling holding books"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Floating Card A: 250K Assisted Student */}
            <div className="absolute top-[70px] left-[0px] md:top-[120px] md:-left-[20px] bg-[#EAF7FA] rounded-[12px] shadow-[0_8px_25px_rgba(0,0,0,0.08)] w-[185px] h-[62px] flex items-center px-[14px] z-20 gap-[12px]">
              <div className="w-[40px] h-[40px]  rounded-[8px] flex items-center justify-center shrink-0">
                <Image
                  src="/icons/calendar.png"
                  alt="Calendar icon"
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none justify-center">
                <span className="text-[#4A4A4A] text-[16px] font-bold mb-[4px]">250k</span>
                <span className="text-[#777777] text-[12px]">Assisted Student</span>
              </div>
            </div>

            {/* Floating Card B: Congratulations */}
            <div className="absolute top-[160px] right-[-10px] md:top-[220px] md:right-[-10px] lg:right-[30px] bg-[#EAF7FA] rounded-[12px] shadow-[0_8px_25px_rgba(0,0,0,0.08)] w-[235px] h-[70px] flex items-center px-[14px] z-20 gap-[12px]">
              <div className="w-[38px] h-[38px] bg-[#F28C45] rounded-[8px] flex items-center justify-center shrink-0">
                <Image
                  src="/icons/email.png"
                  alt="Email icon"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none justify-center">
                <span className="text-[#4A4A4A] text-[15px] font-bold mb-[4px]">Congratulations</span>
                <span className="text-[#777777] text-[12px]">Your admission completed</span>
              </div>
            </div>

            {/* Floating Card C: User Experience Class */}
            <div className="absolute bottom-[25px] left-[5px] md:bottom-[95px] md:-left-[25px] lg:left-[10px] bg-[#EAF7FA] rounded-[12px] shadow-[0_8px_25px_rgba(0,0,0,0.08)] w-[235px] h-[108px] flex flex-col justify-center px-[16px] z-20">
              <div className="flex items-center gap-[12px] mb-[12px]">
                {/* Person avatar with green online dot */}
                <div className="relative shrink-0">
                  <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                    <Image
                      src="/images/ourfeatures/person1.png"
                      alt="Instructor"
                      width={36}
                      height={36}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  {/* Green online indicator */}
                  <div className="absolute bottom-0 right-0 w-[10px] h-[10px] bg-[#22C55E] rounded-full border-[2px] border-[#EAF7FA]"></div>
                </div>
                <div className="flex flex-col leading-none justify-center">
                  <span className="text-[#4A4A4A] text-[14px] font-semibold mb-[4px]">User Experience Class</span>
                  <span className="text-[#777777] text-[12px]">Today at 12.00 PM</span>
                </div>
              </div>
              <button className="bg-[#E85D83] text-white text-[12px] font-semibold rounded-full w-[100px] h-[30px] self-center hover:bg-[#d44d70] transition-colors flex items-center justify-center">
                Join Now
              </button>
            </div>

            {/* Floating Analytics Icon */}
            <div className="absolute top-[45px] right-[35px] md:top-[90px] md:right-[55px] lg:right-[95px] bg-[#E85D83] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.08)] z-20">
              <div className="w-[31px] h-[31px] bg-white rounded-[4px] flex items-end justify-center gap-[2px] pb-[3px]">
                <div className="w-[3px] h-[19px] bg-[#E85D83] rounded-[2px]"></div>
                <div className="w-[3px] h-[23px] bg-[#E85D83] rounded-[2px]"></div>
                <div className="w-[3px] h-[17px] bg-[#E85D83] rounded-[2px]"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/*
        ── HERO BOTTOM CURVE ──
        z-[15] = above the girl image (z-10) but below the floating cards (z-20).
        Curved bottom layer masks the image to match the Hero curve.
      */}
      <div className="absolute bottom-0 left-0 w-full z-[15] pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[90px] md:h-[100px] block"
        >
          <path d="M0,15 C480,75 960,75 1440,15 L1440,90 L0,90 Z" fill="white" />
        </svg>
      </div>

    </section>
  );
}
