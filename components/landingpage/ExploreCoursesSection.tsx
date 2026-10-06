import React from "react";
import Image from "next/image";

// --- Subcomponents ---

const RowHeader = ({ title, iconSrc }: { title: string; iconSrc?: string }) => (
  <div className="flex items-center justify-between w-full relative z-20 px-2 md:px-0 mb-8 md:mb-10">
    <div className="flex items-center gap-3 md:gap-4">
      {iconSrc ? (
        <div className="relative w-[28px] h-[28px] md:w-[24px] md:h-[24px] shrink-0">
          <Image src={iconSrc} alt={`${title} icon`} fill className="object-contain" />
        </div>
      ) : (
        <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] bg-[#EAF4FC] rounded-full border-[3px] border-[#30378A]/40"></div>
      )}
      <h3 className="text-[18px] md:text-[24px] font-bold text-[#0b0c1a]">{title}</h3>
    </div>
    <a href="#" className="flex items-center gap-[10px] text-[#00BCD4] text-[12px] md:text-[14px] font-bold uppercase tracking-widest hover:underline">
      SEE ALL <span className="text-[24px] md:text-[30px] leading-none mb-[2px]">›</span>
    </a>
  </div>
);

const CategoryPill = ({ label, bgColor, rotationClass }: { label: string; bgColor: string; rotationClass: string }) => (
  <div className={`shrink-0 w-[85px] md:w-[85px] h-[230px] md:h-[260px] bg-white rounded-[20px] md:rounded-[24px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] flex items-center justify-center transition-transform hover:-translate-y-2 z-10 ${rotationClass}`}>
    {/* LAYER 2 - Light Green Inner Background */}
    <div className="w-[62px] md:w-[72px] h-[205px] md:h-[230px] bg-[#CCFABC] rounded-[16px] md:rounded-[18px] flex items-center justify-center">
      {/* LAYER 3 - Colored Vertical Bar */}
      <div className={`w-[48px] md:w-[58px] h-[180px] md:h-[205px] rounded-[12px] md:rounded-[14px] flex items-center justify-center shadow-inner ${bgColor}`}>
        <span 
          className="text-white text-[14px] md:text-[16px] font-bold tracking-widest whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {label}
        </span>
      </div>
    </div>
  </div>
);

const FeaturedCourseCard = ({ 
  borderColorClass, 
  buttonColorClass, 
  imageSrc
}: { 
  borderColorClass: string;
  buttonColorClass: string;
  imageSrc: string;
}) => (
  <div className={`relative shrink-0 w-[420px] md:w-[470px] h-[250px] md:h-[270px] bg-white rounded-[24px] md:rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[2px] ${borderColorClass} flex flex-row p-[16px] md:p-[20px] gap-5 md:gap-7 items-center z-20`}>
    {/* Course Image */}
    <div className="relative w-[160px] md:w-[185px] h-[200px] md:h-[220px] shrink-0 overflow-hidden rounded-[12px]">
  
  <div className="absolute left-0 top-0 bottom-0 w-[30px] z-10" />

  <Image
    src={imageSrc}
    alt="Featured course"
    fill
    className="object-cover"
  />
</div>
    
    {/* Content */}
    <div className="flex flex-col flex-1 h-[200px] md:h-[220px] justify-between">
      <div>
        <h4 className="text-[18px] md:text-[22px] font-bold text-[#06070f] leading-snug">
          Integer id Orc Sed<br/>Ante Tincidunt
        </h4>
        <p className="text-[12px] md:text-[15px] text-[#696984] mt-2 md:mt-3 line-clamp-3 leading-[1.6]">
          Crass convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.
        </p>
      </div>
      
      <div className="flex flex-col mt-auto gap-3 md:gap-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[3px] text-[#F48C06] text-[15px] md:text-[20px]">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <div className="font-bold text-[18px] md:text-[16px] pr-2 text-[#111115]">$450</div>
        </div>
        
        <button className={`w-[170px] md:w-[190px]  h-[38px] md:h-[45px] rounded-[10px] border border-[2px] text-[12px] md:text-[14px] font-bold tracking-wider flex items-center justify-center transition-colors bg-white ${borderColorClass} ${buttonColorClass} hover:bg-gray-50`}>
          EXPLORE
        </button>
      </div>
    </div>
  </div>
);

