import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "@/hooks/use-toast";

interface DemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoForm = ({ isOpen, onClose }: DemoFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    class: "",
    subject: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you'd send this to your backend
    console.log("Form submitted:", formData);
    
    // Create CSV content
    const csvContent = `Name,Phone,Class,Subject\n${formData.name},${formData.phone},${formData.class},${formData.subject}`;
    
    // Create blob and download link
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "demo_request.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast({
      title: "Success!",
      description: "Your demo class request has been submitted. We'll contact you soon!",
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book Your Free Demo Class</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            placeholder="Enter your phone number"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <Select
            value={formData.class}
            onValueChange={(value) => setFormData({ ...formData, class: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              {[6, 7, 8, 9, 10, 11, 12].map((classNum) => (
                <SelectItem key={classNum} value={classNum.toString()}>
                  Class {classNum}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={formData.subject}
            onValueChange={(value) => setFormData({ ...formData, subject: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="maths">Mathematics</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
              <SelectItem value="both">Both</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoForm;