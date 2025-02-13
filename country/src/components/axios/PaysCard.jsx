import React from "react";

const PaysCard = ({ country, isFavorite, toggleFavorite }) => {
  // Extraire le premier nom natif disponible
  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0].common
    : "N/A";

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-85 ">
      <img 
        src={country.flags.png} 
        alt={country.name.common} 
        className="w-full h-50 object-cover rounded " 
      />
      <h2 className="text-xl font-bold mt- mb-4 text-center">
        {country.name.common} <span className="text-gray-400 text-sm">({nativeName})</span>
      </h2>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>

      {/* Bouton Favoris */}
      <button
        onClick={toggleFavorite}
        className={`mt-4 px-4 py-2 rounded shadow mx-auto block ${
        isFavorite ? "bg-red-500 text-white" : "bg-gray-200 text-black"
    }`}
>
        {isFavorite ? "Retirer des Favoris" : "Ajouter aux Favoris"}
     </button>

    </div>
  );
};

export default PaysCard;
