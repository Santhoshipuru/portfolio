import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home({ darkMode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center text-center py-24 px-6"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Hi, I'm <span className="text-blue-500">Santhoshi</span>
      </motion.h1>

      {/* Role */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={
          darkMode
            ? "text-2xl md:text-3xl font-semibold text-gray-300 mb-4"
            : "text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
        }
      >
        React.js Frontend Developer
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className={
          darkMode
            ? "text-gray-400 max-w-2xl mb-8"
            : "text-gray-600 max-w-2xl mb-8"
        }
      >
        I build responsive and user-friendly web applications using
        React.js, JavaScript, and Tailwind CSS. I enjoy creating clean
        UI designs and improving user experience through modern web
        technologies.
      </motion.p>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["React.js", "JavaScript", "Tailwind CSS", "Axios", "REST APIs"].map(
          (tech, index) => (
            <span
              key={index}
              className={
                darkMode
                  ? "bg-gray-800 text-white px-4 py-2 rounded-full text-sm"
                  : "bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm"
              }
            >
              {tech}
            </span>
          )
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">

        {/* Projects */}
        <Link
          to="/projects"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white transition duration-300"
        >
          View Projects
        </Link>

        {/* Contact */}
        <Link
          to="/contact"
          className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition duration-300"
        >
          Contact Me
        </Link>

        {/* GitHub */}
        <a
          href="https://github.com/Santhoshipuru"
          target="_blank"
          rel="noopener noreferrer"
          className={
            darkMode
              ? "border border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 rounded-lg transition duration-300"
              : "border border-gray-400 text-gray-700 hover:bg-gray-200 px-6 py-3 rounded-lg transition duration-300"
          }
        >
          GitHub
        </a>

        {/* Resume */}
        <a
          href="/Santhoshi_Resume.pdf"
          download
          className={
            darkMode
              ? "border border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 rounded-lg transition duration-300"
              : "border border-gray-400 text-gray-700 hover:bg-gray-200 px-6 py-3 rounded-lg transition duration-300"
          }
        >
          Download Resume
        </a>

      </div>
    </motion.section>
  );
}