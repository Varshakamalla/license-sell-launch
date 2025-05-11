
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="#" className="text-softsell-blue font-bold text-xl flex items-center">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 100 100">
                <rect width="100" height="100" rx="20" fill="#1E64EE"/>
                <path d="M25 35 L75 35 L75 50 L60 50 L60 65 L25 65 Z" fill="#2DD4BF"/>
                <path d="M40 40 L60 40 L60 45 L40 45 Z" fill="white"/>
                <path d="M30 50 L50 50 L50 55 L30 55 Z" fill="white"/>
              </svg>
              SoftSell
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-softsell-dark hover:text-softsell-blue transition-colors">
              How It Works
            </a>
            <a href="#why-choose-us" className="text-softsell-dark hover:text-softsell-blue transition-colors">
              Why Choose Us
            </a>
            <a href="#testimonials" className="text-softsell-dark hover:text-softsell-blue transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-softsell-dark hover:text-softsell-blue transition-colors">
              Contact
            </a>
            <Button className="bg-softsell-blue hover:bg-blue-700 text-white">Get Started</Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-softsell-dark hover:text-softsell-blue"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#how-it-works" 
                className="text-softsell-dark hover:text-softsell-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#why-choose-us" 
                className="text-softsell-dark hover:text-softsell-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </a>
              <a 
                href="#testimonials" 
                className="text-softsell-dark hover:text-softsell-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-softsell-dark hover:text-softsell-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-softsell-blue hover:bg-blue-700 text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
