import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "What is this About?", href: "#what-is-this-about" },
    { label: "Benefits", href: "#benefits" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Teachers", href: "#teachers" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-primary">
            TutorPro
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button onClick={onBookDemo} className="bg-secondary hover:bg-secondary/90">
              Book Free Demo Class
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              onClick={() => {
                onBookDemo();
                setIsOpen(false);
              }}
              className="w-full mt-4 bg-secondary hover:bg-secondary/90"
            >
              Book Free Demo Class
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;