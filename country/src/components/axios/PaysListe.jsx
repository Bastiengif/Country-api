import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaysCard from './PaysCard';
import { Loader2 } from 'lucide-react';

const PaysListe = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {countries.map((country) => (
          <PaysCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default PaysListe;