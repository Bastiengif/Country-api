import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return <div>{data ? <p>{data.title}</p> : <p>Chargement...</p>}</div>;
}

export default App;