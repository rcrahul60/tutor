import { useState } from "react";
import Navbar from "@/components/Navbar";
import DemoForm from "@/components/DemoForm";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeachersSection from "@/components/sections/TeachersSection";
// import PricingSection from "@/components/sections/PricingSection";

const Index = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const openDemoForm = () => {
    setIsDemoFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBookDemo={openDemoForm} />
      <HeroSection onBookDemo={openDemoForm} />
      <AboutSection onBookDemo={openDemoForm} />
      <TestimonialsSection onBookDemo={openDemoForm} />
      <TeachersSection onBookDemo={openDemoForm} />
      {/* <PricingSection /> */}
      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </div>
  );
};

export default Index;