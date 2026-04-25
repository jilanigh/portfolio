"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      } 
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Let's Connect</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Open to new opportunities, collaborations, and tech discussions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] shadow-sm dark:shadow-none h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>
                  
                  <div className="space-y-6 text-gray-700 dark:text-gray-300">
                    <motion.a whileHover={{ x: 5 }} href="mailto:gharbijilani001@gmail.com" className="flex items-center gap-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                      <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 transition-colors">
                        <Mail size={20} className="text-blue-600 dark:text-blue-500" />
                      </div>
                      <span className="font-medium">gharbijilani001@gmail.com</span>
                    </motion.a>
                    
                    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 group cursor-default">
                      <div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-lg group-hover:bg-emerald-200 dark:group-hover:bg-emerald-500/20 transition-colors">
                        <Phone size={20} className="text-emerald-600 dark:text-emerald-500" />
                      </div>
                      <span className="font-medium">+216 94 42 09 50</span>
                    </motion.div>
                    
                    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 group cursor-default">
                      <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-500/20 transition-colors">
                        <MapPin size={20} className="text-purple-600 dark:text-purple-500" />
                      </div>
                      <span className="font-medium">Tunis, Ariana</span>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10 flex gap-4">
                  <motion.a 
                    whileHover={{ y: -5 }}
                    href="https://github.com/jilanigh" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-gray-300 dark:hover:bg-white/10 transition-colors text-gray-800 dark:text-white"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -5 }}
                    href="https://linkedin.com/in/jilanigharbi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-lg bg-blue-50 dark:bg-blue-500/5 hover:bg-blue-100 dark:hover:bg-blue-500/10 transition-colors text-blue-600 dark:text-blue-400"
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.form 
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/20 shadow-sm dark:shadow-none" 
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
              
              <motion.div variants={inputVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-foreground"
                  placeholder="Your Name"
                />
              </motion.div>
              
              <motion.div variants={inputVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-foreground"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-foreground resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </motion.div>

              <motion.button 
                variants={inputVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
