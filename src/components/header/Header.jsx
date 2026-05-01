// src/components/header/Header.jsx
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Accueil", href: "#accueil", isHome: true },
    { name: "Produits", href: "#produits", isHome: false },
    { name: "Stations", href: "#stations", isHome: false },
    { name: "Tarifs", href: "#tarifs", isHome: false },
  ];

  // Fonction pour remonter en haut de la page (Accueil)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnchorClick = async (e, href, isHome = false) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Si c'est l'accueil, remonter directement en haut
    if (isHome || href === "#accueil") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scrollToTop();
        }, 100);
      } else {
        scrollToTop();
      }
      return;
    }
    
    // Pour les autres ancres (Produits, Stations, Tarifs)
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToTop();
      }, 100);
    } else {
      scrollToTop();
    }
  };

  return (
    <>
      <style>{`
        /* Reset et variables */
        .ne-header {
          --header-height: 110px;
          --header-height-mobile: 90px;
          --header-height-scrolled: 85px;
          --primary-green: #2E7D32;
          --primary-green-dark: #1B5E20;
          --primary-orange: #F57C00;
          --primary-orange-dark: #EF6C00;
          --text-white: #ffffff;
          --text-white-dim: rgba(255, 255, 255, 0.85);
          --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
          --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
          --transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Header principal */
        .ne-header {
          background: var(--primary-green);
          position: sticky;
          top: 0;
          z-index: 50;
          transition: var(--transition-base);
          height: var(--header-height);
        }

        .ne-header.scrolled {
          height: var(--header-height-scrolled);
          background: rgba(46, 125, 50, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-xl);
        }

        /* Effet de décoration amélioré */
        .ne-header::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 350px;
          height: 100%;
          background: rgba(255, 255, 255, 0.08);
          clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
          pointer-events: none;
        }

        .ne-header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-orange), transparent);
          opacity: 0;
          transition: var(--transition-base);
        }

        .ne-header.scrolled::after {
          opacity: 1;
        }

        /* Container interne */
        .ne-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          height: var(--header-height);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .ne-header.scrolled .ne-inner {
          height: var(--header-height-scrolled);
        }

        /* Logo agrandi */
        .ne-logo {
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          flex-shrink: 0;
          cursor: pointer;
          transition: var(--transition-base);
        }

        .ne-logo:hover {
          transform: scale(1.03);
        }

        .ne-logo-img {
          height: 64px;
          width: auto;
          object-fit: contain;
          transition: var(--transition-base);
        }

        .ne-header.scrolled .ne-logo-img {
          height: 52px;
        }

        .ne-logo-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ne-logo-brand {
          color: var(--text-white);
          font-weight: 800;
          font-size: 24px;
          letter-spacing: -0.02em;
          line-height: 1.2;
          transition: var(--transition-base);
        }

        .ne-header.scrolled .ne-logo-brand {
          font-size: 20px;
        }

        .ne-logo-sub {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.75);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
          line-height: 1;
          transition: var(--transition-base);
        }

        .ne-header.scrolled .ne-logo-sub {
          font-size: 10px;
        }

        /* Navigation desktop agrandie */
        .ne-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .ne-pill-group {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 60px;
          padding: 6px;
          gap: 6px;
        }

        .ne-link {
          padding: 12px 28px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-white-dim);
          cursor: pointer;
          text-decoration: none;
          transition: var(--transition-base);
          white-space: nowrap;
          background: none;
          border: none;
          font-family: inherit;
          display: inline-block;
          position: relative;
          letter-spacing: 0.3px;
        }

        .ne-header.scrolled .ne-link {
          padding: 10px 24px;
          font-size: 15px;
        }

        .ne-link:hover {
          color: var(--text-white);
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .ne-link:active {
          transform: translateY(0);
        }

        /* Style spécial pour le lien Accueil */
        .ne-link.active {
          background: rgba(255, 255, 255, 0.2);
          color: var(--text-white);
        }

        /* Bouton contact agrandi */
        .ne-contact {
          padding: 14px 32px;
          border-radius: 50px;
          background: var(--primary-orange);
          color: var(--text-white);
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition-base);
          white-space: nowrap;
          box-shadow: var(--shadow-md);
          border: none;
          cursor: pointer;
          display: inline-block;
          letter-spacing: 0.5px;
        }

        .ne-header.scrolled .ne-contact {
          padding: 11px 28px;
          font-size: 15px;
        }

        .ne-contact:hover {
          background: var(--primary-orange-dark);
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .ne-contact:active {
          transform: translateY(0);
        }

        /* Bouton burger agrandi */
        .ne-burger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          cursor: pointer;
          color: var(--text-white);
          transition: var(--transition-base);
          z-index: 1;
        }

        .ne-header.scrolled .ne-burger {
          width: 48px;
          height: 48px;
        }

        .ne-burger:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .ne-burger:active {
          transform: scale(0.95);
        }

        .ne-burger svg {
          width: 26px;
          height: 26px;
        }

        .ne-header.scrolled .ne-burger svg {
          width: 24px;
          height: 24px;
        }

        /* Menu mobile agrandi */
        .ne-mobile {
          background: var(--primary-green-dark);
          position: absolute;
          top: var(--header-height);
          left: 0;
          right: 0;
          max-height: calc(100vh - var(--header-height));
          overflow-y: auto;
          animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--shadow-xl);
        }

        .ne-header.scrolled .ne-mobile {
          top: var(--header-height-scrolled);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ne-mobile-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .ne-mobile-link {
          padding: 18px 16px;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-white-dim);
          text-decoration: none;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          transition: var(--transition-base);
          display: block;
          cursor: pointer;
          background: none;
          border: none;
          text-align: left;
          font-family: inherit;
          width: 100%;
        }

        .ne-mobile-link:last-of-type {
          border-bottom: none;
        }

        .ne-mobile-link:hover {
          color: var(--text-white);
          padding-left: 24px;
          background: rgba(255, 255, 255, 0.05);
        }

        .ne-mobile-contact {
          margin-top: 24px;
          padding: 18px;
          border-radius: 60px;
          background: var(--primary-orange);
          color: var(--text-white);
          font-size: 18px;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          display: block;
          transition: var(--transition-base);
        }

        .ne-mobile-contact:hover {
          background: var(--primary-orange-dark);
          transform: translateY(-2px);
        }

        /* Responsive Design */
        
        /* Grands écrans laptops (1025px - 1440px) */
        @media (max-width: 1440px) {
          .ne-inner {
            max-width: 1200px;
          }
          
          .ne-link {
            padding: 10px 24px;
            font-size: 15px;
          }
          
          .ne-contact {
            padding: 12px 28px;
          }
        }
        
        /* Tablettes (768px - 1024px) */
        @media (max-width: 1024px) {
          .ne-header {
            --header-height: 100px;
          }
          
          .ne-inner {
            padding: 0 1.5rem;
          }
          
          .ne-pill-group {
            gap: 4px;
          }
          
          .ne-link {
            padding: 8px 20px;
            font-size: 14px;
          }
          
          .ne-contact {
            padding: 10px 24px;
            font-size: 14px;
          }
          
          .ne-logo-img {
            height: 56px;
          }
          
          .ne-logo-brand {
            font-size: 20px;
          }
        }
        
        /* Mobiles (moins de 768px) */
        @media (max-width: 768px) {
          .ne-header {
            height: var(--header-height-mobile);
          }
          
          .ne-header::before,
          .ne-header::after {
            display: none;
          }
          
          .ne-inner {
            height: var(--header-height-mobile);
            padding: 0 1rem;
          }
          
          .ne-nav {
            display: none;
          }
          
          .ne-burger {
            display: flex;
          }
          
          .ne-logo-img {
            height: 48px;
          }
          
          .ne-logo-brand {
            font-size: 18px;
          }
          
          .ne-logo-sub {
            display: none;
          }
          
          .ne-logo-text {
            gap: 0;
          }
        }
        
        /* Petits mobiles (moins de 480px) */
        @media (max-width: 480px) {
          .ne-header {
            --header-height-mobile: 80px;
          }
          
          .ne-inner {
            padding: 0 0.75rem;
          }
          
          .ne-logo-img {
            height: 42px;
          }
          
          .ne-logo-brand {
            font-size: 16px;
          }
          
          .ne-burger {
            width: 44px;
            height: 44px;
          }
          
          .ne-burger svg {
            width: 22px;
            height: 22px;
          }
          
          .ne-mobile-inner {
            padding: 1rem 1rem;
          }
          
          .ne-mobile-link {
            padding: 14px 12px;
            font-size: 16px;
          }
          
          .ne-mobile-contact {
            padding: 14px;
            font-size: 16px;
            margin-top: 20px;
          }
        }
        
        /* Très grands écrans (plus de 1920px) */
        @media (min-width: 1920px) {
          .ne-header {
            --header-height: 130px;
          }
          
          .ne-inner {
            max-width: 1600px;
          }
          
          .ne-link {
            padding: 14px 32px;
            font-size: 18px;
          }
          
          .ne-contact {
            padding: 16px 36px;
            font-size: 18px;
          }
          
          .ne-logo-img {
            height: 76px;
          }
          
          .ne-logo-brand {
            font-size: 28px;
          }
          
          .ne-logo-sub {
            font-size: 14px;
          }
        }
        
        /* Écrans pliables (Galaxy Fold, etc.) */
        @media (max-width: 280px) {
          .ne-logo-brand {
            display: none;
          }
          
          .ne-logo-img {
            height: 36px;
          }
          
          .ne-inner {
            padding: 0 0.5rem;
          }
          
          .ne-burger {
            width: 38px;
            height: 38px;
          }
        }
        
        /* Support du motion reduced */
        @media (prefers-reduced-motion: reduce) {
          .ne-header,
          .ne-logo,
          .ne-link,
          .ne-contact,
          .ne-burger,
          .ne-mobile-link,
          .ne-mobile-contact {
            transition: none;
          }
          
          .ne-mobile {
            animation: none;
          }
          
          * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <header className={`ne-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="ne-inner">
          {/* Logo */}
          <div onClick={handleLogoClick} className="ne-logo">
            <img 
              src="/images/logo.png" 
              alt="National Energy" 
              className="ne-logo-img"
              loading="eager"
            />
            <div className="ne-logo-text">
              <span className="ne-logo-brand">National Energy SARL</span>
              <span className="ne-logo-sub">Stations &amp; Solutions</span>
            </div>
          </div>

          {/* Navigation desktop */}
          <nav className="ne-nav" aria-label="Navigation principale">
            <div className="ne-pill-group">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleAnchorClick(e, item.href, item.isHome)}
                  className="ne-link"
                  aria-label={`Aller à ${item.name}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <Link 
              to="/contact" 
              className="ne-contact"
              aria-label="Page de contact"
            >
              Contact
            </Link>
          </nav>

          {/* Bouton hamburger mobile */}
          <button
            className="ne-burger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="ne-mobile" id="mobile-menu">
            <div className="ne-mobile-inner">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleAnchorClick(e, item.href, item.isHome)}
                  className="ne-mobile-link"
                  aria-label={`Aller à ${item.name}`}
                >
                  {item.name}
                </button>
              ))}
              <Link
                to="/contact"
                className="ne-mobile-contact"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Page de contact"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;