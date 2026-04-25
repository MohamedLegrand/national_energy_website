// src/components/accueil/Apropos.jsx
const Apropos = () => {
  return (
    <>
      <style>{`
        .apropos-root {
          background: #ffffff;
          position: relative;
          padding: 5rem 0;
          overflow: hidden;
        }

        .apropos-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        /* Section header */
        .apropos-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .apropos-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #E8F5E9;
          border: 1px solid #A5D6A7;
          border-radius: 100px;
          padding: 6px 14px;
          margin-bottom: 1.5rem;
        }

        .apropos-badge-dot {
          width: 7px;
          height: 7px;
          background: #2E7D32;
          border-radius: 50%;
          animation: apropos-pulse 2.2s ease-in-out infinite;
        }

        .apropos-badge-text {
          font-family: 'Outfit', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #1B5E20;
          text-transform: uppercase;
          letter-spacing: 0.09em;
        }

        @keyframes apropos-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .apropos-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 700;
          color: #1a2e1a;
          margin-bottom: 1rem;
        }

        .apropos-title span {
          color: #2E7D32;
        }

        .apropos-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: #6B7280;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Grille principale */
        .apropos-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        /* Colonne gauche - Texte */
        .apropos-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .apropos-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: #4B5563;
          line-height: 1.7;
        }

        .apropos-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .apropos-feature {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .apropos-feature-icon {
          width: 44px;
          height: 44px;
          background: #E8F5E9;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .apropos-feature-icon svg {
          width: 22px;
          height: 22px;
          stroke: #2E7D32;
          stroke-width: 1.8;
        }

        .apropos-feature-content h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #1a2e1a;
          margin-bottom: 0.25rem;
        }

        .apropos-feature-content p {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: #6B7280;
        }

        /* Bouton */
        .apropos-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 10px;
          background: #2E7D32;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          text-decoration: none;
          width: fit-content;
          margin-top: 0.5rem;
        }

        .apropos-btn:hover {
          background: #1B5E20;
          transform: translateY(-2px);
        }

        .apropos-btn svg {
          width: 16px;
          height: 16px;
          transition: transform 0.2s;
        }

        .apropos-btn:hover svg {
          transform: translateX(3px);
        }

        /* Colonne droite - Image */
        .apropos-image {
          position: relative;
        }

        .apropos-img-wrap {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 48px rgba(46, 125, 50, 0.12);
        }

        .apropos-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* Carte flottante */
        .apropos-card {
          position: absolute;
          bottom: -24px;
          left: -24px;
          background: #F57C00;
          border-radius: 16px;
          padding: 1rem 1.5rem;
          box-shadow: 0 8px 24px rgba(245, 124, 0, 0.25);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .apropos-card-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .apropos-card-icon svg {
          width: 20px;
          height: 20px;
          stroke: #fff;
        }

        .apropos-card-content {
          color: #fff;
        }

        .apropos-card-value {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1;
        }

        .apropos-card-label {
          font-size: 0.7rem;
          opacity: 0.8;
          font-family: 'DM Sans', sans-serif;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .apropos-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .apropos-text {
            order: 1;
          }
          .apropos-image {
            order: 0;
          }
          .apropos-card {
            bottom: -20px;
            left: 20px;
          }
        }

        @media (max-width: 640px) {
          .apropos-root {
            padding: 3rem 0;
          }
          .apropos-inner {
            padding: 0 1.25rem;
          }
          .apropos-img {
            height: 280px;
          }
          .apropos-card {
            padding: 0.75rem 1rem;
          }
          .apropos-card-value {
            font-size: 1rem;
          }
        }
      `}</style>

      <section className="apropos-root">
        <div className="apropos-inner">
          
          {/* En-tête */}
          <div className="apropos-header">
            <div className="apropos-badge">
              <span className="apropos-badge-dot" />
              <span className="apropos-badge-text">À propos de nous</span>
            </div>
            <h2 className="apropos-title">
              Leader dans la distribution de <span>produits pétroliers</span>
            </h2>
            <p className="apropos-subtitle">
              Découvrez qui nous sommes et ce qui fait notre force au Cameroun
            </p>
          </div>

          {/* Grille */}
          <div className="apropos-grid">
            
            {/* Colonne gauche - Texte */}
            <div className="apropos-text">
              <p className="apropos-desc">
                National Energy est une entreprise camerounaise spécialisée dans la distribution 
                de produits pétroliers de haute qualité. Notre siège social est situé à Odza, 
                montée collège Adventiste, au cœur de Yaoundé.
              </p>
              
              <p className="apropos-desc">
                Avec plus de 15 ans d'expérience dans le secteur énergétique, nous desservons 
                l'ensemble du territoire camerounais à travers un réseau de stations modernes 
                et un service logistique performant.
              </p>

              {/* Points forts */}
              <div className="apropos-features">
                <div className="apropos-feature">
                  <div className="apropos-feature-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="apropos-feature-content">
                    <h4>Qualité certifiée</h4>
                    <p>Produits conformes aux normes internationales</p>
                  </div>
                </div>

                <div className="apropos-feature">
                  <div className="apropos-feature-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="apropos-feature-content">
                    <h4>Réactivité</h4>
                    <p>Livraison rapide sur tout le territoire</p>
                  </div>
                </div>

                <div className="apropos-feature">
                  <div className="apropos-feature-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="apropos-feature-content">
                    <h4>Réseau étendu</h4>
                    <p>Des stations partout au Cameroun</p>
                  </div>
                </div>
              </div>

              <button 
                className="apropos-btn"
                onClick={() => {
                  document.querySelector("#stations")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Découvrir nos stations
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Colonne droite - Image */}
            <div className="apropos-image">
              <div className="apropos-img-wrap">
                <img 
                  src="/images/heros/station.jpg" 
                  alt="Station National Energy Cameroun"
                  className="apropos-img"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1598620617137-2ab990cadd5a?w=800";
                  }}
                />
              </div>

              {/* Carte flottante orange */}
              <div className="apropos-card">
                <div className="apropos-card-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="apropos-card-content">
                  <div className="apropos-card-value">24h/24 & 7j/7</div>
                  <div className="apropos-card-label">Service continu disponible</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Apropos;