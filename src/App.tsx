import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import useSEO from "./hooks/useSEO";

export default function App() {
    useSEO({
    title: "Abderrahime Hassay — Full-Stack Web Developer",
    description:
      "Portfolio of Abderrahime Hassay, a full-stack web developer specializing in React, Laravel, and modern web technologies.",
    url: "https://yourdomain.com",
    image: "https://yourdomain.com/preview.png",
  });
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}