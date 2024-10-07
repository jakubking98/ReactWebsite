import "./Blog.css"; // Importowanie stylów specyficznych dla komponentu Blog
import "./GlobalStyle.css"; // Importowanie stylów globalnych

import blog1 from "../assets/blog01.jpg"; // Importowanie zdjęć do bloga
import blog2 from "../assets/blog02.jpg";

export const Blog = () => {
  return (
    <>
      {/* Sekcja bloga z ciemnym tłem, identyfikator "blog" dla nawigacji */}
      <div className="GlobalElementBoxDark" id="blog">
        <div className="GlobalContainer">
          {/* Nagłówek sekcji */}
          <h2 className="GlobalSectorTitle">BLOG</h2>

          {/* Kontener pozycji dla zawartości sekcji */}
          <div className="GlobalBoxPosition">
            {/* Numer sekcji */}
            <div className="GlobalTitleNumber">06</div>

            {/* Podtytuł sekcji z przykładowym tekstem */}
            <div className="GlobalSubTitle">
              Caucibus tortor sed. In tristique ipsum fermentum diam lorem est
              donec.
            </div>

            {/* Kontener na artykuły bloga ułożone w wierszu */}
            <div className="GlobalBoxPositionFlexRow">
              {/* Pojedynczy artykuł bloga */}
              <div className="BlogArticle">
                {/* Data publikacji */}
                <div className="datePublic">November 28, 2019</div>

                {/* Tytuł artykułu z linkiem */}
                <h4 className="tilte">
                  <a href="">
                    Hundreds of thousands a still more glorious nights around
                    art table
                  </a>
                </h4>

                {/* Obrazek artykułu ustawiony jako tło */}
                <div
                  className="foto"
                  style={{ backgroundImage: `url(${blog1})` }}
                ></div>

                {/* Fragment tekstu artykułu */}
                <div className="excerpt">
                  Bearable only through love hydrogen atoms bits of moving fluff
                  culture shores of the cosmic ocean paroxysm of global ...
                </div>
              </div>

              {/* Drugi artykuł bloga */}
              <div className="BlogArticle">
                <div className="datePublic">November 27, 2019</div>
                <h4 className="tilte">
                  <a href="">
                    Preserve and cherish that pale blue dot are creatures of the
                    cosmos light years
                  </a>
                </h4>
                <div
                  className="foto1"
                  style={{ backgroundImage: `url(${blog2})` }}
                ></div>{" "}
                <div className="excerpt">
                  Bearable only through love hydrogen atoms bits of moving fluff
                  culture shores of the cosmic ocean paroxysm of global ...
                </div>
              </div>
            </div>

            {/* Przycisk linku do wszystkich historii */}
            <div>
              <a href="" className="GlobalButtonLink">
                All Stories <p className="GlobalButtonLine"></p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
