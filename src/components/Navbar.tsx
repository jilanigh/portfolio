"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => setMounted(true), []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border-color"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-bold text-2xl tracking-tighter">
          GJ<span className="text-blue-500">.</span>
        </a>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full bg-bg-secondary hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>
      </div>
      {/* Scroll Progress Bar */}
      <motion.div
        className="h-[3px] bg-blue-500 origin-[0%]"
        style={{ scaleX }}
      />
    </motion.nav>
  );
}
