// src/pages/mentions/Politiques.jsx
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Politiques = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            La protection de vos données personnelles est une priorité pour <strong className="text-primary-dark">National Energy</strong>. La présente politique de confidentialité a pour objet de vous informer de manière claire et transparente sur la manière dont nous collectons, utilisons, protégeons et partageons vos données personnelles lors de votre navigation sur notre site <strong>national-energy.cm</strong> et de l'utilisation de nos services.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mb-4">
            <p className="font-dm text-sm text-primary flex items-start gap-2">
              <span className="text-lg mt-0.5">🔐</span>
              <span>
                Cette politique est conforme à la <strong>loi n° 2010/012 du 21 décembre 2010</strong> relative à la cybersécurité et à la cybercriminalité en République du Cameroun, ainsi qu'aux principes généraux de protection des données reconnus au niveau international.
              </span>
            </p>
          </div>
          <p className="font-dm text-gray-600 leading-relaxed">
            En utilisant notre site, vous acceptez les pratiques décrites dans la présente politique. Si vous n'êtes pas d'accord, nous vous invitons à ne pas utiliser nos services.
          </p>
        </>
      )
    },
    {
      id: "donnees-collectees",
      title: "2. Données collectées",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Nous collectons uniquement les données nécessaires à la fourniture et à l'amélioration de nos services. Ces données peuvent inclure :
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h4 className="font-semibold text-primary-dark mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                Données fournies volontairement
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Nom et prénom</li>
                <li>• Adresse email</li>
                <li>• Numéro de téléphone</li>
                <li>• Adresse postale</li>
                <li>• Message ou demande spécifique</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h4 className="font-semibold text-primary-dark mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                Données collectées automatiquement
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Adresse IP</li>
                <li>• Type de navigateur et version</li>
                <li>• Pages visitées et durée de visite</li>
                <li>• Date et heure de connexion</li>
                <li>• Données de localisation approximative</li>
              </ul>
            </div>
          </div>
          <p className="font-dm text-gray-600 leading-relaxed text-sm bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-3">
            ⚠️ Nous ne collectons <strong>jamais</strong> de données sensibles telles que vos informations bancaires complètes, mots de passe, ou données biométriques via ce site.
          </p>
        </>
      )
    },
    {
      id: "finalites",
      title: "3. Finalités du traitement",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Vos données personnelles sont utilisées exclusivement pour les finalités suivantes :
          </p>
          <div className="space-y-3">
            {[
              { icon: "📬", title: "Gestion des contacts", desc: "Répondre à vos demandes, questions ou réclamations via nos formulaires de contact." },
              { icon: "🔔", title: "Informations commerciales", desc: "Vous informer sur nos offres, promotions ou nouveautés (uniquement avec votre consentement explicite)." },
              { icon: "📊", title: "Analyse et amélioration", desc: "Comprendre l'utilisation de notre site pour optimiser l'expérience utilisateur et le contenu." },
              { icon: "🛡️", title: "Sécurité et conformité", desc: "Prévenir les fraudes, assurer la sécurité du site et respecter nos obligations légales." },
              { icon: "🤝", title: "Relation client", desc: "Gérer votre relation avec National Energy et personnaliser nos services." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-secondary/30 transition-colors">
                <span className="text-xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-semibold text-primary-dark">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: "base-legale",
      title: "4. Base légale du traitement",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Le traitement de vos données repose sur l'une ou plusieurs des bases légales suivantes :
          </p>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 space-y-4">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-sm">1</span>
              <div>
                <p className="font-semibold text-primary-dark">Consentement</p>
                <p className="text-sm text-gray-600">Lorsque vous avez explicitement accepté le traitement, notamment pour recevoir notre newsletter.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-sm">2</span>
              <div>
                <p className="font-semibold text-primary-dark">Exécution contractuelle</p>
                <p className="text-sm text-gray-600">Lorsque le traitement est nécessaire pour répondre à votre demande ou fournir un service demandé.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-sm">3</span>
              <div>
                <p className="font-semibold text-primary-dark">Obligation légale</p>
                <p className="text-sm text-gray-600">Lorsque nous sommes tenus de traiter vos données pour respecter une obligation réglementaire camerounaise.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-sm">4</span>
              <div>
                <p className="font-semibold text-primary-dark">Intérêt légitime</p>
                <p className="text-sm text-gray-600">Pour améliorer notre site, prévenir les fraudes ou assurer la sécurité de nos systèmes.</p>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: "destinataires",
      title: "5. Destinataires des données",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Vos données personnelles sont destinées exclusivement à :
          </p>
          <ul className="space-y-3 font-dm text-gray-700 mb-4">
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">✓</span>
              <span><strong className="text-primary-dark">National Energy</strong> : nos équipes internes habilitées (direction, service client, équipe technique).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">✓</span>
              <span><strong className="text-primary-dark">Prestataires techniques</strong> : hébergeur du site, agence de développement, outils d'analyse, uniquement dans le cadre de missions strictement encadrées par contrat.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">✓</span>
              <span><strong className="text-primary-dark">Autorités compétentes</strong> : uniquement lorsque la loi camerounaise l'exige (réquisition judiciaire, contrôle administratif).</span>
            </li>
          </ul>
          <p className="font-dm text-gray-600 leading-relaxed bg-green-50 border-l-4 border-secondary rounded-r-lg p-4">
            🔒 <strong>Nous ne vendons, ne louons et ne cédons jamais</strong> vos données personnelles à des fins de prospection commerciale tierce.
          </p>
        </>
      )
    },
    {
      id: "duree-conservation",
      title: "6. Durée de conservation",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-dm">
              <thead className="bg-primary/5">
                <tr>
                  <th className="text-left p-3 font-semibold text-primary-dark rounded-tl-lg">Type de données</th>
                  <th className="text-left p-3 font-semibold text-primary-dark rounded-tr-lg">Durée de conservation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3 text-gray-700">Données de contact (formulaire)</td>
                  <td className="p-3 text-gray-600">3 ans après le dernier contact</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3 text-gray-700">Données de navigation (cookies)</td>
                  <td className="p-3 text-gray-600">13 mois maximum</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3 text-gray-700">Données pour newsletter</td>
                  <td className="p-3 text-gray-600">Jusqu'à désinscription</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3 text-gray-700">Données à obligation légale</td>
                  <td className="p-3 text-gray-600">Durée prévue par la loi camerounaise</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-dm text-gray-600 leading-relaxed mt-4 text-sm">
            À l'issue de ces délais, les données sont soit anonymisées à des fins statistiques, soit supprimées de manière sécurisée.
          </p>
        </>
      )
    },
    {
      id: "vos-droits",
      title: "7. Vos droits",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Conformément à la loi camerounaise n° 2010/012, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {[
              { right: "Droit d'accès", desc: "Demander la confirmation que nous traitons vos données et en obtenir une copie." },
              { right: "Droit de rectification", desc: "Faire corriger des données inexactes ou incomplètes." },
              { right: "Droit à l'effacement", desc: "Demander la suppression de vos données (sous réserve des obligations légales)." },
              { right: "Droit à la limitation", desc: "Demander la suspension temporaire du traitement dans certains cas." },
              { right: "Droit d'opposition", desc: "Vous opposer au traitement, notamment pour la prospection commerciale." },
              { right: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré et lisible par machine." }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-secondary/30 transition-colors">
                <p className="font-semibold text-primary-dark mb-1">{item.right}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
            <p className="font-dm text-sm text-primary mb-2">
              📬 <strong>Pour exercer vos droits :</strong>
            </p>
            <p className="text-sm text-gray-700">
              Contactez notre délégué à la protection des données :<br />
              ✉️ <a href="mailto:dpo@national-energy.cm" className="text-secondary hover:underline">dpo@national-energy.cm</a><br />
              📍 Odza, montée collège Adventiste, Yaoundé, Cameroun
            </p>
          </div>
          <p className="font-dm text-gray-600 leading-relaxed mt-4 text-sm">
            Une pièce d'identité peut vous être demandée pour vérifier votre identité avant de répondre à votre demande. Nous nous engageons à répondre dans un délai maximum de <strong>30 jours</strong>.
          </p>
        </>
      )
    },
    {
      id: "cookies",
      title: "8. Gestion des cookies",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Notre site utilise des cookies et technologies similaires pour améliorer votre expérience, analyser l'audience et personnaliser certains contenus.
          </p>
          
          <h4 className="font-semibold text-primary-dark mb-3 mt-5">🍪 Types de cookies utilisés</h4>
          <div className="space-y-3 mb-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-primary-dark">Cookies essentiels</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Toujours actifs</span>
              </div>
              <p className="text-sm text-gray-600">Nécessaires au fonctionnement du site (sécurité, accessibilité). Impossible de les désactiver.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-primary-dark">Cookies de performance</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Optionnels</span>
              </div>
              <p className="text-sm text-gray-600">Nous aident à comprendre comment vous utilisez le site (Google Analytics). Vous pouvez les refuser.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-primary-dark">Cookies fonctionnels</span>
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Optionnels</span>
              </div>
              <p className="text-sm text-gray-600">Permettent de mémoriser vos préférences (langue, région). Vous pouvez les gérer.</p>
            </div>
          </div>

          <h4 className="font-semibold text-primary-dark mb-3">⚙️ Comment gérer vos préférences</h4>
          <ul className="space-y-2 font-dm text-gray-700 text-sm mb-4">
            <li className="flex items-start gap-2">
              <span className="text-secondary">•</span>
              <span>Via le bandeau de consentement lors de votre première visite</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary">•</span>
              <span>Dans les paramètres de votre navigateur (Chrome, Firefox, Safari, Edge)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary">•</span>
              <span>En contactant notre DPO pour toute demande spécifique</span>
            </li>
          </ul>
          <p className="font-dm text-gray-600 leading-relaxed text-sm bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-3">
            ⚠️ La désactivation de certains cookies peut limiter l'accès à certaines fonctionnalités du site.
          </p>
        </>
      )
    },
    {
      id: "securite",
      title: "9. Sécurité des données",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, altération ou divulgation.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { icon: "🔐", title: "Chiffrement", desc: "Connexions sécurisées HTTPS/SSL pour toutes les transmissions de données." },
              { icon: "🛡️", title: "Accès restreint", desc: "Seul le personnel habilité peut accéder à vos données, avec authentification forte." },
              { icon: "🔄", title: "Sauvegardes", desc: "Copies de sécurité régulières et sécurisées de nos bases de données." }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <p className="font-semibold text-primary-dark text-sm mb-1">{item.title}</p>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-dm text-gray-600 leading-relaxed text-sm">
            En cas de violation de données susceptible d'engendrer un risque pour vos droits et libertés, nous nous engageons à vous notifier dans les meilleurs délais, conformément à la réglementation en vigueur.
          </p>
        </>
      )
    },
    {
      id: "modifications",
      title: "10. Modifications de la politique",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            National Energy se réserve le droit de modifier la présente politique de confidentialité à tout moment, notamment pour se conformer à l'évolution législative, réglementaire ou jurisprudentielle.
          </p>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Toute modification sera :
          </p>
          <ul className="space-y-2 font-dm text-gray-700 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Publiée sur cette page avec la date de mise à jour</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Portée à votre attention via un bandeau informatif sur le site (pour les changements significatifs)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Communiquée par email si vous êtes abonné à notre newsletter (pour les changements majeurs)</span>
            </li>
          </ul>
          <p className="font-dm text-gray-600 leading-relaxed bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
            💡 <strong>Nous vous invitons à consulter régulièrement cette page</strong> pour prendre connaissance des éventuelles mises à jour. La poursuite de l'utilisation du site après publication des modifications vaut acceptation de la nouvelle politique.
          </p>
        </>
      )
    },
    {
      id: "contact",
      title: "11. Contact & Réclamations",
      content: (
        <>
          <p className="font-dm text-gray-600 leading-relaxed mb-4">
            Pour toute question relative à la présente politique ou à la protection de vos données, notre équipe est à votre disposition :
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <a 
              href="mailto:dpo@national-energy.cm" 
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-secondary transition-colors group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">✉️</span>
              <div>
                <p className="font-semibold text-primary-dark">Délégué à la protection</p>
                <p className="text-sm text-secondary break-all">dpo@national-energy.cm</p>
              </div>
            </a>
            <a 
              href="tel:+237673787926" 
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-secondary transition-colors group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">📞</span>
              <div>
                <p className="font-semibold text-primary-dark">Service client</p>
                <p className="text-sm text-secondary">+237 673 787 926</p>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-primary-dark">Siège social</p>
                <p className="text-sm text-gray-600">Odza, Yaoundé</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="font-dm text-sm text-primary mb-2 flex items-center gap-2">
              <span>⚖️</span>
              <strong>Voie de recours</strong>
            </p>
            <p className="text-sm text-gray-700">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de l'autorité camerounaise de protection des données :<br />
              <strong>ART (Agence de Régulation des Télécommunications)</strong><br />
              <span className="text-gray-600">Yaoundé, Cameroun</span>
            </p>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen font-dm">
      
      {/* ========== HERO SECTION ========== */}
      <section 
        className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#388E3C] text-white py-24 md:py-32 overflow-hidden"
        aria-labelledby="politiques-title"
      >
        {/* Image de fond avec overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ 
            backgroundImage: "url('/images/politiques.png')",
            filter: "brightness(0.9) contrast(1.1)"
          }}
          aria-hidden="true"
        />
        
        {/* Overlay dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/90 via-[#1B5E20]/70 to-transparent" aria-hidden="true" />
        
        {/* Effets décoratifs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" aria-hidden="true" />
        
        {/* Contenu CENTRÉ */}
        <div className="relative container-custom z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] text-center px-4">
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="font-outfit text-xs font-semibold uppercase tracking-wider">Confidentialité & Protection</span>
          </div>
          
          <h1 
            id="politiques-title"
            className="font-outfit text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto"
          >
            Politique de confidentialité
          </h1>
          
          <p className="font-dm text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Découvrez comment National Energy protège et utilise vos données personnelles en toute transparence.
          </p>
          
          {/* Fil d'Ariane centré */}
          <nav className="flex items-center justify-center gap-2 text-sm font-medium flex-wrap" aria-label="Fil d'Ariane">
            <Link 
              to="/" 
              className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Accueil
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Politique de confidentialité</span>
          </nav>
          
        </div>
      </section>

      {/* ========== TABLE DES MATIÈRES (Desktop) ========== */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-200 sticky top-0 z-40">
        <div className="container-custom py-3">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-thin">
            <span className="font-outfit font-semibold text-primary-dark whitespace-nowrap flex-shrink-0">Sommaire :</span>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-gray-600 hover:text-secondary transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-secondary pb-1"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ========== CONTENU PRINCIPAL ========== */}
      <main className="container-custom py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          
          {sections.map((section, index) => (
            <article 
              key={section.id}
              id={section.id}
              className={`scroll-mt-24 mb-12 pb-8 ${index < sections.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <h2 className="font-outfit text-xl md:text-2xl font-bold text-primary mb-5 flex items-center gap-3 group">
                <span className="w-1.5 h-6 bg-gradient-to-b from-secondary to-[#1B5E20] rounded-full group-hover:scale-y-110 transition-transform" />
                {section.title}
              </h2>
              <div className="pl-4">
                {section.content}
              </div>
            </article>
          ))}

          {/* Date de mise à jour */}
          <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-gray-500 text-sm font-dm">
              Document conforme à la loi camerounaise n° 2010/012 sur la cybersécurité
            </p>
            <p className="text-gray-400 text-sm font-dm">
              Dernière mise à jour : <time dateTime={new Date().toISOString()}>{new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-[#1B5E20] transition-colors font-medium text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Retour en haut
            </button>
            <Link
              to="/mentions"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-100 text-primary-dark rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Voir les mentions légales
            </Link>
          </div>

        </div>
      </main>

      {/* ========== STYLES SUPPLÉMENTAIRES ========== */}
      <style>{`
        /* Smooth scroll pour les ancres */
        html {
          scroll-behavior: smooth;
        }
        
        /* Scrollbar personnalisée pour le sommaire */
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        
        /* Impression */
        @media print {
          .container-custom {
            padding: 0 !important;
            max-width: 100% !important;
          }
          a {
            text-decoration: none !important;
            color: inherit !important;
          }
          .hidden-print, .sticky {
            display: none !important;
          }
          body {
            font-size: 11pt;
            line-height: 1.4;
          }
        }
      `}</style>
    </div>
  );
};

export default Politiques;