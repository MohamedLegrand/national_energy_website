// src/pages/contact/Contact.jsx
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const WHATSAPP_NUMBER = "237699122963";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Petite pause pour simuler le traitement
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Construction du message WhatsApp
      const sujetLabels = {
        devis: "Demande de devis",
        partenariat: "Partenariat",
        reclamation: "Réclamation",
        information: "Demande d'information",
        autre: "Autre",
      };

      const sujetLabel = sujetLabels[formData.sujet] || formData.sujet || "Non précisé";

      const waMessage =
        `Bonjour National Energy 👋\n\n` +
        `*Nom :* ${formData.nom}\n` +
        `*Email :* ${formData.email || "Non renseigné"}\n` +
        `*Téléphone :* ${formData.telephone || "Non renseigné"}\n` +
        `*Sujet :* ${sujetLabel}\n\n` +
        `*Message :*\n${formData.message}`;

      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

      // Marquer comme soumis, puis ouvrir WhatsApp
      setIsSubmitted(true);
      setFormData({ nom: "", email: "", telephone: "", sujet: "", message: "" });

      // Ouvre WhatsApp dans un nouvel onglet
      window.open(waUrl, "_blank", "noopener,noreferrer");

      setTimeout(() => setIsSubmitted(false), 8000);
    } catch {
      setErrorMessage("Une erreur s'est produite. Veuillez réessayer ou nous contacter directement sur WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sujetOptions = [
    { value: "", label: "Sélectionnez un sujet" },
    { value: "devis", label: "Demande de devis" },
    { value: "partenariat", label: "Partenariat" },
    { value: "reclamation", label: "Réclamation" },
    { value: "information", label: "Demande d'information" },
    { value: "autre", label: "Autre" },
  ];

  const contactInfo = {
    adresse: "Odza, montée collège Adventiste, Yaoundé, Cameroun",
    telephone: ["+237 699 122 963", "+237 659 285 166"],
    email: ["contact@national-energy.cm", "commercial@national-energy.cm"],
    horaires: {
      lundiVendredi: "8h - 18h",
      samedi: "9h - 13h",
      dimanche: "Fermé",
    },
  };

  const stationCoords = { lat: 3.8480, lng: 11.5021 };

  const mapFallbackUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.82927362098!2d${stationCoords.lng - 0.01}!3d${stationCoords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf9e7f4f8f8f%3A0x8b3c5c8f5b5c5c5c!2sOdza%2C%20Yaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .cp-page {
          font-family: 'DM Sans', sans-serif;
          background: #F4F6F3;
          min-height: 100vh;
        }

        .cp-hero {
          position: relative;
          height: 480px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }

        .cp-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .cp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(10, 40, 25, 0.35) 0%,
            rgba(10, 40, 25, 0.6) 55%,
            rgba(10, 40, 25, 0.92) 100%
          );
        }

        .cp-hero-accent {
          position: absolute;
          top: 0; right: 0;
          width: 320px; height: 100%;
          background: rgba(52, 211, 153, 0.08);
          clip-path: polygon(40% 0, 100% 0, 100% 100%, 10% 100%);
          pointer-events: none;
        }

        .cp-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem 3rem;
        }

        .cp-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(52, 211, 153, 0.15);
          border: 1px solid rgba(52, 211, 153, 0.35);
          border-radius: 100px;
          padding: 5px 14px;
          margin-bottom: 16px;
        }

        .cp-hero-eyebrow-dot {
          width: 7px; height: 7px;
          background: #34D399;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .cp-hero-eyebrow-text {
          font-size: 11px;
          font-weight: 600;
          color: #34D399;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-family: 'Outfit', sans-serif;
        }

        .cp-hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.8rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin-bottom: 14px;
        }

        .cp-hero-title span { color: #34D399; }

        .cp-hero-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.65);
          max-width: 520px;
          line-height: 1.65;
        }

        .cp-breadcrumb {
          position: absolute;
          top: 24px; left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          width: 100%;
          max-width: 1280px;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          font-family: 'Outfit', sans-serif;
        }

        .cp-breadcrumb a { color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.15s; }
        .cp-breadcrumb a:hover { color: #34D399; }
        .cp-breadcrumb-sep { opacity: 0.4; }
        .cp-breadcrumb-current { color: rgba(255,255,255,0.85); }

        .cp-body {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem 5rem;
        }

        .cp-cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: -56px;
          margin-bottom: 48px;
          position: relative;
          z-index: 10;
        }

        .cp-stat-card {
          background: #fff;
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 4px 24px rgba(13, 48, 38, 0.12);
          border: 1px solid rgba(52, 211, 153, 0.1);
          min-width: 0;
        }

        .cp-stat-icon {
          width: 44px; height: 44px;
          background: #ECFDF5;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cp-stat-icon svg { width: 20px; height: 20px; stroke: #059669; }

        .cp-stat-label {
          font-size: 11px;
          font-weight: 500;
          color: #9CA3AF;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-family: 'Outfit', sans-serif;
        }

        .cp-stat-value {
          font-size: 13px;
          font-weight: 600;
          color: #111827;
          line-height: 1.3;
          font-family: 'Outfit', sans-serif;
          word-break: break-word;
        }

        .cp-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 28px;
          align-items: start;
        }

        .cp-sidebar {
          position: sticky;
          top: 90px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cp-info-card {
          background: #fff;
          border-radius: 16px;
          padding: 1.75rem;
          box-shadow: 0 2px 16px rgba(13, 48, 38, 0.07);
          border: 1px solid rgba(52, 211, 153, 0.08);
        }

        .cp-info-card-title {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #0D3026;
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 1.5px solid #F0FDF4;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cp-info-card-title::before {
          content: '';
          display: block;
          width: 3px; height: 16px;
          background: #34D399;
          border-radius: 2px;
        }

        .cp-info-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 12px 0;
          border-bottom: 1px solid #F9FAFB;
        }

        .cp-info-item:last-child { border-bottom: none; padding-bottom: 0; }

        .cp-info-icon {
          width: 36px; height: 36px;
          background: #F0FDF4;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .cp-info-icon svg { width: 16px; height: 16px; stroke: #059669; }

        .cp-info-label {
          font-size: 11px;
          font-weight: 600;
          color: #9CA3AF;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 4px;
          font-family: 'Outfit', sans-serif;
        }

        .cp-info-text { font-size: 13.5px; color: #374151; line-height: 1.55; }

        .cp-info-link {
          font-size: 13.5px;
          color: #0D3026;
          text-decoration: none;
          display: block;
          transition: color 0.15s;
          line-height: 1.6;
        }

        .cp-info-link:hover { color: #34D399; }

        .cp-hours-badge {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 4px;
          font-size: 13px;
        }

        .cp-hours-badge:last-child { margin-bottom: 0; }
        .cp-hours-badge.open { background: #F0FDF4; }
        .cp-hours-badge.closed { background: #FEF2F2; }
        .cp-hours-day { color: #374151; font-weight: 500; }
        .cp-hours-time.open-time { color: #059669; font-weight: 600; }
        .cp-hours-time.closed-time { color: #DC2626; font-weight: 600; }

        /* WhatsApp sidebar */
        .cp-wa-card {
          background: #fff;
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
          box-shadow: 0 2px 16px rgba(13, 48, 38, 0.07);
          border: 1px solid rgba(52, 211, 153, 0.08);
        }

        .cp-wa-title {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #0D3026;
          margin-bottom: 14px;
          padding-bottom: 12px;
          border-bottom: 1.5px solid #F0FDF4;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cp-wa-title::before {
          content: '';
          display: block;
          width: 3px; height: 14px;
          background: #25D366;
          border-radius: 2px;
        }

        .cp-wa-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(37, 211, 102, 0.08);
          border: 1.5px solid rgba(37, 211, 102, 0.25);
          color: #1a7a42;
          text-decoration: none;
          transition: all 0.2s;
          width: 100%;
        }

        .cp-wa-btn:hover {
          background: #25D366;
          border-color: #25D366;
          color: #fff;
          transform: translateX(3px);
        }

        .cp-wa-btn svg { width: 22px; height: 22px; fill: currentColor; flex-shrink: 0; }

        .cp-wa-btn-text { flex: 1; }
        .cp-wa-btn-label { font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 700; }
        .cp-wa-btn-sub { font-size: 11px; opacity: 0.7; margin-top: 1px; }

        /* Formulaire */
        .cp-form-card {
          background: #fff;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 2px 24px rgba(13, 48, 38, 0.08);
          border: 1px solid rgba(52, 211, 153, 0.08);
        }

        .cp-form-header {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1.5px solid #F0FDF4;
        }

        .cp-form-title {
          font-family: 'Outfit', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #0D3026;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }

        .cp-form-desc { font-size: 14px; color: #6B7280; line-height: 1.6; }

        /* Badge WhatsApp dans le header formulaire */
        .cp-form-wa-hint {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 10px;
          background: rgba(37, 211, 102, 0.08);
          border: 1px solid rgba(37, 211, 102, 0.2);
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 12px;
          color: #1a7a42;
          font-weight: 500;
        }

        .cp-form-wa-hint svg { width: 14px; height: 14px; fill: #25D366; flex-shrink: 0; }

        .cp-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 18px;
        }

        .cp-field { display: flex; flex-direction: column; gap: 6px; }
        .cp-field.full { grid-column: 1 / -1; }

        .cp-label {
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .cp-label-req { color: #34D399; font-size: 15px; line-height: 1; }

        .cp-input,
        .cp-select,
        .cp-textarea {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid #E5E7EB;
          border-radius: 10px;
          font-size: 14px;
          color: #111827;
          background: #FAFAFA;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;
          outline: none;
          box-sizing: border-box;
        }

        .cp-input::placeholder,
        .cp-textarea::placeholder { color: #C4C8CD; }

        .cp-input:focus,
        .cp-select:focus,
        .cp-textarea:focus {
          border-color: #34D399;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.12);
        }

        .cp-select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-color: #FAFAFA;
          padding-right: 36px;
        }

        .cp-textarea { resize: none; height: 150px; line-height: 1.65; }

        .cp-submit {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 11px;
          background: #25D366;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 6px;
          letter-spacing: -0.01em;
        }

        .cp-submit:hover:not(:disabled) {
          background: #1da851;
        }

        .cp-submit:active:not(:disabled) { transform: scale(0.99); }
        .cp-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        .cp-submit svg { width: 20px; height: 20px; flex-shrink: 0; }

        .cp-alert {
          border-radius: 10px;
          padding: 13px 16px;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 20px;
        }

        .cp-alert.success { background: #F0FDF4; border: 1px solid #BBF7D0; color: #065F46; }
        .cp-alert.error   { background: #FEF2F2; border: 1px solid #FECACA; color: #991B1B; }
        .cp-alert svg { width: 18px; height: 18px; flex-shrink: 0; margin-top: 1px; }

        .cp-note { font-size: 12px; color: #9CA3AF; text-align: center; margin-top: 14px; }

        /* Carte */
        .cp-map-section { margin-top: 40px; }

        .cp-map-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .cp-map-title {
          font-family: 'Outfit', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #0D3026;
          letter-spacing: -0.02em;
        }

        .cp-map-pill {
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 600;
          color: #059669;
          font-family: 'Outfit', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        .cp-map-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(13, 48, 38, 0.08);
          border: 1px solid rgba(52, 211, 153, 0.08);
          position: relative;
        }

        .cp-map-frame { width: 100%; height: 380px; display: block; border: none; }

        .cp-map-footer {
          padding: 14px 20px;
          background: #F9FAFB;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F0F0F0;
          flex-wrap: wrap;
          gap: 12px;
        }

        .cp-map-address {
          font-size: 13px;
          color: #6B7280;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .cp-map-address svg { width: 14px; height: 14px; stroke: #059669; flex-shrink: 0; }
        .cp-map-address span { word-break: break-word; }

        .cp-map-directions {
          font-size: 12px;
          font-weight: 600;
          color: #0D3026;
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          border: 1.5px solid rgba(13, 48, 38, 0.2);
          padding: 6px 14px;
          border-radius: 8px;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
          white-space: nowrap;
        }

        .cp-map-directions:hover { background: #0D3026; color: #fff; border-color: #0D3026; }
        .cp-map-directions svg { width: 13px; height: 13px; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .cp-grid { grid-template-columns: 1fr; }
          .cp-sidebar { position: static; display: grid; grid-template-columns: 1fr 1fr; }
          .cp-cards-row { margin-top: -40px; }
        }

        @media (max-width: 768px) {
          .cp-hero { height: 380px; }
          .cp-hero-content { padding: 0 1.25rem 2.5rem; }
          .cp-breadcrumb { padding: 0 1.25rem; }
          .cp-body { padding: 0 1rem 3rem; }
          .cp-cards-row { grid-template-columns: 1fr; margin-top: 20px; }
          .cp-form-card { padding: 1.25rem; }
          .cp-form-grid { grid-template-columns: 1fr; }
          .cp-sidebar { grid-template-columns: 1fr; }
          .cp-map-frame { height: 260px; }
          .cp-map-footer { flex-direction: column; align-items: flex-start; }
        }

        @keyframes spin { to { transform: rotate(360deg); } }
        .cp-spin { animation: spin 0.8s linear infinite; }
      `}</style>

      <div className="cp-page">

        {/* HERO */}
        <section className="cp-hero">
          <img
            src="/images/contact.jpg"
            alt="National Energy — Contactez-nous"
            className="cp-hero-img"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1593941707882-713a9870dd1b?w=1200&q=80";
            }}
          />
          <div className="cp-hero-overlay" />
          <div className="cp-hero-accent" />

          <div className="cp-breadcrumb">
            <a href="/">Accueil</a>
            <span className="cp-breadcrumb-sep">›</span>
            <span className="cp-breadcrumb-current">Contact</span>
          </div>

          <div className="cp-hero-content">
            <div className="cp-hero-eyebrow">
              <span className="cp-hero-eyebrow-dot" />
              <span className="cp-hero-eyebrow-text">Nous sommes à votre écoute</span>
            </div>
            <h1 className="cp-hero-title">
              Parlons de votre <span>projet énergie</span>
            </h1>
            <p className="cp-hero-sub">
              Notre équipe basée à Yaoundé est disponible pour répondre à toutes
              vos questions — devis, partenariats ou informations produits.
            </p>
          </div>
        </section>

        {/* BODY */}
        <div className="cp-body">

          {/* Cartes flottantes */}
          <div className="cp-cards-row">
            <div className="cp-stat-card">
              <div className="cp-stat-icon">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="cp-stat-label">Téléphone</div>
                <div className="cp-stat-value">+237 699 122 963</div>
              </div>
            </div>
            <div className="cp-stat-card">
              <div className="cp-stat-icon">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="cp-stat-label">Email</div>
                <div className="cp-stat-value">contact@national-energy.cm</div>
              </div>
            </div>
            <div className="cp-stat-card">
              <div className="cp-stat-icon">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="cp-stat-label">Horaires</div>
                <div className="cp-stat-value">Lun – Ven · 8h à 18h</div>
              </div>
            </div>
          </div>

          {/* Grille principale */}
          <div className="cp-grid">

            {/* SIDEBAR */}
            <aside className="cp-sidebar">

              <div className="cp-info-card">
                <div className="cp-info-card-title">Nos coordonnées</div>

                <div className="cp-info-item">
                  <div className="cp-info-icon">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="cp-info-label">Adresse</div>
                    <div className="cp-info-text">{contactInfo.adresse}</div>
                  </div>
                </div>

                <div className="cp-info-item">
                  <div className="cp-info-icon">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="cp-info-label">Téléphone</div>
                    {contactInfo.telephone.map((tel) => (
                      <a key={tel} href={`tel:${tel.replace(/\s/g, "")}`} className="cp-info-link">{tel}</a>
                    ))}
                  </div>
                </div>

                <div className="cp-info-item">
                  <div className="cp-info-icon">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="cp-info-label">Email</div>
                    {contactInfo.email.map((mail) => (
                      <a key={mail} href={`mailto:${mail}`} className="cp-info-link">{mail}</a>
                    ))}
                  </div>
                </div>

                <div className="cp-info-item" style={{ flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "13px" }}>
                    <div className="cp-info-icon">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="cp-info-label" style={{ marginTop: "9px" }}>Horaires d'ouverture</div>
                  </div>
                  <div>
                    <div className="cp-hours-badge open">
                      <span className="cp-hours-day">Lundi – Vendredi</span>
                      <span className="cp-hours-time open-time">{contactInfo.horaires.lundiVendredi}</span>
                    </div>
                    <div className="cp-hours-badge open">
                      <span className="cp-hours-day">Samedi</span>
                      <span className="cp-hours-time open-time">{contactInfo.horaires.samedi}</span>
                    </div>
                    <div className="cp-hours-badge closed">
                      <span className="cp-hours-day">Dimanche</span>
                      <span className="cp-hours-time closed-time">{contactInfo.horaires.dimanche}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct */}
              <div className="cp-wa-card">
                <div className="cp-wa-title">Nous joindre</div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-wa-btn"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div className="cp-wa-btn-text">
                    <div className="cp-wa-btn-label">WhatsApp</div>
                    <div className="cp-wa-btn-sub">+237 699 122 963</div>
                  </div>
                  <span>→</span>
                </a>
              </div>

              {/* Badge station */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 border border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">Notre station</p>
                    <p className="text-xs text-gray-500">Ouverte 24h/24 — 7j/7</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* FORMULAIRE */}
            <div>
              <div className="cp-form-card">
                <div className="cp-form-header">
                  <div className="cp-form-title">Envoyez-nous un message</div>
                  <div className="cp-form-desc">
                    Remplissez le formulaire ci-dessous — vous serez redirigé vers WhatsApp avec votre message pré-rempli.
                  </div>
                  <div className="cp-form-wa-hint">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Votre message sera envoyé via WhatsApp
                  </div>
                </div>

                {isSubmitted && (
                  <div className="cp-alert success" role="alert">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>WhatsApp a été ouvert avec votre message pré-rempli. Appuyez sur "Envoyer" dans WhatsApp pour finaliser.</span>
                  </div>
                )}

                {errorMessage && (
                  <div className="cp-alert error" role="alert">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="cp-form-grid">
                    <div className="cp-field">
                      <label htmlFor="nom" className="cp-label">
                        Nom complet <span className="cp-label-req" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        placeholder="Jean Dupont"
                        className="cp-input"
                      />
                    </div>

                    <div className="cp-field">
                      <label htmlFor="email" className="cp-label">
                        Adresse email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="vous@example.com"
                        className="cp-input"
                      />
                    </div>

                    <div className="cp-field">
                      <label htmlFor="telephone" className="cp-label">Téléphone</label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="+237 6XX XXX XXX"
                        className="cp-input"
                      />
                    </div>

                    <div className="cp-field">
                      <label htmlFor="sujet" className="cp-label">
                        Sujet <span className="cp-label-req" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="sujet"
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                        required
                        className="cp-select"
                      >
                        {sujetOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="cp-field full">
                      <label htmlFor="message" className="cp-label">
                        Message <span className="cp-label-req" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Décrivez votre demande en détail..."
                        className="cp-textarea"
                      />
                    </div>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="cp-submit">
                    {isSubmitting ? (
                      <>
                        <svg className="cp-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Préparation du message...
                      </>
                    ) : (
                      <>
                        {/* Icône WhatsApp */}
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: 20, height: 20, fill: "white", flexShrink: 0 }}>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Envoyer via WhatsApp
                      </>
                    )}
                  </button>

                  <p className="cp-note">
                    * Champs obligatoires — Vous serez redirigé vers WhatsApp pour envoyer votre message.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* CARTE */}
          <div className="cp-map-section">
            <div className="cp-map-header">
              <div className="cp-map-title">Notre station à Odza</div>
              <div className="cp-map-pill">Yaoundé · Cameroun</div>
            </div>
            <div className="cp-map-card">
              <iframe
                src={mapFallbackUrl}
                className="cp-map-frame"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte National Energy Yaoundé Odza"
              />
              <div className="cp-map-footer">
                <div className="cp-map-address">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span><strong>Station National Energy</strong> — Montée Collège Adventiste, Odza, Yaoundé</span>
                </div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${stationCoords.lat},${stationCoords.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-map-directions"
                  >
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Itinéraire
                  </a>
                  <a
                    href={`https://www.google.com/maps/place/${stationCoords.lat},${stationCoords.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-map-directions"
                  >
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Agrandir
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;