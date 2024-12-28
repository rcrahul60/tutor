import { Button } from "@/components/ui/button";
import { Sun, ArrowRight } from "lucide-react";

const HeroSection = ({ onBookDemo }: { onBookDemo: () => void }) => {
  return (
    <section id="home" className="pt-16 relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fadeIn text-left">
            <div className="flex items-center gap-2 text-primary">
              <Sun className="h-6 w-6" />
              <span className="font-semibold">Residential Solar Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Power Your Home with Clean Solar Energy
            </h1>
            <p className="text-xl text-gray-600">
              Transform your home into a sustainable powerhouse with our premium solar solutions. Save money while saving the planet.
            </p>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />
                Up to 90% savings on electricity bills
              </p>
              <p className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />
                25 years performance warranty
              </p>
              <p className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />
                Premium tier-1 solar panels
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                onClick={onBookDemo}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg"
              >
                Get Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src="/lovable-uploads/d4fffc11-49bb-4ceb-a907-39b309bcea48.png"
              alt="Solar panels installation"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;