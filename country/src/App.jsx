import React, { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import SearchBar from "./components/searchbar";
import { Helmet } from "react-helmet-async";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Helmet>
        <title>Où est le monde</title>
        <meta name="description" content="Ceci est une description pour le SEO." />
        <meta name="keywords" content="React, SEO, Helmet" />
        <meta name="author" content="Ton Nom" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <h1>Recherche de Technologies</h1>

      {/* Barre de recherche */}
      <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        <SearchBar onSearch={setSearchTerm} />
      </div>

      {/* Contenu principal */}
      <Content searchTerm={searchTerm} />
    </div>
  );
};

export default App;