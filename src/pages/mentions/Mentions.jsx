// src/pages/mentions/Mentions.jsx
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Mentions = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      id: "editeur",
      title: "1. Éditeur du site",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            <strong className="text-primary-dark">National Energy</strong> est une entreprise spécialisée dans la distribution de produits pétroliers au Cameroun.
          </p>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
            <ul className="space-y-3 font-dm text-gray-700">
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[140px]">Siège social :</span>
                <span>Odza, montée collège Adventiste, Yaoundé, Cameroun</span>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[140px]">Téléphone :</span>
                <a href="tel:+237673787926" className="text-secondary hover:underline">+237 673 787 926</a>
                <span className="text-gray-400">/</span>
                <a href="tel:+237694457230" className="text-secondary hover:underline">+237 694 457 230</a>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[140px]">Email :</span>
                <a href="mailto:contact@national-energy.cm" className="text-secondary hover:underline">contact@national-energy.cm</a>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[140px]">Directeur général :</span>
                <span>[Nom du directeur]</span>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[140px]">Forme juridique :</span>
                <span>Société à responsabilité limitée (SARL)</span>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[140px]">Capital social :</span>
                <span>[Montant] FCFA</span>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[140px]">RCCM :</span>
                <span>[Numéro RCCM]</span>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[140px]">NIF :</span>
                <span>[Numéro d'identification fiscale]</span>
              </li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: "hebergement",
      title: "2. Hébergement",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Ce site est hébergé par :
          </p>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
            <ul className="space-y-3 font-dm text-gray-700">
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[120px]">Hébergeur :</span>
                <span>[Nom de l'hébergeur]</span>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[120px]">Adresse :</span>
                <span>[Adresse complète]</span>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[120px]">Téléphone :</span>
                <span>[Numéro]</span>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[120px]">Email :</span>
                <a href="mailto:contact@hebergeur.com" className="text-secondary hover:underline">[Email]</a>
              </li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: "conception",
      title: "3. Conception et développement",
      content: (
        <>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mb-4">
            <ul className="space-y-3 font-dm text-gray-700">
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[140px]">Agence :</span>
                <span>BC Creative Studio</span>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[140px]">Graphiste :</span>
                <span>Blondel Chedjou</span>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[140px]">Email :</span>
                <a href="mailto:contact@bccreativestudio.com" className="text-secondary hover:underline">contact@bccreativestudio.com</a>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-secondary rounded-r-lg p-4">
            <p className="font-dm text-sm text-primary flex items-center gap-2">
              <span className="text-lg">📅</span>
              Charte graphique réalisée le <strong>22 juin 2023</strong>
            </p>
          </div>
        </>
      )
    },
    {
      id: "propriete",
      title: "4. Propriété intellectuelle",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            L'ensemble des éléments composant ce site (logo, textes, images, vidéos, charte graphique, codes source, etc.) sont la propriété exclusive de <strong className="text-primary-dark">National Energy</strong> ou de ses partenaires, et sont protégés par les dispositions du Code de la propriété intellectuelle camerounais et des conventions internationales relatives au droit d'auteur.
          </p>
          <p className="font-dm text-gray-600 leading-relaxed">
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord écrit préalable de National Energy. Le logo National Energy, composé d'une couronne, de cercles concentriques et d'une flamme, est une création originale protégée par le droit d'auteur.
          </p>
        </>
      )
    },
    {
      id: "responsabilite",
      title: "5. Limitation de responsabilité",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            National Energy s'efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition, qui peuvent évoluer à tout moment sans préavis.
          </p>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Les prix des produits pétroliers sont susceptibles de varier conformément aux arrêtés ministériels en vigueur au Cameroun. Nous vous invitons à consulter nos stations ou à nous contacter pour obtenir les tarifs actualisés.
          </p>
          <p className="font-dm text-gray-600 leading-relaxed">
            National Energy décline toute responsabilité en cas d'erreur, d'omission, ou d'indisponibilité temporaire ou permanente du site, ainsi que des dommages directs ou indirects pouvant résulter de son utilisation.
          </p>
        </>
      )
    },
    {
      id: "donnees",
      title: "6. Protection des données personnelles",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Conformément à la loi n° 2010/012 du 21 décembre 2010 relative à la cybersécurité et à la cybercriminalité en République du Cameroun, vous disposez d'un droit d'accès, de rectification, de mise à jour et de suppression des données personnelles vous concernant.
          </p>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Pour exercer ce droit, veuillez contacter notre délégué à la protection des données :
          </p>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mb-4">
            <ul className="space-y-3 font-dm text-gray-700">
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[80px]">Email :</span>
                <a href="mailto:dpo@national-energy.cm" className="text-secondary hover:underline">dpo@national-energy.cm</a>
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary-dark min-w-[80px]">Adresse :</span>
                <span>Odza, montée collège Adventiste, Yaoundé, Cameroun</span>
              </li>
            </ul>
          </div>
          <p className="font-dm text-gray-600 leading-relaxed text-sm bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-3">
            🔒 Les informations collectées via nos formulaires sont strictement confidentielles, utilisées uniquement pour le traitement de votre demande, et ne sont jamais cédées à des tiers.
          </p>
        </>
      )
    },
    {
      id: "cookies",
      title: "7. Cookies",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Ce site peut utiliser des cookies ou traceurs afin d'améliorer votre expérience de navigation, d'établir des statistiques de fréquentation et de personnaliser certains contenus.
          </p>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Un cookie est un petit fichier texte stocké sur votre terminal lors de la visite d'un site. Il ne contient pas de données personnelles et ne peut pas exécuter de code malveillant.
          </p>
          <p className="font-dm text-gray-600 leading-relaxed">
            Vous pouvez configurer votre navigateur pour accepter, refuser ou être averti de la présence de cookies. Notez que la désactivation des cookies peut limiter certaines fonctionnalités du site.
          </p>
        </>
      )
    },
    {
      id: "droit",
      title: "8. Droit applicable et juridiction",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Les présentes mentions légales sont régies par le droit camerounais.
          </p>
          <p className="font-dm text-gray-600 leading-relaxed">
            En cas de litige relatif à l'interprétation ou à l'exécution des présentes, et à défaut de solution amiable, les tribunaux compétents seront ceux de <strong>Yaoundé, Cameroun</strong>, nonobstant pluralité de défendeurs ou appel en garantie.
          </p>
        </>
      )
    },
    {
      id: "contact",
      title: "9. Contact",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Pour toute question relative à ce site ou aux présentes mentions légales, notre équipe est à votre disposition :
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <a 
              href="tel:+237673787926" 
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-secondary transition-colors group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">📞</span>
              <div>
                <p className="font-semibold text-primary-dark">Téléphone</p>
                <p className="text-sm text-secondary">+237 673 787 926</p>
              </div>
            </a>
            <a 
              href="mailto:contact@national-energy.cm" 
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-secondary transition-colors group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">✉️</span>
              <div>
                <p className="font-semibold text-primary-dark">Email</p>
                <p className="text-sm text-secondary break-all">contact@national-energy.cm</p>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-primary-dark">Adresse</p>
                <p className="text-sm text-gray-600">Odza, Yaoundé</p>
              </div>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen font-dm">
      
      
      {/* ========== HERO SECTION ========== */}
<section 
  className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#388E3C] text-white py-24 md:py-32 overflow-hidden"
  aria-labelledby="mentions-title"
>
  {/* Image de fond avec overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
    style={{ 
      backgroundImage: "url('/images/mentions.png')",
      filter: "brightness(0.9) contrast(1.1)"
    }}
    aria-hidden="true"
  />
  
  {/* Overlay dégradé pour lisibilité */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/90 via-[#1B5E20]/70 to-transparent" aria-hidden="true" />
  
  {/* Effets décoratifs */}
  <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
  <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" aria-hidden="true" />
  
  {/* Contenu CENTRÉ */}
  <div className="relative container-custom z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] text-center">
    
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
      <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
      <span className="font-outfit text-xs font-semibold uppercase tracking-wider">Document juridique</span>
    </div>
    
    <h1 
      id="mentions-title"
      className="font-outfit text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto"
    >
      Mentions légales
    </h1>
    
    <p className="font-dm text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
      Informations légales relatives à l'édition, l'hébergement et l'utilisation du site National Energy SARL.
    </p>
    
    {/* Fil d'Ariane centré */}
    <nav className="flex items-center justify-center gap-2 text-sm font-medium" aria-label="Fil d'Ariane">
      <Link 
        to="/" 
        className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Accueil
      </Link>
      <span className="text-white/40">/</span>
      <span className="text-white">Mentions légales</span>
    </nav>
    
  </div>
</section>

      {/* ========== TABLE DES MATIÈRES (Desktop) ========== */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-thin">
            <span className="font-outfit font-semibold text-primary-dark whitespace-nowrap">Sommaire :</span>
            {articles.map((article) => (
              <a
                key={article.id}
                href={`#${article.id}`}
                className="text-sm text-gray-600 hover:text-secondary transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-secondary pb-1"
              >
                {article.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ========== CONTENU PRINCIPAL ========== */}
      <main className="container-custom py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          
          {articles.map((article, index) => (
            <article 
              key={article.id}
              id={article.id}
              className={`scroll-mt-24 mb-12 pb-8 ${index < articles.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <h2 className="font-outfit text-xl md:text-2xl font-bold text-primary mb-5 flex items-center gap-3 group">
                <span className="w-1.5 h-6 bg-gradient-to-b from-secondary to-[#1B5E20] rounded-full group-hover:scale-y-110 transition-transform" />
                {article.title}
              </h2>
              <div className="pl-4">
                {article.content}
              </div>
            </article>
          ))}

          {/* Date de mise à jour */}
          <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-gray-500 text-sm font-dm">
              Document conforme à la réglementation camerounaise en vigueur
            </p>
            <p className="text-gray-400 text-sm font-dm">
              Dernière mise à jour : <time dateTime={new Date().toISOString()}>{new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </p>
          </div>

          {/* Bouton retour en haut */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 inline-flex items-center gap-2 text-secondary hover:text-[#1B5E20] font-medium text-sm transition-colors"
            aria-label="Retour en haut de page"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Retour en haut
          </button>

        </div>
      </main>

      {/* ========== STYLES SUPPLÉMENTAIRES ========== */}
      <style>{`
        /* Smooth scroll pour les ancres */
        html {
          scroll-behavior: smooth;
        }
        
        /* Scrollbar personnalisée pour le sommaire */
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        
        /* Impression */
        @media print {
          .container-custom {
            padding: 0 !important;
            max-width: 100% !important;
          }
          a {
            text-decoration: none !important;
            color: inherit !important;
          }
          .hidden-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Mentions;