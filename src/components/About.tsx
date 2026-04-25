"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Cpu } from "lucide-react";

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-foreground">About Me</h2>
            <div className="h-[2px] w-24 bg-blue-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="md:col-span-2 space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I am an IT Developer and Computer Engineering student based in Tunis, 
                specializing in Cloud Infrastructure, DevSecOps, and Software Engineering.
              </p>
              <p>
                My focus is on designing secure, automated pipelines and reliable cloud architectures. 
                With a strong foundation in both infrastructure as code (IaC) and full-stack development, 
                I bridge the gap between development and operations with a security-first mindset.
              </p>
              <p>
                Whether it's deploying highly available infrastructure on AWS, building automated CI/CD pipelines, 
                or crafting scalable REST APIs with robust authentication, I prioritize performance, maintainability, and security.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="p-4 rounded-xl border border-border-color bg-white dark:bg-bg-secondary shadow-sm dark:shadow-none flex items-start gap-4 transition-colors">
                <Cloud className="text-blue-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Cloud Native</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">AWS, and multi-cloud environments.</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="p-4 rounded-xl border border-border-color bg-white dark:bg-bg-secondary shadow-sm dark:shadow-none flex items-start gap-4 transition-colors">
                <Cpu className="text-emerald-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Automation</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CI/CD pipelines, Terraform, Ansible, and Docker.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="p-4 rounded-xl border border-border-color bg-white dark:bg-bg-secondary shadow-sm dark:shadow-none flex items-start gap-4 transition-colors">
                <ShieldCheck className="text-purple-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Security Mindset</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">IAM, secrets management, and secure APIs.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
