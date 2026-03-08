import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={
        darkMode
          ? "flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md transition"
          : "flex justify-between items-center px-8 py-4 bg-gray-200 shadow-md transition"
      }
    >
      <h1 className="text-2xl font-bold text-blue-500">
        Santhoshi Puru
      </h1>

      <div className="space-x-6 flex items-center">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link to="/projects" className="hover:text-blue-400">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-blue-400">
          Contact
        </Link>

        {/* 🌙 Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-1 border rounded-lg hover:scale-105 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}