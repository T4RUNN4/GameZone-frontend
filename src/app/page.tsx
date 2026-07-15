import AboutUs from "@/components/AboutUS";
import CustomerReview from "@/components/CustomerReview";
import FeaturedGames from "@/components/FeaturedGames";
import HeroSlider from "@/components/Hero";
import WhyChooseUS from "@/components/WhyChooseUS";

export default function Home() {
  return (
    <>
      <HeroSlider />
        <div className="divider"></div>
        <AboutUs />
        <div className="divider"></div>
        <WhyChooseUS />
        <div className="divider"></div>
        <FeaturedGames />
        <div className="divider"></div>
        <CustomerReview />
    </>
  );
}
