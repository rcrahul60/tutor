import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const pricingData = {
  "6-8": [
    {
      classes: 12,
      price: 15000,
      duration: "9-10",
    },
    {
      classes: 16,
      price: 20000,
      duration: "7-8",
    },
  ],
  "9-10": [
    {
      classes: 12,
      price: 16000,
      duration: "9-10",
    },
    {
      classes: 16,
      price: 21499,
      duration: "7-8",
    },
  ],
  "11-12": [
    {
      classes: 12,
      price: 18000,
      duration: "9-10",
    },
    {
      classes: 16,
      price: 24000,
      duration: "7-8",
    },
  ],
};

const PricingSection = () => {
  const [selectedClass, setSelectedClass] = useState<keyof typeof pricingData>("6-8");

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the best in class learning from best tutors from the comfort of your home, 
            and without the need to go anywhere to take the classes.
          </p>
        </div>

        <div className="max-w-xs mx-auto mb-12">
          <Select
            value={selectedClass}
            onValueChange={(value) => setSelectedClass(value as keyof typeof pricingData)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6-8">Class 6 to 8</SelectItem>
              <SelectItem value="9-10">Class 9 to 10</SelectItem>
              <SelectItem value="11-12">Class 11 to 12</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingData[selectedClass].map((plan, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  {plan.classes} Classes/Month
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹{plan.price.toLocaleString()}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Complete course coverage time: {plan.duration} months
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;