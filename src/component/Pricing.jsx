import "./GlobalStyle.css"; // Import stylów globalnych
import "./Pricing.css"; // Import stylów dla komponentu Pricing

export const Pricing = () => {
  return (
    <>
      <div className="GlobalElementBoxDark" id="pricing">
        {/* Główny kontener sekcji z cenami */}
        <div className="GlobalContainer">
          {/* Kontener dla treści */}
          <h2 className="GlobalSectorTitle">PRICING</h2> {/* Tytuł sekcji */}
          <div className="GlobalBoxPosition">
            {/* Kontener dla poszczególnych elementów cenowych */}
            <div className="GlobalTitleNumber">04</div> {/* Numer sekcji */}
            <div className="GlobalSubTitle">
              Dolor de art sagittis ultrices felis, faucibus tortor
              <br /> sed. In tristique ipsum fermentum diam lorem.
            </div>
            <div className="GlobalBoxParagraf">
              {/* Kontener dla paragrafów opisujących ceny */}
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
            <div className="PriceList">
              {/* Kontener dla listy cen */}
              <div className="elementBox">
                {/* Pierwszy element cenowy */}
                <p className="NamePlan">START</p> {/* Nazwa planu */}
                <p className="NamePlanBottom">For small businesses</p>
                {/* Opis planu */}
                <div className="pricing-holder">
                  {/* Kontener dla informacji o cenie */}
                  <div className="pricing-header">
                    {/* Nagłówek ceny */}
                    <span className="pricing-currency">$</span>
                    {/* Symbol waluty */}
                    <span className="pricing-price">39</span> {/* Cena */}
                    <span className="pricing-price-suffix">/mo</span>
                    {/* Okres płatności */}
                  </div>
                  <div className="pricing-content">
                    {/* Zawartość z listą funkcji */}
                    <ul>
                      <li>
                        <span>&#x2714;</span>Unlimited Support {/* Funkcja 1 */}
                      </li>
                      <li>
                        <span>&#x2714;</span>5GB Server Space {/* Funkcja 2 */}
                      </li>
                      <li>
                        <span>&#x2714;</span>2 Users per Project
                        {/* Funkcja 3 */}
                      </li>
                      <li>
                        <span />
                        <s>Free Domain</s> {/* Funkcja 4 - niedostępna */}
                      </li>
                      <li>
                        <span />
                        <s>Live Chat Support</s> {/* Funkcja 5 - niedostępna */}
                      </li>
                      <li>
                        <span />
                        <s>Email Integration</s> {/* Funkcja 6 - niedostępna */}
                      </li>
                      <li>
                        <span />
                        <s>Unlimited Download</s>
                        {/* Funkcja 7 - niedostępna */}
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <a href="" className="GlobalButtonLinkLowMargin">
                    {/* Link do wyboru planu */}
                    Choose Now <p className="GlobalButtonLine"></p>
                    {/* Przycisk */}
                  </a>
                </div>
              </div>
              {/* Kolejne elementy cenowe */}
              <div className="elementBox">
                {/* Drugi element cenowy */}
                <p className="NamePlan">FULL</p>
                <p className="NamePlanBottom">Best buy for the price</p>
                <div className="pricing-holder-full">
                  {/* Kontener dla informacji o cenie */}
                  <div className="pricing-header">
                    {/* Nagłówek ceny */}
                    <span className="pricing-currency">$</span>
                    <span className="pricing-price">59</span>
                    <span className="pricing-price-suffix">/mo</span>
                  </div>
                  <div className="pricing-content">
                    {/* Zawartość z listą funkcji */}
                    <ul>
                      <li>
                        <span>&#x2714;</span>Unlimited Support {/* Funkcja 1 */}
                      </li>
                      <li>
                        <span>&#x2714;</span>30GB Server Space {/* Funkcja 2 */}
                      </li>
                      <li>
                        <span>&#x2714;</span>10 Users per Project
                        {/* Funkcja 3 */}
                      </li>
                      <li>
                        <span>&#x2714;</span> Free Domain {/* Funkcja 4 */}
                      </li>
                      <li>
                        <span>&#x2714;</span> Live Chat Support
                        {/* Funkcja 5 */}
                      </li>
                      <li>
                        <span>&#x2714;</span> Email Integration
                        {/* Funkcja 6 */}
                      </li>
                      <li>
                        <span>&#x2714;</span> SEO Report {/* Funkcja 7 */}
                      </li>
                      <li>
                        <span>&#x2714;</span> Daily Backups {/* Funkcja 8 */}
                      </li>
                      <li>
                        <span>&#x2714;</span> Google Analytics {/* Funkcja 9 */}
                      </li>
                      <li>
                        <span>&#x2714;</span> Unlimited Download
                        {/* Funkcja 10 */}
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <a href="" className="GlobalButtonLink">
                    {/* Link do wyboru planu */}
                    Choose Now <p className="GlobalButtonLine"></p>
                    {/* Przycisk */}
                  </a>
                </div>
              </div>
              <div className="elementBox">
                {/* Trzeci element cenowy */}
                <p className="NamePlan">START</p>
                <p className="NamePlanBottom">For small businesses</p>
                <div className="pricing-holder">
                  {/* Kontener dla informacji o cenie */}
                  <div className="pricing-header">
                    {/* Nagłówek ceny */}
                    <span className="pricing-currency">$</span>
                    <span className="pricing-price">39</span>
                    <span className="pricing-price-suffix">/mo</span>
                  </div>
                  <div className="pricing-content">
                    {/* Zawartość z listą funkcji */}
                    <ul>
                      <li>
                        <span>&#x2714;</span>Unlimited Support {/* Funkcja 1 */}
                      </li>
                      <li>
                        <span>&#x2714;</span>10GB Server Space {/* Funkcja 2 */}
                      </li>
                      <li>
                        <span>&#x2714;</span>5 Users per Project
                        {/* Funkcja 3 */}
                      </li>
                      <li>
                        <span>&#x2714;</span> Free Domain {/* Funkcja 4 */}
                      </li>
                      <li>
                        <span>&#x2714;</span> Live Chat Support
                        {/* Funkcja 5 */}
                      </li>
                      <li>
                        <span />
                        <s>Email Integration</s> {/* Funkcja 6 - niedostępna */}
                      </li>
                      <li>
                        <span />
                        <s>Unlimited Download</s>
                        {/* Funkcja 7 - niedostępna */}
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <a href="" className="GlobalButtonLink">
                    {/* Link do wyboru planu */}
                    Choose Now <p className="GlobalButtonLine"></p>
                    {/* Przycisk */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
