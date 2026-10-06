import React from "react";
import CourseCardCompact from "./CourseCardCompact";

const choiceData = [
  {
    image: "/images/resources/laptop2.png",
    category: "Design",
    duration: "3 Months",
    title: "AWS Certified Solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: "Lina",
    instructorAvatar: "/images/ourfeatures/person2.png",
    originalPrice: "$100",
    price: "$80"
  },
  {
    image: "/images/resources/laptop1.png",
    category: "Design",
    duration: "3 Months",
    title: "AWS Certified Solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: "Lina",
    instructorAvatar: "/images/ourfeatures/person3.png",
    originalPrice: "$100",
    price: "$80"
  },
  {
    image: "/images/ourfeatures/italy.png",
    category: "Design",
    duration: "3 Months",
    title: "AWS Certified Solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: "Lina",
    instructorAvatar: "/images/ourfeatures/person4.png",
    originalPrice: "$100",
    price: "$80"
  },
  {
    image: "/images/resources/laptop2.png",
    category: "Design",
    duration: "3 Months",
    title: "AWS Certified Solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    instructor: "Lina",
    instructorAvatar: "/images/ourfeatures/person5.png",
    originalPrice: "$100",
    price: "$80"
  }
];

export default function ChoiceCourses() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
    <div className="max-w-[1400px] mx-auto px-4 md:px-[10px] xl:px-[80px]"> 
        
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10 md:mb-12">
          <h2 className="text-[#040408] text-[28px] md:text-[36px] font-bold">
            Get choice of your course
          </h2>
          <button className="text-[#00C7B7] text-[15px] md:text-[16px] font-bold hover:underline">
            See all
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {choiceData.map((course, index) => (
            <CourseCardCompact key={index} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
}
