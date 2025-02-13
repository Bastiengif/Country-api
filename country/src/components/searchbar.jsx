import React, { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value); // Appel du callback pour filtrer les résultats
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Rechercher un pays..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;