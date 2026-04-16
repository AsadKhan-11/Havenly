import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { AboutUs } from "@/components/AboutUs";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Amenities } from "@/components/Amenities";
import { VideoTour } from "@/components/VideoTour";
import { Statistics } from "@/components/Statistics";
import { Process } from "@/components/Process";
import { Neighborhoods } from "@/components/Neighborhoods";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-obsidian min-h-screen relative">
      <Navbar />
      <Hero />
      <TrustedBy />
      <AboutUs />
      <FeaturedProperties />
      <Amenities />
      <VideoTour />
      <Statistics />
      <Process />
      <Neighborhoods />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
