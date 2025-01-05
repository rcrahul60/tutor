import { Button } from "../ui/button";

interface TestimonialsSectionProps {
  onBookDemo: () => void;
}

const TestimonialsSection = ({ onBookDemo }: TestimonialsSectionProps) => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Hear from our students about their learning experience
          </p>
          <Button
            onClick={onBookDemo}
            size="lg"
            className="bg-secondary hover:bg-secondary/90"
          >
            Book Free Demo Class
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "The tutoring sessions have been incredibly helpful. My grades have improved significantly!"
            </p>
            <h3 className="text-lg font-semibold">Student A</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "I love the personalized attention I receive. The teachers are very supportive."
            </p>
            <h3 className="text-lg font-semibold">Student B</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "The unique teaching methods have made learning so much easier and enjoyable!"
            </p>
            <h3 className="text-lg font-semibold">Student C</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
