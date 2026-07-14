import AboutUs from "@/components/AboutUS";
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
    </>
  );
}
