// src/components/accueil/Produits.jsx
const Produits = () => {
  const servicesList = [
    { 
      nom: "Distribution de produits pétroliers", 
      description: "Nous assurons la distribution de carburants et produits pétroliers de haute qualité à travers tout le Cameroun. Super sans plomb, Gasoil, Pétrole lampant, Gaz domestique et Lubrifiants disponibles dans nos stations.",
      image: "/images/heros/produit.png",
      caracteristiques: ["Carburants premium", "Livraison rapide", "Prix compétitifs"]
    },
    { 
      nom: "Graissage professionnel", 
      description: "Service de graissage complet pour tous types de véhicules. Nous utilisons des lubrifiants de haute qualité pour garantir la longévité et les performances de votre moteur.",
      image: "/images/heros/graissage.png",
      caracteristiques: ["Lubrifiants haut de gamme", "Protection moteur", "Longue durée"]
    },
    { 
      nom: "Laverie automatique", 
      description: "Lavage complet et soigné de votre véhicule. Nettoyage extérieur, intérieur, polish et finitions impeccables. Un service rapide et de qualité.",
      image: "/images/heros/lavage.jpeg",
      caracteristiques: ["Lavage haute pression", "Nettoyage intérieur", "Finition professionnelle"]
    },
    { 
      nom: "KEED MARKET", 
      description: "Bien plus qu'une station-service ! Notre boutique KEED MARKET vous propose une large gamme de produits du quotidien : épicerie fine, boissons fraîches et gazeuses, snacks, produits d'entretien, accessoires auto, huiles de cuisine et bien plus encore. Faites vos courses pendant que vous remplissez votre réservoir !",
      image: "/images/produits/market.jpg",
      caracteristiques: ["Épicerie variée", "Boissons fraîches", "Accessoires auto", "Paiement CB/Cash"]
    },
    { 
      nom: "Points consommateurs", 
      description: "Notre concept innovant : une mini-station installée directement chez vous ou dans votre entreprise ! Pompe à carburant + cuve enterrée ou aérienne, installée par nos experts. Idéal pour les particuliers fortunés, les grandes entreprises, les ministères, les flottes de véhicules, les hôtels et les collectivités. Bénéficiez d'un ravitaillement privé, sécurisé et sans déplacement.",
      image: "/images/produits/point.jpeg",
      caracteristiques: ["Installation clé en main", "Cuve + Pompe", "Ravitaillement privé", "Gestion personnalisée"]
    }
  ];

  const produitsList = [
    { 
      nom: "Super sans plomb", 
      description: "Carburant premium pour véhicules essence. Haute performance et respect des moteurs. Idéal pour une conduite souple et économique.",
      image: "/images/produits/super.jpg",
      caracteristiques: ["Indice d'octane 95", "Faible émission", "Performances optimales"]
    },
    { 
      nom: "Gasoil", 
      description: "Gazole haute qualité pour moteurs diesel. Excellente combustion et protection moteur assurées. Puissance et fiabilité au rendez-vous.",
      image: "/images/produits/gasoil.jpg",
      caracteristiques: ["Indice de cétane 55", "Anti-mousse", "Protection injection"]
    },
    { 
      nom: "Pétrole lampant", 
      description: "Pétrole lampant pour usage domestique et éclairage. Propre, efficace et économique pour vos besoins quotidiens.",
      image: "/images/produits/petrole.jpg",
      caracteristiques: ["Faible teneur en soufre", "Combustion propre", "Usage domestique"]
    },
    { 
      nom: "Lubrifiants", 
      description: "Huiles moteur et graisses industrielles de haute qualité pour tous types d'équipements. Protection optimale et longévité assurée.",
      image: "/images/produits/lubrifiant.jpeg",
      caracteristiques: ["Multi-grade", "Protection anti-usure", "Longue durée"]
    },
    { 
      nom: "Gaz domestique", 
      description: "Gaz de pétrole liquéfié (GPL) pour usage domestique et professionnel. Bouteille rechargeable de 12kg, livraison à domicile disponible.",
      image: "/images/produits/gaz.jpg",
      caracteristiques: ["Bouteille 12kg", "Haute pureté", "Livraison à domicile"]
    }
  ];

  return (
    <>
      <style>{`
        .produits-root {
          padding: 5rem 0;
          background: #ffffff;
          position: relative;
        }

        .produits-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(135deg, #E8F5E9 0%, #ffffff 100%);
          pointer-events: none;
        }

        .produits-header {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .produits-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #E8F5E9;
          border: 1px solid #A5D6A7;
          border-radius: 100px;
          padding: 6px 14px;
          margin-bottom: 1.5rem;
        }

        .produits-badge-dot {
          width: 7px;
          height: 7px;
          background: #2E7D32;
          border-radius: 50%;
          animation: pulse 2.2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .produits-badge-text {
          font-family: 'Outfit', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #1B5E20;
          text-transform: uppercase;
          letter-spacing: 0.09em;
        }

        .produits-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 700;
          color: #1a2e1a;
        }

        .produits-title span {
          color: #2E7D32;
        }

        .produits-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: #6B7280;
          max-width: 600px;
          margin: 0.5rem auto 0;
        }

        .section-divider {
          text-align: center;
          margin: 4rem 0 2rem;
          position: relative;
        }

        .section-divider span {
          background: #fff;
          padding: 0 1.5rem;
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #2E7D32;
          position: relative;
          z-index: 1;
        }

        .section-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #A5D6A7, #2E7D32, #A5D6A7, transparent);
          z-index: 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
        }

        .produits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
        }

        .service-card, .produit-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid rgba(46, 125, 50, 0.1);
        }

        .service-card:hover, .produit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(46, 125, 50, 0.15);
          border-color: rgba(46, 125, 50, 0.2);
        }

        .service-img-wrapper, .produit-img-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #f5f5f5;
        }

        .produit-img-wrapper {
          height: 180px;
        }

        .service-img, .produit-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-img,
        .produit-card:hover .produit-img {
          transform: scale(1.08);
        }

        .service-icon {
          position: absolute;
          bottom: -20px;
          left: 20px;
          width: 50px;
          height: 50px;
          background: #F57C00;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(245, 124, 0, 0.3);
        }

        .service-icon svg {
          width: 28px;
          height: 28px;
          stroke: #fff;
          stroke-width: 1.8;
        }

        .produit-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #F57C00;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          font-family: 'Outfit', sans-serif;
        }

        .service-content, .produit-content {
          padding: 1.5rem 1.25rem 1.25rem;
        }

        .service-nom, .produit-nom {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #1a2e1a;
          margin-bottom: 0.35rem;
          line-height: 1.3;
        }

        .produit-nom {
          font-size: 1.1rem;
        }

        .produit-prix {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 900;
          color: #2E7D32;
          margin-bottom: 0.5rem;
        }

        .produit-prix span {
          font-size: 0.7rem;
          font-weight: 500;
          color: #6B7280;
        }

        .service-description, .produit-description {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: #6B7280;
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }

        .produit-description {
          font-size: 0.8rem;
        }

        .service-caracs, .produit-caracs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.5rem;
          padding-top: 0.75rem;
          border-top: 1px solid #E5E7EB;
        }

        .service-carac, .produit-carac {
          font-size: 0.7rem;
          background: #E8F5E9;
          color: #2E7D32;
          padding: 4px 10px;
          border-radius: 20px;
          font-weight: 600;
        }

        /* Style spécial pour KEED MARKET */
        .service-card.market-card .service-icon {
          background: #E65100;
        }

        .service-card.point-card .service-icon {
          background: #1565C0;
        }

        @media (max-width: 768px) {
          .produits-root {
            padding: 3rem 0;
          }
          .services-grid, .produits-grid {
            padding: 0 1rem;
            gap: 1.5rem;
          }
          .service-img-wrapper {
            height: 180px;
          }
          .produit-img-wrapper {
            height: 150px;
          }
          .service-icon {
            width: 42px;
            height: 42px;
            bottom: -16px;
            left: 16px;
          }
          .service-icon svg {
            width: 22px;
            height: 22px;
          }
          .service-nom {
            font-size: 1.1rem;
          }
          .produit-nom {
            font-size: 1rem;
          }
        }

        @media (max-width: 640px) {
          .services-grid, .produits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="produits" className="produits-root">
        <div className="produits-bg" />
        
        <div className="produits-header">
          <div className="produits-badge">
            <span className="produits-badge-dot" />
            <span className="produits-badge-text">Nos services</span>
          </div>
          <h2 className="produits-title">
            Ce que nous <span>proposons</span>
          </h2>
          <p className="produits-subtitle">
            Des services de qualité pour répondre à tous vos besoins
          </p>
        </div>

        {/* SECTION SERVICES */}
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className={`service-card ${service.nom === "KEED MARKET" ? "market-card" : ""} ${service.nom === "Points consommateurs" ? "point-card" : ""}`}>
              <div className="service-img-wrapper">
                <img 
                  src={service.image} 
                  alt={service.nom}
                  className="service-img"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400x300/e8f5e9/2e7d32?text=" + encodeURIComponent(service.nom);
                  }}
                />
                <div className="service-icon">
                  {index === 0 && (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      <path d="M9 12h6" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 13v8" />
                      <circle cx="7" cy="19" r="2" />
                      <circle cx="17" cy="19" r="2" />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M20 12V8H4v4M12 4v4M4 12v8h16v-8M8 16h8" />
                      <path d="M16 12v4M8 12v4" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-nom">{service.nom}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-caracs">
                  {service.caracteristiques.map((carac, i) => (
                    <span key={i} className="service-carac">{carac}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SÉPARATEUR */}
        <div className="section-divider">
          <span>Nos produits</span>
        </div>

        {/* SECTION PRODUITS */}
        <div className="produits-grid">
          {produitsList.map((produit, index) => (
            <div key={index} className="produit-card">
              <div className="produit-img-wrapper">
                <img 
                  src={produit.image} 
                  alt={produit.nom}
                  className="produit-img"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400x300/e8f5e9/2e7d32?text=" + encodeURIComponent(produit.nom);
                  }}
                />
              </div>
              <div className="produit-content">
                <h3 className="produit-nom">{produit.nom}</h3>
                <p className="produit-description">{produit.description}</p>
                <div className="produit-caracs">
                  {produit.caracteristiques.map((carac, i) => (
                    <span key={i} className="produit-carac">{carac}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Produits;