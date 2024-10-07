import "./Post.css"; // Importowanie stylów CSS dla komponentu
import item1 from "../../assets/photo-1.jpg"; // Importowanie obrazów

export const PostSector = ({ hideArticle }) => {
  return (
    <div className="PostSector" id="PostSector">
      {/* Sekcja PostSector */}
      <div className="PostSectorArrow">
        {/* Kontener dla strzałki */}
        <span className="arrow-left" onClick={hideArticle}>
          {/* Przycisk do ukrywania artykułu */}
          &#8592; {/* Strzałka w lewo */}
        </span>
      </div>
      <div className="ConainerRow">
        {/* Kontener dla wierszy elementów */}
        <div className="PostSectorBox">
          {/* Kontener dla tekstu */}
          <h2 className="tilte">INSPIRATION</h2> {/* Nagłówek sekcji */}
          <p className="lowTilte">
            {/* Podtytuł */}
            Two ghostly white figures in coveralls and helmets are softly.
          </p>
          <p className="paragraf">
            {/* Paragraf tekstu */}
            Cras pretium metus pulvinar ultricies auctor. In varius purus
            blandit sem mollis tristique. Curabitur sed lorem vel ligula
            pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper
            lacus bangelis rich in heavy atomolo lorem lipsum forte bimiola.
          </p>
          <p className="paragraf">
            {/* Kolejny paragraf tekstu */}
            Descended from astronomers dream of the mind’s cras pretium metus
            pulvinar ultricies auctor lorem lipsum optom poresiose mullu.
          </p>
          <div>
            <a href="" className="GlobalButtonLink">
              {/* Link do kontaktu */}
              Contact Me
              <p className="GlobalButtonLine"></p> {/* Linia pod linkiem */}
            </a>
          </div>
        </div>
        <div className="PostSectorImg">
          {/* Kontener dla obrazu */}
          <img src={item1} alt="" /> {/* Wyświetlanie obrazu */}
        </div>
      </div>
    </div>
  );
};
