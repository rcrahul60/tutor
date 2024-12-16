import { Button } from "@/components/ui/button";

const HeroSection = ({ onBookDemo }: { onBookDemo: () => void }) => {
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
              onClick={onBookDemo}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-lg"
            >
              Book Free Demo Class
            </Button>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src="/lovable-uploads/d4fffc11-49bb-4ceb-a907-39b309bcea48.png"
              alt="Online tutoring"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;