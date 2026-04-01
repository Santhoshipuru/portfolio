import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home({ darkMode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center text-center py-16 md:py-24 px-4 md:px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
      >
        Hi, I'm <span className="text-blue-500">Santhoshi</span>
      </motion.h1>

      <motion.h2
        className={
          darkMode
            ? "text-xl md:text-3xl font-semibold text-gray-300 mb-4"
            : "text-xl md:text-3xl font-semibold text-gray-700 mb-4"
        }
      >
        React.js Frontend Developer
      </motion.h2>

      <motion.p
        className={
          darkMode
            ? "text-gray-400 max-w-2xl mb-8 text-sm md:text-base"
            : "text-gray-600 max-w-2xl mb-8 text-sm md:text-base"
        }
      >
        I build responsive and user-friendly web applications using
        React.js, JavaScript, and Tailwind CSS.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["React.js", "JavaScript", "Tailwind CSS", "Axios", "REST APIs"].map(
          (tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm"
            >
              {tech}
            </span>
          )
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full items-center">
        <Link
          to="/projects"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white transition duration-300"
        >
          View Projects
        </Link>

        <Link
          to="/contact"
          className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition duration-300"
        >
          Contact Me
        </Link>

        <a
  href="https://github.com/Santhoshipuru"
  target="_blank"
  rel="noopener noreferrer"
  className={
    darkMode
      ? "border border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 rounded-lg transition duration-300"
      : "border border-gray-500 text-gray-800 hover:bg-gray-200 px-6 py-3 rounded-lg transition duration-300"
  }
>
  GitHub
</a>

<a
  href="/Santhoshi_Puru.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download
  className={
    darkMode
      ? "border border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 rounded-lg transition duration-300"
      : "border border-gray-500 text-gray-800 hover:bg-gray-200 px-6 py-3 rounded-lg transition duration-300"
  }
>
  Download Resume
</a>
      </div>
    </motion.section>
  );
}