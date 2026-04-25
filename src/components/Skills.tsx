"use client";

import { motion } from "framer-motion";
import { 
  FaAws, FaDocker, FaReact, FaAngular, FaJs, FaBootstrap, 
  FaPhp, FaNodeJs, FaGitAlt, FaJava, FaPython, FaLinux, FaWindows 
} from "react-icons/fa";
import { 
  SiHetzner, SiPacker, SiAnsible, SiTerraform, SiKubernetes, SiDotnet, 
  SiSpringboot, SiC, SiMysql, SiMongodb 
} from "react-icons/si";

const skillsCategories = [
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Hetzner", icon: <SiHetzner /> },
      { name: "Packer", icon: <SiPacker /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "CI/CD", icon: <FaGitAlt /> },
      { name: "Terraform", icon: <SiTerraform /> }
    ],
    color: "from-blue-500/10 to-blue-500/5 dark:from-blue-500/20 dark:to-blue-500/5",
    borderColor: "border-blue-200 dark:border-blue-500/20",
    hoverBorder: "hover:border-blue-400 dark:hover:border-blue-400"
  },
  {
    title: "Web Development",
    skills: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "PHP7", icon: <FaPhp /> },
      { name: ".NET Core", icon: <SiDotnet /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Git/GitHub", icon: <FaGitAlt /> }
    ],
    color: "from-emerald-500/10 to-emerald-500/5 dark:from-emerald-500/20 dark:to-emerald-500/5",
    borderColor: "border-emerald-200 dark:border-emerald-500/20",
    hoverBorder: "hover:border-emerald-400 dark:hover:border-emerald-400"
  },
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: <SiC /> }
    ],
    color: "from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/5",
    borderColor: "border-purple-200 dark:border-purple-500/20",
    hoverBorder: "hover:border-purple-400 dark:hover:border-purple-400"
  },
  {
    title: "Databases & OS",
    skills: [
      { name: "SQL / MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Windows", icon: <FaWindows /> }
    ],
    color: "from-orange-500/10 to-orange-500/5 dark:from-orange-500/20 dark:to-orange-500/5",
    borderColor: "border-orange-200 dark:border-orange-500/20",
    hoverBorder: "hover:border-orange-400 dark:hover:border-orange-400"
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 border-t border-gray-200 dark:border-white/5 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">Skills & Tools</h2>
          <div className="h-[2px] w-24 bg-blue-500 rounded-full"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillsCategories.map((category) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              key={category.title}
              className={`p-6 rounded-2xl border border-border-color bg-white dark:bg-bg-secondary shadow-sm dark:shadow-none hover:border-blue-500 transition-colors duration-300`}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    key={skill.name}
                    className="px-3 py-2 bg-gray-100 dark:bg-black/40 border border-border-color rounded-md text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-colors cursor-default shadow-sm dark:shadow-none group"
                  >
                    <span className="text-lg opacity-80 group-hover:text-white">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
