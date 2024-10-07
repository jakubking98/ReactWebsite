import { GrabSlider } from "./About/GrabSlider"; // Import komponentu GrabSlider do sekcji About
import "./GlobalStyle.css"; // Import stylów globalnych

// Komponent About, który odpowiada za renderowanie sekcji "ABOUT" na stronie
export const About = () => {
  return (
    <>
      {/* Sekcja zawierająca informację "ABOUT", z zastosowaniem globalnych stylów */}
      <div className="GlobalElementBoxGray" id="about">
        <div className="GlobalContainer">
          {/* Nagłówek sekcji */}
          <h2 className="GlobalSectorTitle">ABOUT</h2>

          {/* Kontener pozycji dla zawartości sekcji */}
          <div className="GlobalBoxPosition">
            {/* Numer sekcji */}
            <div className="GlobalTitleNumber">02</div>

            {/* Podtytuł sekcji z przykładowym tekstem */}
            <div className="GlobalSubTitle">
              Fringilla sodales dolor de art sagittis ultrices felis, faucibus
              tortor sed. In tristique ipsum fermentum diam lorem est donec.
            </div>

            {/* Kontener dla paragrafów z tekstem */}
            <div className="GlobalBoxParagraf">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fringilla sodales dolor de arcu sagittis ultrices felis,
                faucibus tortor sed. In tristique ipsum fermentum diam lorem
                ipsum toleroeise molaris
              </p>
              <p>
                Nisl mi commodo enim nisl curabitur in massa id orci. Ut
                pellentesque donec aliquet pellentesque duis sollicitudin
                aliquet eget ridiculus euismod vito mores salominoli etorios
                babucas ati polimoro.
              </p>
            </div>

            {/* Komponent GrabSlider - slider w sekcji */}
            <GrabSlider />
          </div>
        </div>
      </div>
    </>
  );
};
