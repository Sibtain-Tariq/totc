import Header from "@/components/landingpage/Header";
import HeroSection from "@/components/landingpage/HeroSection";
import SuccessSection from "@/components/landingpage/SuccessSection";
import CloudSoftwareSection from "@/components/landingpage/CloudSoftwareSection";
import WhatIsTotcSection from "@/components/landingpage/WhatIsTotcSection";
import FeaturesSection from "@/components/landingpage/FeaturesSection";
import ExploreCoursesSection from "@/components/landingpage/ExploreCoursesSection";
import TestimonialSection from "@/components/landingpage/TestimonialSection";
import NewsResourcesSection from "@/components/landingpage/NewsResourcesSection";
import Footer from "@/components/landingpage/Footer";

export default function Home() {
  return (
    <>
      {/* HeroSection owns its own turquoise bg and bottom curve */}
      <div className="bg-[#4CB9BB]">
        <HeroSection />
      </div>
      <main className="bg-white">
        <SuccessSection />
        <CloudSoftwareSection />
        <WhatIsTotcSection />
        <FeaturesSection />
        <ExploreCoursesSection />
        <TestimonialSection />
        <NewsResourcesSection />
      </main>
      <Footer />
    </>
  );
}
