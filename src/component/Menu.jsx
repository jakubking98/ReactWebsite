import "./menu.css"; // Importowanie stylów specyficznych dla komponentu Menu
import { useEffect, useState } from "react"; // Importowanie hooków useEffect i useState z React
import logo from "../assets/logo.png"; // Importowanie logo

// Tablica elementów menu
export const menuItems = [
  "Services",
  "About",
  "Portfolio",
  "Pricing",
  "Testimonial",
  "Blog",
  "Skills",
  "Timeline",
  "Contact",
];

// Komponent Menu odpowiedzialny za wyświetlanie paska nawigacyjnego
export const Menu = ({ items }) => {
  const [isScrolled, setIsScrolled] = useState(false); // Stan śledzący, czy strona została przewinięta
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Stan śledzący, czy menu mobilne jest otwarte

  // Hook useEffect do monitorowania przewijania strony
  useEffect(() => {
    // Funkcja obsługująca zdarzenie scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Jeśli przewinięto więcej niż 50px
        setIsScrolled(true); // Ustaw stan na scrolled
      } else {
        setIsScrolled(false); // Ustaw stan na nie-scrolled
      }
    };

    window.addEventListener("scroll", handleScroll); // Dodanie nasłuchiwania zdarzenia scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Usunięcie nasłuchiwania przy odmontowaniu komponentu
    };
  }, []); // Pusta tablica zależności oznacza, że efekt działa tylko raz po montażu

  // Funkcja do przełączania menu mobilnego
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Zmiana stanu otwarcia menu
  };

  return (
    <div className={`menu-container ${isScrolled ? "scrolled" : ""}`}>
      {" "}
      {/* Dodanie klasy 'scrolled' gdy strona jest przewinięta */}
      <div className="menu-inner">
        {" "}
        {/* Wewnętrzny kontener ograniczający szerokość zawartości */}
        {/* Logo firmy jako link do sekcji 'sliderBox' */}
        <a href="#sliderBox">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        {/* Lista elementów menu */}
        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          {" "}
          {/* Dodanie klasy 'open' gdy menu jest otwarte */}
          {items.map((item, index) => (
            <li key={index} className="menu-item">
              {" "}
              {/* Każdy element listy reprezentuje jeden link w menu */}
              <a
                href={`#${item.toLowerCase()}`} // Link do odpowiedniej sekcji strony
                className="menu-link"
                onClick={() => setIsMenuOpen(false)} // Zamknięcie menu po kliknięciu w link
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        {/* Przycisk do otwierania/zamykania menu mobilnego */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-toggle-bar"></span> {/* Górna belka */}
          <span
            className={`${
              isMenuOpen
                ? "menu-toggle-bar-middleOpen" // Klasa dla animacji belki środkowej gdy menu jest otwarte
                : "menu-toggle-bar-middle" // Klasa dla animacji belki środkowej gdy menu jest zamknięte
            }`}
          ></span>
          <span className="menu-toggle-bar"></span> {/* Dolna belka */}
        </button>
      </div>
    </div>
  );
};
