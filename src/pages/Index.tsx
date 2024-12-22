import { useState } from "react";
import Navbar from "@/components/Navbar";
import DemoForm from "@/components/DemoForm";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeachersSection from "@/components/sections/TeachersSection";
import { BookOpen, Users, BrainCircuit, MessageSquare, Target, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

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
      
      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How it Works?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Live one-to-one Maths and Science online classes for students of class 6 to Class 12.
              Personalized teaching to cater to your child's unique learning process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Tutoring Services?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Math's academy focuses on making fundamental concepts clear, with extensive
              problem solving and regular doubt clearing sessions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12 text-primary mb-4" />,
                title: "Complete Coverage",
                description: "Whether it's the entire syllabus or specific topics, we provide comprehensive coverage tailored to your needs.",
              },
              {
                icon: <Users className="w-12 h-12 text-primary mb-4" />,
                title: "Expert Tutors",
                description: "Our tutors from premier colleges bring their expertise to help your child excel in studies.",
              },
              {
                icon: <BrainCircuit className="w-12 h-12 text-primary mb-4" />,
                title: "Problem Solving Focus",
                description: "Extensive practice sessions ensure your child masters problem-solving techniques.",
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-primary mb-4" />,
                title: "Doubt Clearing",
                description: "Regular doubt clearing sessions ensure strong fundamental understanding.",
              },
              {
                icon: <Target className="w-12 h-12 text-primary mb-4" />,
                title: "Personalized Attention",
                description: "One-to-one sessions allow us to adapt to your child's unique learning pace.",
              },
              {
                icon: <GraduationCap className="w-12 h-12 text-primary mb-4" />,
                title: "Advanced Learning",
                description: "Option to cover higher-class topics in a personalized environment.",
              },
            ].map((benefit, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <TeachersSection />

      {/* Footer */}
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