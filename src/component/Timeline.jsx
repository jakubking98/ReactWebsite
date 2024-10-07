import "./Timeline.css";

// Komponent Timeline
export const Timeline = () => {
  return (
    <div className="GlobalElementBoxDark" id="timeline">
      <div className="GlobalContainer">
        {/* Tytuł sekcji */}
        <h2 className="GlobalSectorTitle">TIMELINE</h2>
        <div className="GlobalBoxPosition">
          {/* Numer i podtytuł dla pierwszego wpisu na osi czasu */}
          <div className="GlobalTitleNumber">08</div>
          <div className="GlobalSubTitle">
            Donec dipiscing elit ultrices nec id sed cursus
            <br /> tempor lipsum arcu lorem amet est per sei.
          </div>
          <div className="GlobalBoxParagraf">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              sodales dolor de arcu sagittis ultrices felis, faucibus tortor
              sed. In tristique ipsum fermentum diam lorem ipsum toleroeise
              molaris
            </p>
            <p>
              Nisl mi commodo enim nisl curabitur in massa id orci. Ut
              pellentesque donec aliquet pellentesque duis sollicitudin aliquet
              eget ridiculus euismod vito mores salominoli etorios babucas ati
              polimoro.
            </p>
          </div>

          {/* Kontener siatki z elementami ułożonymi naprzemiennie */}
          <div className="TimelineGrid">
            {/* Pierwszy wiersz: element po lewej, pusty obszar po prawej */}
            <div className="TimelineElement">
              <div className="item" style={{ background: "#688ce8" }}>
                <p className="date">2015 - 2016</p>
                <p className="paragraf">
                  Placerat in massa consectetur quisque. Nunc ac fames lectus in
                  libero aliquet est setera nunc.
                </p>
                <div className="Radius"></div> {/* Element do stylizacji */}
                <div className="Line"></div> {/* Linia łącząca */}
                <div className="Mark"></div> {/* Znacznik osi czasu */}
              </div>
            </div>
            <div className="space"></div> {/* Pusty obszar dla wyrównania */}
            <div className="nextHiden"></div>
            <div className="spaceHiden"></div>
            {/* Drugi wiersz: pusty obszar po lewej, element po prawej */}
            <div className="nextHiden"></div>
            <div className="space"></div>
            <div className="TimelineElementReverse">
              <div className="item" style={{ background: "#577DDD" }}>
                <p className="date">2016 - 2017</p>
                <p className="paragraf">
                  Turpis metus sit diam purus leo in variusquam nunc amet
                  tristique volutpat adipiscing vulputate.
                </p>
                <div className="Radius"></div>
                <div className="Line"></div>
                <div className="Mark"></div>
              </div>
            </div>
            <div className="spaceHiden"></div>
            {/* Trzeci wiersz: element po lewej, pusty obszar po prawej */}
            <div className="TimelineElement">
              <div className="item" style={{ background: "#4A6EC7" }}>
                <p className="date">2017 - 2019</p>
                <p className="paragraf">
                  Nunc amet tristique volutpa adipiscing vulputate phasellus.
                  Eget enim aliquam euismod.
                </p>
                <div className="Radius"></div>
                <div className="Line"></div>
                <div className="Mark"></div>
              </div>
            </div>
            <div className="space"></div>
            <div className="nextHiden"></div>
            <div className="spaceHiden"></div>
            {/* Czwarty wiersz: pusty obszar po lewej, element po prawej */}
            <div className="nextHiden"></div>
            <div className="space"></div>
            <div className="TimelineElementReverse">
              <div className="item" style={{ background: "#4062B7" }}>
                <p className="date">2019 - 2024</p>
                <p className="paragraf">
                  Eget enim aliquam euismod mauris in vitae viverra blandit
                  lectus faucibus diam consequat.
                </p>
                <div className="Radius"></div>
                <div className="Line"></div>
                <div className="Mark"></div>
              </div>
            </div>
            <div className="spaceHiden"></div>
            {/* Piąty wiersz: element po lewej, pusty obszar po prawej */}
            <div className="TimelineElement">
              <div className="item" style={{ background: "#2D50A6" }}>
                <p className="date">2024 - 2028</p>
                <p className="paragraf">
                  Amet, consectetur adipiscing elit. Fringilla sodales dolor de
                  arcu sagittis ultrices dolor sit nunc avec
                </p>
                <div className="Radius"></div>
                <div className="Line"></div>
                <div className="Mark"></div>
              </div>
            </div>
            <div className="space"></div>
            <div className="nextHiden"></div>
            <div className="spaceHiden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
