import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MarketingArticleCardProps {
  imageSrc: string;
  imageAlt: string;
}

function MarketingArticleCard({ imageSrc, imageAlt }: MarketingArticleCardProps) {
  return (
    <div className="bg-[#FFFFFF] rounded-[10px] md:rounded-[12px] shadow-sm flex flex-col w-full h-[405px] p-[12px] md:p-[14px]">
      
      {/* 5. CARD IMAGE */}
      <div className="relative w-full h-[115px] md:h-[175px] rounded-[8px] md:rounded-[10px] overflow-hidden shrink-0">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill 
          className="object-cover"
        />
      </div>

      {/* 6. CATEGORY + DURATION ROW */}
      <div className="flex items-center justify-between mt-[8px] md:mt-[10px]">
        <div className="flex items-center gap-[4px]">
          {/* Grid/Category Icon */}
          <svg className="w-[12px] md:w-[14px] h-[12px] md:h-[14px] text-[#696984]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span className="text-[#696984] text-[11px] md:text-[12px] font-medium">Design</span>
        </div>
        <div className="flex items-center gap-[4px]">
          {/* Clock Icon */}
          <svg className="w-[12px] md:w-[14px] h-[12px] md:h-[14px] text-[#696984]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[#696984] text-[11px] md:text-[12px] font-medium">3 Month</span>
        </div>
      </div>

      {/* 7. CARD TITLE */}
      <h3 className="text-[#111111] text-[14px] md:text-[15px] font-bold leading-[1.4] mt-[8px] md:mt-[10px] line-clamp-2">
        AWS Certified solutions<br className="hidden sm:block"/> Architect
      </h3>

      {/* 8. DESCRIPTION */}
      <p className="text-[#696984] text-[11px] md:text-[12px] leading-[1.6] mt-[10px] md:mt-[12px] line-clamp-3">
        Lorem ipsum dolor sit amet,<br className="hidden sm:block"/>
        consectetur adipiscing elit, sed do<br className="hidden sm:block"/>
        eiusmod tempor
      </p>

      {/* 9. BOTTOM AUTHOR + PRICE ROW */}
      <div className="flex items-center justify-between mt-auto pt-[8px]">
        <div className="flex items-center gap-[6px]">
          <div className="relative w-[30px] md:w-[32px] h-[30px] md:h-[32px] rounded-full overflow-hidden shrink-0">
            <Image src="/images/girl.png" alt="Lina" fill className="object-cover"/>
          </div>
          <span className="text-[#111111] text-[11px] md:text-[12px] font-medium">Lina</span>
        </div>
        <div className="flex items-center gap-[6px]">
          <span className="text-[#696984] text-[11px] md:text-[12px] line-through decoration-1">$100</span>
          <span className="text-[#00C7B7] text-[14px] md:text-[16px] font-bold">$80</span>
        </div>
      </div>

    </div>
  );
}

export default function MarketingArticlesSection() {
  return (
    <section className="w-full bg-[#FFFFFF] pt-[45px] md:pt-[55px] pb-[50px] md:pb-[60px]">
     <div className="max-w-[1250px] mx-auto px-4 md:px-[10px]">
        
        {/* 2. SECTION HEADER */}
        <div className="flex items-center justify-between mb-[25px] md:mb-[30px]">
          <h2 className="text-[#111111] text-[18px] md:text-[20px] font-bold">
            Marketing Articles
          </h2>
          <Link href="#" className="text-[#00C7B7] text-[15px] md:text-[17px] font-bold hover:underline decoration-2 underline-offset-4">
            See all
          </Link>
        </div>

        {/* 3. CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[28px]">
          <MarketingArticleCard imageSrc="/images/students.png" imageAlt="Student using tablet" />
          <MarketingArticleCard imageSrc="/images/instructor.png" imageAlt="Person using laptop" />
          <MarketingArticleCard imageSrc="/images/resources/laptop2.png" imageAlt="Laptop and coffee" />
          <MarketingArticleCard imageSrc="/images/testimonial.png" imageAlt="Multiple people video call with cat" />
        </div>

      </div>
    </section>
  );
}
