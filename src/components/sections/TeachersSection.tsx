import { Button } from "../ui/button";

interface TeachersSectionProps {
  onBookDemo: () => void;
}

const TeachersSection = ({ onBookDemo }: TeachersSectionProps) => {
  return (
    <section id="teachers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Expert Teachers
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Learn from experienced educators dedicated to your success
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
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">Math Teacher</p>
            <p className="mt-4">John has over 10 years of experience in teaching mathematics to students of all levels.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">Science Teacher</p>
            <p className="mt-4">Jane specializes in physics and chemistry, helping students understand complex concepts.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Emily Johnson</h3>
            <p className="text-gray-600">Biology Teacher</p>
            <p className="mt-4">Emily is passionate about biology and has a knack for making the subject engaging and fun.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
