import { GraduationCap, Code, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const cards = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Studied web development at OFPPT for two years, gaining comprehensive knowledge in modern web technologies.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Code,
      title: "Experience",
      description: "Completed two full web projects, gaining hands-on experience across front-end, back-end, and database layers.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Lightbulb,
      title: "Motivation",
      description: "Eager to continue learning and growing within a professional environment, bringing fresh perspectives and dedication.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <motion.div 
              key={card.title}
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`${card.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <card.icon className={`size-6 ${card.iconColor}`} />
              </div>
              <h3 className="text-xl mb-3">{card.title}</h3>
              <p className="text-gray-600">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}