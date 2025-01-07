import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teachers = [
  {
    name: "Vishal Pandey",
    college: "IIT Delhi",
    achievement: "AIR 45 in GATE",
    subjects: "Mathematics, Physics",
    image: "/lovable-uploads/e518e3c5-a4a5-437f-8e7a-77627fc5cd0c.png",
  },
  {
    name: "Raj Singh",
    college: "IIT Bombay",
    achievement: "Gold Medalist",
    subjects: "Mathematics",
    image: "/lovable-uploads/6c7d2d58-6384-4949-9b88-e00719d44807.png",
  },
  {
    name: "Anand Singh",
    college: "BITS Pilani",
    achievement: "PhD in Physics",
    subjects: "Physics",
    image: "/lovable-uploads/2dd054f6-ae38-45ef-93ac-9255f63dd1f7.png",
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