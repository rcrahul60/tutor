import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Star } from "lucide-react";

const formSchema = z.object({
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  childName: z.string().min(2, "Child name must be at least 2 characters"),
  grade: z.string().min(1, "Please select a grade"),
});

const SignupPage = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      email: "",
      phone: "",
      childName: "",
      grade: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Create email content
      const emailContent = `
        New Demo Class Registration:
        Parent's Name: ${values.parentName}
        Email: ${values.email}
        Phone: ${values.phone}
        Child's Name: ${values.childName}
        Grade: ${values.grade}
      `;

      // Send email using mailto link
      const mailtoLink = `mailto:contact@illumiamind.com?subject=New Demo Class Registration&body=${encodeURIComponent(emailContent)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Registration successful!",
        description: "We'll contact you shortly to schedule your free class.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Book Your Free Demo Class
              </h1>
              <p className="text-gray-600 text-lg">
                Experience personalized learning with our expert teachers
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 mb-8 bg-blue-50 p-4 rounded-lg">
              <Star className="text-yellow-400 h-5 w-5" />
              <p className="text-sm text-gray-700">
                Join 50,000+ students already learning with TutorPro
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="parentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Parent's Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter parent's name" 
                          {...field}
                          className="h-12 text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Enter your email" 
                          {...field}
                          className="h-12 text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          {...field}
                          className="h-12 text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="childName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Child's Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter child's name" 
                          {...field}
                          className="h-12 text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="grade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Grade</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((grade) => (
                            <SelectItem key={grade} value={grade.toString()}>
                              Grade {grade}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white text-lg h-14 mt-4"
                >
                  Book Free Class
                  <ArrowRight className="ml-2" />
                </Button>
              </form>
            </Form>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>By continuing, you agree to our Terms of Service & Privacy Policy</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-gray-600">Parent Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
