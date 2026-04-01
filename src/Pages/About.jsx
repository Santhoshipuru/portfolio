import { motion } from "framer-motion";

export default function About({ darkMode }) {
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
       <p
          
  className={` text-lg leading-relaxed ${
    darkMode ? "text-white" : "text-gray-500"
  }`}
>
          I'm{" "}
          <span className="font-bold text-blue-400">
  Santhoshi
</span>
          , a passionate React.js developer focused on building modern,
          responsive and user-friendly web applications. I enjoy turning
          complex problems into simple, beautiful and intuitive designs.
        </p>
      </div>

      {/* Journey Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            My Journey
          </h2>

          <p
          
  className={`leading-relaxed ${
    darkMode ? "text-white" : "text-gray-500"
  }`}
>
          
            I started my journey in web development with a strong curiosity
            for how websites work. Over time, I developed skills in React,
            JavaScript and modern frontend technologies.
          </p>
        </div>

        {/* Right Card */}
        <div
          className={`p-8 rounded-xl shadow-lg transition ${
            darkMode
              ? "bg-gray-900 border border-gray-700"
              : "bg-gray-100"
          }`}
        >
          <h3
            className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            What I Focus On
          </h3>

          <ul
            className={`space-y-3 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>✔ Clean & scalable code</li>
            <li>✔ Responsive design</li>
            <li>✔ API integration</li>
            <li>✔ Performance optimization</li>
            <li>✔ User experience (UX)</li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-blue-400 text-center mb-8">
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "Axios",
            "REST APIs",
            "Git & GitHub",
          ].map((skill, index) => (
            <span
              key={index}
              className={`px-5 py-2 rounded-full transition ${
                darkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Goal */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">
          Career Goal
        </h2>

       <p
          
  className={`leading-relaxed ${
    darkMode ? "text-white" : "text-gray-500"
  }`}
>
          My goal is to work in a growth-oriented company where I can
          contribute to impactful products while continuously learning.
        </p>
      </div>
    </motion.section>
  );
}