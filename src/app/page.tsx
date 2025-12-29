import Hero from "@/sections/Hero";
import FeaturedMenu from "@/sections/FeaturedMenu";
import WhyUs from "@/sections/WhyUs";
import VisitUs from "@/sections/VisitUs";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedMenu />
      <WhyUs />
      <VisitUs />
      <Footer />
    </main>
  );
}