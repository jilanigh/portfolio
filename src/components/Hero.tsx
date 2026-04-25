"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown, Cloud, ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-background">
      
      {/* Floating Social Sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden lg:flex flex-col gap-6 absolute left-8 top-1/2 -translate-y-1/2 z-50"
      >
        <a href="https://github.com/jilanigh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:-translate-y-1">
          <FaGithub size={22} />
        </a>
        <a href="https://linkedin.com/in/jilanigharbi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:-translate-y-1">
          <FaLinkedin size={22} />
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:-translate-y-1">
          <FaTwitter size={22} />
        </a>
        <div className="w-px h-24 bg-gray-300 dark:bg-gray-700 mx-auto mt-4" />
      </motion.div>

      <div className="container mx-auto px-6 lg:pl-32 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column (Text) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <motion.div 
            whileHover={{ scale: 1.05, originX: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 font-semibold bg-blue-600 text-white opacity-90"
          >
            <span>Cloud & DevSecOps</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-foreground"
          >
            Hi, I'm <br />
            <span className="text-blue-500">Gharbi Jilani</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-10 leading-relaxed font-medium"
          >
            I specialize in securing, automating, and scaling cloud infrastructure. Building robust pipelines and reliable backend architectures for modern applications.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-wrap gap-6 items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-xl">
                Let's Talk
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#projects" className="px-8 py-4 bg-bg-secondary hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full font-bold transition-colors border border-border-color">
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column (Image & Floating Elements) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          {/* Main Circle/Avatar */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center overflow-hidden border-8 border-blue-500 shadow-2xl bg-gray-900">
            <Image 
              src="/jilani_gharbi.jpg" 
              alt="Gharbi Jilani" 
              fill
              sizes="(max-width: 768px) 288px, 384px"
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 p-4 bg-white dark:bg-[#1f1f1f] rounded-2xl shadow-xl border border-border-color"
          >
            <Cloud size={32} className="text-blue-500" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-4 p-4 bg-white dark:bg-[#1f1f1f] rounded-2xl shadow-xl border border-border-color"
          >
            <ShieldCheck size={32} className="text-emerald-500" />
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-blue-500" />
        </motion.div>
      </motion.div>
      
    </section>
  );
}
