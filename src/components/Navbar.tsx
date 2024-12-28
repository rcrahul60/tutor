import { useState } from "react";
import { Menu, X, Sun, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-primary flex items-center gap-2">
            <Sun className="h-8 w-8" />
            SolarSquare
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
            <Button onClick={onBookDemo} className="bg-primary hover:bg-primary/90 flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Contact Sales
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
              className="w-full mt-4 bg-primary hover:bg-primary/90 flex items-center gap-2 justify-center"
            >
              <Phone className="h-4 w-4" />
              Contact Sales
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;