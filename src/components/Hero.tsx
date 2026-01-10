import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profile from "../assets/profile/profile.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I'm <span className="text-blue-600">Abderrahime Hassay</span>
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Junior Full-Stack Web Developer
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Passionate about building modern web applications with a strong foundation in both 
              front-end and back-end technologies. Ready to contribute and grow in a professional environment.
            </motion.p>
            <motion.div 
              className="flex gap-4 justify-center md:justify-start flex-wrap"
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
                onClick={() => window.open('mailto:hassayabderrahime55@gmail.com', '_blank')}
              >
                <Linkedin className="size-5" />
                LinkedIn
              </Button>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div 
            className="flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Animated Border Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ padding: '4px' }}
              />
              
              {/* Secondary Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ padding: '4px' }}
              />

              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  {/* Replace the src with your actual image */}
                  <ImageWithFallback
                    src={profile}
                    alt="Abderrahime Hassay"
                    className="w-full h-full object-cover"
                  />
                  {/* Placeholder when no image - you can remove this after adding your image */}
                  {/* <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">AH</span>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}