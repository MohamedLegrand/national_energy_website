// src/components/header/Header.jsx
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Accueil", href: "#accueil" },
    { name: "Produits", href: "#produits" },
    { name: "Stations", href: "#stations" },
    { name: "Tarifs", href: "#tarifs" },
  ];

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    
    // Si on n'est pas sur la page d'accueil, naviguer d'abord vers "/"
    if (location.pathname !== "/") {
      navigate("/");
      // Attendre que la page d'accueil soit chargée
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      // Déjà sur l'accueil, scroller directement
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    
    // Si on n'est pas sur l'accueil, naviguer vers "/"
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      // Déjà sur l'accueil, scroller vers le haut
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .ne-header {
          background: #2E7D32;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0,0,0,0.15);
        }

        .ne-header::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 280px;
          height: 100%;
          background: rgba(255, 255, 255, 0.05);
          clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
          pointer-events: none;
        }

        .ne-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .ne-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
          cursor: pointer;
        }

        .ne-logo-img {
          height: 48px;
          width: auto;
          object-fit: contain;
        }

        .ne-logo-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ne-logo-brand {
          color: #fff;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .ne-logo-sub {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
          line-height: 1;
        }

        .ne-nav {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .ne-pill-group {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 40px;
          padding: 4px;
          gap: 2px;
        }

        .ne-link {
          padding: 8px 18px;
          border-radius: 32px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
          background: none;
          border: none;
          font-family: inherit;
          display: inline-block;
        }

        .ne-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.15);
        }

        .ne-contact {
          padding: 8px 22px;
          border-radius: 32px;
          background: #F57C00;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .ne-contact:hover {
          background: #EF6C00;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }

        .ne-burger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          cursor: pointer;
          color: #fff;
          transition: all 0.2s;
          z-index: 1;
        }

        .ne-burger:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .ne-burger svg {
          width: 22px;
          height: 22px;
        }

        .ne-mobile {
          background: #1B5E20;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .ne-mobile-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0.75rem 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
        }

        .ne-mobile-link {
          padding: 14px 8px;
          font-size: 15px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s;
          display: block;
          cursor: pointer;
          background: none;
          border: none;
          text-align: left;
          font-family: inherit;
        }

        .ne-mobile-link:last-of-type {
          border-bottom: none;
        }

        .ne-mobile-link:hover {
          color: #fff;
          padding-left: 12px;
        }

        .ne-mobile-contact {
          margin-top: 16px;
          padding: 12px;
          border-radius: 40px;
          background: #F57C00;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          display: block;
          transition: all 0.2s;
        }

        .ne-mobile-contact:hover {
          background: #EF6C00;
        }

        @media (max-width: 768px) {
          .ne-nav { display: none; }
          .ne-burger { display: flex; }
          .ne-logo-sub { display: none; }
        }

        @media (min-width: 769px) {
          .ne-mobile { display: none !important; }
        }
      `}</style>

      <header className="ne-header">
        <div className="ne-inner">

          {/* Logo avec image PNG */}
          <div
            onClick={handleLogoClick}
            className="ne-logo"
          >
            <img 
              src="/images/logo.png" 
              alt="National Energy" 
              className="ne-logo-img"
            />
            <div className="ne-logo-text">
              <span className="ne-logo-brand">National Energy</span>
              <span className="ne-logo-sub">Stations &amp; Solutions</span>
            </div>
          </div>

          {/* Navigation desktop */}
          <nav className="ne-nav">
            <div className="ne-pill-group">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="ne-link"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <Link to="/contact" className="ne-contact">
              Contact
            </Link>
          </nav>

          {/* Bouton hamburger mobile */}
          <button
            className="ne-burger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="ne-mobile">
            <div className="ne-mobile-inner">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="ne-mobile-link"
                >
                  {item.name}
                </button>
              ))}
              <Link
                to="/contact"
                className="ne-mobile-contact"
                onClick={() => setIsMenuOpen(false)}
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