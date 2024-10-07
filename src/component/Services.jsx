import "./GlobalStyle.css"; // Import stylów globalnych
import "./Services.css"; // Import stylów specyficznych dla sekcji

export const Services = () => {
  return (
    <>
      <div className="GlobalElementBoxDark" id="services">
        {/* Kontener dla sekcji usług */}
        <div className="GlobalContainer">
          {/* Ogólny kontener dla zawartości */}
          <h2 className="GlobalSectorTitle">SERVICES</h2> {/* Tytuł sekcji */}
          <div className="GlobalBoxPosition">
            {/* Kontener dla tytułu i usług */}
            <div className="GlobalTitleNumber">01</div> {/* Numer sekcji */}
            <div className="GlobalSubTitle">
              {/* Podtytuł sekcji */}
              Services odales dolor de art sagittis ultrices felis faucibus
              tortor sed in tristique ipsum ermen
            </div>
            <div className="threeElementbox">
              {/* Kontener dla elementów usług */}
              <div className="element1">
                {/* Pierwszy element - DESIGN */}
                <p>01</p>
                <h3>DESIGN</h3>
                <div>
                  Mauris volutpat lectus nisi, vel ullamcorper nulla elem
                  porttitor class aptent taciti socios adlik lorem ipsum
                </div>
              </div>
              <div className="element2">
                {/* Drugi element - CODE */}
                <p>02</p>
                <h3>CODE</h3>
                <div>
                  Conubia nostra, per incept himenaeos proin fringilla eget
                  lacus vel porttitor ellentesque cursus massa
                </div>
              </div>
              <div className="element3">
                {/* Trzeci element - CLOUD */}
                <p>03</p>
                <h3>CLOUD</h3>
                <div>
                  In dolor dapibus vehicula nullam gravida dictum ex, non
                  lacinia risus donec blandit tincidunt eleifend
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
