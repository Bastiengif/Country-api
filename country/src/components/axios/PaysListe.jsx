import React, { useState, useEffect } from "react";
import axios from "axios";
import PaysCard from "./PaysCard";

const PaysListe = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState(""); 
  const [favorites, setFavorites] = useState([]); // État des favoris
  const [showFavorites, setShowFavorites] = useState(false); // Toggle affichage favoris

  const regions = ["Europe", "Asia", "Africa", "Oceania", "Americas", "Antarctic"];

  // Charger tous les pays au début
  useEffect(() => {
    fetchCountries();
  }, []);

  // Charger les pays en fonction de la région sélectionnée
  useEffect(() => {
    if (region) {
      fetchCountriesByRegion(region);
    } else {
      fetchCountries(); 
    }
  }, [region]);

  // Récupérer tous les pays
  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données", error);
    } finally {
      setLoading(false);
    }
  };

  // Récupérer les pays par région
  const fetchCountriesByRegion = async (selectedRegion) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/region/${selectedRegion}`);
      setCountries(response.data);
    } catch (error) {
      console.error("Erreur lors du filtrage des pays", error);
      setCountries([]); 
    } finally {
      setLoading(false);
    }
  };

  // Ajouter ou retirer un pays des favoris
  const toggleFavorite = (country) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.cca3 === country.cca3)) {
        return prevFavorites.filter((fav) => fav.cca3 !== country.cca3); 
      } else {
        return [...prevFavorites, country]; 
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 p-10">
      {/* Sélecteur de région */}
      <div className="flex justify-center gap-4 mb-8">
        <select
          name="filter-by-region"
          id="filter-by-region"
          className="w-52 py-3 px-4 outline-none shadow rounded text-gray-600 dark:text-gray-400 dark:bg-gray-800"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Toutes les régions</option>
          {regions.map((reg, index) => (
            <option key={index} value={reg}>
              {reg}
            </option>
          ))}
        </select>

        {/* Bouton pour afficher les favoris */}
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-500"
        >
          {showFavorites ? "Voir Tous" : "Voir Favoris"}
        </button>
      </div>

      {/* Message de chargement */}
      {loading ? (
        <p className="text-white text-center mt-10">Chargement des données...</p>
      ) : (
        <div className="flex flex-wrap gap-13 justify-center">
          {(showFavorites ? favorites : countries).map((country) => (
            <PaysCard 
              key={country.cca3} 
              country={country} 
              isFavorite={favorites.some((fav) => fav.cca3 === country.cca3)}
              toggleFavorite={() => toggleFavorite(country)}
            />
          ))}
        </div>
      )}

      {/* Message si aucun favori */}
      {showFavorites && favorites.length === 0 && (
        <p className="text-white text-center mt-10">Aucun favori ajouté.</p>
      )}
    </div>
  );
};

export default PaysListe;
