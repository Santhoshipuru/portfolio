import { Link } from "react-router-dom";


export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={
        darkMode
          ? "flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 bg-gray-900 shadow-md transition gap-4"
          : "flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 bg-gray-200 shadow-md transition gap-4"
      }
    >
      <img
  src="/santhoshi.jpeg"
  alt="Santhoshi Logo"
 className="h-14 md:h-16 w-48 md:w-56 object-contain"
/>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center text-sm md:text-base">
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

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 border rounded-lg hover:scale-105 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}