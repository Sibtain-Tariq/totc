import BlogPage from "@/components/blog/BlogPage";
import RelatedBlogSection from "@/components/blog/RelatedBlogSection";
import MarketingArticlesSection from "@/components/blog/MarketingArticlesSection";
import Footer from "@/components/landingpage/Footer";

export default function Page() {
  return (
    <>
      <BlogPage />
      <RelatedBlogSection />
      <MarketingArticlesSection />
      <Footer />
    </>
  );
}
