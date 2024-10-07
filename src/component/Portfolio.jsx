import "./Portfolio.css"; // Importowanie stylów specyficznych dla komponentu Portfolio
import "./GlobalStyle.css"; // Importowanie globalnych stylów

import { useState } from "react"; // Importowanie hooka useState z React
import { ArticleSlider } from "./FolderPortfolio/ArticleSlider"; // Importowanie komponentów dla różnych typów treści
import { SliderWithArrows } from "./FolderPortfolio/SliderWithArrows";
import { TextArticle } from "./FolderPortfolio/TextArticle";
import { Video } from "./FolderPortfolio/Video";
import { PostSector } from "./FolderPortfolio/Post";

import textFoto from "../assets/portfolio_6.jpg"; // Importowanie obrazków
import imageFoto from "../assets/portfolio_5.jpg";
import textFoto2 from "../assets/portfolio_4.jpg";
import textFoto1 from "../assets/portfoilo_3.jpg";
import videoFoto from "../assets/portfolio_2.jpg";
import imageFoto1 from "../assets/portfolio_1.jpg";

// Komponent Portfolio odpowiedzialny za wyświetlanie galerii z filtrami
export const Portfolio = () => {
  const text = ["All", "Images", "Text", "Video"]; // Kategorie filtrów
  const [activeButton, setActiveButton] = useState(0); // Stan śledzący aktywny przycisk filtra (0 = "All")
  const [activeComponent, setActiveComponent] = useState(null); // Przechowuje aktywny komponent do wyświetlenia po kliknięciu na obrazek

  // Lista obrazów z przypisanymi komponentami
  const images = [
    {
      type: "Text",
      href: "#article-section",
      src: textFoto,
      className: "textFoto",
      textUpImage: "Office",
      textDownImage: "Setup",
      component: <ArticleSlider hideArticle={() => setActiveComponent(null)} />, // Komponent artykułu do wyświetlenia po kliknięciu
    },
    {
      type: "Text",
      href: "#TextArticle",
      src: textFoto1,
      className: "textFoto1",
      textUpImage: "Office",
      textDownImage: "Sarah",
      component: <TextArticle hideArticle={() => setActiveComponent(null)} />, // Komponent artykułu
    },
    {
      type: "Images",
      src: imageFoto,
      textUpImage: "Office",
      textDownImage: "Jenna",
      component: (
        <SliderWithArrows hideArticle={() => setActiveComponent(null)} />
      ), // Komponent slider
    },
    {
      type: "Video",
      src: videoFoto,
      textUpImage: "Fashion",
      textDownImage: "Flowers",
      component: <Video hideArticle={() => setActiveComponent(null)} />, // Komponent wideo
    },
    {
      type: "Images",
      src: imageFoto1,
      textUpImage: "Art",
      textDownImage: "Building",
      component: (
        <SliderWithArrows hideArticle={() => setActiveComponent(null)} />
      ), // Komponent slider
    },
    {
      type: "Text",
      href: "#PostSector",
      src: textFoto2,
      textUpImage: "Development",
      textDownImage: "App",
      component: <PostSector hideArticle={() => setActiveComponent(null)} />, // Komponent artykułu
    },
  ];

  // Funkcja obsługująca kliknięcie w przycisk filtra
  const handleClick = (index) => {
    setActiveButton(index);
  };

  // Funkcja obsługująca kliknięcie w obrazek - ustawia aktywny komponent do wyświetlenia
  const handleImageClick = (index) => {
    setActiveComponent(images[index].component);
  };

  // Filtruj obrazy na podstawie aktywnego filtra
  const filteredImages =
    activeButton === 0
      ? images
      : images.filter((image) => image.type === text[activeButton]);

  return (
    <div className="GlobalElementBoxGray" id="portfolio">
      <div className="GlobalContainer">
        <h2 className="GlobalSectorTitle">PORTFOLIO</h2>
        <div className="GlobalBoxPosition">
          <div className="GlobalTitleNumber">03</div>
          <div className="GlobalSubTitle">
            Donec dipiscing elit ultrices nec id sed cursus tempor lipsum arcu
            lorem amet est per sei.
          </div>

          {/* Wyświetlanie przycisków filtrów tylko wtedy, gdy nie ma aktywnego komponentu */}
          {!activeComponent && (
            <div className="ButtonBox">
              {text.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className="button"
                  style={{
                    backgroundColor:
                      activeButton === index ? "#688ce8" : "transparent", // Zmiana koloru tła przycisku w zależności od aktywnego filtra
                  }}
                >
                  {button}
                </button>
              ))}
            </div>
          )}

          <div className="gallery">
            {/* Wyświetlanie galerii, jeśli nie ma aktywnego komponentu */}
            {activeComponent === null &&
              filteredImages.map((image, index) => (
                <div
                  key={index}
                  className={`image-container ${image.className || ""}`} // Dodanie klasy, jeśli istnieje
                  onClick={() => handleImageClick(images.indexOf(image))} // Ustawienie aktywnego komponentu po kliknięciu
                >
                  <a href={image.href}>
                    <img src={image.src} alt={image.type} />
                  </a>
                  <div className="image-description">
                    <p className="textUp"> {image.textUpImage}</p>
                    <p className="textDown">{image.textDownImage}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* Wyświetlanie aktywnego komponentu, jeśli istnieje */}
          {activeComponent && (
            <div className="active-component">
              {activeComponent} {/* Renderowanie przypisanego komponentu */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
