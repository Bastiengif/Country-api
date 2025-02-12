import React, { useState, useEffect } from 'react';

// Composant NightDay pour gérer le changement de mode
const NightDay = () => {
  const [theme, setTheme] = useState('light');

  // Vérifie si un thème est déjà défini dans localStorage au montage du composant
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Fonction pour basculer entre les modes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Sauvegarde le choix de l'utilisateur
  };

  // Appliquer la classe 'light' ou 'dark' au body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="text-center p-4">
      <h1 className={`text-3xl font-bold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        Mode {theme === 'light' ? 'Jour' : 'Nuit'}
      </h1>
      <button
        onClick={toggleTheme}
        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${theme === 'light' ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-gray-800 text-white hover:bg-gray-600'}`}
      >
        Passer en mode {theme === 'light' ? 'Nuit' : 'Jour'}
      </button>
    </div>
  );
};

export default NightDay;
