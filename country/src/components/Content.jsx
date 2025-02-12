import React, { useState } from "react";
import "./content.css"; // Import du fichier CSS

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Exemple de données à filtrer
  const items = ["React", "JavaScript", "HTML", "CSS", "Node.js", "Vue.js"];

  // Filtrer les éléments en fonction de la recherche
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="content-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="result-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>Aucun résultat trouvé</li>
        )}
      </ul>
    </div>
  );
};

export default Content;
