import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const NightDay = () => {
  const [darkMode, setDarkMode] = useState(() => 
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800 dark:bg-slate-700 text-white hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200"
    >
      {darkMode ? (
        <>
          <Sun className="w-5 h-5" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="w-5 h-5" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
};

export default NightDay;