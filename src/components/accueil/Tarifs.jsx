// src/components/accueil/Tarifs.jsx
const Tarifs = () => {
  const tarifsList = [
    { produit: "Super sans plomb", prix: "840 FCFA", ancienPrix: null, populaire: true },
    { produit: "Gasoil", prix: "828 FCFA", ancienPrix: null, populaire: true },
    { produit: "Pétrole lampant", prix: "350 FCFA", ancienPrix: "375 FCFA", populaire: false },
    { produit: "Lubrifiants", prix: "Sur devis", ancienPrix: null, populaire: false },
    { produit: "Gaz domestique", prix: "6 500 FCFA", ancienPrix: null, populaire: false }
  ];

  return (
    <>
      <style>{`
        .tarifs-root {
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8faf8 0%, #ffffff 100%);
          position: relative;
          overflow-x: hidden;
        }

        .tarifs-root::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: radial-gradient(circle at 100% 0%, rgba(46, 125, 50, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .tarifs-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .tarifs-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .tarifs-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #E8F5E9;
          border: 1px solid #A5D6A7;
          border-radius: 100px;
          padding: 8px 18px;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(4px);
        }

        .tarifs-badge-dot {
          width: 8px;
          height: 8px;
          background: #2E7D32;
          border-radius: 50%;
          flex-shrink: 0;
          animation: pulse 2.2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .tarifs-badge-text {
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #1B5E20;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        .tarifs-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #1a2e1a;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .tarifs-title span {
          color: #2E7D32;
          position: relative;
          display: inline-block;
        }

        .tarifs-title span::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #2E7D32, #A5D6A7);
          border-radius: 2px;
        }

        .tarifs-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: #6B7280;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
          padding: 0 0.5rem;
        }

        .tarifs-card {
          background: #ffffff;
          border-radius: 32px;
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(46, 125, 50, 0.1);
        }

        /* ── TABLE (desktop/tablette) ── */
        .tarifs-table-wrapper {
          display: block;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }

        .tarifs-table-wrapper::-webkit-scrollbar {
          height: 6px;
        }

        .tarifs-table-wrapper::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .tarifs-table-wrapper::-webkit-scrollbar-thumb {
          background: #A5D6A7;
          border-radius: 10px;
        }

        .tarifs-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
        }

        .tarifs-thead {
          background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%);
        }

        .tarifs-th {
          padding: 1.5rem 2rem;
          text-align: left;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        .tarifs-th:first-child { border-radius: 32px 0 0 0; }
        .tarifs-th:last-child  { border-radius: 0 32px 0 0; }

        .tarifs-row {
          transition: all 0.2s ease;
          border-bottom: 1px solid #E5E7EB;
        }

        .tarifs-row:last-child { border-bottom: none; }

        .tarifs-row:hover {
          background: linear-gradient(90deg, #F0FDF4 0%, transparent 100%);
        }

        .tarifs-td {
          padding: 1.5rem 2rem;
          font-family: 'DM Sans', sans-serif;
          vertical-align: middle;
        }

        .tarifs-produit-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tarifs-produit {
          font-weight: 800;
          color: #1a2e1a;
          font-size: 1.1rem;
        }

        .tarifs-badge-popular {
          background: linear-gradient(135deg, #FFD700, #FFA000);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 50px;
          letter-spacing: 0.5px;
          font-family: 'Outfit', sans-serif;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .tarifs-prix-wrapper {
          display: flex;
          align-items: baseline;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tarifs-prix {
          font-weight: 800;
          color: #2E7D32;
          font-size: 1.4rem;
        }

        .tarifs-ancien-prix {
          font-size: 0.9rem;
          color: #9CA3AF;
          text-decoration: line-through;
        }

        .tarifs-savings {
          background: #E8F5E9;
          color: #2E7D32;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 20px;
        }

        /* ── CARDS MOBILE (≤ 600px) ── */
        .tarifs-cards-mobile {
          display: none;
        }

        .tarifs-item-card {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid #E5E7EB;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .tarifs-item-card:last-child {
          border-bottom: none;
        }

        .tarifs-item-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .tarifs-item-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          color: #1a2e1a;
          font-size: 0.95rem;
          white-space: normal;
          word-break: break-word;
        }

        .tarifs-item-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          flex-shrink: 0;
        }

        .tarifs-item-prix {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          color: #2E7D32;
          font-size: 1.1rem;
          white-space: nowrap;
        }

        .tarifs-item-ancien {
          font-size: 0.78rem;
          color: #9CA3AF;
          text-decoration: line-through;
          white-space: nowrap;
        }

        /* Header mobile */
        .tarifs-mobile-header {
          display: none;
          background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%);
          padding: 1rem 1.25rem;
          border-radius: 20px 20px 0 0;
        }

        .tarifs-mobile-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .tarifs-mobile-header-col {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: #fff;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* ── FOOTER ── */
        .tarifs-footer {
          background: #f9fafb;
          padding: 1.25rem 1.5rem;
          border-top: 1px solid #E5E7EB;
          text-align: center;
        }

        .tarifs-footer p {
          font-size: 0.85rem;
          color: #6B7280;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin: 0;
        }

        .tarifs-footer svg {
          width: 16px;
          height: 16px;
          stroke: #9CA3AF;
          flex-shrink: 0;
        }

        .tarifs-note {
          text-align: center;
          margin-top: 2rem;
          padding: 1rem 1.25rem;
          background: rgba(46, 125, 50, 0.05);
          border-radius: 16px;
          font-size: 0.875rem;
          color: #6B7280;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        /* ── BREAKPOINTS ── */

        @media (max-width: 768px) {
          .tarifs-root { padding: 4rem 0; }
          .tarifs-container { padding: 0 1rem; }
          .tarifs-header { margin-bottom: 2.5rem; }
          .tarifs-note { font-size: 0.8rem; margin-top: 1.5rem; }
        }

        /* Bascule table → cards à 600px */
        @media (max-width: 600px) {
          .tarifs-table-wrapper { display: none; }
          .tarifs-cards-mobile  { display: block; }
          .tarifs-mobile-header { display: block; }

          .tarifs-card {
            border-radius: 20px;
          }

          .tarifs-footer p {
            font-size: 0.75rem;
            flex-direction: column;
            gap: 6px;
          }

          .tarifs-note {
            font-size: 0.78rem;
            padding: 0.875rem 1rem;
          }
        }

        @media print {
          .tarifs-root { padding: 1rem; background: white; }
          .tarifs-card { box-shadow: none; border: 1px solid #ddd; }
        }
      `}</style>

      <section id="tarifs" className="tarifs-root">
        <div className="tarifs-container">

          {/* En-tête */}
          <div className="tarifs-header">
            <div className="tarifs-badge">
              <span className="tarifs-badge-dot" />
              <span className="tarifs-badge-text">Tarifs journaliers</span>
            </div>
            <h2 className="tarifs-title">
              Nos prix <span>actualisés</span>
            </h2>
            <p className="tarifs-subtitle">
              Des tarifs transparents et compétitifs sur l'ensemble de nos produits
            </p>
          </div>

          <div className="tarifs-card">

            {/* ── TABLE (tablette / desktop) ── */}
            <div className="tarifs-table-wrapper">
              <table className="tarifs-table">
                <thead className="tarifs-thead">
                  <tr>
                    <th className="tarifs-th">Produit</th>
                    <th className="tarifs-th">Prix (FCFA)</th>
                  </tr>
                </thead>
                <tbody>
                  {tarifsList.map((item, index) => (
                    <tr key={index} className="tarifs-row">
                      <td className="tarifs-td">
                        <div className="tarifs-produit-wrapper">
                          <span className="tarifs-produit">{item.produit}</span>
                          {item.populaire && (
                            <span className="tarifs-badge-popular">⭐ Populaire</span>
                          )}
                        </div>
                      </td>
                      <td className="tarifs-td">
                        <div className="tarifs-prix-wrapper">
                          <span className="tarifs-prix">{item.prix}</span>
                          {item.ancienPrix && (
                            <>
                              <span className="tarifs-ancien-prix">{item.ancienPrix}</span>
                              <span className="tarifs-savings">Économie</span>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── CARDS (mobile ≤ 600px) ── */}
            <div className="tarifs-mobile-header">
              <div className="tarifs-mobile-header-row">
                <span className="tarifs-mobile-header-col">Produit</span>
                <span className="tarifs-mobile-header-col">Prix</span>
              </div>
            </div>

            <div className="tarifs-cards-mobile">
              {tarifsList.map((item, index) => (
                <div key={index} className="tarifs-item-card">
                  <div className="tarifs-item-left">
                    <span className="tarifs-item-name">{item.produit}</span>
                    {item.populaire && (
                      <span className="tarifs-badge-popular" style={{ alignSelf: 'flex-start' }}>⭐ Populaire</span>
                    )}
                  </div>
                  <div className="tarifs-item-right">
                    <span className="tarifs-item-prix">{item.prix}</span>
                    {item.ancienPrix && (
                      <span className="tarifs-item-ancien">{item.ancienPrix}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="tarifs-footer">
              <p>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tarifs en vigueur au {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Prix susceptibles de varier
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="tarifs-note">
            <strong>📌 Note :</strong> Pour les lubrifiants, contactez-nous pour un devis personnalisé adapté à vos besoins.
          </div>

        </div>
      </section>
    </>
  );
};

export default Tarifs;