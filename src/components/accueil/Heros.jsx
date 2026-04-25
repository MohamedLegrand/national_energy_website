// src/components/accueil/Heros.jsx
const Heros = () => {
  const scrollToProduits = () => {
    document.querySelector("#produits")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#stations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500&display=swap');

        .hero-root {
          background: #ffffff;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        /* Motifs géométriques décoratifs - VERT CHARTE */
        .hero-bg-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(46, 125, 50, 0.12);
          pointer-events: none;
        }

        .hero-bg-ring-1 {
          width: 600px; height: 600px;
          top: -200px; right: -150px;
        }

        .hero-bg-ring-2 {
          width: 400px; height: 400px;
          top: -80px; right: 30px;
          border-color: rgba(46, 125, 50, 0.07);
        }

        .hero-bg-ring-3 {
          width: 900px; height: 900px;
          bottom: -400px; left: -300px;
          border-color: rgba(46, 125, 50, 0.04);
        }

        /* Blob vert top-right */
        .hero-blob {
          position: absolute;
          top: -80px;
          right: -80px;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(46, 125, 50, 0.08) 0%, transparent 70%);
          pointer-events: none;
          border-radius: 50%;
        }

        /* Accent vertical gauche */
        .hero-left-accent {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, transparent, #2E7D32, transparent);
        }

        /* Grid layout */
        .hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 6rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        /* ===== COLONNE TEXTE ===== */
        .hero-text {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Badge supérieur */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #E8F5E9;
          border: 1px solid #A5D6A7;
          border-radius: 100px;
          padding: 6px 14px;
          width: fit-content;
          margin-bottom: 24px;
        }

        .hero-badge-dot {
          width: 7px;
          height: 7px;
          background: #2E7D32;
          border-radius: 50%;
          animation: hero-pulse 2.2s ease-in-out infinite;
        }

        .hero-badge-text {
          font-family: 'Outfit', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #1B5E20;
          text-transform: uppercase;
          letter-spacing: 0.09em;
        }

        @keyframes hero-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        /* Titre principal */
        .hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.4rem, 4.5vw, 4rem);
          font-weight: 900;
          color: #1a2e1a;
          line-height: 1.08;
          letter-spacing: -0.035em;
          margin-bottom: 20px;
        }

        .hero-title-accent {
          color: #2E7D32;
          position: relative;
          display: inline-block;
        }

        /* Soulignement vert sous le mot accentué */
        .hero-title-accent::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 100%;
          height: 5px;
          background: #F57C00;
          border-radius: 3px;
          opacity: 0.6;
        }

        .hero-title-green {
          color: #2E7D32;
        }

        /* Paragraphe */
        .hero-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 17px;
          color: #6B7280;
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 440px;
        }

        /* Stats inline */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 0;
          margin-bottom: 40px;
        }

        .hero-stat {
          text-align: center;
          padding: 0 24px;
          border-right: 1px solid #E5E7EB;
        }

        .hero-stat:first-child {
          padding-left: 0;
        }

        .hero-stat:last-child {
          border-right: none;
        }

        .hero-stat-val {
          font-family: 'Outfit', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: #2E7D32;
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .hero-stat-label {
          font-size: 11.5px;
          color: #9CA3AF;
          font-weight: 500;
          margin-top: 4px;
          white-space: nowrap;
        }

        /* Boutons */
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 11px;
          background: #2E7D32;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 14.5px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: -0.01em;
        }

        .hero-btn-primary:hover {
          background: #1B5E20;
          transform: translateY(-1px);
        }

        .hero-btn-primary svg {
          width: 16px; height: 16px;
          transition: transform 0.2s;
        }

        .hero-btn-primary:hover svg {
          transform: translateX(3px);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 11px;
          background: transparent;
          color: #374151;
          font-family: 'Outfit', sans-serif;
          font-size: 14.5px;
          font-weight: 600;
          border: 1.5px solid #E5E7EB;
          cursor: pointer;
          transition: border-color 0.15s, color 0.15s, background 0.15s;
          letter-spacing: -0.01em;
        }

        .hero-btn-secondary:hover {
          border-color: #F57C00;
          color: #F57C00;
          background: #FFF3E0;
        }

        .hero-btn-secondary svg {
          width: 16px; height: 16px;
        }

        /* ===== COLONNE IMAGE ===== */
        .hero-visual {
          position: relative;
        }

        /* Cadre principal de l'image */
        .hero-img-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(46, 125, 50, 0.06),
            0 24px 64px rgba(46, 125, 50, 0.14);
        }

        .hero-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* Overlay léger en bas de l'image */
        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 60%,
            rgba(46, 125, 50, 0.5) 100%
          );
        }

        /* Badge flottant sur l'image */
        .hero-img-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(8px);
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
        }

        .hero-img-badge-icon {
          width: 36px; height: 36px;
          background: #E8F5E9;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-img-badge-icon svg {
          width: 17px; height: 17px;
          stroke: #2E7D32;
        }

        .hero-img-badge-val {
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          font-weight: 800;
          color: #2E7D32;
          line-height: 1;
        }

        .hero-img-badge-label {
          font-size: 11px;
          color: #9CA3AF;
          font-weight: 500;
          margin-top: 2px;
        }

        /* Carte flottante top-right */
        .hero-float-card {
          position: absolute;
          top: -16px;
          right: -20px;
          background: #F57C00;
          border-radius: 14px;
          padding: 16px 20px;
          box-shadow: 0 8px 32px rgba(245, 124, 0, 0.25);
          min-width: 160px;
        }

        .hero-float-card-label {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 6px;
        }

        .hero-float-card-val {
          font-family: 'Outfit', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .hero-float-card-sub {
          font-size: 11px;
          color: rgba(255,255,255,0.7);
          margin-top: 4px;
        }

        /* Pastilles décoratives */
        .hero-dot-grid {
          position: absolute;
          bottom: -20px;
          left: -24px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
          opacity: 0.25;
        }

        .hero-dot {
          width: 5px;
          height: 5px;
          background: #2E7D32;
          border-radius: 50%;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 5rem 2rem;
          }
          .hero-text { align-items: center; text-align: center; }
          .hero-badge { margin-left: auto; margin-right: auto; }
          .hero-desc { max-width: 560px; margin-left: auto; margin-right: auto; }
          .hero-stats { justify-content: center; }
          .hero-actions { justify-content: center; }
          .hero-float-card { top: -12px; right: -10px; }
          .hero-dot-grid { left: -10px; }
        }

        @media (max-width: 640px) {
          .hero-inner { padding: 4rem 1.25rem; }
          .hero-img { height: 300px; }
          .hero-float-card { display: none; }
          .hero-stats { gap: 0; }
          .hero-stat { padding: 0 14px; }
          .hero-stat-val { font-size: 20px; }
          .hero-left-accent { display: none; }
        }
      `}</style>

      <section id="accueil" className="hero-root scroll-mt-20">
        {/* Décors de fond */}
        <div className="hero-left-accent" />
        <div className="hero-blob" />
        <div className="hero-bg-ring hero-bg-ring-1" />
        <div className="hero-bg-ring hero-bg-ring-2" />
        <div className="hero-bg-ring hero-bg-ring-3" />

        <div className="hero-inner">

          {/* ===== TEXTE ===== */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">Cameroun · Yaoundé · Odza</span>
            </div>

            <h1 className="hero-title">
              L'énergie qui fait{" "}
              <span className="hero-title-accent">avancer</span>
              <br />
              le{" "}
              <span className="hero-title-green">Cameroun.</span>
            </h1>

            <p className="hero-desc">
              Leader dans la distribution de produits pétroliers, National Energy met la qualité, la transparence et la fiabilité au cœur de chaque litre distribué.
            </p>

            {/* Statistiques */}
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-val">15+</div>
                <div className="hero-stat-label">Années d'expérience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-val">50+</div>
                <div className="hero-stat-label">Stations actives</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-val">24h</div>
                <div className="hero-stat-label">Service continu</div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="hero-actions">
              <button className="hero-btn-primary" onClick={scrollToProduits}>
                Découvrir nos produits
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="hero-btn-secondary" onClick={scrollToContact}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Trouver une station
              </button>
            </div>
          </div>

          {/* ===== VISUEL ===== */}
          <div className="hero-visual">

            {/* Grille de points décorative */}
            <div className="hero-dot-grid">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="hero-dot" />
              ))}
            </div>

            {/* Carte flottante haut-droite - ORANGE CHARTE */}
            <div className="hero-float-card">
              <div className="hero-float-card-label">Prix du jour</div>
              <div className="hero-float-card-val">850 F</div>
              <div className="hero-float-card-sub">FCFA / litre · Super</div>
            </div>

            {/* Image principale */}
            <div className="hero-img-wrap">
              <img
                src="/images/heros/station.jpg"
                alt="Station National Energy"
                className="hero-img"
              />
              <div className="hero-img-overlay" />

              {/* Badge flottant sur l'image */}
              <div className="hero-img-badge">
                <div className="hero-img-badge-icon">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="hero-img-badge-val">Qualité certifiée</div>
                  <div className="hero-img-badge-label">Produits contrôlés & conformes</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Heros;