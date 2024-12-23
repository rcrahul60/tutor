import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const pricingData: Record<string, { price: number; duration: string }> = {
  "Class 6": { price: 12000, duration: "9-10" },
  "Class 7": { price: 12000, duration: "9-10" },
  "Class 8": { price: 12000, duration: "9-10" },
  "Class 9": { price: 14000, duration: "9-10" },
  "Class 10": { price: 14000, duration: "9-10" },
  "Class 11": { price: 16000, duration: "10-12" },
  "Class 12": { price: 16000, duration: "10-12" },
};

const PricingSection = () => {
  const [selectedClass, setSelectedClass] = useState<string>("Class 6");

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the best in class learning from best tutors from the comfort of your home. 
            We guarantee your child a strong foundation in Maths for a successful future.
          </p>
        </div>

        <div className="max-w-xs mx-auto mb-12">
          <Select
            value={selectedClass}
            onValueChange={setSelectedClass}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(pricingData).map((className) => (
                <SelectItem key={className} value={className}>
                  {className}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">
                12 Classes/Month
              </CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">₹{pricingData[selectedClass].price.toLocaleString()}</span>
                <span className="text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Complete course coverage time: {pricingData[selectedClass].duration} months
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;