import React from "react";
import Image from "next/image";

function ReviewItem({ hideStars = false }: { hideStars?: boolean }) {
  return (
    <div className="w-full py-[30px] border-b border-[#555555] last:border-0">
      <div className="flex items-center justify-between mb-[12px]">
        
        <div className="flex items-center gap-[12px]">
          <div className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] relative rounded-full overflow-hidden shrink-0">
            <Image 
              src="/images/girl.png" 
              alt="Lina" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#222222] text-[12px] md:text-[16px] font-bold">Lina</span>
            {!hideStars && (
              <div className="flex gap-[2px] mt-[2px]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-[18px] h-[18px] text-[#F48C06]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-[6px] text-[#696984] text-[11px] md:text-[15px] font-medium">
          <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>3 Month</span>
        </div>
        
      </div>

      <p className="text-[#696984] text-[12px] md:text-[15px] leading-[1.6]">
        Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
      </p>
    </div>
  );
}

export default function CourseReviewSummary() {
  return (
    <div className="w-full bg-[#e2f0ff] rounded-[8px] md:rounded-[12px] p-[20px] md:p-[24px]">
      
      {/* Top Rating Summary */}
      <div className="flex flex-col md:flex-row gap-[40px] mb-[30px]">
        {/* White Review Box */}
        <div className="bg-white rounded-[10px] p-[20px] flex flex-col items-center justify-center min-w-[180px] md:min-w-[220px] shadow-sm">
          <div className="text-[#222222] text-[32px] md:text-[40px] font-bold leading-none mb-[8px]">
            4 <span className="text-[16px] md:text-[22px] text-[#696984] font-medium">out of 5</span>
          </div>
          <div className="flex gap-[4px] mb-[6px]">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-[22px] h-[22px] text-[#F48C06]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[#696984] text-[13px] md:text-[15px] font-medium">Top Rating</span>
        </div>

        {/* Rating Distribution */}
        <div className="flex-grow flex flex-col md:mr-[30px] justify-center gap-[12px]">
          {[
            { label: "5 Stars", percent: "80%" },
            { label: "4 Stars", percent: "80%" },
            { label: "3 Stars", percent: "80%" },
            { label: "2 Stars", percent: "80%" },
            { label: "1 Stars", percent: "80%" },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-[12px]">
              <span className="text-[#696984] text-[12px] md:text-[14px] font-medium w-[50px]">{row.label}</span>
              <div className="flex-grow h-[8px] md:ml-[10px] md:h-[9px] bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full  bg-[#00C7B7] rounded-full" style={{ width: row.percent }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="flex flex-col">
        <ReviewItem />
        <ReviewItem hideStars={true} />
       
      </div>

    </div>
  );
}
