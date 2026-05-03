// src/components/accueil/Stations.jsx
const Stations = () => {
  const stationCoords = { lat: 3.8480, lng: 11.5021 };

  const services = [
    {
      label: "Carburant",
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h2l2 8h10l2-8h2M5 10V6a2 2 0 012-2h4m4 0h2a2 2 0 012 2v4" />
        </svg>
      ),
    },
    {
      label: "Lavage",
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      label: "Boutique",
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      label: "Pneumatiques",
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="stations" className="py-12 sm:py-20 bg-gray-50 scroll-mt-20">
      <div className="container-custom px-4 sm:px-6">

        {/* En-tête de section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-12 h-1 bg-primary mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed px-2">
            National Energy vous accueille dans sa station moderne à Odza, Yaoundé.
            Carburants de qualité, services adaptés et équipes professionnelles à votre disposition 24h/24.
          </p>
        </div>

        {/* Carte de la station */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">

            {/* Header — texte tronqué sur petits écrans */}
            <div className="bg-gradient-to-r from-primary to-primary-dark px-4 sm:px-6 py-4 sm:py-5 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                  National Energy — Siège &amp; Station
                </h3>
                <p className="text-white/75 text-xs mt-0.5 truncate">
                  Station principale et siège social
                </p>
              </div>
            </div>

            {/* Corps — 1 colonne sur mobile, 2 sur sm+ */}
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

              {/* Adresse */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Adresse</p>
                  <p className="text-gray-700 text-sm leading-snug">
                    Montée Collège Adventiste,<br />Odza, Yaoundé
                  </p>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">
                    Horaires d&apos;ouverture
                  </p>
                  <p className="text-gray-700 text-sm">Ouvert 24h/24 — 7j/7</p>
                  <span className="inline-flex items-center gap-1.5 mt-1.5 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-full px-2.5 py-0.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Ouvert maintenant
                  </span>
                </div>
              </div>

              {/* Services — pills qui wrappent correctement */}
              <div className="col-span-1 sm:col-span-2">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                  Services disponibles
                </p>
                <div className="flex flex-wrap gap-2">
                  {services.map((service, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/8 border border-primary/20 rounded-full px-3 py-1.5 whitespace-nowrap"
                    >
                      {service.icon}
                      {service.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bouton itinéraire — pleine largeur sur mobile */}
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${stationCoords.lat},${stationCoords.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex sm:inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-200 w-full sm:w-auto"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Obtenir l&apos;itinéraire
              </a>
            </div>
          </div>
        </div>

        {/* Carte interactive */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-10 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">

          {/* Header carte */}
          <div className="bg-gradient-to-r from-primary to-primary-dark px-4 sm:px-5 py-3 sm:py-3.5 flex items-center gap-2.5">
            <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-white font-medium text-sm leading-tight">
              Localisation de notre station à Yaoundé
            </span>
          </div>

          {/* Conteneur carte — moins haute sur mobile */}
          <div className="relative" style={{ height: 260 }}>
            <div className="sm:hidden absolute inset-0" style={{ height: 260 }}>
              <iframe
                title="Carte National Energy Odza Yaoundé"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${stationCoords.lng - 0.05},${stationCoords.lat - 0.05},${stationCoords.lng + 0.05},${stationCoords.lat + 0.05}&layer=mapnik&marker=${stationCoords.lat},${stationCoords.lng}`}
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="hidden sm:block absolute inset-0" style={{ height: 360 }}>
              <iframe
                title="Carte National Energy Odza Yaoundé"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${stationCoords.lng - 0.05},${stationCoords.lat - 0.05},${stationCoords.lng + 0.05},${stationCoords.lat + 0.05}&layer=mapnik&marker=${stationCoords.lat},${stationCoords.lng}`}
                width="100%"
                height="360"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Pin personnalisé centré */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -100%) translateY(-6px)",
                zIndex: 10,
              }}
            >
              <div className="flex flex-col items-center">
                <div className="bg-primary text-white text-[9px] sm:text-[10px] font-bold tracking-widest px-2 sm:px-2.5 py-1 rounded mb-1 shadow-lg whitespace-nowrap">
                  NATIONAL ENERGY SRAL
                </div>
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "7px solid transparent",
                    borderRight: "7px solid transparent",
                    borderTop: "10px solid var(--color-primary, #E05A28)",
                  }}
                />
                <div className="relative mt-0.5">
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping scale-150" />
                  <div className="w-3 h-3 bg-primary rounded-full border-2 border-white shadow" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer carte — empilé sur mobile */}
          <div className="bg-gray-50 border-t border-gray-100 px-4 sm:px-5 py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse flex-shrink-0" />
              <span className="text-xs text-gray-500 truncate">
                Montée Collège Adventiste, Odza — Yaoundé
              </span>
            </div>
            <a
              href={`https://www.google.com/maps/place/${stationCoords.lat},${stationCoords.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:text-primary-dark text-xs font-semibold transition-colors self-start sm:self-auto flex-shrink-0"
            >
              Ouvrir dans Google Maps
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* CTA bas de section */}
        <div className="max-w-3xl mx-auto text-center bg-white border border-gray-100 rounded-2xl px-4 sm:px-6 py-6 sm:py-8 shadow-sm">
          <p className="text-gray-700 font-medium text-sm leading-relaxed">
            Notre station est idéalement située à Odza, facilement accessible depuis tous les quartiers de Yaoundé.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Une question sur nos services ? Contactez notre équipe commerciale.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 mt-4 sm:mt-5 text-primary hover:text-primary-dark font-semibold text-sm transition-colors"
          >
            Nous contacter
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Stations;