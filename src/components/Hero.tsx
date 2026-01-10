import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";


export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-7xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm <span className="text-blue-600">Abderrahime Hassay</span>
        </motion.h1>
        <motion.h2 
          className="text-2xl md:text-3xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Junior Full-Stack Web Developer
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Passionate about building modern web applications with a strong foundation in both 
          front-end and back-end technologies. Ready to contribute and grow in a professional environment.
        </motion.p>
        <motion.div 
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="gap-2"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Mail className="size-5" />
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2"
            onClick={() => window.open('https://github.com/12ff12', '_blank')}
          >
            <Github className="size-5" />
            GitHub
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2"
            asChild
          >
            <a href="mailto:hassayabderrahime55@gmail.com">
              <Mail className="size-5" />
              Email
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}