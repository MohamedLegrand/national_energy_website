// src/components/accueil/Heros.jsx
import { useState } from "react";

const Heros = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "/images/heros/station.jpeg",
      alt: "Station service National Energy",
      titleHTML: (
        <>
          L'énergie qui fait <span className="hero-title-accent">avancer</span>
          <br />
          le <span className="hero-title-green">Cameroun.</span>
        </>
      ),
      desc: (
        <>
          Nos stations National Energy sont conçues pour offrir une expérience de qualité
          supérieure. Modernes, bien équipées et ouvertes <strong>24h/24</strong>, elles
          vous accueillent avec des carburants certifiés — Super, Gazole, Pétrole — et un
          personnel formé pour vous servir avec efficacité et courtoisie.
        </>
      ),
   
    },
    {
      src: "/images/heros/lavage.jpeg",
      alt: "Service lavage et graissage National Energy",
      titleHTML: (
        <>
          Lavage & Graissage <span className="hero-title-accent">professionnel</span>
          <br />
          pour votre <span className="hero-title-green">véhicule.</span>
        </>
      ),
      desc: (
        <>
          Offrez à votre véhicule un soin complet avec notre service de{" "}
          <strong>lavage haute pression</strong> et de{" "}
          <strong>graissage professionnel</strong>. Nos techniciens qualifiés prennent en
          charge la lubrification des pièces mécaniques, l'entretien du châssis et le
          nettoyage intégral — intérieur comme extérieur.
        </>
      ),
     
    },
    {
      src: "/images/heros/carburant.jpeg",
      alt: "Distribution de carburant National Energy",
      titleHTML: (
        <>
          Distribution de <span className="hero-title-accent">carburant</span>
          <br />
          de <span className="hero-title-green">qualité.</span>
        </>
      ),
      desc: (
        <>
          Super, Gazole, Pétrole et lubrifiants disponibles toute l'année dans toutes nos
          stations. National Energy garantit des carburants{" "}
          <strong>certifiés et traçables</strong>, distribués avec des équipements de
          précision pour assurer un dosage exact et une sécurité maximale à chaque
          ravitaillement.
        </>
      ),
      badgeTitle: "Distribution carburant",
      badgeLabel: "Super · Gazole · Pétrole · Lubrifiants",
      floatCardLabel: "Disponible",
      floatCardVal: "365 j",
      floatCardSub: "Toute l'année · Toutes nos stations",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollToProduits = () => {
    document.querySelector("#produits")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#stations")?.scrollIntoView({ behavior: "smooth" });
  };

  const current = images[currentImageIndex];

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

        .hero-bg-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(46, 125, 50, 0.12);
          pointer-events: none;
        }
        .hero-bg-ring-1 { width:600px;height:600px;top:-200px;right:-150px; }
        .hero-bg-ring-2 { width:400px;height:400px;top:-80px;right:30px;border-color:rgba(46,125,50,0.07); }
        .hero-bg-ring-3 { width:900px;height:900px;bottom:-400px;left:-300px;border-color:rgba(46,125,50,0.04); }

        .hero-blob {
          position: absolute;
          top: -80px; right: -80px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(46,125,50,0.08) 0%, transparent 70%);
          pointer-events: none;
          border-radius: 50%;
        }

        .hero-left-accent {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, transparent, #2E7D32, transparent);
        }

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

        /* ===== TEXTE ===== */
        .hero-text { display:flex; flex-direction:column; gap:0; }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: #E8F5E9; border: 1px solid #A5D6A7;
          border-radius: 100px; padding: 6px 14px;
          width: fit-content; margin-bottom: 24px;
        }
        .hero-badge-dot {
          width:7px; height:7px; background:#2E7D32; border-radius:50%;
          animation: hero-pulse 2.2s ease-in-out infinite;
        }
        .hero-badge-text {
          font-family:'Outfit',sans-serif; font-size:11.5px; font-weight:600;
          color:#1B5E20; text-transform:uppercase; letter-spacing:0.09em;
        }
        @keyframes hero-pulse {
          0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)}
        }

        .hero-title {
          font-family:'Outfit',sans-serif;
          font-size: clamp(2.4rem, 4.5vw, 4rem);
          font-weight: 900; color: #1a2e1a;
          line-height: 1.08; letter-spacing: -0.035em;
          margin-bottom: 20px;
          transition: opacity 0.3s ease;
        }
        .hero-title.fading { opacity: 0; }

        .hero-title-accent {
          color: #2E7D32; position: relative; display: inline-block;
        }
        .hero-title-accent::after {
          content:''; position:absolute; left:0; bottom:2px;
          width:100%; height:5px; background:#F57C00; border-radius:3px; opacity:0.6;
        }
        .hero-title-green { color: #2E7D32; }

        .hero-desc {
          font-family:'DM Sans',sans-serif; font-size:17px; color:#6B7280;
          line-height:1.7; margin-bottom:36px; max-width:440px;
          transition: opacity 0.3s ease;
        }
        .hero-desc.fading { opacity: 0; }

        .hero-stats {
          display:flex; align-items:center; gap:0;
          margin-bottom:40px; flex-wrap:wrap;
        }
        .hero-stat { text-align:center; padding:0 24px; border-right:1px solid #E5E7EB; }
        .hero-stat:first-child { padding-left:0; }
        .hero-stat:last-child { border-right:none; }
        .hero-stat-val {
          font-family:'Outfit',sans-serif; font-size:26px; font-weight:800;
          color:#2E7D32; letter-spacing:-0.03em; line-height:1;
        }
        .hero-stat-label { font-size:11.5px; color:#9CA3AF; font-weight:500; margin-top:4px; white-space:nowrap; }

        .hero-actions { display:flex; align-items:center; gap:14px; flex-wrap:wrap; }

        .hero-btn-primary {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 28px; border-radius:11px; background:#2E7D32; color:#fff;
          font-family:'Outfit',sans-serif; font-size:14.5px; font-weight:600;
          border:none; cursor:pointer; transition:background 0.2s,transform 0.15s; letter-spacing:-0.01em;
        }
        .hero-btn-primary:hover { background:#1B5E20; transform:translateY(-1px); }
        .hero-btn-primary svg { width:16px;height:16px;transition:transform 0.2s; }
        .hero-btn-primary:hover svg { transform:translateX(3px); }

        .hero-btn-secondary {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 24px; border-radius:11px; background:transparent; color:#374151;
          font-family:'Outfit',sans-serif; font-size:14.5px; font-weight:600;
          border:1.5px solid #E5E7EB; cursor:pointer;
          transition:border-color 0.15s,color 0.15s,background 0.15s; letter-spacing:-0.01em;
        }
        .hero-btn-secondary:hover { border-color:#F57C00; color:#F57C00; background:#FFF3E0; }
        .hero-btn-secondary svg { width:16px;height:16px; }

        /* ===== VISUEL ===== */
        .hero-visual { position:relative; }

        /* Le wrapper principal N'a PAS overflow:hidden pour que les flèches dépassent */
        .hero-img-wrap {
          position: relative;
          border-radius: 24px;
          overflow: visible;
          box-shadow:
            0 0 0 1px rgba(46,125,50,0.06),
            0 24px 64px rgba(46,125,50,0.14);
        }

        /* La div interne clip l'image */
        .hero-img-inner {
          border-radius: 24px;
          overflow: hidden;
          position: relative;
        }

        .hero-img {
          width:100%; height:520px; object-fit:cover; object-position:center; display:block;
          transition: opacity 0.35s ease;
        }
        .hero-img.fading { opacity: 0; }

        .hero-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to bottom,transparent 60%,rgba(46,125,50,0.5) 100%);
          pointer-events:none;
        }

        /* Flèches positionnées aux extrémités absolues du wrapper (overflow:visible) */
        .hero-arrows {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          pointer-events: none;
          z-index: 20;
        }

        .hero-arrow {
          width:48px; height:48px; border-radius:50%;
          background:rgba(255,255,255,0.97); border:none; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:all 0.2s ease; pointer-events:auto;
          box-shadow:0 2px 12px rgba(0,0,0,0.2); color:#2E7D32; flex-shrink:0;
        }
        .hero-arrow-left  { transform: translateX(-50%); }
        .hero-arrow-right { transform: translateX(50%); }
        .hero-arrow:hover { background:#2E7D32; color:white; }
        .hero-arrow svg { width:24px;height:24px;stroke:currentColor;stroke-width:2.5; }

        .hero-dots {
          position:absolute; bottom:20px; left:0; right:0;
          display:flex; justify-content:center; gap:10px; z-index:10;
        }
        .hero-dot-btn {
          width:8px; height:8px; border-radius:50%;
          background:rgba(255,255,255,0.6); border:none; cursor:pointer;
          transition:all 0.2s ease; padding:0;
        }
        .hero-dot-btn.active { background:#F57C00; transform:scale(1.2); width:24px; border-radius:4px; }
        .hero-dot-btn:hover { background:#2E7D32; }

        .hero-img-badge {
          position:absolute; bottom:60px; left:20px;
          background:rgba(255,255,255,0.96); backdrop-filter:blur(8px);
          border-radius:12px; padding:12px 16px;
          display:flex; align-items:center; gap:10px;
          box-shadow:0 4px 20px rgba(0,0,0,0.12); z-index:10;
          max-width:calc(100% - 40px);
          transition: opacity 0.3s ease;
        }
        .hero-img-badge.fading { opacity: 0; }
        .hero-img-badge-icon {
          width:36px; height:36px; background:#E8F5E9; border-radius:9px;
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
        }
        .hero-img-badge-icon svg { width:17px;height:17px;stroke:#2E7D32; }
        .hero-img-badge-val {
          font-family:'Outfit',sans-serif; font-size:14px; font-weight:800;
          color:#2E7D32; line-height:1.2;
        }
        .hero-img-badge-label { font-size:10px;color:#6B7280;font-weight:500;margin-top:2px;line-height:1.3; }

        .hero-float-card {
          position:absolute; top:-16px; right:-20px; background:#F57C00;
          border-radius:14px; padding:16px 20px;
          box-shadow:0 8px 32px rgba(245,124,0,0.25); min-width:160px; z-index:10;
          transition: opacity 0.3s ease;
        }
        .hero-float-card.fading { opacity: 0; }
        .hero-float-card-label {
          font-family:'Outfit',sans-serif; font-size:10px; font-weight:600;
          color:rgba(255,255,255,0.8); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:6px;
        }
        .hero-float-card-val {
          font-family:'Outfit',sans-serif; font-size:22px; font-weight:800;
          color:#fff; letter-spacing:-0.03em; line-height:1;
        }
        .hero-float-card-sub { font-size:11px;color:rgba(255,255,255,0.7);margin-top:4px; }

        .hero-float-card-bottom {
          position:absolute; bottom:-16px; left:-20px; background:#1976D2;
          border-radius:14px; padding:12px 18px;
          box-shadow:0 8px 32px rgba(25,118,210,0.25);
          display:flex; align-items:center; gap:10px; z-index:10;
        }
        .hero-float-card-bottom-icon {
          width:32px;height:32px;background:rgba(255,255,255,0.2);
          border-radius:8px;display:flex;align-items:center;justify-content:center;
        }
        .hero-float-card-bottom-icon svg { width:16px;height:16px;stroke:#fff; }
        .hero-float-card-bottom-content { color:#fff; }
        .hero-float-card-bottom-value { font-family:'Outfit',sans-serif;font-size:13px;font-weight:700;line-height:1; }
        .hero-float-card-bottom-label { font-size:9px;opacity:0.8; }

        .hero-dot-grid {
          position:absolute; bottom:-20px; left:-24px;
          display:grid; grid-template-columns:repeat(5,1fr);
          gap:8px; opacity:0.25; pointer-events:none;
        }
        .hero-dot { width:5px;height:5px;background:#2E7D32;border-radius:50%; }

        /* ===== RESPONSIVE ===== */
        @media (max-width:1024px) {
          .hero-inner { grid-template-columns:1fr; gap:48px; padding:5rem 2rem; }
          .hero-text { align-items:center; text-align:center; }
          .hero-badge { margin-left:auto;margin-right:auto; }
          .hero-desc { max-width:560px;margin-left:auto;margin-right:auto; }
          .hero-stats { justify-content:center; }
          .hero-actions { justify-content:center; }
          .hero-float-card { top:-12px;right:-10px; }
          .hero-float-card-bottom { left:-10px;bottom:-10px; }
          .hero-dot-grid { left:-10px; }
        }

        @media (max-width:768px) {
          .hero-arrow { width:40px;height:40px; }
          .hero-arrow svg { width:20px;height:20px; }
          .hero-img-badge { bottom:70px;padding:8px 12px; }
          .hero-img-badge-val { font-size:12px; }
          .hero-img-badge-label { font-size:9px; }
        }

        @media (max-width:640px) {
          .hero-inner { padding:4rem 1.25rem; }
          .hero-img { height:300px; }
          .hero-float-card { display:none; }
          .hero-float-card-bottom { display:none; }
          .hero-stats { gap:0; }
          .hero-stat { padding:0 14px; }
          .hero-stat-val { font-size:20px; }
          .hero-left-accent { display:none; }
          .hero-arrow { width:32px;height:32px; }
          .hero-arrow svg { width:16px;height:16px; }
          .hero-dots { bottom:10px; }
          .hero-img-badge { display:none; }
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
              {current.titleHTML}
            </h1>

            <p className="hero-desc">
              {current.desc}
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

            {/* Boutons */}
            <div className="hero-actions">
              <button className="hero-btn-primary" onClick={scrollToProduits}>
                Découvrir nos produits
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="hero-btn-secondary" onClick={scrollToContact}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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

            {/* Carte flottante haut-droite - ORANGE (change avec l'image) */}
            <div className="hero-float-card">
              <div className="hero-float-card-label">{current.floatCardLabel}</div>
              <div className="hero-float-card-val">{current.floatCardVal}</div>
              <div className="hero-float-card-sub">{current.floatCardSub}</div>
            </div>

            {/* Carte flottante bas-gauche - BLEU fixe */}
            <div className="hero-float-card-bottom">
              <div className="hero-float-card-bottom-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                </svg>
              </div>
              <div className="hero-float-card-bottom-content">
                <div className="hero-float-card-bottom-value">Lavage & Graissage</div>
                <div className="hero-float-card-bottom-label">Service complet dans nos stations</div>
              </div>
            </div>

            {/* Image + carrousel */}
            <div className="hero-img-wrap">

              {/* Flèches aux extrémités absolues — en dehors de hero-img-inner */}
              <div className="hero-arrows">
                <button onClick={prevImage} className="hero-arrow hero-arrow-left" aria-label="Image précédente">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button onClick={nextImage} className="hero-arrow hero-arrow-right" aria-label="Image suivante">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Div interne qui clip l'image */}
              <div className="hero-img-inner">
                <img
                  key={currentImageIndex}
                  src={current.src}
                  alt={current.alt}
                  className="hero-img"
                  onError={(e) => { e.target.src = "/images/heros/station.jpeg"; }}
                />
                <div className="hero-img-overlay" />

                {/* Dots indicateurs */}
                <div className="hero-dots">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`hero-dot-btn ${idx === currentImageIndex ? "active" : ""}`}
                      aria-label={`Aller à l'image ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Badge flottant sur l'image */}
                <div className="hero-img-badge">
                  <div className="hero-img-badge-icon">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="hero-img-badge-val">{current.badgeTitle}</div>
                    <div className="hero-img-badge-label">{current.badgeLabel}</div>
                  </div>
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