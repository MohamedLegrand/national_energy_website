// src/components/accueil/Produits.jsx
const Produits = () => {
  const produitsList = [
    { nom: "Super sans plomb", icone: "", description: "Carburant premium pour véhicules essence" },
    { nom: "Gazole", icone: "", description: "Gazole haute qualité pour moteurs diesel" },
    { nom: "Pétrole", icone: "", description: "Pétrole lampant pour usage domestique" },
    { nom: "Lubrifiants", icone: "", description: "Huiles moteur et graisses industrielles" },
  ];

  return (
    <section id="produits" className="py-16 scroll-mt-20">
      <div className="container-custom">
        <p className="section-title">Nos produits</p>
        <h2 className="section-heading">Ce que nous proposons</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {produitsList.map((produit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="text-4xl mb-3">{produit.icone}</div>
              <h3 className="font-bold text-xl mb-2 text-primary">
                {produit.nom}
              </h3>
              <p className="text-gray-500 text-sm">{produit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produits;