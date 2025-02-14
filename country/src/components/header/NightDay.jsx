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
    <div className="flex justify-center items-center">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 text-white w-auto inline-block mr-25"
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
}

