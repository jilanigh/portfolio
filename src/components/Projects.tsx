"use client";

import { motion } from "framer-motion";
import { Database, Server, Shield } from "lucide-react";

const projects = [
  {
    title: "Task Management API with WebSockets",
    date: "01/2025",
    description: "A robust real-time API for task management featuring role-based access control and live updates.",
    architecture: "Client-Server architecture with REST for CRUD operations and WebSockets for real-time notifications.",
    security: "Implemented secure JWT authentication and role-based authorization (admin vs users).",
    tech: ["Node.js", "Express", "WebSocket", "MongoDB"],
    icon: <Server className="text-blue-500" size={20} />
  },
  {
    title: "E-learning Web Application",
    date: "09/2024 - 12/2024",
    description: "Backend development for a comprehensive online learning platform with multi-role management.",
    architecture: "Monolithic Spring Boot backend with layered architecture (Controllers, Services, Repositories).",
    security: "Secured REST APIs utilizing Spring Security for robust authentication and role management.",
    tech: ["Java", "Spring Boot", "MySQL", "Spring Security"],
    icon: <Database className="text-emerald-500" size={20} />
  },
  {
    title: "Carpooling Web App - Waselni",
    date: "03/2024 - 04/2024",
    description: "Interactive carpooling platform connecting drivers and passengers with integrated map routing.",
    architecture: "MVC architecture utilizing Symfony for the backend and dynamic frontend elements via Twig and JS.",
    security: "Session management and role-based access control for drivers and passengers.",
    tech: ["Symfony (PHP)", "MySQL", "Twig", "JavaScript"],
    icon: <Shield className="text-purple-500" size={20} />
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  } as const;

  return (
    <section id="projects" className="py-20 border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
          <div className="h-[2px] w-24 bg-blue-500 rounded-full"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              key={project.title}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-bg-secondary border border-border-color hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10 shadow-sm dark:shadow-none">
                    {project.icon}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">{project.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 transition-colors group-hover:text-blue-500">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6 p-4 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
                  <div className="text-xs text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-blue-500 block mb-1">Architecture: </span>
                    {project.architecture}
                  </div>
                  <div className="text-xs text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-emerald-500 block mb-1">Security: </span>
                    {project.security}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/5 rounded text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
