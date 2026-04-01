import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <motion.section className="py-16 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-16">
        Contact Me
      </h1>

      <div className="flex justify-center">
        <div className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-lg space-y-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Get In Touch
          </h2>

          <div className="flex items-center gap-4">
            <Phone className="text-blue-500" />
            <a href="tel:+919063430575">9063430575</a>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-blue-500" />
            <a href="mailto:santhoshipuru@gmail.com">
              santhoshipuru@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Linkedin className="text-blue-500" />
            <a href="http://www.linkedin.com/in/santhoshi-puru-b95749315">
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Github className="text-blue-500" />
            <a href="https://github.com/Santhoshipuru">Github</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}