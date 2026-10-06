import React from "react";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    image: "/images/resources/laptop2.png",
    category: "Design",
    title: "AWS Certified Solutions Architect",
    instructor: "Lina",
    instructorRole: "Design Expert",
    instructorAvatar: "/images/ourfeatures/person2.png",
    duration: "3 Months",
    lessons: "45 Lessons",
    price: "$80",
    originalPrice: "$100",
    rating: "4.9"
  },
  {
    image: "/images/resources/laptop1.png",
    category: "Development",
    title: "Mastering React & Next.js 14",
    instructor: "John Doe",
    instructorRole: "Senior Developer",
    instructorAvatar: "/images/ourfeatures/person3.png",
    duration: "4 Months",
    lessons: "60 Lessons",
    price: "$120",
    originalPrice: "$150",
    rating: "4.8"
  },
  {
    image: "/images/ourfeatures/italy.png",
    category: "Photography",
    title: "Advanced Photography Masterclass",
    instructor: "Jane Smith",
    instructorRole: "Pro Photographer",
    instructorAvatar: "/images/ourfeatures/person4.png",
    duration: "2 Months",
    lessons: "30 Lessons",
    price: "$60",
    originalPrice: "$90",
    rating: "4.7"
  },
  {
    image: "/images/resources/laptop2.png",
    category: "Marketing",
    title: "Digital Marketing Blueprint 2024",
    instructor: "David Kim",
    instructorRole: "Marketing Lead",
    instructorAvatar: "/images/ourfeatures/person5.png",
    duration: "3 Months",
    lessons: "40 Lessons",
    price: "$75",
    originalPrice: "$95",
    rating: "4.9"
  },
  {
    image: "/images/resources/laptop1.png",
    category: "Business",
    title: "The Complete Business Management",
    instructor: "Sarah Jenkins",
    instructorRole: "CEO & Founder",
    instructorAvatar: "/images/ourfeatures/person1.png",
    duration: "5 Months",
    lessons: "80 Lessons",
    price: "$150",
    originalPrice: "$199",
    rating: "4.8"
  },
  {
    image: "/images/ourfeatures/italy.png",
    category: "Design",
    title: "Adobe Illustrator Advanced",
    instructor: "Alex Chen",
    instructorRole: "Creative Director",
    instructorAvatar: "/images/ourfeatures/person2.png",
    duration: "2 Months",
    lessons: "25 Lessons",
    price: "$50",
    originalPrice: "$80",
    rating: "4.6"
  }
];

export default function CourseList() {
  return (
    <section className="w-full bg-white py-10 md:py-8 pb-24 md:pb-12">
      <div className="max-w-[1350px] mx-auto px-4 md:px-[50px]">
        
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[#040613] text-[28px] md:text-[34px] font-bold">
            Popular Courses
          </h2>
          <div className="hidden md:flex gap-4">
            <button className="text-[#00C7B7] text-[15px] font-semibold bg-[#EAF4FF] px-5 py-2 rounded-full">All</button>
            <button className="text-[#696984] text-[15px] font-medium hover:text-[#00C7B7] px-4 py-2">Design</button>
            <button className="text-[#696984] text-[15px] font-medium hover:text-[#00C7B7] px-4 py-2">Development</button>
            <button className="text-[#696984] text-[15px] font-medium hover:text-[#00C7B7] px-4 py-2">Business</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pt-10" >
          {courses.map((course, index) => {
            const courseSlug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <Link 
                href={`/courses/${courseSlug}`}
                key={index}
                className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-50 overflow-hidden group hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
              >
                {/* Image Header */}
                <div className="w-full h-[220px] relative overflow-hidden bg-gray-100">
                  <Image 
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[#303030] text-[12px] font-bold tracking-wide uppercase shadow-sm">
                    {course.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  
                  {/* Course Title */}
                  <h3 className="text-[#222222] text-[18px] md:text-[20px] font-bold leading-snug mb-5 group-hover:text-[#00C7B7] transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  {/* Duration / Lessons */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-[#696984] text-[13px] md:text-[14px]">
                      <svg className="w-4 h-4 text-[#00C7B7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#696984] text-[13px] md:text-[14px]">
                      <svg className="w-4 h-4 text-[#F48C06]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                      <span>{course.lessons}</span>
                    </div>
                  </div>

                  {/* Instructor Row */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden bg-gray-200">
                        <Image 
                          src={course.instructorAvatar}
                          alt={course.instructor}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#222222] text-[14px] font-bold">{course.instructor}</span>
                        <span className="text-[#696984] text-[12px]">{course.instructorRole}</span>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="flex flex-col items-end">
                      <span className="text-gray-400 text-[13px] line-through">{course.originalPrice}</span>
                      <span className="text-[#4CB9BB] text-[20px] font-bold">{course.price}</span>
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

        <div className="w-full flex justify-center mt-12 md:mt-16">
          <button className="bg-[#4CB9BB] text-white text-[14px] md:text-[15px] font-semibold px-8 py-3.5 rounded-full hover:bg-[#3ca4a6] transition-colors shadow-sm">
            Load More Courses
          </button>
        </div>

      </div>
    </section>
  );
}
