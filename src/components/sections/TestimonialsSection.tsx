import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Akash Sharma",
    role: "Parent of Class 9 Student",
    content: "A big thank you to Sankalp sir for turning my child's Maths grades around. His creative problem-solving techniques and constant encouragement have instilled a love for Maths in my child. I couldn't have asked for a better tutor.",
  },
  {
    name: "Vivek Lal",
    role: "Parent of Class 8 Student",
    content: "Vishal sir's unique teaching style has been a game-changer for my son. He used to fear Maths, but now Maths is his favorite subject! The personalized attention and regular practice sessions have worked wonders. We are so grateful for the transformation.",
  },
  {
    name: "Meera Gupta",
    role: "Parent of Class 10 Student",
    content: "My daughter struggled with Maths for years, but after learning from Raj sir, everything changed. His patience and clear explanations built her confidence, and she's now excelling in her exams! Thank you, Raj sir, for your dedication and expertise.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Parents Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it—hear from the parents who have seen real results
          </p>
        </div>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <p className="text-lg text-gray-700 italic">"{testimonial.content}"</p>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;