export default function ExploreCoursesSection() {
  return (
    <section className="relative w-full py-24 md:py-[70px] overflow-hidden">
  <div className="absolute inset-y-0 left-0 w-[74%] bg-[#EAF4FC] rounded-br-[60px] -z-0"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10 w-full px-4 md:px-[60px] lg:px-[80px]">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-15">
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#0b0c11] leading-tight">
            Explore Course
          </h2>
          <p className="text-[12px] md:text-[14px] text-[#696984] mt-2 md:mt-6">
            Ut sed eros finibus, placerat orci id, dapibus.
          </p>
        </div>

        {/* Rows Container */}
        <div className="flex flex-col gap-20 md:gap-[90px] w-full">
          
          {/* ROW 1 */}
          <div className="flex flex-col w-full relative">
            <RowHeader title="Lorem Ipsum" iconSrc="/images/paint.png" />
            
            {/* Background shadow base behind pills */}
            <div className="absolute top-[200px] md:top-[315px] left-[5%] md:left-[0%] w-[85%] md:w-[100%] h-[55px] md:h-[70px] bg-[#dfe9f2] bg-opacity-70 rounded-[20px] z-0 "></div>

            <div className="relative z-10 flex flex-row items-center pt-2 gap-4 md:gap-6 overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              
              {/* Left Pills Group */}
              <div className="flex items-center gap-4 md:gap-6 shrink-0 pl-2 md:pl-4">
                <CategoryPill label="UI/UX Design" bgColor="bg-[#FF6B00]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Curriculum" bgColor="bg-[#28E7A4]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Quisque" bgColor="bg-[#EF6685]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Class Contents" bgColor="bg-[#A56CF5]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="UI Skills" bgColor="bg-[#00AEEF]" rotationClass="-rotate-[10deg]" />
              </div>
              
  {/* Right Pills Group */}
              <div className="flex items-center gap-4 md:gap-6 shrink-0 pr-2 md:pr-4">
                <CategoryPill label="Vestibulum" bgColor="bg-[#73C9A5]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Interactive" bgColor="bg-[#F7C600]" rotationClass="-rotate-[10deg]" />
              </div>

              {/* Featured Card */}
              <FeaturedCourseCard 
                borderColorClass="border-[#00AEEF]/60" 
                buttonColorClass="text-[#00BCD4]" 
                imageSrc="/images/students.png"
              />

             

            </div>
          </div>

          {/* ROW 2 */}
          <div className="flex flex-col w-full relative">
            <RowHeader title="Quisque a Consequat" iconSrc="/images/sphere.png" />
            
            {/* Background shadow base */}
            <div className="absolute top-[200px] md:top-[315px] left-[5%] md:left-[0%] w-[85%] md:w-[100%] h-[55px] md:h-[70px] bg-[#dfe9f2] bg-opacity-70 rounded-[20px] z-0 "></div>

            <div className="relative z-10 flex flex-row items-center pt-2 gap-4 md:gap-6 overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              
              {/* Left Pills */}
              <div className="flex items-center gap-4 md:gap-6 shrink-0 pl-2 md:pl-4">
                <CategoryPill label="Business" bgColor="bg-[#00AEEF]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Marketing" bgColor="bg-[#F7C600]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Strategy" bgColor="bg-[#EF6685]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Finance" bgColor="bg-[#73C9A5]" rotationClass="-rotate-[10deg]" />
              </div>
              
              {/* Featured Card */}
              <FeaturedCourseCard 
                borderColorClass="border-[#00BCD4]/70" 
                buttonColorClass="text-[#00BCD4]" 
                imageSrc="/images/testimonial.png"
              />
              
              {/* Right Pills */}
              <div className="flex items-center gap-4 md:gap-6 shrink-0 pr-2 md:pr-4">
                
                <CategoryPill label="Leadership" bgColor="bg-[#A56CF5]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Data Science" bgColor="bg-[#28E7A4]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Economics" bgColor="bg-[#FF6B00]" rotationClass="-rotate-[10deg]" />
              </div>

            </div>
          </div>

          {/* ROW 3 */}
          <div className="flex flex-col w-full relative">
            <RowHeader title="Aenean Facilisis" iconSrc="/images/badge.png" />
            
            {/* Background shadow base */}
            <div className="absolute top-[200px] md:top-[315px] left-[5%] md:left-[0%] w-[85%] md:w-[100%] h-[55px] md:h-[70px] bg-[#dfe9f2] bg-opacity-70 rounded-[20px] z-0 "></div>

            <div className="relative z-10 flex flex-row items-center pt-2 gap-4 md:gap-6 overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              
              {/* Left Pills */}
              <div className="flex items-center gap-4 md:gap-6 shrink-0 pl-2 md:pl-4">
                <CategoryPill label="Development" bgColor="bg-[#A56CF5]" rotationClass="-rotate-[10deg]" />
               
              </div>
              
              {/* Featured Card */}
              <FeaturedCourseCard 
                borderColorClass="border-[#00BCD4]/70" 
                buttonColorClass="text-[#00BCD4]" 
                imageSrc="/images/instructor.png"
              />
              
              {/* Right Pills */}
              <div className="flex items-center gap-4 md:gap-6 shrink-0 pr-2 md:pr-4">
                 <CategoryPill label="React JS" bgColor="bg-[#00AEEF]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Next JS" bgColor="bg-[#28E7A4]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Node JS" bgColor="bg-[#FF6B00]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Database" bgColor="bg-[#EF6685]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="DevOps" bgColor="bg-[#73C9A5]" rotationClass="-rotate-[10deg]" />
                <CategoryPill label="Security" bgColor="bg-[#A56CF5]" rotationClass="-rotate-[10deg]" />
              </div>

            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}
