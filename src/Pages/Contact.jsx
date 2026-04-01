import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-16">
        Contact Me
      </h1>

      {/* Center Container */}
      <div className="flex justify-center">
        
        {/* Contact Info Card */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Get In Touch
          </h2>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="text-blue-500" />
            <a
              href="tel:+919063430575"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              9063430575
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="text-blue-500" />
            <a
              href="mailto:santhoshipuru@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              santhoshipuru@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <Linkedin className="text-blue-500" />
            <a
              href="http://www.linkedin.com/in/santhoshi-puru-b95749315"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
          LinkedIn
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <Github className="text-blue-500" />
            <a
              href="https://github.com/Santhoshipuru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              Github
            </a>
          </div>
        </div>

      </div>
    </motion.section>
  );
}