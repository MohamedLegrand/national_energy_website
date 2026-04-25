// src/pages/NotFound.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  // Mettre à jour le titre de la page
  useEffect(() => {
    document.title = "404 - Page non trouvée | National Energy";
  }, []);

  // Fonction pour gérer le retour à l'accueil avec scroll
  const handleGoHome = (e) => {
    e.preventDefault();
    const accueilSection = document.querySelector("#accueil");
    if (accueilSection) {
      accueilSection.scrollIntoView({ behavior: "smooth" });
    }
    // Changer l'URL sans rechargement
    window.history.pushState({}, "", "/");
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
      <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
        Page non trouvée
      </h2>
      <p className="text-gray-500 max-w-md mx-auto mb-8">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        onClick={handleGoHome}
        className="btn-secondary px-8 py-3 rounded-lg inline-block transition-all hover:scale-105"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;