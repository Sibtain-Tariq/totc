import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CompactCourseProps {
  image: string;
  category: string;
  duration: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  price: string;
  originalPrice: string;
}

export default function CourseCardCompact({ course }: { course: CompactCourseProps }) {
  const courseSlug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <Link 
      href={`/courses/${courseSlug}`}
      className="bg-white rounded-[12px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-50 overflow-hidden group hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full w-full"
    >
      {/* Course Image */}
      <div className="w-full h-[200px] p-[12px] shrink-0">
        <div className="relative w-full h-full overflow-hidden rounded-[10px] bg-gray-100">
          <Image 
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="px-5 pb-5 flex flex-col flex-grow">
        
        {/* Category & Duration */}
        <div className="flex items-center justify-between text-[#8A8A8A] text-[11px] md:text-[12px] font-medium mb-3">
          <div className="flex items-center gap-1.5">
            {/* Grid/Category Icon */}
            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>{course.category}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Course Title */}
        <h3 className="text-[#252641] text-[15px] md:text-[16px] font-bold leading-[1.4] mb-2 group-hover:text-[#4CB9BB] transition-colors line-clamp-2">
          {course.title}
        </h3>

        {/* Short Description */}
        <p className="text-[#696984] text-[11px] md:text-[13px] leading-[1.6] line-clamp-3 mb-5 flex-grow">
          {course.description}
        </p>

        {/* Instructor & Pricing Row */}
        <div className="flex items-center justify-between mt-auto">
          {/* Instructor */}
          <div className="flex items-center gap-2">
            <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden bg-gray-200">
              <Image 
                src={course.instructorAvatar}
                alt={course.instructor}
                fill
                className="object-cover object-top"
              />
            </div>
            <span className="text-[#252641] text-[12px] md:text-[13px] font-semibold">{course.instructor}</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-[#8A8A8A] text-[10px] md:text-[12px] line-through leading-none">{course.originalPrice}</span>
            <span className="text-[#4CB9BB] text-[16px] md:text-[18px] font-bold leading-none mt-1">{course.price}</span>
          </div>
        </div>

      </div>
    </Link>
  );
}
