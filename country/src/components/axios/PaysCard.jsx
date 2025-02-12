import React from "react";

const PaysCard = ({ country }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-85 text-center">
      <img src={country.flags.png} alt={country.name.common} className="w-full h-60 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2 ">{country.name.common}</h2>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
    </div>
  );
};

export default PaysCard;
