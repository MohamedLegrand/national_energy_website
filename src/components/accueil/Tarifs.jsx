// src/components/accueil/Tarifs.jsx
const Tarifs = () => {
  const tarifsList = [
    { produit: "Super sans plomb", prix: "850 FCFA", variation: "stable" },
    { produit: "Gazole", prix: "800 FCFA", variation: "stable" },
    { produit: "Pétrole", prix: "750 FCFA", variation: "en baisse" },
    { produit: "Lubrifiants (1L)", prix: "3 500 FCFA", variation: "stable" },
  ];

  return (
    <section id="tarifs" className="py-16 scroll-mt-20">
      <div className="container-custom">
        <p className="section-title">Tarifs journaliers</p>
        <h2 className="section-heading">Nos prix actualisés</h2>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-3 px-4 text-left">Produit</th>
                <th className="py-3 px-4 text-left">Prix (FCFA)</th>
                <th className="py-3 px-4 text-left">Variation</th>
              </tr>
            </thead>
            <tbody>
              {tarifsList.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">{item.produit}</td>
                  <td className="py-3 px-4">{item.prix}</td>
                  <td className="py-3 px-4">
                    {item.variation === "en baisse" ? (
                      <span className="text-green-600">▼ En baisse</span>
                    ) : (
                      <span className="text-gray-500">● Stable</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-400 text-sm mt-4">
          *Tarifs susceptibles de varier selon les arrêtés ministériels
        </p>
      </div>
    </section>
  );
};

export default Tarifs;