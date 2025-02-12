import React from 'react';
import './App.css';
import NightDay from './Header/NightDay'; // Importer le composant NightDay

function App() {
  return (
    <div className="App">
      <header>
        <NightDay /> {/* Utiliser le composant NightDay ici */}
      </header>
      <main>
        <h2>Bienvenue dans l'application React !</h2>
        <p>Changez entre le mode jour et nuit avec le bouton ci-dessus.</p>
      </main>
    </div>
  );
}

export default App;
