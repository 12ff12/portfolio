import { Code } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";


export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="size-6 text-blue-600" />
          <span className="text-xl">Portfolio</span>
        </div>
        <div className="hidden md:flex gap-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
        </div>
        <Button size="sm" onClick={() => scrollToSection('contact')}>
          Hire Me
        </Button>
      </div>
    </motion.nav>
  );
}