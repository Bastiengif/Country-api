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
    localStorage.setItem('theme', newTheme); // Sauvegarde le choix de l'utilisateur en local
  };

  // Appliquer la classe 'light' ou 'dark' au body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="NightDay">
      <h1>Mode {theme === 'light' ? 'Jour' : 'Nuit'}</h1>
      <button onClick={toggleTheme}>
        Passer en mode {theme === 'light' ? 'Nuit' : 'Jour'}
      </button>
    </div>
  );
};

export default NightDay;
