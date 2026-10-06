import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RelatedBlogCardProps {
  imageSrc: string;
  imageAlt: string;
}

function RelatedBlogCard({ imageSrc, imageAlt }: RelatedBlogCardProps) {
  return (
    <div className="bg-[#FFFFFF] rounded-[10px] md:rounded-[12px] shadow-sm flex flex-col w-full h-auto md:h-[550px] p-[16px]">
      
      {/* 5. BLOG CARD IMAGE */}
      <div className="relative w-full h-[270px] mt-5 rounded-[10px] overflow-hidden shrink-0">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill 
          className="object-cover"
        />
      </div>

      {/* 6. CARD TITLE */}
      <h3 className="text-[#000000] text-[14px] md:text-[16px] font-semibold leading-[1.5] mt-[10px]">
        Class adds $30 million to its balance sheet for a<br className="hidden sm:block"/>
        Zoom-friendly edtech solution
      </h3>

      {/* 7. AUTHOR ROW */}
      <div className="flex items-center gap-[10px] mt-[12px]">
        <div className="relative w-[36px] h-[36px] rounded-full overflow-hidden shrink-0">
          <Image src="/images/girl.png" alt="Lina" fill className="object-cover"/>
        </div>
        <span className="text-[#222222] text-[11px] md:text-[13px] font-medium">Lina</span>
      </div>

      {/* 8. DESCRIPTION */}
      <p className="text-[#696984] text-[11px] md:text-[13px] leading-[1.7] mt-[12px] line-clamp-2">
        Class, launched less than a year ago by Blackboard co-founder<br className="hidden sm:block"/>
        Michael Chasen, integrates exclusively...
      </p>

      {/* 9. BOTTOM CARD METADATA */}
      <div className="flex items-center justify-between mt-[29px]">
        <Link href="#" className="text-[#696984] text-[11px] md:text-[13px] underline decoration-1 underline-offset-2 hover:text-[#222]">
          Read more
        </Link>
        <div className="flex items-center gap-[6px]">
          {/* Eye Icon */}
          <svg className="w-[14px] md:w-[15px] h-[14px] md:h-[15px] text-[#00C7B7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="text-[#696984] text-[11px] md:text-[13px]">251,232</span>
        </div>
      </div>

    </div>
  );
}

export default function RelatedBlogSection() {
  return (
    <section className="w-full bg-[#EAF4FC] pt-[45px] md:pt-[50px] pb-[28px] md:pb-[35px]">
      <div className="max-w-[1250px] mx-auto px-4 md:px-[10px]">
        
        {/* 2. SECTION HEADER */}
        <div className="flex items-center justify-between mb-[25px] md:mb-[30px]">
          <h2 className="text-[#111111] text-[18px] md:text-[20px] font-bold">
            Related Blog
          </h2>
          <Link href="#" className="text-[#00C7B7] text-[11px] md:text-[16px] font-bold hover:underline decoration-2 underline-offset-4">
            See all
          </Link>
        </div>

        {/* 3. MAIN BLOG CARD LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[50px]">
          <RelatedBlogCard 
            imageSrc="/images/students.png"
            imageAlt="Female instructor"
          />
          <RelatedBlogCard 
            imageSrc="/images/resources/laptop1.png"
            imageAlt="Zoom friendly laptop"
          />
        </div>

        {/* 11. BOTTOM NAVIGATION BUTTONS */}
        <div className="flex items-center justify-end mt-[30px] md:mt-[32px] gap-[8px]">
          <button 
            className="w-[26px] md:w-[28px] h-[26px] md:h-[28px] rounded-[3px] bg-[#8ED8DD] text-white flex items-center justify-center hover:bg-[#7bcad0] transition-colors"
            aria-label="Previous"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="w-[26px] md:w-[28px] h-[26px] md:h-[28px] rounded-[3px] bg-[#4CB9BB] text-white flex items-center justify-center hover:bg-[#3ca4a6] transition-colors"
            aria-label="Next"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
