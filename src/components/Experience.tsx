"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Award, X, Maximize2 } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    title: "Can You Run It",
    company: "Personal Project",
    date: "2024 - Present",
    status: "Demo Version",
    description: "Developed a hardware-aware gaming web app that detects PC specs and checks game compatibility. Built a real-world system combining React + Vite frontend, Express backend, and IGDB API integration. Implemented custom compatibility scoring logic and AI guidance. (https://can-you-run-it.vercel.app)",
    tech: "React, Vite, Express, IGDB API, Node.js, Framer Motion, i18n"
  },
  {
    title: "AWS Trainer",
    company: "TEK-UP",
    date: "03/2025 - Present",
    description: "Preparing and accompanying national and international students for AWS certifications, with personalized support and tracking."
  },
  {
    title: "Design and Deployment of a Highly Available Kubernetes-Based Infrastructure for Apache Guacamole",
    company: "PlaySoft",
    date: "2024 - Expected Aug 2025",
    status: "In Progress",
    description: "Designed and deployed a Kubernetes-hosted Apache Guacamole platform in a private subnet, integrating PostgreSQL persistence and secure external access through a bastion host and reverse proxy. Automated the entire infrastructure provisioning and configuration using Terraform and Ansible across Hetzner Cloud and Proxmox. Implemented centralized multi-protocol remote access for Linux and Windows over VNC, SSH, and RDP.",
    tech: "Kubernetes, Terraform, Ansible, Apache Guacamole, PostgreSQL, Hetzner Cloud, Proxmox, RDP/SSH/VNC"
  },
  {
    title: "Multi-Cloud Image Creation Automation Pipeline",
    company: "PlaySoft",
    date: "06/2025 - 08/2025",
    description: "Designed a CI/CD pipeline to automate the creation of AWS AMIs and Hetzner snapshots. Provisioned images/snapshots, integrated Slack notifications, and securely managed secrets via Vault-server. Applied DevOps best practices, including Infrastructure as Code (IaC) and versioned builds.",
    tech: "Packer, Ansible, GitLab CI/CD, Docker, AWS, Hetzner, Bash, Vault"
  },
  {
    title: "End of Studies Internship - E-commerce Platform",
    company: "ISET SBZ",
    date: "01/2022 - 06/2022",
    description: "Development of 'Consomi Tounsi' e-commerce platform. Created admin dashboards for user and product management, and client interfaces for accounts and purchases. Involved UML design and modeling.",
    tech: "JavaScript, PHP7, BOOTSTRAP, MySQL"
  },
  {
    title: "Perfection Internship - Mobile App",
    company: "Tech-Academy",
    date: "07/2021 - 08/2021",
    description: "Developed 'FORMINY', an Android mobile application for training management including registration, participation, and consultation.",
    tech: "Java, SQLite, Android Studio"
  }
];

const certifications = [
  {
    title: "Solution Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2025"
  },
  {
    title: "Introduction to programming using python",
    issuer: "MTA (Microsoft Technology Associate)",
    date: "2021"
  }
];

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const certVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-20 border-t border-gray-200 dark:border-white/5 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-4 mb-10">
              <Briefcase className="text-blue-600 dark:text-blue-500" size={28} />
              <h2 className="text-3xl font-bold text-foreground">Experience</h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-white/10 before:to-transparent">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-white/10 bg-white dark:bg-black text-blue-600 dark:text-blue-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm shadow-blue-500/20 z-10 transition-transform duration-300 group-hover:scale-110">
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-sm dark:shadow-none backdrop-blur-sm group-hover:border-blue-400 dark:group-hover:border-blue-500/30 transition-colors">
                    <div className="flex flex-col mb-2">
                      <h3 className="font-bold text-foreground text-lg">{exp.title}</h3>
                      <div className="flex items-center flex-wrap gap-2 mt-1">
                        <span className="text-blue-600 dark:text-blue-400 text-xs font-mono font-medium uppercase tracking-wider">{exp.date}</span>
                        <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20"></div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">{exp.company}</span>
                        {exp.status && (
                          <>
                            <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20"></div>
                            <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500 text-[10px] font-bold uppercase tracking-wider border border-amber-200 dark:border-amber-500/20">
                              {exp.status}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {exp.description.split('. ').map((point, i) => (
                        <div key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0 opacity-60"></span>
                          <span>{point.endsWith('.') ? point : `${point}.`}</span>
                        </div>
                      ))}
                    </div>
                    
                    {exp.title === "Multi-Cloud Image Creation Automation Pipeline" && (
                      <div className="mt-4 mb-4">
                        <button 
                          onClick={() => setIsModalOpen(true)}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          <Maximize2 size={14} />
                          <span>See Architecture</span>
                        </button>
                      </div>
                    )}

                    {exp.tech && (
                      <p className="text-xs text-gray-500 font-mono border-t border-gray-100 dark:border-white/5 pt-3 mt-2">
                        {exp.tech}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-4 mb-10">
              <Award className="text-emerald-600 dark:text-emerald-500" size={28} />
              <h2 className="text-3xl font-bold text-foreground">Certifications</h2>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={certVariants}
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-sm dark:shadow-none hover:border-emerald-300 dark:hover:border-emerald-500/30 hover:bg-emerald-50/50 dark:hover:bg-white/[0.04] transition-all flex items-start gap-4"
                >
                  <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">{cert.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    <p className="text-emerald-600 dark:text-emerald-400/80 text-sm font-mono mt-2 font-medium">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              variants={certVariants}
              whileHover={{ scale: 1.02 }}
              className="mt-12 p-6 rounded-xl border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/5 shadow-sm dark:shadow-none"
            >
              <h3 className="font-bold text-foreground mb-2 text-lg">Education</h3>
              <div className="space-y-4 mt-4">
                <div className="group">
                  <h4 className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">Cycle ingénierie en informatique</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Tek-Up | 09/2023 - Present</p>
                </div>
                <div className="w-full h-px bg-gray-200 dark:bg-white/10"></div>
                <div className="group">
                  <h4 className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">Licence en technologie de l'informatique</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Institut Supérieur des Etudes Technologiques | 2019 - 2022</p>
                  <p className="text-gray-500 text-xs mt-1">Spécialité Multimédia et Développement Web</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10 bg-black/70 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-[95vw] w-full max-h-[95vh] bg-white dark:bg-[#111] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-gray-200 dark:border-white/10 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 z-[1000] p-3 bg-black/50 hover:bg-red-500 text-white rounded-full transition-all duration-300 shadow-xl backdrop-blur-md group/close"
                aria-label="Close modal"
              >
                <X size={28} className="group-hover/close:rotate-90 transition-transform" />
              </button>

              <div className="flex-1 p-4 md:p-8 bg-gray-50 dark:bg-black/40 flex items-center justify-center overflow-auto">
                <img 
                  src="/architecture_v3.png" 
                  alt="Multi-Cloud Architecture" 
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
