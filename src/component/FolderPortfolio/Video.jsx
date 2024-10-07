import "./Video.css"; // Importuje stylizację dla modala

export const Video = ({ hideArticle }) => {
  return (
    <div>
      <div className="video-overlay" onClick={hideArticle}>
        {/* Tło modala, które można kliknąć, aby go zamknąć */}
        <div className="video-content" onClick={(e) => e.stopPropagation()}>
          {/* Zawartość modala, kliknięcie tutaj nie zamknie modala */}
          {/* Film */}
          <div className="video-wrapper">
            <iframe
              className="video-Wrap" // Klasa dla iframe
              src={"https://www.youtube.com/embed/dQw4w9WgXcQ"} // Adres URL do filmu na YouTube
              title="YouTube video player" // Tytuł dla iframe
              frameBorder="1px" // Obramowanie iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Pozwolenia dla iframe
              allowFullScreen // Pozwolenie na tryb pełnoekranowy
            ></iframe>
            <a href="#portfolio">
              {/* Link do sekcji portfolio */}
              <button className="close-video-button" onClick={hideArticle}>
                {/* Przycisk zamykający modal */}X {/* Znak zamknięcia */}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
