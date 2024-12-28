import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneCall, ClipboardCheck, Wrench, Sun } from "lucide-react";

const steps = [
  {
    icon: <PhoneCall className="h-8 w-8 text-white" />,
    title: "Free Consultation",
    description: "Schedule a call with our solar experts to discuss your requirements"
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-white" />,
    title: "Custom Design",
    description: "Get a tailored solar solution design based on your energy needs"
  },
  {
    icon: <Wrench className="h-8 w-8 text-white" />,
    title: "Professional Installation",
    description: "Our certified team handles the complete installation process"
  },
  {
    icon: <Sun className="h-8 w-8 text-white" />,
    title: "Start Saving",
    description: "Begin generating clean energy and saving on electricity bills"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process to get you started with solar energy
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
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
  );
};

export default HowItWorksSection;