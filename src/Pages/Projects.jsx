import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce platform with product listing, cart functionality and API integration.",
    tech: ["React", "Tailwind CSS", "Axios"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-ecommerce-demo.com",
  },
  {
    title: "Task Manager App",
    description:
      "A task management app with CRUD operations and local storage integration.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/yourusername/taskmanager",
    live: "https://your-task-demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Tailwind CSS, routing and animations.",
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.com",
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-16">
        My Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm transition"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg text-sm transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}