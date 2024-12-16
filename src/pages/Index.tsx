import { useState } from "react";
import Navbar from "@/components/Navbar";
import DemoForm from "@/components/DemoForm";
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
  const { toast } = useToast();

  const openDemoForm = () => {
    setIsDemoFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBookDemo={openDemoForm} />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/d4fffc11-49bb-4ceb-a907-39b309bcea48.png"
            alt="Online tutoring"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fadeIn">
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
              onClick={openDemoForm}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-lg"
            >
              Book Free Demo Class
            </Button>
          </div>
        </div>
      </section>

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
                title: "Complete Coverage",
                description: "Whether it's the entire syllabus or specific topics, we provide comprehensive coverage tailored to your needs.",
              },
              {
                title: "Expert Tutors",
                description: "Our tutors from premier colleges bring their expertise to help your child excel in studies.",
              },
              {
                title: "Problem Solving Focus",
                description: "Extensive practice sessions ensure your child masters problem-solving techniques.",
              },
              {
                title: "Doubt Clearing",
                description: "Regular doubt clearing sessions ensure strong fundamental understanding.",
              },
              {
                title: "Personalized Attention",
                description: "One-to-one sessions allow us to adapt to your child's unique learning pace.",
              },
              {
                title: "Advanced Learning",
                description: "Option to cover higher-class topics in a personalized environment.",
              },
            ].map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
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

      {/* Teachers Section */}
      <section id="teachers" className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Tutors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from successful teachers who have excelled in academics and understand
              students' unique learning needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                college: "IIT Delhi",
                achievement: "AIR 45 in GATE",
                subjects: "Mathematics, Physics",
              },
              {
                name: "Prof. Priya Sharma",
                college: "IIT Bombay",
                achievement: "Gold Medalist",
                subjects: "Mathematics",
              },
              {
                name: "Dr. Amit Verma",
                college: "BITS Pilani",
                achievement: "PhD in Physics",
                subjects: "Physics",
              },
            ].map((teacher, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{teacher.name}</CardTitle>
                  <CardDescription>{teacher.college}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{teacher.achievement}</p>
                  <p className="text-gray-600">Teaches: {teacher.subjects}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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