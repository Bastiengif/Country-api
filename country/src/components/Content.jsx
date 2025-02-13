import React from "react";
import "./content.css";

const Content = ({ searchTerm }) => {
  // Exemple de données à filtrer
  const items = ["React", "JavaScript", "HTML", "CSS", "Node.js", "Vue.js"];

  // Filtrer les éléments en fonction de la recherche
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="content-container">
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