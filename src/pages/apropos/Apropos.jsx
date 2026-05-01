const Apropos = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Syne:wght@400;600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;1,400&display=swap');

        :root {
          --green-deep: #0D2B0F;
          --green-dark: #1B5E20;
          --green-mid: #2E7D32;
          --green-light: #4CAF50;
          --green-pale: #E8F5E9;
          --orange: #E65100;
          --orange-light: #FF6D00;
          --cream: #FAFAF7;
          --text-dark: #111A0F;
          --text-mid: #3D4A3C;
          --text-muted: #7A8A79;
          --border: rgba(46,125,50,0.12);
        }

        /* ─── RESET ─────────────────────────────────────── */
        .ap * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ─── HERO ───────────────────────────────────────── */
        .ap-hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--green-deep);
        }

        .ap-hero-bg {
          position: absolute;
          inset: 0;
          background: url('/images/propos.png') center center / cover no-repeat;
          transform-origin: center;
          animation: ap-zoom 18s ease-in-out infinite alternate;
        }

        @keyframes ap-zoom {
          from { transform: scale(1); }
          to   { transform: scale(1.07); }
        }

        .ap-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right, rgba(10,30,11,0.92) 0%, rgba(10,30,11,0.6) 55%, rgba(10,30,11,0.15) 100%),
            linear-gradient(to top, rgba(10,30,11,0.85) 0%, transparent 60%);
        }

        .ap-hero-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, transparent, var(--orange-light), transparent);
          z-index: 3;
        }

        .ap-hero-inner {
          position: relative;
          z-index: 4;
          max-width: 1280px;
          margin: 0 auto;
          padding: 6rem 3rem 5rem;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .ap-hero-left {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .ap-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
        }

        .ap-hero-tag-line {
          width: 32px;
          height: 2px;
          background: var(--orange-light);
        }

        .ap-hero-tag-text {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--orange-light);
        }

        .ap-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.12;
          letter-spacing: -0.01em;
        }

        .ap-hero-title em {
          font-style: normal;
          color: var(--orange-light);
          display: block;
        }

        .ap-hero-desc {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 1.05rem;
          color: rgba(255,255,255,0.72);
          line-height: 1.75;
          max-width: 480px;
          border-left: 2px solid rgba(255,255,255,0.15);
          padding-left: 1.25rem;
        }

        .ap-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--orange);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 14px 28px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          width: fit-content;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 4px 20px rgba(230,81,0,0.35);
        }

        .ap-hero-cta:hover {
          background: var(--orange-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255,109,0,0.45);
        }

        .ap-hero-cta svg { width: 18px; height: 18px; transition: transform 0.2s; }
        .ap-hero-cta:hover svg { transform: translateX(4px); }

        /* Right side — stats cards */
        .ap-hero-right {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-end;
        }

        .ap-stat-card {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: 1.5rem 2rem;
          width: 240px;
          transition: background 0.25s, transform 0.25s;
        }

        .ap-stat-card:hover {
          background: rgba(255,255,255,0.1);
          transform: translateX(-6px);
        }

        .ap-stat-card:nth-child(2) { width: 210px; }
        .ap-stat-card:nth-child(3) { width: 225px; }

        .ap-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 900;
          color: #fff;
          line-height: 1;
          margin-bottom: 0.3rem;
        }

        .ap-stat-value span {
          color: var(--orange-light);
        }

        .ap-stat-label {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Scroll indicator */
        .ap-hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 5;
          cursor: pointer;
        }

        .ap-hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.4));
          animation: ap-scrollline 1.8s ease-in-out infinite;
        }

        @keyframes ap-scrollline {
          0%, 100% { opacity: 0.3; height: 36px; }
          50% { opacity: 1; height: 52px; }
        }

        .ap-hero-scroll-text {
          font-family: 'Syne', sans-serif;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        /* ─── MAIN SECTION ───────────────────────────────── */
        .ap-main {
          background: var(--cream);
          padding: 7rem 0;
          position: relative;
          overflow: hidden;
        }

        .ap-main-watermark {
          position: absolute;
          top: -2rem;
          right: -1rem;
          font-family: 'Playfair Display', serif;
          font-size: clamp(8rem, 14vw, 16rem);
          font-weight: 900;
          color: rgba(46,125,50,0.04);
          pointer-events: none;
          line-height: 1;
          user-select: none;
          white-space: nowrap;
        }

        .ap-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 3rem;
          position: relative;
          z-index: 1;
        }

        .ap-section-label {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 4rem;
        }

        .ap-section-label-bar {
          width: 48px;
          height: 3px;
          background: var(--orange);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .ap-section-label-text {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--orange);
        }

        .ap-grid {
          display: grid;
          grid-template-columns: 55% 1fr;
          gap: 5rem;
          align-items: start;
        }

        .ap-left {}

        .ap-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 900;
          color: var(--text-dark);
          line-height: 1.2;
          margin-bottom: 2.5rem;
          letter-spacing: -0.02em;
        }

        .ap-heading span {
          color: var(--green-mid);
          font-style: italic;
        }

        .ap-manifesto {
          position: relative;
          background: var(--green-deep);
          border-radius: 20px;
          padding: 2.5rem;
          margin-bottom: 2.5rem;
          overflow: hidden;
        }

        .ap-manifesto::before {
          content: '"';
          position: absolute;
          top: -1rem;
          left: 1.5rem;
          font-family: 'Playfair Display', serif;
          font-size: 10rem;
          color: rgba(255,255,255,0.05);
          line-height: 1;
          pointer-events: none;
        }

        .ap-manifesto-accent {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(255,109,0,0.18) 0%, transparent 70%);
          border-radius: 50%;
        }

        .ap-manifesto-text {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 1.02rem;
          color: rgba(255,255,255,0.85);
          line-height: 1.85;
          position: relative;
          z-index: 1;
        }

        .ap-manifesto-sig {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 1.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          position: relative;
          z-index: 1;
        }

        .ap-manifesto-sig-line {
          width: 28px;
          height: 2px;
          background: var(--orange-light);
          flex-shrink: 0;
        }

        .ap-manifesto-sig-text {
          font-family: 'Syne', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--orange-light);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .ap-body-text {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 1rem;
          color: var(--text-mid);
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }

        .ap-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .ap-feature {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          background: #fff;
          border-radius: 14px;
          border: 1px solid var(--border);
          transition: box-shadow 0.25s, transform 0.25s;
        }

        .ap-feature:hover {
          box-shadow: 0 8px 24px rgba(46,125,50,0.09);
          transform: translateY(-3px);
        }

        .ap-feature-ico {
          width: 40px;
          height: 40px;
          background: var(--green-pale);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ap-feature-ico svg {
          width: 20px;
          height: 20px;
          stroke: var(--green-mid);
          stroke-width: 1.8;
          fill: none;
        }

        .ap-feature-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 4px;
        }

        .ap-feature-desc {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .ap-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--green-dark);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 15px 30px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 4px 18px rgba(27,94,32,0.3);
        }

        .ap-cta-btn:hover {
          background: var(--green-deep);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(27,94,32,0.4);
        }

        .ap-cta-btn svg { width: 16px; height: 16px; transition: transform 0.2s; }
        .ap-cta-btn:hover svg { transform: translateX(4px); }

        /* ─── RIGHT COLUMN ─────────────────────────────────── */
        .ap-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: sticky;
          top: 2rem;
        }

        .ap-img-frame {
          position: relative;
          border-radius: 20px;
          overflow: visible;
        }

        .ap-img-wrap {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 32px 64px rgba(13,43,15,0.2);
        }

        .ap-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.6s ease;
        }

        .ap-img-wrap:hover .ap-img {
          transform: scale(1.04);
        }

        .ap-img-badge {
          position: absolute;
          top: -18px;
          left: -18px;
          background: var(--orange);
          color: #fff;
          border-radius: 12px;
          padding: 1rem 1.25rem;
          box-shadow: 0 8px 24px rgba(230,81,0,0.3);
          display: flex;
          flex-direction: column;
          gap: 2px;
          z-index: 2;
        }

        .ap-img-badge-val {
          font-family: 'Playfair Display', serif;
          font-size: 1.7rem;
          font-weight: 900;
          line-height: 1;
        }

        .ap-img-badge-lbl {
          font-family: 'Syne', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.8;
        }

        /* PDG card - IMAGE ENTIÈREMENT VISIBLE ET TRÈS GRANDE */
        .ap-pdg {
          background: #fff;
          border-radius: 24px;
          border: 1px solid var(--border);
          box-shadow: 0 8px 32px rgba(13,43,15,0.08);
          overflow: hidden;
          transition: box-shadow 0.25s, transform 0.25s;
        }

        .ap-pdg:hover {
          box-shadow: 0 20px 48px rgba(13,43,15,0.16);
          transform: translateY(-4px);
        }

        .ap-pdg-img-wrap {
          width: 100%;
          height: auto;
          background: linear-gradient(135deg, var(--green-deep) 0%, var(--green-mid) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ap-pdg-avatar {
          width: 100%;
          height: auto;
          min-height: 500px;
          max-height: 650px;
          object-fit: cover;
          object-position: center 30%;
          display: block;
          transition: transform 0.5s ease;
        }

        .ap-pdg:hover .ap-pdg-avatar {
          transform: scale(1.02);
        }

        .ap-pdg-avatar-placeholder {
          width: 100%;
          height: 550px;
          background: var(--green-mid);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          font-weight: 900;
        }

        .ap-pdg-body {
          padding: 2rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .ap-pdg-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .ap-pdg-orange-bar {
          width: 5px;
          height: 70px;
          background: var(--orange);
          border-radius: 3px;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .ap-pdg-info {
          flex: 1;
        }

        .ap-pdg-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 5px;
          letter-spacing: -0.02em;
        }

        .ap-pdg-title {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.85rem;
          color: var(--orange);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .ap-pdg-description {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.95rem;
          color: var(--text-mid);
          line-height: 1.7;
          margin-top: 0.5rem;
        }

        .ap-pdg-description p {
          margin-bottom: 0.75rem;
        }

        .ap-pdg-quote {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 1rem;
          color: var(--orange);
          line-height: 1.55;
          font-style: italic;
          font-weight: 600;
          border-left: 3px solid var(--orange-light);
          padding-left: 1.25rem;
          margin-top: 0.75rem;
        }

        .ap-values {
          background: var(--green-deep);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ap-values-title {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 0.25rem;
        }

        .ap-value-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ap-value-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--orange-light);
          flex-shrink: 0;
        }

        .ap-value-text {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.78);
        }

        /* ─── RESPONSIVE ─────────────────────────────────── */
        @media (max-width: 1024px) {
          .ap-hero-inner {
            grid-template-columns: 1fr;
            padding: 5rem 2rem 4rem;
            gap: 3rem;
          }
          .ap-hero-right {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
          }
          .ap-stat-card,
          .ap-stat-card:nth-child(2),
          .ap-stat-card:nth-child(3) {
            width: auto;
            flex: 1;
            min-width: 140px;
          }
          .ap-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .ap-right {
            position: static;
          }
          .ap-inner {
            padding: 0 2rem;
          }
          .ap-pdg-avatar {
            min-height: 400px;
            max-height: 500px;
          }
        }

        @media (max-width: 640px) {
          .ap-hero-inner { padding: 4rem 1.5rem 3rem; }
          .ap-hero-title { font-size: 2.4rem; }
          .ap-hero-right { display: none; }
          .ap-inner { padding: 0 1.5rem; }
          .ap-main { padding: 5rem 0; }
          .ap-features { grid-template-columns: 1fr; }
          .ap-img { height: 260px; }
          .ap-main-watermark { display: none; }
          .ap-pdg-name { font-size: 1.2rem; }
          .ap-pdg-title { font-size: 0.7rem; }
          .ap-pdg-description { font-size: 0.85rem; }
          .ap-pdg-body { padding: 1.25rem; }
          .ap-pdg-avatar {
            min-height: 320px;
            max-height: 400px;
          }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="ap">
        <div className="ap-hero">
          <div className="ap-hero-bg" />
          <div className="ap-hero-overlay" />
          <div className="ap-hero-line" />

          <div className="ap-hero-inner">
            {/* Left */}
            <div className="ap-hero-left">
              <div className="ap-hero-tag">
                <div className="ap-hero-tag-line" />
                <span className="ap-hero-tag-text">Qui sommes-nous</span>
              </div>

              <h1 className="ap-hero-title">
                L'énergie qui fait
                <em>avancer le Cameroun</em>
              </h1>

              <p className="ap-hero-desc">
                National Energy, leader dans la distribution de produits pétroliers 
                de haute qualité — au service d'un Cameroun prospère.
              </p>

              <a
                href="#ap-main"
                className="ap-hero-cta"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#ap-main')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Découvrir notre histoire
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="ap-hero-scroll"
            onClick={() => document.querySelector('#ap-main')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="ap-hero-scroll-line" />
            <span className="ap-hero-scroll-text">Défiler</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            MAIN CONTENT SECTION
        ═══════════════════════════════════════════════ */}
        <section className="ap-main" id="ap-main">
          <div className="ap-main-watermark">ENERGY</div>

          <div className="ap-inner">
            <div className="ap-section-label">
              <div className="ap-section-label-bar" />
              <span className="ap-section-label-text">À propos de National Energy</span>
            </div>

            <div className="ap-grid">

              {/* ── LEFT COLUMN ─────────────────────── */}
              <div className="ap-left">
                <h2 className="ap-heading">
                  Leader dans la distribution de{' '}
                  <span>produits pétroliers</span> au Cameroun
                </h2>

                {/* Director's message */}
                <div className="ap-manifesto">
                  <div className="ap-manifesto-accent" />
                  <p className="ap-manifesto-text">
                    Menée par l'initiative de professionnels du domaine des Hydrocarbures, 
                    National Energy voit le jour avec une dynamique marquante et une gamme 
                    de produits adaptés et adaptables aux besoins de chaque Client. Grâce à 
                    la dynamique d'une équipe qualifiée, National Energy s'annonce comme un 
                    acteur majeur du secteur des Hydrocarbures au Cameroun. L'objectif est 
                    clair&nbsp;: le projet d'un Cameroun prospère se construira aussi par une 
                    Énergie Nationale de qualité.
                  </p>
                  <div className="ap-manifesto-sig">
                    <div className="ap-manifesto-sig-line" />
                    <span className="ap-manifesto-sig-text">La Direction Générale</span>
                  </div>
                </div>

                <p className="ap-body-text">
                  Implantée à Odza, montée collège Adventiste, au cœur de Yaoundé, 
                  National Energy est une entreprise camerounaise qui place la qualité 
                  et la proximité client au centre de chaque action. Avec une expertise 
                  reconnue et un engagement sans faille, nous mettons tout en œuvre pour 
                  fournir une énergie fiable, accessible et de qualité à l'ensemble de 
                  nos clients — particuliers et professionnels.
                </p>

                {/* Feature grid */}
                <div className="ap-features">
                  <div className="ap-feature">
                    <div className="ap-feature-ico">
                      <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                      <div className="ap-feature-title">Qualité certifiée</div>
                      <div className="ap-feature-desc">Produits conformes aux normes internationales en vigueur</div>
                    </div>
                  </div>

                  <div className="ap-feature">
                    <div className="ap-feature-ico">
                      <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <div>
                      <div className="ap-feature-title">Réactivité</div>
                      <div className="ap-feature-desc">Livraison rapide et fiable sur tout le territoire</div>
                    </div>
                  </div>

                  <div className="ap-feature">
                    <div className="ap-feature-ico">
                      <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                      <div className="ap-feature-title">Réseau étendu</div>
                      <div className="ap-feature-desc">Des stations implantées partout au Cameroun</div>
                    </div>
                  </div>

                  <div className="ap-feature">
                    <div className="ap-feature-ico">
                      <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                      <div className="ap-feature-title">Service 24h/24</div>
                      <div className="ap-feature-desc">Disponible 7j/7 pour répondre à vos besoins</div>
                    </div>
                  </div>
                </div>

                <button
                  className="ap-cta-btn"
                  onClick={() => document.querySelector('#stations')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Découvrir nos stations
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* ── RIGHT COLUMN ─────────────────────── */}
              <div className="ap-right">
                {/* Image station */}
                <div className="ap-img-frame">
                  <div className="ap-img-wrap">
                    <img
                      src="/images/heros/station.jpeg"
                      alt="Station National Energy Cameroun"
                      className="ap-img"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1542889601-399c4f3a8402?w=800&q=80";
                      }}
                    />
                  </div>
                </div>

                {/* PDG Card - IMAGE TRÈS GRANDE ET ENTIÈREMENT VISIBLE */}
                <div className="ap-pdg">
                  {/* Photo du directeur - très grand format */}
                  <div className="ap-pdg-img-wrap">
                    <img
                      src="/images/pdg.jpeg"
                      alt="M. Keedi Jean Joel - PDG National Energy"
                      className="ap-pdg-avatar"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const parent = e.target.parentNode;
                        const placeholder = document.createElement('div');
                        placeholder.className = 'ap-pdg-avatar-placeholder';
                        placeholder.textContent = 'M. Keedi Jean Joel';
                        parent.appendChild(placeholder);
                      }}
                    />
                  </div>
                  
                  {/* Corps de la carte avec la description complète */}
                  <div className="ap-pdg-body">
                    <div className="ap-pdg-header">
                      <div className="ap-pdg-orange-bar" />
                      <div className="ap-pdg-info">
                        <h3 className="ap-pdg-name">
                          M. Keedi Jean Joel
                        </h3>
                        <p className="ap-pdg-title">
                          Président Directeur Général
                        </p>
                      </div>
                    </div>
                    
                    {/* Description complète */}
                    <div className="ap-pdg-description">
                      <p>
                        Monsieur Jean Joël Keedi, Président-Directeur Général de National Energy SARL, 
                        se distingue par une solide expérience professionnelle et une réputation fondée 
                        sur la rigueur et le sérieux.
                      </p>
                      <p>
                        Véritable incarnation du manager moderne, il a su, à la tête de plusieurs entreprises, 
                        développer des structures performantes, à la fois solides et innovantes. Sa vision 
                        stratégique repose notamment sur une politique d'adaptation continue, tenant compte 
                        des besoins spécifiques et des particularités de chaque client.
                      </p>
                    </div>
                    
                    {/* Citation */}
                    <div className="ap-pdg-quote">
                      "Une énergie nationale pour un Cameroun prospère"
                    </div>
                  </div>
                </div>

                {/* Values */}
                <div className="ap-values">
                  <div className="ap-values-title">Nos engagements</div>
                  {[
                    "Excellence et rigueur opérationnelle",
                    "Proximité avec chaque client",
                    "Développement du Cameroun",
                    "Innovation dans le secteur énergétique",
                  ].map((v, i) => (
                    <div className="ap-value-item" key={i}>
                      <div className="ap-value-dot" />
                      <span className="ap-value-text">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Apropos;