import "./GlobalStyle.css"; // Import globalnych stylów
import { TestimonialSlider } from "./Testimonial/TestimonialSlider"; // Import suwaka testimonial

export const Testimonial = () => {
  return (
    <div className="GlobalElementBoxGray" id="testimonial">
      <div className="GlobalContainer">
        <h2 className="GlobalSectorTitle">TESTIMONIAL</h2>
        <div className="GlobalBoxPosition">
          <div className="GlobalTitleNumber">05</div>
          <div className="GlobalSubTitle">
            Fringilla sodales dolor de art sagittis ultrices felis, faucibus
            tortor sed. In tristique ipsum fermentum diam lorem est donec.
          </div>
          <div className="GlobalBoxParagraf">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              sodales dolor de arcu sagittis ultrices felis, faucibus tortor
              sed. In tristique ipsum fermentum diam lorem ipsum toleroeise
              molaris.
            </p>
            <p>
              Nisl mi commodo enim nisl curabitur in massa id orci. Ut
              pellentesque donec aliquet pellentesque duis sollicitudin aliquet
              eget ridiculus euismod vito mores salominoli etorios babucas ati
              polimoro.
            </p>
          </div>
          <TestimonialSlider /> {/* Osadzenie suwaka testimonial */}
        </div>
      </div>
    </div>
  );
};
