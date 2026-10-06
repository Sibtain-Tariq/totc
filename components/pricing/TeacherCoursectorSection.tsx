import React from "react";
import Image from "next/image";

export default function TeacherCoursectorSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-24 md:py-32">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* TEACHER CARD */}
          <div className="bg-white rounded-[14px] p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col items-start w-full min-h-[450px]">
            <div className="relative w-full h-[215px] md:h-[220px] rounded-[10px] overflow-hidden mb-8 bg-gray-200 shrink-0">
              <Image 
                src="/images/classroom.png" 
                alt="Become a Teacher"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="px-2 md:px-4 flex flex-col flex-grow w-full">
              <h3 className="text-[#303050] text-[18px] md:text-[20px] font-bold mb-4">
                Become a Teacher
              </h3>
              <p className="text-[#777794] text-[14px] md:text-[15px] leading-[1.6] mb-8">
                Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
              </p>
              
              <div className="mt-auto flex justify-end w-full pb-2">
                <button className="bg-[#49B9BD] text-white font-medium text-[15px] md:text-[16px] rounded-[7px] w-[155px] h-[45px] hover:bg-[#3ca4a6] transition-colors shadow-sm">
                  Apply a Teacher
                </button>
              </div>
            </div>
          </div>

          {/* COURSECTOR CARD */}
          <div className="bg-white rounded-[14px] p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col items-start w-full min-h-[450px]">
            <div className="relative w-full h-[215px] md:h-[220px] rounded-[10px] overflow-hidden mb-8 bg-gray-200 shrink-0">
              <Image 
                src="/images/students.png" 
                alt="Become a Coursector"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="px-2 md:px-4 flex flex-col flex-grow w-full">
              <h3 className="text-[#303050] text-[18px] md:text-[20px] font-bold mb-4">
                Become a Coursector
              </h3>
              <p className="text-[#777794] text-[14px] md:text-[15px] leading-[1.6] mb-8">
                Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
              </p>
              
              <div className="mt-auto flex justify-end w-full pb-2">
                <button className="bg-[#49B9BD] text-white font-medium text-[15px] md:text-[16px] rounded-[7px] w-[175px] h-[45px] hover:bg-[#3ca4a6] transition-colors shadow-sm">
                  Apply a Coursector
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
