import React from "react";
import Image from "next/image";

export default function CourseHero() {
  return (
    <div className="w-full relative h-[300px] md:h-[450px]">
      <Image 
        src="/images/students.png"
        alt="Course Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
}
