import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";


export function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState<{name?: string; email?: string; message?: string}>({});

  const validateForm = () => {
    const newErrors: {name?: string; email?: string; message?: string} = {};
    
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitemail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setSuccessMessage("");
    
    try {
      await emailjs.send(
        "service_8j1jhun",
        "template_dlb0xmr",
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "D41VNxgD-sUExu941"
      );
      
      setSuccessMessage("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch (error) {
      console.error("Failed to send email:", error);
      setSuccessMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6">Let's Work Together</h3>
            <p className="text-gray-600 mb-8">
              I'm currently looking for new opportunities to contribute my skills and continue learning. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="size-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg">hassayabderrahime55@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="size-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg">+212 769 350 398</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="size-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg">Marrakech, Morocco</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Success/Error Message */}
            {successMessage && (
              <div className={`mb-4 p-3 rounded-md text-sm ${
                successMessage.includes("successfully") 
                  ? "bg-green-100 text-green-800 border border-green-200" 
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}>
                {successMessage}
              </div>
            )}
            
            <form className="space-y-4" onSubmit={submitemail}>
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Name</label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..." 
                  rows={5} 
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full gap-2" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}