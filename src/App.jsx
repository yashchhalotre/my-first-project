import NavBar from './Components/NavBar';
import HeroSection from './sections/HeroSection';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';
import NutritionSection from './sections/NutritionSection';
import BenefitSection from './sections/BenefitSection';
import TestimonialSection from './sections/TestimonialSection';
import FooterSection from './sections/FooterSection';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
  <main>
    <NavBar />
    <HeroSection />
    <MessageSection />
    <FlavorSection />
    <NutritionSection />
    <BenefitSection />
    <TestimonialSection />
    <FooterSection />
    <div className="h-dvh border border-red-500" />
  </main>
  )
}

export default App