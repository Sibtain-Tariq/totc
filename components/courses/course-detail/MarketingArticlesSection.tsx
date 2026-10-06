import React from "react";
import CourseCardCompact from "../CourseCardCompact";

const marketingCourses = [
  {
    image: "/images/resources/laptop1.png",
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: "Lina",
    instructorAvatar: "/images/resources/person1.png",
    originalPrice: "$100",
    price: "$80"
  },
  {
    image: "/images/resources/laptop2.png",
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: "Lina",
    instructorAvatar: "/images/ourfeatures/person2.png",
    originalPrice: "$100",
    price: "$80"
  },
  {
    image: "/images/ourfeatures/italy.png",
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: "Lina",
    instructorAvatar: "/images/ourfeatures/person3.png",
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
    instructorAvatar: "/images/resources/person1.png",
    originalPrice: "$100",
    price: "$80"
  }
];

export default function MarketingArticlesSection() {
  return (
    <section className="w-full bg-[#EAF4FF] py-16 md:py-14">
      <div className="max-w-[1440px] mx-auto  px-4 md:px-[60px] xl:px-[80px]">
        
        {/* Section Header */}
        <div className="flex items-center  justify-between mb-10 md:mb-12">
          <h2 className="text-[#0a0b16] text-[24px] md:text-[28px] lg:text-[32px] font-bold">
            Marketing Articles
          </h2>
          <button className="text-[#00C7B7] text-[13px] md:text-[14px] font-bold hover:underline">
            See all
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 p-[8px] lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {marketingCourses.map((course, index) => (
            <CourseCardCompact key={index} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
}
