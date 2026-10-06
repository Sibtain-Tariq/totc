import React from "react";
import Image from "next/image";

const offers = [
  {
    image: "/images/resources/laptop1.png",
    badge: "50%",
    title: "Lorem ipsum dolor",
    lines: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor",
      "incididunt ut labore",
    ],
  },
  {
    image: "/images/ourfeatures/italy.png",
    badge: "10%",
    title: "Lorem ipsum dolor",
    lines: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor",
      "incididunt ut labore",
    ],
  },
  {
    image: "/images/resources/laptop2.png",
    badge: "50%",
    title: "Lorem ipsum dolor",
    lines: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor",
      "incididunt ut labore",
    ],
  },
];

export default function EducationOffers() {
  return (
    <section className="w-full bg-white pt-16 pb-16 md:pt-2 md:pb-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] xl:px-[80px]">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-10 md:mb-12">
          <h2 className="text-[#090a13] text-[22px] md:text-[28px] lg:text-[32px] font-bold leading-snug max-w-[750px]">
            Top Education offers and deals are listed here
          </h2>
          <button className="text-[#00C7B7] text-[13px] md:text-[15px] font-bold hover:underline shrink-0 ml-4">
            See all
          </button>
        </div>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="relative rounded-[20px] overflow-hidden h-[300px] md:h-[350px] group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/55"></div>

              {/* Card Content */}
              <div className="absolute inset-0 p-7 md:p-8 flex flex-col">
                {/* Badge */}
                <div className="bg-[#49BBBD] text-white text-[18px] md:text-[30px] font-bold px-5 py-6 rounded-[8px] w-fit mb-6">
                  {offer.badge}
                </div>

                {/* Title */}
                <h3 className="text-white text-[18px] md:text-[22px] font-bold mb-4">
                  {offer.title}
                </h3>

                {/* Lines */}
                <div className="flex flex-col gap-1.5">
                  {offer.lines.map((line, j) => (
                    <p key={j} className="text-white/80 text-[13px] md:text-[15px] leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
