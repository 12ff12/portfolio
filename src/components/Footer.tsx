import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";


export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left">
            <p className="text-lg mb-2">Let's build something amazing together</p>
            <p className="text-gray-400 text-sm">Junior Full-Stack Web Developer</p>
          </div>
          <div className="flex gap-4">
            <motion.a 
              href="https://github.com/12ff12" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="size-5" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/abderrahime-hassay-10880537a/"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="size-5" />
            </motion.a>
            <motion.a 
              href="mailto:hassayabderrahime55@gmail.com" 
              className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="size-5" />
            </motion.a>
          </div>
        </motion.div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm flex items-center justify-center gap-2">
          <span>© 2026 Portfolio. Made with</span>
          <Heart className="size-4 text-red-500 fill-current" />
          <span>and React </span>
        </div>
      </div>
    </footer>
  );
}