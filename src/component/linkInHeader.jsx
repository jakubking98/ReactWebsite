import "./linkInHeader.css"; // Importowanie stylów specyficznych dla komponentu LinkInHeader

// Komponent LinkInHeader odpowiedzialny za wyświetlanie linków w nagłówku strony
export const LinkInHeader = () => {
  return (
    <div className="linkInHeader">
      {/* Pierwszy link: Zachęta do współpracy przy projekcie */}
      <div className="link1">
        <span>Have a project?</span>
        <a href="">
          We can help <b>›</b> {/* Link z pogrubioną strzałką */}
        </a>
      </div>

      {/* Drugi link: Informacja o rekrutacji */}
      <div className="link2">
        <span>We are hiring</span>
        <a href="">
          Join our team <b>›</b> {/* Link z pogrubioną strzałką */}
        </a>
      </div>
    </div>
  );
};
