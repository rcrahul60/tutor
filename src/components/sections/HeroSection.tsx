import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import DemoForm from "../DemoForm";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/d4fffc11-49bb-4ceb-a907-39b309bcea48.png";
    
    // Check if image is already cached
    if (img.complete) {
      setImageLoaded(true);
    } else {
      img.onload = () => setImageLoaded(true);
    }

    return () => {
      img.onload = null;
    };
  }, []);

  return (
    <section id="home" className="pt-16 relative">
      <div className="container px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 animate-fadeIn text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Best Tutoring that your child can get
            </h1>
            <p className="text-xl text-gray-600">
              Premium one-to-one live classes for students of class 6th to 12th
            </p>
            <div className="space-y-4 text-gray-600">
              <p>✓ Specialization in Maths and Science</p>
              <p>✓ Faculty from top premier colleges</p>
              <p>✓ Unique teaching methodology focused on concepts</p>
              <p>✓ One-to-one personalized attention</p>
            </div>
            <Button
              onClick={() => setIsDemoFormOpen(true)}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-lg"
            >
              Book Free Demo Class
            </Button>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg" />
            )}
            <img
              src="/lovable-uploads/d4fffc11-49bb-4ceb-a907-39b309bcea48.png"
              alt="Online tutoring"
              className={`w-full h-full object-cover rounded-lg shadow-xl transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="eager"
              fetchpriority="high"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      </div>

      <DemoForm 
        isOpen={isDemoFormOpen} 
        onClose={() => setIsDemoFormOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;