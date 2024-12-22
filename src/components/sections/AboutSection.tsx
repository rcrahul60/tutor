import { BookOpen, Users, Target, Brain, Calendar, MessageCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Elite Academy",
      description: "We are an elite Maths and Science academy providing premium one-to-one live classes for students of class 6th to 12th. Our faculties are graduates from premier colleges who have excelled in these subjects.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Dedicated Team",
      description: "A team of 1 teacher and 1 counsellor work dedicated with your child. Undivided attention is given during live classes and homework help sessions, adapting to your child's unique learning pace.",
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Unique Methodology",
      description: "Our personalized study plan focuses on concept understanding, doubt clearance, and extensive problem practice. We assess each student's understanding and create custom learning paths.",
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Focused Learning",
      description: "We conduct 3-4 classes weekly, with one dedicated to problem-solving and doubt clearing. Teachers adjust the pace based on student understanding and learning process.",
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-primary" />,
      title: "Regular Feedback",
      description: "Our counsellor conducts bi-weekly discussions with students and parents to track progress and incorporate suggestions for continuous improvement.",
    },
    {
      icon: <Calendar className="w-12 h-12 text-primary" />,
      title: "Complete Mastery",
      description: "Over 6-8 months, we help students master the entire course material through comprehensive coverage and extensive problem practice.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What is this about?
          </h2>
          <p className="text-lg text-gray-600">
            What are we solving?
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;