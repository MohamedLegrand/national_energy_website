// src/components/footer/Footer.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  // Fonction pour remonter directement en haut de la page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Fonction pour gérer le défilement vers les ancres
  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Gestion du clic sur le logo
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToTop();
      }, 100);
    } else {
      scrollToTop();
    }
  };

  const contactInfo = {
    adresse: "Odza, montée collège Adventiste, Yaoundé, Cameroun",
    telephone: ["+237 673 787 926", "+237 694 457 230"],
    email: ["contact@national-energy.cm", "commercial@national-energy.cm"],
  };

  const navLinks = [
    { label: "Accueil", href: "#accueil", anchor: true },
    { label: "Produits", href: "#produits", anchor: true },
    { label: "Nos stations", href: "#stations", anchor: true },
    { label: "Tarifs journaliers", href: "#tarifs", anchor: true },
    { label: "Contact", href: "/contact", anchor: false },
  ];

  const serviceLinks = [
    { label: "Demande de devis", href: "/contact", anchor: false },
    { label: "Trouver une station", href: "#stations", anchor: true },
    { label: "Prix journaliers", href: "#tarifs", anchor: true },
    { label: "Partenariats", href: "/contact", anchor: false },
  ];

  // Réseaux sociaux avec images
  const socialLinks = [
    {
      label: "Facebook",
      href: "https://facebook.com/nationalenergy",
      imgSrc: "/images/reseaux/facebook.jpg",
      imgAlt: "Facebook National Energy"
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/national-energy",
      imgSrc: "/images/reseaux/linkedin.jpg",
      imgAlt: "LinkedIn National Energy"
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/237673787926",
      imgSrc: "/images/reseaux/whatsapp.jpg",
      imgAlt: "WhatsApp National Energy"
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .ft-root {
          background: #071a10;
          color: rgba(255,255,255,0.65);
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Bande verte en haut - VERT CHARTE */
        .ft-topbar {
          height: 3px;
          background: linear-gradient(90deg, #1B5E20 0%, #2E7D32 50%, #1B5E20 100%);
        }

        /* Motif de fond subtil */
        .ft-root::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 500px; height: 100%;
          background: rgba(46, 125, 50, 0.03);
          clip-path: polygon(40% 0, 100% 0, 100% 100%, 20% 100%);
          pointer-events: none;
        }

        /* Grand texte décoratif en arrière-plan */
        .ft-watermark {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Outfit', sans-serif;
          font-size: 120px;
          font-weight: 800;
          color: rgba(46, 125, 50, 0.03);
          letter-spacing: -0.04em;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }

        .ft-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem 0;
          position: relative;
          z-index: 1;
        }

        /* ===== TOP BAND : logo + tagline + CTA ===== */
        .ft-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-wrap: wrap;
        }

        .ft-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          cursor: pointer;
        }

        .ft-logo-img {
          height: 48px;
          width: auto;
          object-fit: contain;
        }

        .ft-brand-name {
          font-family: 'Outfit', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.025em;
          line-height: 1.1;
        }

        .ft-brand-sub {
          font-size: 10px;
          color: rgba(46, 125, 50, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 400;
          margin-top: 2px;
        }

        .ft-tagline {
          font-size: 13.5px;
          color: rgba(255,255,255,0.45);
          max-width: 340px;
          line-height: 1.65;
        }

        .ft-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 12px 24px;
          border-radius: 10px;
          background: transparent;
          border: 1.5px solid rgba(46, 125, 50, 0.45);
          color: #2E7D32;
          font-family: 'Outfit', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .ft-cta:hover {
          background: #2E7D32;
          border-color: #2E7D32;
          color: #fff;
        }

        .ft-cta svg {
          width: 15px;
          height: 15px;
          transition: transform 0.2s;
        }

        .ft-cta:hover svg {
          transform: translateX(3px);
        }

        /* ===== COLONNES ===== */
        .ft-cols {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.4fr;
          gap: 48px;
          padding: 3rem 0;
        }

        .ft-col-title {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #2E7D32;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ft-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(46, 125, 50, 0.15);
        }

        .ft-col-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin-bottom: 22px;
        }

        /* Social links avec images */
        .ft-socials {
          display: flex;
          gap: 12px;
        }

        .ft-social-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.2s ease;
          display: block;
        }

        .ft-social-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.2s ease;
        }

        .ft-social-btn:hover .ft-social-img {
          transform: scale(1.1);
        }

        .ft-social-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        /* Nav links */
        .ft-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ft-link-btn,
        .ft-link-a {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 6px 0;
          font-size: 13.5px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.15s, padding-left 0.15s;
          text-align: left;
          width: 100%;
        }

        .ft-link-btn::before,
        .ft-link-a::before {
          content: '';
          display: block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(46, 125, 50, 0.3);
          flex-shrink: 0;
          transition: background 0.15s, transform 0.15s;
        }

        .ft-link-btn:hover,
        .ft-link-a:hover {
          color: #fff;
          padding-left: 4px;
        }

        .ft-link-btn:hover::before,
        .ft-link-a:hover::before {
          background: #2E7D32;
          transform: scale(1.4);
        }

        /* Contact items */
        .ft-contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ft-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
        }

        .ft-contact-icon {
          width: 32px;
          height: 32px;
          background: rgba(46, 125, 50, 0.08);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .ft-contact-icon svg {
          width: 14px;
          height: 14px;
          stroke: #2E7D32;
          stroke-width: 1.8;
        }

        .ft-contact-label {
          font-size: 10px;
          font-weight: 600;
          color: rgba(46, 125, 50, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 3px;
          font-family: 'Outfit', sans-serif;
        }

        .ft-contact-val {
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          line-height: 1.55;
        }

        .ft-contact-link {
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          display: block;
          line-height: 1.55;
          transition: color 0.15s;
        }

        .ft-contact-link:hover {
          color: #2E7D32;
        }

        /* ===== BOTTOM BAR ===== */
        .ft-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 20px 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .ft-copyright {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
        }

        .ft-copyright strong {
          color: rgba(255,255,255,0.5);
          font-weight: 500;
        }

        .ft-legal {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
        }

        .ft-legal-link {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          padding: 3px 8px;
          border-radius: 5px;
          transition: color 0.15s, background 0.15s;
        }

        .ft-legal-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }

        .ft-legal-sep {
          color: rgba(255,255,255,0.12);
          font-size: 12px;
        }

        .ft-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(46, 125, 50, 0.08);
          border: 1px solid rgba(46, 125, 50, 0.18);
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 11px;
          color: rgba(46, 125, 50, 0.8);
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
        }

        .ft-badge-dot {
          width: 6px;
          height: 6px;
          background: #2E7D32;
          border-radius: 50%;
          animation: ft-pulse 2s ease-in-out infinite;
        }

        @keyframes ft-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .ft-cols {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 640px) {
          .ft-inner { padding: 3rem 1.25rem 0; }
          .ft-cols { grid-template-columns: 1fr; gap: 28px; }
          .ft-top { flex-direction: column; align-items: flex-start; }
          .ft-watermark { font-size: 64px; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-topbar" />
        <div className="ft-watermark">NATIONAL ENERGY</div>

        <div className="ft-inner">

          {/* ===== BANDE SUPÉRIEURE ===== */}
          <div className="ft-top">
            <div onClick={handleLogoClick} className="ft-brand">
              <img 
                src="/images/logo.png" 
                alt="National Energy" 
                className="ft-logo-img"
              />
              <div>
                <div className="ft-brand-name">National Energy</div>
                <div className="ft-brand-sub">Stations &amp; Solutions</div>
              </div>
            </div>

            <p className="ft-tagline">
              Leader dans la distribution de produits pétroliers au Cameroun, au service des particuliers et des professionnels depuis des années.
            </p>

            <Link to="/contact" className="ft-cta">
              Nous contacter
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* ===== COLONNES ===== */}
          <div className="ft-cols">

            {/* Colonne 1 — À propos */}
            <div>
              <div className="ft-col-title">À propos</div>
              <p className="ft-col-desc">
                National Energy s'engage à fournir des produits pétroliers de qualité à travers un réseau de stations modernes au Cameroun. Notre mission : énergie fiable, prix transparents, service d'excellence.
              </p>
              <div className="ft-socials">
                {socialLinks.map((s) => (
                  <a 
                    key={s.label} 
                    href={s.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ft-social-btn" 
                    aria-label={s.label}
                  >
                    <img 
                      src={s.imgSrc} 
                      alt={s.imgAlt} 
                      className="ft-social-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = '#2E7D32';
                        e.target.parentElement.style.display = 'flex';
                        e.target.parentElement.style.alignItems = 'center';
                        e.target.parentElement.style.justifyContent = 'center';
                        e.target.parentElement.innerHTML = s.label.charAt(0);
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Colonne 2 — Navigation */}
            <div>
              <div className="ft-col-title">Navigation</div>
              <ul className="ft-links">
                {navLinks.map((l) =>
                  l.anchor ? (
                    <li key={l.label}>
                      <button className="ft-link-btn" onClick={(e) => handleAnchorClick(e, l.href)}>
                        {l.label}
                      </button>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link to={l.href} className="ft-link-a">{l.label}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Colonne 3 — Services */}
            <div>
              <div className="ft-col-title">Services</div>
              <ul className="ft-links">
                {serviceLinks.map((l) =>
                  l.anchor ? (
                    <li key={l.label}>
                      <button className="ft-link-btn" onClick={(e) => handleAnchorClick(e, l.href)}>
                        {l.label}
                      </button>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link to={l.href} className="ft-link-a">{l.label}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Colonne 4 — Contact */}
            <div>
              <div className="ft-col-title">Contact</div>
              <div className="ft-contact-list">

                <div className="ft-contact-item">
                  <div className="ft-contact-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="ft-contact-label">Téléphone</div>
                    {contactInfo.telephone.map((tel) => (
                      <a key={tel} href={`tel:${tel.replace(/\s/g, "")}`} className="ft-contact-link">{tel}</a>
                    ))}
                  </div>
                </div>

                <div className="ft-contact-item">
                  <div className="ft-contact-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="ft-contact-label">Email</div>
                    {contactInfo.email.map((mail) => (
                      <a key={mail} href={`mailto:${mail}`} className="ft-contact-link">{mail}</a>
                    ))}
                  </div>
                </div>

                <div className="ft-contact-item">
                  <div className="ft-contact-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="ft-contact-label">Adresse</div>
                    <div className="ft-contact-val">{contactInfo.adresse}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== BARRE DU BAS ===== */}
          <div className="ft-bottom">
            <div className="ft-copyright">
              © {currentYear} <strong>National Energy</strong>. Tous droits réservés.
            </div>

            <div className="ft-badge">
              <span className="ft-badge-dot" />
              Yaoundé, Cameroun
            </div>

            <div className="ft-legal">
              <Link to="/mentions-legales" className="ft-legal-link">Mentions légales</Link>
              <span className="ft-legal-sep">·</span>
              <Link to="/politique-confidentialite" className="ft-legal-link">Politique de confidentialité</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;