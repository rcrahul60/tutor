import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teachers = [
  {
    name: "Dr. Rajesh Kumar",
    college: "IIT Delhi",
    achievement: "AIR 45 in GATE",
    subjects: "Mathematics, Physics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Prof. Priya Sharma",
    college: "IIT Bombay",
    achievement: "Gold Medalist",
    subjects: "Mathematics",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Amit Verma",
    college: "BITS Pilani",
    achievement: "PhD in Physics",
    subjects: "Physics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const TeachersSection = () => {
  return (
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
          {teachers.map((teacher, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src={teacher.image} alt={teacher.name} />
                  <AvatarFallback>{teacher.name[0]}</AvatarFallback>
                </Avatar>
                <CardTitle>{teacher.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium text-gray-900">{teacher.college}</p>
                <p className="text-primary">{teacher.achievement}</p>
                <p className="text-gray-600">Teaches: {teacher.subjects}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;