"use client"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Intern Fullstack Mobile App Developer",
      company: "Twinkle IT Solutions",
      location: "Goa, India",
      period: "Recent",
      description: [
        "Built mobile apps with React Native and Flask backend",
        "Integrated and managed databases for mobile applications",
        "Deployed apps on cloud platforms",
        "Collaborated with team on mobile app development projects",
      ],
    },
    {
      title: "Intern Fullstack Developer",
      company: "BELONG",
      location: "Remote",
      period: "2023",
      description: [
        "Assisted in project development using React.js, Next.js, Node.js",
        "Worked with MongoDB and Supabase for database management",
        "Deployed projects on platforms like Netlify and Heroku",
        "Gained experience in full-stack development workflows",
      ],
    },
    {
      title: "Frontend Web Developer",
      company: "SEVACO GLOBAL VENTURES PRIVATE LIMITED",
      location: "Goa, India",
      period: "2022",
      description: [
        "Designed UI/UX for startup website",
        "Implemented design into single-page web application",
        "Collaborated with startup team on web development",
        "Focused on creating user-friendly interfaces",
      ],
    },
    {
      title: "Intern Frontend Developer",
      company: "Hexcoderz",
      location: "Vasco da Gama, Goa",
      period: "2022",
      description: [
        "Acquired expertise in UI/UX principles",
        "Gained proficiency in Figma, HTML, CSS, and JavaScript",
        "Learned frontend development best practices",
        "Worked on various frontend development projects",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">My professional journey and key achievements</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-black z-10" />

                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
