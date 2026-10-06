import React from "react";
import Image from "next/image";
import Link from "next/link";

const offers = [
  {
    discount: "50%",
    title: "FOR INSTRUCTORS",
    description: "TOTC’s school management software helps traditional and online schools manage scheduling,",
    image: "/images/resources/laptop1.png"
  },
  {
    discount: "50%",
    title: "FOR INSTRUCTORS",
    description: "TOTC’s school management software helps traditional and online schools manage scheduling,",
    image: "/images/resources/laptop2.png"
  },
  {
    discount: "50%",
    title: "FOR INSTRUCTORS",
    description: "TOTC’s school management software helps traditional and online schools manage scheduling,",
    image: "/images/classroom.png"
  }
];

export default function EducationOffersSection() {
  return (
    <section className="w-full bg-white pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-[1350px] mx-auto px-4 md:px-[50px]">
        
        {/* Header Row */}
        <div className="flex items-center justify-between mb-10 md:mb-[50px]">
          <h2 className="text-[#222222] text-[22px] md:text-[28px] font-medium max-w-[80%]">
            Top Education offers and deals are listed here
          </h2>
          <Link href="#" className="text-[#00C7B7] text-[15px] md:text-[16px] font-bold hover:underline shrink-0">
            See all
          </Link>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-[48px]">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="relative w-full h-[340px] rounded-[14px] md:rounded-[16px] border border-black/5 overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <Image 
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500 z-10"></div>

              {/* Discount Badge */}
              <div className="absolute top-[35px] left-[35px] z-20 w-[72px] h-[72px] bg-[#d94044] rounded-[8px] flex items-center justify-center shadow-md">
                <span className="text-white text-[17px] md:text-[18px] font-bold">
                  {offer.discount}
                </span>
              </div>

              {/* Text Content */}
              <div className="absolute top-[135px] left-[35px] right-[45px] z-20 flex flex-col">
                <h3 className="text-white text-[22px] md:text-[24px] font-bold uppercase mb-7">
                  {offer.title}
                </h3>
                <p className="text-white text-[17px] md:text-[16px] leading-[1.7] max-w-[290px]">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
