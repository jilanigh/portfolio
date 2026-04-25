import Hero from "@/components/Hero";
import About from "@/components/About";
import Speak from "@/components/Speak";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200">
      <Navbar />
      <Hero />
      <About />
      <Speak />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-6 border-t border-gray-200 dark:border-white/10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Gharbi Jilani. All rights reserved.</p>
      </footer>
    </main>
  );
}
