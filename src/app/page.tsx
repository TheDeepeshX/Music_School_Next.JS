import HeroSection from "@/components/HeroSection";
import FeaturedCources from "@/components/FeatucredCources";
import WhyChoseUs from "@/components/WhyChoseus";
import MusicSchoolTestiMonial from "@/components/Testimonialcards";
import Instructors from "@/components/instructors";
import UpcomingWebiners from "@/components/UpcomingWebneers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased text-white">
      <HeroSection />
      <FeaturedCources/>
      <WhyChoseUs/>
      <MusicSchoolTestiMonial/>
      <UpcomingWebiners/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
