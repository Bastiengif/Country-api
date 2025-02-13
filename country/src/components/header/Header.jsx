import React from 'react';
import SearchBar from '../SearchBar';
import DarkModeToggle from './NightDay';

const Header = ({ onSearch }) => {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <h1 className="text-2xl font-bold">Where in the World?</h1>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <SearchBar onSearch={onSearch} />
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;