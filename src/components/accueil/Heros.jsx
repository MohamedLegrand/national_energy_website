// src/components/accueil/Heros.jsx
import { useState, useEffect, useCallback, useRef } from "react";

const LETTER_SPEED = 45;       // ms par lettre (titre)
const DESC_LETTER_SPEED = 28;  // ms par lettre (description)
const PAUSE_AFTER_TITLE = 300; // pause entre titre et description
const PAUSE_AFTER_SLIDE = 2200;// pause après slide complet avant changement
const TRANSITION_DURATION = 700; // durée de la transition de fond

const Heros = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDesc, setDisplayedDesc] = useState("");
  const [phase, setPhase] = useState("title"); // "title" | "desc" | "done"
  const [showCursor, setShowCursor] = useState(true);

  const timeoutsRef = useRef([]);

  const slides = [
    {
      image: "/images/heros/station.jpeg",
      title: "L'énergie qui fait avancer le Cameroun.",
      description:
        "Nos stations National Energy sont conçues pour offrir une expérience de qualité supérieure. Modernes, bien équipées et ouvertes 24h/24.",
    },
    {
      image: "/images/heros/lavage.jpeg",
      title: "Lavage & Graissage professionnel pour votre véhicule.",
      description:
        "Service haute pression et graissage professionnel par nos techniciens qualifiés.",
    },
    {
      image: "/images/heros/carburant.png",
      title: "Distribution de carburant de qualité.",
      description:
        "Super, Gazole, Pétrole et lubrifiants disponibles toute l'année.",
    },
  ];

  const clearAll = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const addTimeout = (fn, delay) => {
    const id = setTimeout(fn, delay);
    timeoutsRef.current.push(id);
    return id;
  };

  // Lance l'animation de typewriter pour un slide donné
  const startTypewriter = useCallback(
    (slideIndex) => {
      clearAll();
      setDisplayedTitle("");
      setDisplayedDesc("");
      setPhase("title");

      const slide = slides[slideIndex];
      const title = slide.title;
      const desc = slide.description;

      // Écrire le titre lettre par lettre
      let titleDelay = 0;
      for (let i = 0; i < title.length; i++) {
        const charIndex = i;
        addTimeout(() => {
          setDisplayedTitle(title.slice(0, charIndex + 1));
        }, titleDelay);
        titleDelay += LETTER_SPEED;
      }

      // Pause puis passer à la description
      addTimeout(() => {
        setPhase("desc");
      }, titleDelay + PAUSE_AFTER_TITLE);

      // Écrire la description lettre par lettre
      let descDelay = titleDelay + PAUSE_AFTER_TITLE;
      for (let i = 0; i < desc.length; i++) {
        const charIndex = i;
        addTimeout(() => {
          setDisplayedDesc(desc.slice(0, charIndex + 1));
        }, descDelay);
        descDelay += DESC_LETTER_SPEED;
      }

      // Tout est affiché → attendre puis changer de slide
      addTimeout(() => {
        setPhase("done");
        addTimeout(() => {
          const next = (slideIndex + 1) % slides.length;
          goToSlide(next);
        }, PAUSE_AFTER_SLIDE);
      }, descDelay);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const goToSlide = useCallback(
    (index) => {
      clearAll();
      setNextIndex(index);
      setTransitioning(true);

      addTimeout(() => {
        setCurrentIndex(index);
        setNextIndex(null);
        setTransitioning(false);
        startTypewriter(index);
      }, TRANSITION_DURATION);
    },
    [startTypewriter]
  );

  // Démarrage initial
  useEffect(() => {
    startTypewriter(0);
    return () => clearAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Curseur clignotant
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];
  const isTypingTitle = phase === "title";
  const isTypingDesc = phase === "desc";

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Image de fond courante */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${currentSlide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: `opacity ${TRANSITION_DURATION}ms ease-in-out, filter 1.8s ease-out`,
          opacity: transitioning ? 0 : 1,
          filter: transitioning
            ? "blur(0px) brightness(0.7)"
            : phase === "title"
            ? "blur(14px) brightness(0.6)"
            : phase === "desc"
            ? "blur(5px) brightness(0.75)"
            : "blur(0px) brightness(1)",
          zIndex: 0,
        }}
      />

      {/* Image de fond suivante (pré-chargée) */}
      {nextIndex !== null && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slides[nextIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: transitioning ? 1 : 0,
            filter: "blur(14px) brightness(0.6)",
            transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
            zIndex: 0,
          }}
        />
      )}

      {/* Overlay sombre */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.62) 60%, rgba(0,0,0,0.75) 100%)",
          zIndex: 1,
        }}
      />

      {/* Contenu texte */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "white",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        {/* Titre */}
        <h1
          style={{
            fontSize: "clamp(1.9rem, 5vw, 3.8rem)",
            marginBottom: "28px",
            fontWeight: "800",
            maxWidth: "920px",
            lineHeight: 1.2,
            minHeight: "1.4em",
            letterSpacing: "-0.02em",
          }}
        >
          {displayedTitle}
          {isTypingTitle && showCursor && (
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "0.85em",
                backgroundColor: "#F57C00",
                marginLeft: "4px",
                verticalAlign: "middle",
                borderRadius: "1px",
              }}
            />
          )}
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            maxWidth: "680px",
            lineHeight: 1.65,
            opacity: phase === "title" ? 0 : 1,
            transition: "opacity 0.4s ease",
            minHeight: "3em",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          {displayedDesc}
          {isTypingDesc && showCursor && (
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1em",
                backgroundColor: "#F57C00",
                marginLeft: "3px",
                verticalAlign: "middle",
                borderRadius: "1px",
              }}
            />
          )}
        </p>

        {/* Bouton CTA (aparaît quand le slide est complet) */}
        <div
          style={{
            marginTop: "40px",
            opacity: phase === "done" ? 1 : 0,
            transform: phase === "done" ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <a
            href="#stations"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              backgroundColor: "#F57C00",
              color: "white",
              fontWeight: "700",
              fontSize: "1rem",
              borderRadius: "50px",
              textDecoration: "none",
              letterSpacing: "0.5px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#EF6C00")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#F57C00")}
          >
            Découvrir nos stations
          </a>
        </div>
      </div>

      {/* Indicateurs de slides (dots) */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          zIndex: 3,
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
            style={{
              width: idx === currentIndex ? "34px" : "10px",
              height: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor:
                idx === currentIndex
                  ? "#F57C00"
                  : "rgba(255,255,255,0.45)",
              cursor: "pointer",
              transition: "all 0.35s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Barre de progression */}
      <ProgressBar
        key={currentIndex}
        duration={
          slides[currentIndex].title.length * LETTER_SPEED +
          PAUSE_AFTER_TITLE +
          slides[currentIndex].description.length * DESC_LETTER_SPEED +
          PAUSE_AFTER_SLIDE
        }
      />
    </div>
  );
};

// Barre de progression en bas de l'écran
const ProgressBar = ({ duration }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(0);
    const id = requestAnimationFrame(() => {
      setWidth(100);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "3px",
        backgroundColor: "#F57C00",
        width: `${width}%`,
        transition: `width ${duration}ms linear`,
        zIndex: 3,
        opacity: 0.7,
      }}
    />
  );
};

export default Heros;