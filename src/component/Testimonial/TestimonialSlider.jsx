import { useState } from "react"; // Hook React do zarządzania stanem
import "./TestimonialSlider.css"; // Import stylów suwaka
import photo from "../../assets/testimonial_01.jpg"; // Import zdjęć testimoniali
import photo1 from "../../assets/testimonial_02.jpg";
import photo2 from "../../assets/testimonial_03.jpg";

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Bieżący indeks wyświetlanego slajdu

  // Slajdy testimoniali z cytatami i danymi autorów
  const slides = [
    {
      text: "“Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus.”",
      img: photo,
      name: "Peter Walter",
      position: "UI/UX Designer",
    },
    {
      text: "“Mauris ac ipsum et urna porttitor vulputate vivamus pharetra dictum nisi, eu interdum tortor porttitor integer enim urna, sodales non sepo loreskom.”",
      img: photo1,
      name: "Julia Walsh",
      position: "Developer",
    },
    {
      text: "“Vestibulum eget quam vitae est sollicitudin cursus quis vitae enim. Morbi accumsan lorem vel pretium aliquet tolorosim augue velim sudo.”",
      img: photo2,
      name: "John Smith",
      position: "Developer",
    },
  ];

  // Obsługa zdarzeń mouse down do przeciągania
  const handleMouseDown = (e) => {
    e.preventDefault(); // Zapobiega domyślnemu zachowaniu
    const startX = e.clientX; // Zapisujemy pozycję startową
    const startIndex = currentIndex; // Zapisujemy początkowy indeks

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX; // Obliczamy przesunięcie
      const newIndex = Math.round(startIndex - deltaX / 100); // Obliczamy nowy indeks na podstawie przesunięcia
      if (newIndex >= 0 && newIndex < slides.length) {
        setCurrentIndex(newIndex); // Ustawiamy nowy indeks
      }
    };

    const cleanup = () => {
      window.removeEventListener("mousemove", handleMouseMove); // Usuwamy nasłuchiwacz
      window.removeEventListener("mouseup", cleanup); // Usuwamy nasłuchiwacz
    };

    window.addEventListener("mousemove", handleMouseMove); // Dodajemy nasłuchiwacz ruchu myszy
    window.addEventListener("mouseup", cleanup); // Dodajemy nasłuchiwacz zakończenia ruchu myszy
  };

  // Obsługa zdarzeń dotykowych dla urządzeń mobilnych
  const handleTouchStart = (e) => {
    const startX = e.touches[0].clientX; // Zapisujemy pozycję startową dotyku
    const startIndex = currentIndex; // Zapisujemy początkowy indeks

    const handleTouchMove = (e) => {
      const deltaX = e.touches[0].clientX - startX; // Obliczamy przesunięcie
      const newIndex = Math.round(startIndex - deltaX / 100); // Obliczamy nowy indeks na podstawie przesunięcia
      if (newIndex >= 0 && newIndex < slides.length) {
        setCurrentIndex(newIndex); // Ustawiamy nowy indeks
      }
    };

    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove); // Usuwamy nasłuchiwacz
      window.removeEventListener("touchend", handleTouchEnd); // Usuwamy nasłuchiwacz
    };

    window.addEventListener("touchmove", handleTouchMove); // Dodajemy nasłuchiwacz ruchu dotyku
    window.addEventListener("touchend", handleTouchEnd); // Dodajemy nasłuchiwacz zakończenia dotyku
  };

  const slidesStyle = {
    display: "flex", // Ustawiamy elastyczne wyświetlanie
    transition: "transform 0.3s ease", // Ustawiamy płynne przejście
    transform: `translateX(-${currentIndex * 100}%)`, // Przesuwamy slajdy na podstawie indeksu
  };

  const markerStyle = {
    left: `${(currentIndex / (slides.length - 1)) * 80}%`, // Pozycjonujemy wskaźnik na podstawie indeksu
  };

  return (
    <div className="TestimonialSliderContainer">
      <div className="slider-container">
        <div
          className="slides"
          style={slidesStyle}
          onMouseDown={handleMouseDown} // Obsługuje przeciąganie myszą
          onTouchStart={handleTouchStart} // Obsługuje dotyk
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="box">
                <div>
                  <div className="text">{slide.text}</div>
                  <img src={slide.img} alt={slide.name} />
                  {/* Zdjęcie autora */}
                  <p className="SideName">{slide.name}</p> {/* Imię autora */}
                  <p className="SidePosition">{slide.position}</p>
                  {/* Stanowisko autora */}
                </div>
                <div className="border"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="progressBar">
        <div className="marker" style={markerStyle} /> {/* Wskaźnik postępu */}
      </div>
    </div>
  );
};
