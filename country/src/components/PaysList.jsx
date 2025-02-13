import React, { useState, useEffect } from 'react';
import PaysCard from './PaysCard';

const PaysList = ({ searchTerm, onPaysSelect }) => {
  const [pays, setPays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(country => ({
          name: country.name.common,
          nativeName: Object.values(country.name.nativeName || {})[0]?.common || country.name.common,
          population: country.population,
          region: country.region,
          subregion: country.subregion || 'N/A',
          capital: country.capital?.[0] || 'N/A',
          flag: country.flags.svg,
          tld: country.tld?.[0] || 'N/A',
          currencies: Object.values(country.currencies || {}).map(c => c.name).join(', ') || 'N/A',
          languages: Object.values(country.languages || {}).join(', ') || 'N/A',
          borders: country.borders || []
        }));
        setPays(formattedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur:', error);
        setLoading(false);
      });
  }, []);

  const filteredPays = pays.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="text-white dark:text-gray-800 text-center">Chargement...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 p-8">
      {filteredPays.map(country => (
        <PaysCard 
          key={country.name} 
          pays={country} 
          onClick={onPaysSelect}
        />
      ))}
    </div>
  );
};

export default PaysList;