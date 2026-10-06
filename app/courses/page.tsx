import React from "react";
import Footer from "@/components/landingpage/Footer";
import CoursesHero from "@/components/courses/CoursesHero";
import CourseList from "@/components/courses/CourseList";
import CourseCategories from "@/components/courses/CourseCategories";
import RecommendedCourses from "@/components/courses/RecommendedCourses";
import OnlineCoachingSection from "@/components/courses/OnlineCoachingSection";
import ChoiceCourses from "@/components/courses/ChoiceCourses";

export default function CoursesPage() {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <main className="flex-grow w-full">
        <CoursesHero />
        <CourseCategories />
        <CourseList />
        <RecommendedCourses />
        <ChoiceCourses />
        <OnlineCoachingSection />
      </main>
      <Footer />
    </div>
  );
}
