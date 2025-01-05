import { Users, Brain, MessageCircle, GraduationCap } from "lucide-react";
import AboutFeatureCard from "./AboutFeatureCard";
import CentralEducationImage from "./CentralEducationImage";

const AboutSection = () => {
  const features = [
    {
      title: "Dedicated Teacher and Counsellor",
      description: "A team of 1 teacher and 1 counsellor work dedicated with your child. Undivided attention is given during live classes. Homework help sessions adapt to your child's unique learning pace.",
      position: "top-0 left-[5%]",
      icon: Users
    },
    {
      title: "Unique learning Methodology",
      description: "Our personalized study plan focuses on concept understanding. Regular doubt clearance sessions are conducted. Extensive problem practice is provided. Teachers adjust the pace based on student understanding.",
      position: "top-0 right-[5%]",
      icon: Brain
    },
    {
      title: "Regular Feedback and counselling",
      description: "Our counsellor conducts bi-weekly discussions with students. Parents are kept updated on progress. Suggestions are incorporated for continuous improvement.",
      position: "bottom-0 left-[5%]",
      icon: MessageCircle
    },
    {
      title: "Complete Subject Mastery",
      description: "We conduct 3-4 classes weekly over 6-8 months. Students master the entire course material. Comprehensive coverage ensures thorough understanding. Extensive problem practice reinforces learning.",
      position: "bottom-0 right-[5%]",
      icon: GraduationCap
    }
  ];

  return (
    <section id="what-is-this-about" className="py-16 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What is this about?
          </h2>
          <p className="text-lg text-gray-600">
            We are an elite Maths and Science academy providing premium one-to-one live classes.
          </p>
        </div>

        <div className="relative min-h-[700px]">
          {/* Central Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <CentralEducationImage />
          </div>

          {/* Feature Cards */}
          <div className="absolute inset-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute animate-fadeIn ${feature.position}`}
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