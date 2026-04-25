// src/pages/accueil/Accueil.jsx
import { useEffect } from "react";
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
    <main>
      <Heros />
      <Produits />
      <Stations />
      <Tarifs />
    </main>
  );
};

export default Accueil;