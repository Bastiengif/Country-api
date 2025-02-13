import React from 'react';

const PaysCard = ({ pays, onClick }) => {
  return (
    <div 
      className="bg-[#2B3743] dark:bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
      onClick={() => onClick(pays)}
    >
      <img 
        src={pays.flag} 
        alt={`Drapeau ${pays.name}`}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-white dark:text-gray-800 text-xl font-bold mb-4">{pays.name}</h2>
      <div className="text-gray-300 dark:text-gray-600 space-y-2">
        <p><span className="font-semibold">Population:</span> {pays.population.toLocaleString()}</p>
        <p><span className="font-semibold">Capital:</span> {pays.capital}</p>
        <p><span className="font-semibold">Region:</span> {pays.region}</p>
      </div>
    </div>
  );
};

export default PaysCard;