import React from "react";
import Image from "next/image";

export default function WhatIsTotcSection() {
  return (
    <section className="w-full bg-white pt-10 md:pt-[30px] pb-20 md:pb-[100px]">
      <div className="max-w-7xl mx-auto px-4 md:px-[60px] flex flex-col items-center">
        
        {/* PART 1: Centered Heading & Intro */}
        <h2 className="text-[28px] md:text-[36px] font-bold text-center leading-tight">
          <span className="text-[#30378A]">What is </span>
          <span className="text-[#00C7B7]">TOTC?</span>
        </h2>
        
        <p className="mt-5 text-[#696984] text-[14px] md:text-[16px] leading-[1.6] text-center max-w-[800px]">
          TOTC is a platform that allows educators to create online classes whereby they can
          store the course materials online; manage assignments, quizzes and exams; monitor
          due dates; grade results and provide students with feedback all in one place.
        </p>

        {/* PART 2: Top Two Image Cards */}
        <div className="mt-12 md:mt-16 w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[50px]">
          
          {/* Instructor Card */}
          <div className="relative w-full max-w-[430px] h-[195px] md:h-[290px] rounded-[10px] overflow-hidden flex flex-col items-center justify-center bg-gray-900 shadow-md">
            {/* Z-0: Background Image */}
            <Image 
              src="/images/instructor.png" 
              alt="Instructor teaching in a classroom" 
              fill 
              className="object-cover z-0" 
            />
            
            {/* Z-10: Dark Translucent Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            
            {/* Z-20: Centered Content */}
            <div className="relative z-20 flex flex-col items-center">
              <h3 className="text-white text-[16px] md:text-[18px] font-bold mb-4">
                FOR INSTRUCTORS
              </h3>
              <button className="border border-white text-white hover:bg-white/10 rounded-full w-[140px] md:w-[150px] h-[38px] md:h-[40px] text-[13px] font-medium transition-colors">
                Start a class today
              </button>
            </div>
          </div>

          {/* Students Card */}
          <div className="relative w-full max-w-[430px] h-[195px] md:h-[290px] rounded-[10px] overflow-hidden flex flex-col items-center justify-center bg-gray-900 shadow-md">
            {/* Z-0: Background Image */}
            <Image 
              src="/images/students.png" 
              alt="Students sitting together using laptops" 
              fill 
              className="object-cover z-0" 
            />
            
            {/* Z-10: Dark Translucent Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            
            {/* Z-20: Centered Content */}
            <div className="relative z-20 flex flex-col items-center">
              <h3 className="text-white text-[16px] md:text-[18px] font-bold mb-4">
                FOR STUDENTS
              </h3>
              <button className="bg-[#30bbe8] text-white hover:bg-[#00B0A2] rounded-full w-[140px] md:w-[150px] h-[38px] md:h-[40px] text-[13px] font-medium transition-colors">
                Enter access code
              </button>
            </div>
          </div>

        </div>

        {/* PART 3: Lower Content Area (Two Columns) */}
        <div className="mt-20 md:mt-[100px] w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[100px] max-w-[1200px]">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start max-w-[480px]">
            
            <div className="relative z-10">
              {/* Decorative green circle */}
              <div className="absolute -top-[10px] -left-[20px] w-[35px] md:w-[55px] h-[65px] md:h-[55px] rounded-full bg-[#33efa0] opacity-80 -z-10"></div>
              
              <h3 className="text-[22px] md:text-[26px] font-bold leading-[1.45]">
                <span className="text-[#30378A]">Everything you can do in a physical classroom, </span>
                <span className="text-[#00C7B7]">you can do with TOTC</span>
              </h3>
            </div>

            <p className="mt-6 text-[#696984] text-[14px] md:text-[15px] leading-[1.7] max-w-[450px]">
              TOTC’s school management software helps traditional
              and online schools manage scheduling, attendance,
              payments and virtual classrooms all in one secure cloud-based system.
            </p>

            <a href="#learn-more" className="mt-6 text-[#696984] text-[12px] md:text-[13px] underline hover:text-[#30378A] transition-colors">
              Learn more
            </a>
          </div>

          {/* Right: Classroom Image/Video Card */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-8 md:mt-0">
            <div className="relative z-10 w-full max-w-[560px] h-[230px] md:h-[270px]">
              
              {/* Z-0: Decorative shape: Upper-left turquoise */}
              <div className="absolute -top-[15px] -left-[15px] w-[65px] h-[65px] bg-[#23BDEE] rounded-[15px] -z-10"></div>
              
              {/* Z-0: Decorative shape: Lower-right green */}
              <div className="absolute -bottom-[54px] -right-[15px] w-[150px] h-[190px] bg-[#33efa0] rounded-[15px] -z-10"></div>

              {/* Classroom Image Container */}
              <div className="relative w-full  h-[310px] rounded-[12px] bg-gray-900 overflow-hidden shadow-lg flex items-center justify-center">
                
                {/* Z-10: Classroom Image */}
                <Image 
                  src="/images/classroom.png" 
                  alt="Classroom with teacher and students" 
                  fill 
                  className="object-cover z-10" 
                />
                
                {/* Z-20: Play Button */}
                <button 
                  aria-label="Play classroom video"
                  className="relative z-20 w-[44px] md:w-[48px] h-[44px] md:h-[48px] bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform"
                >
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#23BDEE] border-b-[10px] border-b-transparent ml-1"></div>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
