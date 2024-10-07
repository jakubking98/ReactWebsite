import "./Footer.css"; // Importowanie stylów specyficznych dla komponentu Footer
import icon1 from "../assets/twitter.png"; // Importowanie zdjęć ikon (normalny stan)
import icon12 from "../assets/twitter1.png"; // Importowanie zdjęć ikon (stan po najechaniu)
import icon2 from "../assets/instagram.png";
import icon22 from "../assets/instagram1.png";
import icon3 from "../assets/facebook.png";
import icon32 from "../assets/facebook1.png";
import icon4 from "../assets/website.png";
import icon42 from "../assets/website1.png";

import { useState } from "react"; // Importowanie hooka useState z React

// Komponent Footer odpowiedzialny za wyświetlanie stopki strony z ikonami mediów społecznościowych
export const Footer = () => {
  // Tablica stanów dla każdego obrazka, aby śledzić, czy jest aktualnie najechany myszką
  const [hoveredIcons, setHoveredIcons] = useState([
    false,
    false,
    false,
    false,
  ]);

  /**
   * Funkcja obsługująca zdarzenie najechania myszką na ikonę
   * @param {number} index - Indeks ikony w tablicy hoveredIcons
   */
  const handleMouseEnter = (index) => {
    const updatedHoveredIcons = [...hoveredIcons]; // Tworzenie kopii tablicy stanów
    updatedHoveredIcons[index] = true; // Ustawienie stanu na true dla odpowiedniej ikony
    setHoveredIcons(updatedHoveredIcons); // Aktualizacja stanu
  };

  /**
   * Funkcja obsługująca zdarzenie opuszczenia myszką ikony
   * @param {number} index - Indeks ikony w tablicy hoveredIcons
   */
  const handleMouseLeave = (index) => {
    const updatedHoveredIcons = [...hoveredIcons]; // Tworzenie kopii tablicy stanów
    updatedHoveredIcons[index] = false; // Ustawienie stanu na false dla odpowiedniej ikony
    setHoveredIcons(updatedHoveredIcons); // Aktualizacja stanu
  };

  return (
    <>
      {/* Główny kontener stopki */}
      <div className="Footer">
        {/* Kontener na ikony mediów społecznościowych */}
        <div className="iconBox">
          {/* Pierwsza ikona - Twitter */}
          <i
            className="icon"
            style={{
              backgroundImage: hoveredIcons[0]
                ? `url(${icon12})` // Obrazek po najechaniu
                : `url(${icon1})`, // Obrazek w normalnym stanie
            }}
            onMouseEnter={() => handleMouseEnter(0)} // Obsługa najechania myszką
            onMouseLeave={() => handleMouseLeave(0)} // Obsługa opuszczenia myszką
          ></i>

          {/* Druga ikona - Instagram */}
          <i
            className="icon"
            style={{
              backgroundImage: hoveredIcons[1]
                ? `url(${icon22})`
                : `url(${icon2})`,
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          ></i>

          {/* Trzecia ikona - Facebook */}
          <i
            className="icon"
            style={{
              backgroundImage: hoveredIcons[2]
                ? `url(${icon32})`
                : `url(${icon3})`,
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          ></i>

          {/* Czwarta ikona - Website */}
          <i
            className="icon1" // Inna klasa dla innego rozmiaru ikony
            style={{
              backgroundImage: hoveredIcons[3]
                ? `url(${icon42})`
                : `url(${icon4})`,
            }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
          ></i>
        </div>

        {/* Tekst stopki */}
        <div className="text">
          <p> © 2024 Jakub King Portfolio Made in React</p>
        </div>
      </div>
    </>
  );
};
