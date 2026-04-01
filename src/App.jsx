import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";

function AnimatedRoutes({ darkMode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div
        className={
          darkMode
            ? "bg-gray-950 text-white min-h-screen transition duration-300"
            : "bg-white text-black min-h-screen transition duration-300"
        }
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnimatedRoutes darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;