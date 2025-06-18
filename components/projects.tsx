"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Chat Functionality For Neokul",
      description: "Industry project for Neokul - a chat platform designed for developer communities with real-time messaging and collaboration features",
      image: "https://av-eks-lekhak.s3.amazonaws.com/media/__sized__/article_images/62ea517b31321e6cd73336e8_Article_Conversational-Interface_1-thumbnail_webp-600x300.webp",
      technologies: ["Next Js", "Supabase", "Typescript", "Tailwind"],
      github: "https://github.com/MrGreek1603/Neokulchatapp",
      live: "#",
    },
    {
      title: "ClassCheck - Attendance Management",
      description: "React Native app with spoof detection system for secure student attendance recording",
      image: "https://www.onetapcheckin.com/images/qr-code-attendance-onetap.jpg",
      technologies: ["React Native", "Flask", "Firebase"],
      github: "https://github.com/MrGreek1603/ClassCheck",
      live: "#",
    },
    {
      title: "DataDock - Data Management Platform",
      description: "Web-based platform for secure file management with real-time notifications and seamless navigation",
      image: "https://datadock.ai/wp-content/uploads/2025/05/data-solutions-1.svg",
      technologies: ["React", "TypeScript", "Tailwind", "Supabase"],
      github: "https://github.com/MrGreek1603/DataDock",
      live: "#",
    },
    {
      title: "Exam Paper Check - AI Evaluation System",
      description: "AI-powered exam evaluation platform that allows professors to configure exams, upload answer keys and student papers, then automatically evaluates and returns results using AI comparison",
      image: "https://www.eklavvya.com/wp-content/uploads/2023/07/Simplify-Descriptive-Answer-Evaluation-using-AI.png",
      technologies: ["FastAPI", "Python", "Supabase", "Next.js", "TypeScript"],
      github: "https://github.com/MrGreek1603/Exam-paper-check",
      live: "#",
    },
    {
      title: "Instructly - AI Learning Companion",
      description: "An innovative learning platform that creates voice channels with AI companions to teach students concepts through interactive voice conversations",
      image: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*fFGzvqIVnniauyPL",
      technologies: ["Next.js", "Vapi", "Clerk", "Supabase"],
      github: "https://github.com/MrGreek1603/Instructly",
      live: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">A showcase of my recent work and personal projects</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-black/50 rounded-full backdrop-blur-sm"
                  >
                    <Github size={20} className="text-white" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-black/50 rounded-full backdrop-blur-sm"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </motion.a>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
