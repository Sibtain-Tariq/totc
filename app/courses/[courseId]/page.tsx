import React from "react";
import Footer from "@/components/landingpage/Footer";
import CourseHero from "@/components/courses/course-detail/CourseHero";
import CourseSidebar from "@/components/courses/course-detail/CourseSidebar";
import CourseNavigation from "@/components/courses/course-detail/CourseNavigation";
import CourseReviewSummary from "@/components/courses/course-detail/CourseReviewSummary";
import MarketingArticlesSection from "@/components/courses/course-detail/MarketingArticlesSection";
import WhatIsTotcCourses from "@/components/courses/course-detail/WhatIsTotcCourses";
import EducationOffersSection from "@/components/courses/course-detail/EducationOffersSection";

export default function CourseDetailPage() {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <main className="flex-grow w-full relative">
        
        {/* Full Width Hero */}
        <CourseHero />

        {/* Main Content Layout (2 columns) */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] xl:px-[80px] w-full flex flex-col lg:flex-row gap-10 xl:gap-16 relative">
          
          {/* Left Side: Main Content */}
          <div className="flex-grow lg:w-[65%] xl:w-[70%] pt-4 md:pt-8 pb-20">
            <CourseNavigation />
            <CourseReviewSummary />
          </div>

          {/* Right Side: Sidebar */}
          <div className="w-full lg:w-[35%] xl:w-[30%] pb-20">
            <CourseSidebar />
          </div>

        </div>

        <MarketingArticlesSection />
        <WhatIsTotcCourses />
        <EducationOffersSection />

      </main>
      <Footer />
    </div>
  );
}
