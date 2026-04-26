// src/components/accueil/Tarifs.jsx
const Tarifs = () => {
  const tarifsList = [
    { produit: "Super sans plomb", prix: "840 FCFA" },
    { produit: "Gasoil", prix: "828 FCFA" },
    { produit: "Pétrole lampant", prix: "350 FCFA" },
    { produit: "Lubrifiants", prix: "Sur devis" },
    { produit: "Gaz domestique", prix: "6 500 FCFA" }
  ];

  return (
    <>
      <style>{`
        .tarifs-root {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f8faf8 0%, #ffffff 100%);
          position: relative;
        }

        .tarifs-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .tarifs-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #E8F5E9;
          border: 1px solid #A5D6A7;
          border-radius: 100px;
          padding: 6px 14px;
          margin-bottom: 1.5rem;
        }

        .tarifs-badge-dot {
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

        .tarifs-badge-text {
          font-family: 'Outfit', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #1B5E20;
          text-transform: uppercase;
          letter-spacing: 0.09em;
        }

        .tarifs-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 700;
          color: #1a2e1a;
        }

        .tarifs-title span {
          color: #2E7D32;
        }

        .tarifs-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: #6B7280;
          max-width: 600px;
          margin: 0.5rem auto 0;
        }

        .tarifs-card {
          max-width: 1100px;
          width: 90%;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .tarifs-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(46, 125, 50, 0.12);
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
        }

        .tarifs-th:first-child {
          border-radius: 24px 0 0 0;
        }

        .tarifs-th:last-child {
          border-radius: 0 24px 0 0;
        }

        .tarifs-row {
          transition: background 0.2s ease;
          border-bottom: 1px solid #E5E7EB;
        }

        .tarifs-row:last-child {
          border-bottom: none;
        }

        .tarifs-row:hover {
          background: #F0FDF4;
        }

        .tarifs-td {
          padding: 1.5rem 2rem;
          font-family: 'DM Sans', sans-serif;
          vertical-align: middle;
        }

        .tarifs-produit {
          font-weight: 700;
          color: #1a2e1a;
          font-size: 1.2rem;
        }

        .tarifs-prix {
          font-weight: 800;
          color: #2E7D32;
          font-size: 1.4rem;
        }

        .tarifs-footer {
          background: #f9fafb;
          padding: 1.2rem 2rem;
          border-top: 1px solid #E5E7EB;
          text-align: center;
        }

        .tarifs-footer p {
          font-size: 0.85rem;
          color: #9CA3AF;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tarifs-footer svg {
          width: 16px;
          height: 16px;
          stroke: #9CA3AF;
        }

        .tarifs-note {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: #9CA3AF;
        }

        @media (max-width: 768px) {
          .tarifs-root {
            padding: 3rem 0;
          }
          .tarifs-card {
            width: 95%;
          }
          .tarifs-th, .tarifs-td {
            padding: 1rem 1.25rem;
          }
          .tarifs-th {
            font-size: 0.9rem;
            padding: 1rem 1.25rem;
          }
          .tarifs-prix {
            font-size: 1.1rem;
          }
          .tarifs-produit {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 640px) {
          .tarifs-card {
            width: 100%;
            border-radius: 16px;
          }
          .tarifs-th, .tarifs-td {
            padding: 0.8rem 1rem;
          }
          .tarifs-th {
            font-size: 0.8rem;
          }
          .tarifs-prix {
            font-size: 0.95rem;
          }
          .tarifs-produit {
            font-size: 0.85rem;
          }
          .tarifs-footer p {
            font-size: 0.7rem;
          }
          .tarifs-note {
            font-size: 0.7rem;
          }
        }
      `}</style>

      <section id="tarifs" className="tarifs-root">
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
          <table className="tarifs-table" style={{ width: "100%", borderCollapse: "collapse" }}>
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
                    <span className="tarifs-produit">{item.produit}</span>
                  </td>
                  <td className="tarifs-td">
                    <span className="tarifs-prix">{item.prix}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="tarifs-footer">
            <p>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tarifs en vigueur à partir du {new Date().toLocaleDateString('fr-FR')}
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Prix susceptibles de varier
            </p>
          </div>
        </div>

        <div className="tarifs-note">
          * Pour les lubrifiants, veuillez nous contacter pour un devis personnalisé
        </div>
      </section>
    </>
  );
};

export default Tarifs;