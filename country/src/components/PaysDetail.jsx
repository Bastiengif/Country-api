import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PaysDetail = ({ pays, onBack }) => {
  return (
    <div className="py-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 px-8 py-2 bg-[#2B3743] dark:bg-white dark:text-gray-800 text-white rounded-lg shadow-md mb-12"
      >
        <ArrowLeft size={20} />
        Retour
      </button>

      <div className="grid md:grid-cols-2 gap-16">
        <img 
          src={pays.flag} 
          alt={`Drapeau ${pays.name}`}
          className="w-full h-auto shadow-lg rounded-lg"
        />

        <div className="text-white dark:text-gray-800">
          <h2 className="text-3xl font-bold mb-8">{pays.name}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <p><span className="font-semibold">Nom natif:</span> {pays.nativeName}</p>
              <p><span className="font-semibold">Population:</span> {pays.population.toLocaleString()}</p>
              <p><span className="font-semibold">Région:</span> {pays.region}</p>
              <p><span className="font-semibold">Sous-région:</span> {pays.subregion}</p>
              <p><span className="font-semibold">Capitale:</span> {pays.capital}</p>
            </div>
            
            <div className="space-y-2">
              <p><span className="font-semibold">Domaine de premier niveau:</span> {pays.tld}</p>
              <p><span className="font-semibold">Devises:</span> {pays.currencies}</p>
              <p><span className="font-semibold">Langues:</span> {pays.languages}</p>
            </div>
          </div>

          {pays.borders && (
            <div>
              <h3 className="font-semibold mb-4">Pays frontaliers:</h3>
              <div className="flex flex-wrap gap-2">
                {pays.borders.map(border => (
                  <span key={border} className="px-6 py-1 bg-[#2B3743] dark:bg-white text-white dark:text-gray-800 rounded shadow-sm">
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaysDetail;