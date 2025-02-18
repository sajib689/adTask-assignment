import HeroSection from "@/components/HeroSection";
import YoutubeSection from "@/components/YoutubeSection";
import SliderSection from "@/components/SliderSection";
import IconGrid from "@/components/IconGrid";
import FeaturedSection from "@/components/FeaturedSection";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <YoutubeSection/>
      <SliderSection/>
      <IconGrid/>
      <FeaturedSection/>
    </div>
  );
}
