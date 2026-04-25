// src/components/accueil/Stations.jsx
const Stations = () => {
  const stationsList = [
    { nom: "Douala - Akwa", adresse: "Boulevard de la Liberté", horaire: "24h/24" },
    { nom: "Douala - Bonabéri", adresse: "Route de l'Ouest", horaire: "6h - 22h" },
    { nom: "Yaoundé - Mvog-Mbi", adresse: "Avenue Kennedy", horaire: "24h/24" },
    { nom: "Garoua", adresse: "Route de Maroua", horaire: "7h - 21h" },
  ];

  return (
    <section id="stations" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="container-custom">
        <p className="section-title">Nos stations</p>
        <h2 className="section-heading">Trouvez la station la plus proche</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stationsList.map((station, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg text-primary">{station.nom}</h3>
                <p className="text-gray-500 text-sm">{station.adresse}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400">Horaires</span>
                <p className="font-semibold text-secondary">{station.horaire}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carte interactive (placeholder) */}
        <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <p className="text-gray-500">📍 Carte interactive des stations (à venir)</p>
        </div>
      </div>
    </section>
  );
};

export default Stations;