import { useState, useEffect } from "react";
import "./SliderWithArrows.css";
import item1 from "../../assets/item1.jpg";
import item2 from "../../assets/item2.jpg";
import item3 from "../../assets/item3.jpg";

export const SliderWithArrows = ({ hideArticle }) => {
  const images = [item1, item2, item3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Obsługa zmian zdjęć
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Obsługa nawigacji za pomocą strzałek na klawiaturze
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Dodajemy pustą tablicę jako drugi argument

  // Pokazywanie strzałek po najechaniu myszką
  const handleMouseMove = (e) => {
    const sliderWidth = window.innerWidth;
    const mouseX = e.clientX;

    if (mouseX < sliderWidth / 2) {
      setShowLeftArrow(true);
      setShowRightArrow(false);
    } else {
      setShowLeftArrow(false);
      setShowRightArrow(true);
    }
  };

  const handleMouseLeave = () => {
    setShowLeftArrow(false);
    setShowRightArrow(false);
  };

  return (
    <div
      className="slider-overlay" // Cały komponent nałożony na stronę
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slider ze zdjęciami */}
      <div className="slider-container">
        {showLeftArrow && (
          <span className="arrow left" onClick={prevImage}>
            &#8592;
          </span>
        )}

        <img
          className="slider-image"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />

        {showRightArrow && (
          <span className="arrow right" onClick={nextImage}>
            &#8594;
          </span>
        )}
      </div>

      {/* Strzałki i oznaczenie zdjęć na dole */}
      <div className="bottom-controls">
        <div>
          <button onClick={prevImage}>&#8592;</button>
          <button onClick={nextImage}>&#8594;</button>
          <p>
            {currentIndex + 1}/{images.length}
          </p>
        </div>

        {/* Zamykanie slidera */}
        <span className="close-slider" onClick={hideArticle}>
          X
        </span>
      </div>
    </div>
  );
};
