import "./Slider.css"; // Importowanie stylów CSS dla slidera
import photo from "../assets/hero_top.jpg"; // Importowanie zdjęć
import photo1 from "../assets/slider1.jpg"; // Importowanie dodatkowych zdjęć
import photo2 from "../assets/slider2.jpg"; // Importowanie dodatkowych zdjęć
import { useState, useEffect, useRef } from "react"; // Importowanie hooków React
import play from "../assets/play.png"; // Importowanie ikony przycisku play
import playBackground from "../assets/playBackground.png"; // Importowanie tła dla przycisku play
import "./VideoModal.css"; // Importowanie stylów dla modala

export const Slider = () => {
  const images = [photo, photo1, photo2]; // Użycie zaimportowanych zdjęć
  const [currentIndex, setCurrentIndex] = useState(0); // Indeks bieżącego slajdu
  const sliderRef = useRef(null); // Referencja do wrappera slidera
  const parallaxRef = useRef(null); // Referencja dla efektu parallax

  // Funkcja do przejścia do poprzedniego slajdu
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1) // Przechodzi do ostatniego slajdu, jeśli aktualny to pierwszy
    );
  };

  // Funkcja do przejścia do następnego slajdu
  const goToNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1) // Przechodzi do pierwszego slajdu, jeśli aktualny to ostatni
    );
  };

  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // URL filmu do osadzenia w modalu
  const [isOpen, setIsOpen] = useState(false); // Stan do zarządzania otwarciem modala

  // Funkcja otwierająca modal
  const openModal = () => {
    setIsOpen(true); // Ustawia stan na true
  };

  // Funkcja zamykająca modal
  const closeModal = () => {
    setIsOpen(false); // Ustawia stan na false
  };

  // Hook useEffect do obsługi parallax scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY; // Wartość przewinięcia w osi Y
        const speed = 0.8; // Zmienia tempo efektu parallax
        parallaxRef.current.style.transform = `translateY(${
          scrollY * speed
        }px)`; // Ustawia transformację w zależności od przewinięcia
      }
    };

    window.addEventListener("scroll", handleScroll); // Dodaje nasłuchiwacz scrolla
    return () => window.removeEventListener("scroll", handleScroll); // Usuwa nasłuchiwacz przy odmontowaniu komponentu
  }, []);

  return (
    <div className="sliderBox" id="sliderBox">
      <div
        className="slider-wrapper"
        ref={sliderRef} // Referencja do wrappera slidera
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Przesunięcie slajdów
      >
        {images.map((image, index) => (
          <div
            key={index} // Klucz dla każdego slajdu
            className="slide" // Klasa dla pojedynczego slajdu
            style={{ backgroundImage: `url(${image})` }} // Ustawia tło slajdu
            ref={currentIndex === index ? parallaxRef : null} // Używa referencji dla aktualnego slajdu
          >
            <div className="overlay"></div> {/* Nakładka na slajd */}
          </div>
        ))}
      </div>
      <div className="ContentBox">
        {/* Kontener na treść slidera */}
        <div className="ContainerOnSlider">
          {/* Kontener dla elementów wewnętrznych */}
          <div className="textSlider">
            {/* Kontener dla tekstu */}
            <span>Start your creative business</span> {/* Tekst slajdu */}
          </div>
          <div className="SliderElementRight">
            {/* Element po prawej stronie */}
            <div className="play">
              {/* Kontener dla przycisku play */}
              <img onClick={openModal} src={play} alt="" />
              {/* Obraz przycisku play */}
            </div>
            <div className="playButtton">
              {/* Kontener dla tła przycisku play */}
              <img src={playBackground} alt="" />
              {/* Obraz tła przycisku play */}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          {/* Nakładka modala */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Treść modala */}
            <button className="close-modal-button" onClick={closeModal}>
              {/* Przycisk zamykający modal */}X
            </button>
            {/* Film */}
            <div className="video-wrapper">
              <iframe
                src={videoUrl} // Osadzenie filmu
                title="YouTube video player" // Tytuł dla iframe
                frameBorder="1px" // Ramka dla iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Uprawnienia dla iframe
                className="video-Modal" // Klasa dla iframe
                allowFullScreen // Pełnoekranowy tryb
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <button className="nav-button prev" onClick={goToPrevious}>
        {/* Przycisk "poprzedni" */}‹
      </button>
      <button className="nav-button next" onClick={goToNext}>
        {/* Przycisk "następny" */}›
      </button>
    </div>
  );
};
