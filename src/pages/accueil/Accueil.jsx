import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Heros from "../../components/accueil/Heros";
import Produits from "../../components/accueil/Produits";
import Stations from "../../components/accueil/Stations";
import Tarifs from "../../components/accueil/Tarifs";

const Accueil = () => {
  // Gestion du scroll après navigation
  useEffect(() => {
    // Vérifier s'il y a une ancre dans l'URL (ex: /#produits)
    const hash = window.location.hash;
    if (hash) {
      // Attendre que le DOM soit chargé
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        {/* BALISES STANDARDS */}
        <title>National Energy - Station essence Yaoundé | Carburant 840F</title>
        <meta name="description" content="Station essence à Odza, Yaoundé : Super sans plomb (840F), Gasoil (828F), lavage auto, graissage, lubrifiants. Ouvert 24h/24. KEED MARKET." />
        <meta name="keywords" content="station essence Yaoundé, carburant Cameroun, prix gasoil 828, super sans plomb 840, lavage auto Yaoundé, graissage, lubrifiants, gaz domestique, KEED MARKET, Odza" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://national-energ.com/" />
        
        {/* OPEN GRAPH / FACEBOOK */}
        <meta property="og:title" content="National Energy - Station essence Yaoundé" />
        <meta property="og:description" content="Carburants, lavage, graissage, boutique. Ouvert 24h/24 à Odza, Yaoundé." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://national-energ.com/" />
        <meta property="og:image" content="https://national-energ.com/images/og-image.jpg" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="National Energy - Station essence Yaoundé" />
        <meta name="twitter:description" content="Carburants, lavage, graissage, boutique. Ouvert 24h/24." />
        
        {/* DONNÉES STRUCTURÉES JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GasStation",
            "name": "National Energy",
            "description": "Station essence et services à Yaoundé, Cameroun",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Montée Collège Adventiste, Odza",
              "addressLocality": "Yaoundé",
              "addressCountry": "CM"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "350-840 FCFA",
            "telephone": "+237699122963",
            "url": "https://national-energ.com/"
          })}
        </script>
      </Helmet>
      
      <main>
        <Heros />
        <Produits />
        <Stations />
        <Tarifs />
      </main>
    </>
  );
};

export default Accueil;