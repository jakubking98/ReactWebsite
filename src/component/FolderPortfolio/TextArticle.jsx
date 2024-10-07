import "./TextArticle.css"; // Importuje stylizację dla komponentu TextArticle
import item1 from "../../assets/image4.jpg"; // Importuje obrazki
import item2 from "../../assets/image5.jpg";

export const TextArticle = ({ hideArticle }) => {
  return (
    <div className="TextArticle" id="TextArticle">
      <div className="TextArticleHeader">
        <span className="arrow-left" onClick={hideArticle}>
          {/* Strzałka do zamknięcia artykułu */}
          &#8592; {/* Strzałka w lewo */}
        </span>
      </div>
      <h2 className="tilte">PHOTO SESSION</h2> {/* Tytuł artykułu */}
      <p className="lowTilte">
        {/* Podtytuł artykułu */}
        Two ghostly white figures in coveralls and helmets are softly dancing
        lorem ipsum.
      </p>
      <p className="paragraf">
        {/* Paragraf tekstu */}
        Cras pretium metus pulvinar ultricies auctor. In varius purus blandit
        sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor.
        Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in
        heavy atoms descended from astronomers dream of the minds cras pretium
        metus pulvinar ultricies auctor.
      </p>
      <img src={item1} alt="" /> {/* Pierwszy obrazek */}
      <p className="paragraf">
        {/* Kolejny paragraf tekstu */}
        Cras pretium metus pulvinar ultricies auctor. In varius purus blandit
        sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor
        proin sit amet mauris
      </p>
      <img src={item2} alt="" /> {/* Drugi obrazek */}
      <p className="paragraf">
        {/* Ostatni paragraf tekstu */}
        Veleifend amet, ullamcorper lacus vangelis rich in heavy atoms descended
        from astronomers dream of the minds cras pretium metus pulvinar
        ultricies auctor.
      </p>
    </div>
  );
};
