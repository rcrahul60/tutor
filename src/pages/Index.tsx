import { useState } from "react";
import Navbar from "@/components/Navbar";
import DemoForm from "@/components/DemoForm";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeachersSection from "@/components/sections/TeachersSection";
import PricingSection from "@/components/sections/PricingSection";

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
      
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How it Works?</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Vision */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-8 rounded-2xl">
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  Our Vision
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Powering education with personalized learning
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Live one-to-one Maths and Science online classes for students of class 6 to Class 12.
                  Personalized teaching to cater to your child's unique learning process.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Students learning"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Right Column - Steps */}
            <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
              {[
                {
                  title: "Initial Discussion",
                  description: "Our counsellor discusses your child's requirements, strengths, and weaknesses.",
                },
                {
                  title: "Customized Plan",
                  description: "We prepare a tailored learning plan based on individual needs and discuss it with you.",
                },
                {
                  title: "Free Trial Class",
                  description: "Experience our teaching methodology with a free demo class from our expert faculty.",
                },
                {
                  title: "Regular Classes",
                  description: "After your approval, we begin regular personalized classes focused on your child's growth.",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-6 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-semibold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50"></div>
        <div className="container px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Tutoring Services?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Math's academy focuses on making fundamental concepts clear, with extensive
              problem solving and regular doubt clearing sessions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Complete Coverage",
                description: "We provide comprehensive coverage of the syllabus with special attention during exams",
                bgColor: "bg-blue-50",
                iconColor: "text-blue-500",
                borderColor: "border-blue-100"
              },
              {
                icon: <BrainCircuit className="w-10 h-10" />,
                title: "Problem Solving Focus",
                description: "Extensive problem practice sessions ensure your child masters problem-solving techniques",
                bgColor: "bg-orange-50",
                iconColor: "text-orange-500",
                borderColor: "border-orange-100"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Expert Tutors",
                description: "Our tutors from premier colleges bring their expertise to help your child excel in studies.",
                bgColor: "bg-purple-50",
                iconColor: "text-purple-500",
                borderColor: "border-purple-100"
              },
              {
                icon: <MessageSquare className="w-10 h-10" />,
                title: "Doubt Clearing",
                description: "Regular doubt clearing sessions ensure strong fundamental understanding",
                bgColor: "bg-green-50",
                iconColor: "text-green-500",
                borderColor: "border-green-100"
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Advanced Learning",
                description: "Option to cover higher-class topics in a personalized environment.",
                bgColor: "bg-pink-50",
                iconColor: "text-pink-500",
                borderColor: "border-pink-100"
              },
              {
                icon: <GraduationCap className="w-10 h-10" />,
                title: "Bi-weekly Counselling sessions",
                description: "We do regular discussion on student's progress with parents and incorporate their feedback in our learning plans.",
                bgColor: "bg-yellow-50",
                iconColor: "text-yellow-600",
                borderColor: "border-yellow-100"
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.bgColor} border-2 ${benefit.borderColor} rounded-3xl p-8 hover:scale-105 transition-transform duration-300 animate-fadeIn`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${benefit.iconColor} mb-6`}>
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

      <TestimonialsSection />
      <TeachersSection />
      <PricingSection />

      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TutorPro</h3>
              <p className="text-gray-400">
                Empowering students with personalized education
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-white">Benefits</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How it Works</a></li>
                <li><a href="#teachers" className="text-gray-400 hover:text-white">Teachers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: info@tutorpro.com</p>
              <p className="text-gray-400">Phone: +1 234 567 890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 TutorPro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </div>
  );
};

export default Index;
