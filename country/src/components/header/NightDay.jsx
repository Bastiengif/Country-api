import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 text-white bg-blue-500 dark:bg-gray-700 rounded-lg shadow-md"
      >
        {darkMode ? "Mode Clair" : "Mode Sombre"}
      </button>
    </div>
  );
}
