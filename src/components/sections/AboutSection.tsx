import { Users, Brain, MessageCircle, GraduationCap } from "lucide-react";
import AboutFeatureCard from "./AboutFeatureCard";
import CentralEducationImage from "./CentralEducationImage";

const AboutSection = () => {
  const features = [
    {
      title: "Dedicated Teacher and Counsellor",
      description: "A team of 1 teacher and 1 counsellor work dedicated with your child. Undivided attention is given during live classes and homework help sessions, adapting to your child's unique learning pace.",
      position: "top-0 left-[10%]",
      icon: Users
    },
    {
      title: "Unique learning Methodology",
      description: "Our personalized study plan focuses on concept understanding, doubt clearance, and extensive problem practice. Teachers adjust the pace based on student understanding and learning process.",
      position: "top-0 right-[10%]",
      icon: Brain
    },
    {
      title: "Regular Feedback and counselling",
      description: "Our counsellor conducts bi-weekly discussions with students and parents to track progress and incorporate suggestions for continuous improvement.",
      position: "bottom-0 left-[10%]",
      icon: MessageCircle
    },
    {
      title: "Complete Subject Mastery",
      description: "We conduct 3-4 classes weekly and over 6-8 months, students master the entire course material through comprehensive coverage and extensive problem practice.",
      position: "bottom-0 right-[10%]",
      icon: GraduationCap
    }
  ];

  return (
    <section id="what-is-this-about" className="py-24 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container max-w-6xl px-4 mx-auto">
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
            <CentralEducationImage />
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