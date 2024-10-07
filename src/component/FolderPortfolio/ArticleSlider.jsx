import { useState, useRef } from "react";
import "./ArticleSlider.css"; // Importowanie stylów CSS dla komponentu
import item1 from "../../assets/item1.jpg"; // Importowanie obrazów do suwaka
import item2 from "../../assets/item2.jpg";
import item3 from "../../assets/item3.jpg";

export const ArticleSlider = ({ hideArticle }) => {
  const images = [item1, item2, item3]; // Tablica z źródłami obrazów
  const [currentIndex, setCurrentIndex] = useState(0); // Stan do śledzenia aktualnie wyświetlanego indeksu obrazu
  const sliderRef = useRef(null); // Referencja do elementu DOM suwaka
  const startX = useRef(0); // Używane do obsługi zdarzeń myszy i dotyku
  const isDragging = useRef(false); // Flaga do wskazywania, czy przeciąganie jest w toku (mysz)
  const isTouching = useRef(false); // Flaga dla interakcji dotykowych

  // Obsługa zdarzeń myszy
  const handleMouseDown = (e) => {
    startX.current = e.pageX - sliderRef.current.offsetLeft; // Zapisujemy początkową pozycję x
    isDragging.current = true; // Ustawiamy flagę przeciągania na true
    sliderRef.current.style.cursor = "grabbing"; // Zmieniamy kursor
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return; // Jeśli nie przeciągamy, wychodzimy z funkcji
    const x = e.pageX - sliderRef.current.offsetLeft; // Obliczamy aktualną pozycję x
    const walk = x - startX.current; // Obliczamy, jak daleko przesunięto

    // Jeśli przesunięcie w lewo przekroczy -100px, przejdź do następnego obrazu
    if (walk < -100) {
      nextImage();
      isDragging.current = false; // Zatrzymujemy przeciąganie
    }
    // Jeśli przesunięcie w prawo przekroczy 100px, przejdź do poprzedniego obrazu
    else if (walk > 100) {
      prevImage();
      isDragging.current = false; // Zatrzymujemy przeciąganie
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false; // Zatrzymujemy przeciąganie
    sliderRef.current.style.cursor = "grab"; // Przywracamy kursor
  };

  // Obsługa dotyku (dla urządzeń mobilnych)
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX; // Zapisujemy początkowy punkt dotyku
    isTouching.current = true; // Ustawiamy flagę dotyku na true
  };

  const handleTouchMove = (e) => {
    if (!isTouching.current) return; // Jeśli nie dotykamy, wychodzimy z funkcji
    const x = e.touches[0].clientX; // Obliczamy aktualną pozycję x
    const walk = x - startX.current; // Obliczamy, jak daleko przesunięto

    // Jeśli przesunięcie w lewo przekroczy -50px, przejdź do następnego obrazu
    if (walk < -50) {
      nextImage();
      isTouching.current = false; // Zatrzymujemy dotyk
    }
    // Jeśli przesunięcie w prawo przekroczy 50px, przejdź do poprzedniego obrazu
    else if (walk > 50) {
      prevImage();
      isTouching.current = false; // Zatrzymujemy dotyk
    }
  };

  const handleTouchEnd = () => {
    isTouching.current = false; // Zatrzymujemy dotyk
  };

  const nextImage = () => {
    // Przechodzimy do następnego obrazu (cyklicznie)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    // Przechodzimy do poprzedniego obrazu (cyklicznie)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="article-section" id="article-section">
      <div className="article-header">
        {/* Przycisk do ukrywania artykułu */}
        <span className="arrow-left" onClick={hideArticle}>
          &#8592;
        </span>
      </div>
      <div
        className="slider"
        ref={sliderRef} // Przypisanie referencji do suwaka
        onMouseDown={handleMouseDown} // Obsługa przyciśnięcia myszy
        onMouseMove={handleMouseMove} // Obsługa ruchu myszy
        onMouseUp={handleMouseUp} // Obsługa zwolnienia przycisku myszy
        onMouseLeave={handleMouseUp} // Obsługuje przypadek, gdy mysz opuści obszar
        onTouchStart={handleTouchStart} // Obsługa dotyku
        onTouchMove={handleTouchMove} // Obsługa ruchu dotyku
        onTouchEnd={handleTouchEnd} // Obsługa zakończenia dotyku
      >
        <div
          className="slider-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Przesuwanie obrazów w zależności od aktualnego indeksu
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slider image ${index + 1}`} /> // Wyświetlanie obrazów
          ))}
        </div>
      </div>
      <div className="indicator">
        {/* Kropki jako wskaźniki aktualnego obrazu */}
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`} // Dodawanie klasy 'active' dla aktualnie wyświetlanego obrazu
            onClick={() => setCurrentIndex(index)} // Umożliwienie przejścia do obrazu po kliknięciu w kropkę
          />
        ))}
      </div>
      <h2 className="tilte">ART OF CAMERA</h2>
      <p className="lowTilte">
        Two ghostly white figures in coveralls and helmets are softly dancing
        lorem ipsum.
      </p>
      <p className="paragraf">
        Cras pretium metus pulvinar ultricies auctor. In varius purus blandit
        sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor.
        Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in
        heavy atoms descended from astronomers dream of the minds cras pretium
        metus pulvinar ultricies auctor.
      </p>
    </div>
  );
};
