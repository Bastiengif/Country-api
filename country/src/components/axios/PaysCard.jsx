import React from 'react';

const PaysCard = ({ country }) => {
  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0].common
    : "N/A";

  return (
    <div className="bg-slate-800 dark:bg-slate-900 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-72">
      <img 
        src={country.flags.png} 
        alt={`Flag of ${country.name.common}`}
        className="w-full h-40 object-cover rounded-lg shadow-md" 
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold">
          {country.name.common}
          <span className="block text-sm text-slate-400 mt-1">{nativeName}</span>
        </h2>
        <div className="mt-4 space-y-2 text-slate-300">
          <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
          <p><span className="font-semibold">Region:</span> {country.region}</p>
          <p><span className="font-semibold">Capital:</span> {country.capital?.[0] || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default PaysCard;