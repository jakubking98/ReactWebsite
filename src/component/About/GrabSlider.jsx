import { useState, useRef } from "react"; // Importowanie hooków useState i useRef z React
import "./GrabSlider.css"; // Importowanie stylów dla GrabSlider
import photo from "../../assets/about_03.jpg"; // Importowanie zdjęć
import photo1 from "../../assets/about_02.jpg";
import photo2 from "../../assets/about_01.jpg";

// Komponent GrabSlider odpowiedzialny za wyświetlanie slidera z obrazami
export const GrabSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Stan przechowujący aktualny indeks slajdu
  const slides = [
    {
      img: photo,
      big: "01",
      small: "Home Office",
    },
    {
      img: photo1,
      big: "02",
      small: "Sarah Stone",
    },
    {
      img: photo2,
      big: "03",
      small: "Designer Team",
    },
  ];

  const startXRef = useRef(0); // Referencja do przechowywania początkowej pozycji X gestu
  const startIndexRef = useRef(0); // Referencja do przechowywania początkowego indeksu
  const swipeHandledRef = useRef(false); // Referencja do śledzenia, czy gest został obsłużony

  // Funkcja inicjująca gest przesunięcia
  const handleStart = (clientX) => {
    startXRef.current = clientX; // Ustawienie początkowej pozycji X
    startIndexRef.current = currentIndex; // Ustawienie początkowego indeksu
    swipeHandledRef.current = false; // Resetowanie flagi obsługi gestu

    // Dodanie nasłuchiwaczy zdarzeń dla ruchu myszy i dotyku
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleEnd);
  };

  // Obsługa zdarzenia przyciśnięcia myszy
  const handleMouseDown = (e) => {
    e.preventDefault(); // Zapobieganie domyślnemu zachowaniu
    handleStart(e.clientX); // Inicjalizacja gestu z aktualną pozycją X
  };

  // Obsługa zdarzenia dotknięcia ekranu
  const handleTouchStart = (e) => {
    e.preventDefault(); // Zapobieganie domyślnemu zachowaniu
    if (e.touches.length === 1) {
      // Sprawdzenie, czy jest tylko jedno dotknięcie
      handleStart(e.touches[0].clientX); // Inicjalizacja gestu z aktualną pozycją X
    }
  };

  // Obsługa ruchu myszy lub przesunięcia dotyku
  const handleMove = (e) => {
    let clientX;
    if (e.type.startsWith("touch")) {
      // Jeśli zdarzenie to dotyk
      if (e.touches.length !== 1) return; // Ignorowanie, jeśli więcej niż jedno dotknięcie
      clientX = e.touches[0].clientX;
    } else {
      // Jeśli zdarzenie to mysz
      clientX = e.clientX;
    }

    const deltaX = clientX - startXRef.current; // Obliczenie różnicy przesunięcia
    const threshold = 50; // Minimalna odległość przesunięcia do rozpoznania jako gest

    if (!swipeHandledRef.current) {
      // Jeśli gest nie został jeszcze obsłużony
      if (deltaX > threshold && startIndexRef.current > 0) {
        // Przesunięcie w prawo
        setCurrentIndex(startIndexRef.current - 1); // Przejście do poprzedniego slajdu
        swipeHandledRef.current = true; // Ustawienie flagi jako obsłużonego gestu
        handleEnd(); // Zakończenie gestu
      } else if (
        deltaX < -threshold &&
        startIndexRef.current < slides.length - 1
      ) {
        // Przesunięcie w lewo
        setCurrentIndex(startIndexRef.current + 1); // Przejście do następnego slajdu
        swipeHandledRef.current = true; // Ustawienie flagi jako obsłużonego gestu
        handleEnd(); // Zakończenie gestu
      }
    }
  };

  // Funkcja kończąca gest przesunięcia
  const handleEnd = () => {
    // Usunięcie nasłuchiwaczy zdarzeń
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("mouseup", handleEnd);
    window.removeEventListener("touchmove", handleMove);
    window.removeEventListener("touchend", handleEnd);
  };

  // Stylowanie slajdów z dynamicznym przesunięciem
  const slidesStyle = {
    display: "flex",
    transition: "transform 0.3s ease",
    transform: `translateX(-${currentIndex * 100}%)`, // Przesunięcie w zależności od aktualnego indeksu
    flexDirection: "row",
  };

  // Stylowanie markera postępu
  const markerStyle = {
    left: `${(currentIndex / (slides.length - 1)) * 80}%`, // Obliczenie pozycji markera
  };

  return (
    <div className="Grab-container">
      {/* Kontener slidera z obsługą gestów */}
      <div
        className="slider-container"
        onMouseDown={handleMouseDown} // Obsługa przyciśnięcia myszy
        onTouchStart={handleTouchStart} // Obsługa dotknięcia ekranu
      >
        {/* Kontener slajdów */}
        <div className="slides" style={slidesStyle}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.img} alt="" className="img" />{" "}
              {/* Obraz slajdu */}
              <p className="Big">{slide.big}</p> {/* Duży tekst */}
              <p className="Small">{slide.small}</p> {/* Mały tekst */}
            </div>
          ))}
        </div>
      </div>
      {/* Pasek postępu z markerem */}
      <div className="progressBar">
        <div className="marker" style={markerStyle} />
      </div>
    </div>
  );
};
