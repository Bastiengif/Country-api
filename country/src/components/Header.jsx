import { Helmet } from "react-helmet-async";

const Head = () => {
  return (
    <Helmet>
      <title>Where is the world</title>
      <meta name="description" content="Ceci est une description pour le SEO." />
      <meta name="keywords" content="React, SEO, Helmet" />
      <meta name="author" content="Ton Nom" />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default Head;
