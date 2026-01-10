import { Database, Server, Code2, Layers } from "lucide-react";
import { motion } from "framer-motion";


export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="size-6" />,
      color: "blue",
      skills: ["JavaScript", "TypeScript", "React", "Vue"]
    },
    {
      title: "Backend",
      icon: <Server className="size-6" />,
      color: "green",
      skills: ["PHP", "Laravel", "Node.js"]
    },
    {
      title: "Database",
      icon: <Database className="size-6" />,
      color: "purple",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Full-Stack",
      icon: <Layers className="size-6" />,
      color: "orange",
      skills: ["RESTful APIs", "MVC Pattern", "Git", "Responsive Design"]
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", badge: "bg-blue-200" },
    green: { bg: "bg-green-100", text: "text-green-600", badge: "bg-green-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", badge: "bg-purple-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", badge: "bg-orange-200" }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            return (
              <motion.div 
                key={category.title} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colors.text}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 ${colors.badge} rounded-full text-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}