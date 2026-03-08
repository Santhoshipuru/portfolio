import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 60 }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-12">
        About Me
      </h1>

      {/* Introduction */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm <span className="text-white font-semibold">Santhoshi</span>, a
          passionate React.js developer focused on building modern,
          responsive and user-friendly web applications. I enjoy turning
          complex problems into simple, beautiful and intuitive designs.
        </p>
      </div>

      {/* Journey Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            My Journey
          </h2>
          <p className="text-gray-400 leading-relaxed">
            I started my journey in web development with a strong curiosity
            for how websites work. Over time, I developed skills in React,
            JavaScript and modern frontend technologies. I continuously
            improve my skills by building real-world projects and exploring
            new tools.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">
            What I Focus On
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>✔ Clean & scalable code</li>
            <li>✔ Responsive design</li>
            <li>✔ API integration</li>
            <li>✔ Performance optimization</li>
            <li>✔ User experience (UX)</li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-blue-400 text-center mb-8">
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-gray-800 px-5 py-2 rounded-full">
            React.js
          </span>
          <span className="bg-gray-800 px-5 py-2 rounded-full">
            JavaScript (ES6+)
          </span>
          <span className="bg-gray-800 px-5 py-2 rounded-full">
            Tailwind CSS
          </span>
          <span className="bg-gray-800 px-5 py-2 rounded-full">
            Axios
          </span>
          <span className="bg-gray-800 px-5 py-2 rounded-full">
            REST APIs
          </span>
          <span className="bg-gray-800 px-5 py-2 rounded-full">
            Git & GitHub
          </span>
        </div>
      </div>

      {/* Career Goal */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">
          Career Goal
        </h2>
        <p className="text-gray-400 leading-relaxed">
          My goal is to work in a growth-oriented company where I can
          contribute to impactful products while continuously learning and
          enhancing my technical expertise.
        </p>
      </div>
    </motion.section>
  );
}