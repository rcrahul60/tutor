import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeachersSection from "@/components/sections/TeachersSection";
import DemoForm from "@/components/DemoForm";

const Index = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const openDemoForm = () => {
    setIsDemoFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBookDemo={openDemoForm} />
      <HeroSection onBookDemo={openDemoForm} />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <TeachersSection />
      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </div>
  );
};

export default Index;