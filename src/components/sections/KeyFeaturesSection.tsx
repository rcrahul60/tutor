import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Battery, LineChart, Shield } from "lucide-react";

const features = [
  {
    icon: <Sun className="h-12 w-12 text-primary" />,
    title: "Premium Solar Panels",
    description: "High-efficiency tier-1 solar panels that maximize energy production"
  },
  {
    icon: <Battery className="h-12 w-12 text-primary" />,
    title: "Battery Storage",
    description: "Optional battery backup systems for 24/7 power availability"
  },
  {
    icon: <LineChart className="h-12 w-12 text-primary" />,
    title: "Smart Monitoring",
    description: "Real-time monitoring and analytics of your solar system performance"
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "25-Year Warranty",
    description: "Comprehensive warranty coverage for long-term peace of mind"
  }
];

const KeyFeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose SolarSquare?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end solar solutions with premium components and professional installation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;