import React from "react";
import Image from "next/image";

export default function NewsResourcesSection() {
  return (
    <section className="w-full bg-white py-20 md:py-[70px] overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 md:px-[60px]">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <h2 className="text-[#111223] text-[26px] md:text-[32px] font-medium leading-tight">
            Latest News and Resources
          </h2>

          <p className="text-[#696984] text-[15px] md:text-[18px] mt-4 md:mt-5">
            See the developments that have occurred to TOTC in the world
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[10px] items-start">

          {/* LEFT FEATURED ARTICLE */}
          <div className="w-full lg:w-[68%] flex flex-col items-start">

            {/* Featured Image */}
            <div className="relative w-full max-w-[560px] h-[220px] sm:h-[240px] md:h-[260px] rounded-[14px] md:rounded-[16px] overflow-hidden mb-8 shadow-sm">
              <Image
                src="/images/resources/laptop1.png"
                alt="Featured news article"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge */}
            <div className="w-[85px] md:w-[95px] h-[28px] md:h-[32px] bg-[#49BBBD] rounded-full flex items-center justify-center mb-5 md:mb-6">
              <span className="text-white text-[11px] md:text-[13px] font-medium uppercase tracking-wider">
                NEWS
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[#0d0e1d] text-[18px] md:text-[22px] font-medium leading-[1.4] mb-4 md:mb-5 max-w-[560px]">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h3>

            {/* Description */}
            <p className="text-[#696984] text-[14px] md:text-[17px] leading-[1.6] mb-6 md:mb-8 max-w-[560px]">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>

            {/* Read more */}
            <a
              href="#"
              className="text-[#696984] text-[14px] md:text-[17px] underline hover:text-[#00C7B7] transition-colors underline-offset-4"
            >
              Read more
            </a>
          </div>

          {/* RIGHT SMALLER ARTICLES */}
          <div className="w-full lg:w-[62%] flex flex-col gap-10 md:gap-12 mt-12 lg:mt-0">

            {/* Article 1 */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center group cursor-pointer">

              <div className="relative w-full sm:w-[190px] md:w-[210px] h-[200px] sm:h-[135px] md:h-[145px] shrink-0 rounded-[14px] md:rounded-[16px] overflow-hidden shadow-sm">
                <Image
                  src="/images/resources/person1.png"
                  alt="News article 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 w-[110px] md:w-[130px] h-[26px] md:h-[30px] bg-[#49BBBD] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                    PRESS RELEASE
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center">
                <h4 className="text-[#151625] text-[15px] md:text-[18px] font-medium leading-[1.4] mb-3 md:mb-4 group-hover:text-[#00C7B7] transition-colors max-w-[360px]">
                  Class Technologies Inc. Closes $30 Million Series A Financing
                  to Meet High Demand
                </h4>

                <p className="text-[#696984] text-[14px] md:text-[15px] leading-[1.6] max-w-[360px]">
                  Class Technologies Inc., the company that created Class,...
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center group cursor-pointer">

              <div className="relative w-full sm:w-[190px] md:w-[210px] h-[200px] sm:h-[135px] md:h-[145px] shrink-0 rounded-[14px] md:rounded-[16px] overflow-hidden shadow-sm">
                <Image
                  src="/images/resources/laptop2.png"
                  alt="News article 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 w-[80px] md:w-[90px] h-[26px] md:h-[30px] bg-[#49BBBD] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[10px] md:text-[12px] font-medium uppercase tracking-wider">
                    NEWS
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center">
                <h4 className="text-[#0c0d1a] text-[15px] md:text-[18px] font-medium leading-[1.4] mb-3 md:mb-4 group-hover:text-[#00C7B7] transition-colors max-w-[360px]">
                  Zoom’s earliest investors are betting millions on a better
                  Zoom for schools
                </h4>

                <p className="text-[#696984] text-[14px] md:text-[15px] leading-[1.6] max-w-[360px]">
                  Zoom was never created to be a consumer product. Nonetheless,
                  the...
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center group cursor-pointer">

              <div className="relative w-full sm:w-[190px] md:w-[210px] h-[200px] sm:h-[135px] md:h-[145px] shrink-0 rounded-[14px] md:rounded-[16px] overflow-hidden shadow-sm">
                <Image
                  src="/images/resources/cat.png"
                  alt="News article 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 w-[80px] md:w-[90px] h-[26px] md:h-[30px] bg-[#49BBBD] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[10px] md:text-[12px] font-medium uppercase tracking-wider">
                    NEWS
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center">
                <h4 className="text-[#151723] text-[15px] md:text-[18px] font-medium leading-[1.4] mb-3 md:mb-4 group-hover:text-[#00C7B7] transition-colors max-w-[360px]">
                  Former Blackboard CEO Raises $16M to Bring LMS Features to
                  Zoom Classrooms
                </h4>

                <p className="text-[#696984] text-[14px] md:text-[15px] leading-[1.6] max-w-[360px]">
                  This year, investors have reaped big financial returns from
                  betting on Zoom...
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}