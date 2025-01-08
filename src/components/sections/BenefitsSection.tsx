import { BookOpen, BrainCircuit, Users, MessageSquare, Target, GraduationCap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Dedicated Teacher and Counsellor",
      description: "A team of 1 teacher and 1 counsellor work dedicated with your child. Undivided attention is given during live classes and homework help sessions, adapting to your child's unique learning pace.",
      iconColor: "text-secondary"
    },
    {
      icon: <BrainCircuit className="w-10 h-10" />,
      title: "Unique learning Methodology",
      description: "Our personalized study plan focuses on concept understanding, doubt clearance, and extensive problem practice. Teachers adjust the pace based on student understanding and learning process.",
      iconColor: "text-secondary"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Regular Feedback and counselling",
      description: "Our counsellor conducts bi-weekly discussions with students and parents to track progress. Suggestions are incorporated for continuous improvement.",
      iconColor: "text-secondary"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Complete Subject Mastery",
      description: "We conduct 3-4 classes weekly with comprehensive coverage and extensive problem practice. Students master the entire course material in over 6-8 months",
      iconColor: "text-secondary"
    }
  ];

  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50"></div>
      <div className="container max-w-7xl px-4 relative mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Tutoring Services?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our Math's academy focuses on making fundamental concepts clear, with extensive
            problem solving and regular doubt clearing sessions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F2FCE2] backdrop-blur-sm rounded-3xl p-8 hover:scale-105 transition-transform duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={benefit.iconColor}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;