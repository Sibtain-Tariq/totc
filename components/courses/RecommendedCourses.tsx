import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RecommendedCourse {
  image: string;
  category: string;
  duration: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  originalPrice: string;
  price: string;
}

const recommendedData: RecommendedCourse[] = [
  {
    image: "/images/students.png",
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: "Lina",
    instructorAvatar: "/images/students.png",
    originalPrice: "$100",
    price: "$80"
  },
  {
    image: "/images/resources/laptop1.png",
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: "Lina",
    instructorAvatar: "/images/girl.png",
    originalPrice: "$100",
    price: "$80"
  },
  {
    image: "/images/instructor.png",
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: "Lina",
    instructorAvatar: "/images/girl.png",
    originalPrice: "$100",
    price: "$80"
  },
  {
    image: "/images/resources/laptop1.png",
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: "Lina",
    instructorAvatar: "/images/girl.png",
    originalPrice: "$100",
    price: "$80"
  }
];

function RecommendedCourseCard({ course }: { course: RecommendedCourse }) {
  return (
    <div className="bg-[#FFFFFF] rounded-[12px] shadow-[0_8px_25px_rgba(0,0,0,0.08)] p-[14px] flex flex-col w-full h-[390px]">
      
      {/* Course Image */}
      <div className="relative w-full h-[175px] rounded-[10px] overflow-hidden mb-[12px] shrink-0">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
      </div>

      {/* Metadata Row */}
      <div className="flex items-center justify-between mb-[8px]">
        <div className="flex items-center gap-[6px] text-[#696984] text-[11px] md:text-[12px]">
          <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span>{course.category}</span>
        </div>
        <div className="flex items-center gap-[6px] text-[#696984] text-[11px] md:text-[12px]">
          <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{course.duration}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[#111111] text-[15px] md:text-[17px] font-semibold leading-[1.3] mb-[8px] line-clamp-2">
        {course.title}
      </h3>

      {/* Description */}
      <p className="text-[#696984] text-[12px] md:text-[13px] leading-[18px] md:leading-[20px] mb-[12px] line-clamp-3">
        {course.description}
      </p>

      {/* Bottom Instructor + Price */}
      <div className="mt-auto flex items-center justify-between pt-[4px]">
        <div className="flex items-center gap-[8px]">
          <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden shrink-0">
            <Image src={course.instructorAvatar} alt={course.instructor} fill className="object-cover"/>
          </div>
          <span className="text-[#222222] text-[12px] md:text-[13px] font-medium">{course.instructor}</span>
        </div>
        <div className="flex items-center gap-[8px]">
          <span className="text-[#888888] text-[12px] md:text-[13px] line-through">{course.originalPrice}</span>
          <span className="text-[#00C7B7] text-[15px] md:text-[16px] font-bold">{course.price}</span>
        </div>
      </div>

    </div>
  );
}

export default function RecommendedCourses() {
  return (
    <section className="w-full bg-[#EAF4FC] pt-[60px] md:pt-[80px] pb-[60px] md:pb-[90px]">
      <div className="max-w-[1350px] mx-auto px-4 md:px-[50px]">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-[30px] md:mb-[40px]">
          <h2 className="text-[#111111] text-[20px] md:text-[22px] font-bold">
            Recommended for you
          </h2>
          <button className="text-[#00C7B7] text-[13px] md:text-[14px] font-bold hover:underline underline-offset-4">
            See all
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[30px] justify-items-center">
          {recommendedData.map((course, idx) => (
            <RecommendedCourseCard key={idx} course={course} />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-end mt-[35px] md:mt-[45px] gap-[10px]">
          <button 
            className="w-[40px] h-[40px] rounded-[3px] bg-[#8ED8DD] text-white shadow-sm flex items-center justify-center hover:bg-[#7bc8cd] transition-colors"
            aria-label="Previous"
          >
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="w-[40px] h-[40px] rounded-[3px] bg-[#00C7B7] text-white shadow-sm flex items-center justify-center hover:bg-[#00b3a4] transition-colors"
            aria-label="Next"
          >
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
