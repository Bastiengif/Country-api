import React, { useState, useEffect } from "react";
import axios from "axios";
import PaysCard from "./PaysCard";


const PaysListe = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Erreur lors de la récupération des données", error));
  }, []);

  if (loading) return <p className="text-white text-center mt-10">Chargement des données...</p>;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-wrap gap-13 justify-center p-20">
      {countries.slice(0, ).map((country) => (
        <PaysCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default PaysListe;
