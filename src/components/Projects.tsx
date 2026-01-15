import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import chatpp from "../assets/projects/chatapp.png";
import propsrental from "../assets/projects/propsrental.png";
import riad from "../assets/projects/riad.png";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Marrakech Propshire - E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce platform with advanced features including SEO optimization, responsive design, product management with stock validation, smart search with debouncer, category filtering, shopping cart with PDF export, quote system, user authentication with auto-fill functionality, and a complete admin panel for managing products, quotes, contacts, and categories. (i cant share the code since it was a website i made for a client i made it but its not mine)",
      technologies: ["Vue", "Inertia.js", "Laravel", "MySQL", "Tailwind CSS"],
      image: propsrental,
      color: "blue",
      link: "https://marrakechpropshire.com/",
      showCode: false,
      features: [
        "SEO optimized & fully responsive",
        "Advanced search with debouncer & filters",
        "Cart with PDF export & quote system",
        "User authentication with auto-fill",
        "Complete admin dashboard"
      ]
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description: "A modern real-time chat application built with Laravel backend and React frontend, connected through REST APIs. Features include user authentication, instant messaging, Redis for caching and real-time performance, and a clean, intuitive interface for seamless communication.",
      technologies: ["React", "Laravel", "Redis", "REST APIs", "TypeScript"],
      image: chatpp,
      color: "green",
      link: "https://chatapp-sigma-gray.vercel.app/auth",
      githubLink: "https://github.com/12ff12/full-chat-application",
      showCode: true,
      features: [
        "Real-time messaging",
        "Laravel REST API backend",
        "React frontend with TypeScript",
        "Redis for caching & performance",
        "User authentication system"
      ]
    },  {
      id: 3,
      title: "moonlight riad",
      description: 'Moonlight Riad is a website concept I designed and developed for a riad located nearby, with the goal of presenting its rooms, services, atmosphere, and general information in a clean and elegant way.This project was initiated proactively as a way to demonstrate how the riad’s online presence could be improved. Although the riad had already started working with another developer by the time I presented it, the project remains a complete and polished example of my work and is therefore included in my portfolio.This version is a front-end showcase only (no SEO, no DNS, no public domain usage) and is presented purely for demonstration purposes..',
      technologies: ["Vue", "Inertia.js", "Laravel", "MySQL", "Tailwind CSS"],
      image: riad,
      color: "blue",
      link: "https://gray-pony-705077.hostingersite.com/",
      showCode: false,
      features: [
        "Explore the different rooms and their details",
        "Discover the riad’s services and amenities",
        "Browse a photo gallery to get a feel for the place",
        "Access practical information such as location and contact details",
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm uppercase text-gray-500 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </Button>
                  {project.showCode && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="size-4" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}