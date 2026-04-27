// src/components/accueil/Heros.jsx
import { useState, useEffect, useCallback } from "react";

const Heros = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDesc, setDisplayedDesc] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const slides = [
    {
      image: "/images/heros/station.jpeg",
      title: "L'énergie qui fait avancer le Cameroun.",
      description: "Nos stations National Energy sont conçues pour offrir une expérience de qualité supérieure. Modernes, bien équipées et ouvertes 24h/24.",
    },
    {
      image: "/images/heros/lavage.jpeg",
      title: "Lavage & Graissage professionnel pour votre véhicule.",
      description: "Service haute pression et graissage professionnel par nos techniciens qualifiés.",
    },
    {
      image: "/images/heros/carburant.png",
      title: "Distribution de carburant de qualité.",
      description: "Super, Gazole, Pétrole et lubrifiants disponibles toute l'année.",
    },
  ];

  const currentSlide = slides[currentIndex];

  // Réinitialiser quand l'image change
  useEffect(() => {
    setDisplayedTitle("");
    setDisplayedDesc("");
    setIsTyping(true);
    setShowCursor(true);
  }, [currentIndex]);

  // Effet machine à écrire (titre + description ensemble)
  useEffect(() => {
    if (!isTyping) return;

    const fullText = currentSlide.title + "||" + currentSlide.description;
    const currentFull = displayedTitle + "||" + displayedDesc;
    
    if (currentFull.length < fullText.length) {
      const timeout = setTimeout(() => {
        const nextChar = fullText[currentFull.length];
        if (nextChar === "|") {
          const timeout2 = setTimeout(() => {
            if (displayedTitle.length < currentSlide.title.length) {
              setDisplayedTitle(currentSlide.title);
            } else if (displayedDesc.length < currentSlide.description.length) {
              setDisplayedDesc(currentSlide.description.substring(0, displayedDesc.length + 1));
            }
          }, 10);
          return () => clearTimeout(timeout2);
        }
        
        if (currentFull.length < currentSlide.title.length) {
          setDisplayedTitle(prev => prev + nextChar);
        } else if (currentFull.length > currentSlide.title.length + 1) {
          setDisplayedDesc(prev => prev + nextChar);
        }
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      // Texte complété, attendre 2 secondes puis changer d'image
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayedTitle, displayedDesc, isTyping, currentSlide]);

  // Curseur clignotant
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setDisplayedTitle("");
    setDisplayedDesc("");
    setIsTyping(true);
  }, []);

  const isTitleComplete = displayedTitle.length === currentSlide.title.length;
  const isDescComplete = displayedDesc.length === currentSlide.description.length;
  const showTitleCursor = !isTitleComplete && isTyping;
  const showDescCursor = isTitleComplete && !isDescComplete && isTyping;

  return (
    <div
      className="hero-slideshow"
      style={{
        backgroundImage: `url(${currentSlide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        position: "relative",
        transition: "background-image 0.6s ease-in-out",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          zIndex: 1,
        }}
      />

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
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            marginBottom: "24px",
            fontWeight: "800",
            maxWidth: "900px",
            lineHeight: 1.2,
          }}
        >
          {displayedTitle}
          {showTitleCursor && showCursor && (
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "1.2em",
                backgroundColor: "#F57C00",
                marginLeft: "5px",
                animation: "blink 1s step-end infinite",
              }}
            />
          )}
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            maxWidth: "700px",
            lineHeight: 1.6,
            opacity: isTitleComplete ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {displayedDesc}
          {showDescCursor && showCursor && (
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1.2em",
                backgroundColor: "#F57C00",
                marginLeft: "5px",
                animation: "blink 1s step-end infinite",
              }}
            />
          )}
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          zIndex: 2,
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            style={{
              width: idx === currentIndex ? "32px" : "10px",
              height: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: idx === currentIndex ? "#F57C00" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          .hero-slideshow {
            transition: background-image 0.6s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Heros;