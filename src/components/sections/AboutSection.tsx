import { BookOpen, BrainCircuit, Users, MessageSquare } from "lucide-react";
import AboutFeatureCard from "./AboutFeatureCard";

const AboutSection = () => {
  const features = [
    {
      title: "Special attention during exams",
      description: "Get targeted support to excel in your exams with personalized attention.",
      position: "top-0 left-[10%]",
      icon: BookOpen
    },
    {
      title: "Extra focus on weak concepts",
      description: "Receive dedicated attention on challenging topics to ensure thorough understanding.",
      position: "top-0 right-[10%]",
      icon: BrainCircuit
    },
    {
      title: "Aligned to school curriculum",
      description: "Ensure seamless learning with a course structure that mirrors the school's academic program.",
      position: "bottom-0 left-[10%]",
      icon: Users
    },
    {
      title: "Customized according to your schedule",
      description: "Pick a class schedule that perfectly fits your daily routine.",
      position: "bottom-0 right-[10%]",
      icon: MessageSquare
    },
  ];

  return (
    <section id="what-is-this-about" className="py-24 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What is this about?
          </h2>
          <p className="text-lg text-gray-600">
            We are an elite Maths and Science academy providing premium one-to-one live classes.
          </p>
        </div>

        <div className="relative min-h-[800px]">
          {/* Central Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
            <img 
              src="/lovable-uploads/3e46580c-d4d7-49e8-9df0-d6d5869f1979.png" 
              alt="Building blocks illustration"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Feature Cards */}
          <div className="absolute inset-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute w-[300px] animate-fadeIn ${feature.position}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <AboutFeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  className="transform hover:-translate-y-2 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;