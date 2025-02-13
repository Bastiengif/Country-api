import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import SearchBar from './components/SearchBar';
import PaysList from './components/PaysList';
import PaysDetail from './components/PaysDetail';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPays, setSelectedPays] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-[#202D36] dark:bg-gray-100`}>
      <header className="bg-[#2B3743] dark:bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-white dark:text-gray-800 text-2xl font-bold">Where in the world?</h1>
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 text-white dark:text-gray-800"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {selectedPays ? (
          <PaysDetail 
            pays={selectedPays} 
            onBack={() => setSelectedPays(null)}
          />
        ) : (
          <>
            <div className="mb-8">
              <SearchBar 
                searchTerm={searchTerm} 
                onSearchChange={setSearchTerm}
              />
            </div>
            <PaysList 
              searchTerm={searchTerm}
              onPaysSelect={setSelectedPays}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;