import "./Skill.css"; // Import stylów specyficznych dla komponentu Skill
import "./GlobalStyle.css"; // Import globalnych stylów aplikacji

// Komponent Skill odpowiedzialny za wyświetlanie umiejętności
export const Skill = () => {
  return (
    <>
      <div className="GlobalElementBoxGray" id="skills">
        {/* Sekcja umiejętności */}
        <div className="GlobalContainer">
          {/* Kontener dla zawartości */}
          <h2 className="GlobalSectorTitle">SKILLS</h2> {/* Tytuł sekcji */}
          <div className="GlobalBoxPosition">
            <div className="GlobalTitleNumber">07</div> {/* Numer sekcji */}
            <div className="GlobalSubTitle">
              Pellentesque habitant morbi tristique senectus
              <br />
              et netus et malesuada fames ac turpis
            </div>
            {/* Opis sekcji umiejętności */}
            <div className="GlobalBoxPositionFlexRow">
              {/* Flexbox dla układu listy umiejętności */}
              <div className="SkillList">
                {/* Lista umiejętności */}
                {/* Każdy element umiejętności */}
                <div className="SkillElement">
                  <div className="SkillTilte">PHOTOSHOP</div>
                  {/* Nazwa umiejętności */}
                  <div className="SklillLevel">
                    {/* Poziom umiejętności */}
                    <div
                      className="BlueLevel"
                      style={{ width: "80%" }}
                    ></div>{" "}
                    {/* Wskaźnik poziomu */}
                  </div>
                </div>
                <div className="SkillElement">
                  <div className="SkillTilte">MARKETING</div>
                  <div className="SklillLevel">
                    <div className="BlueLevel" style={{ width: "40%" }}></div>
                  </div>
                </div>
                <div className="SkillElement">
                  <div className="SkillTilte">AFFINITY</div>
                  <div className="SklillLevel">
                    <div className="BlueLevel" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </div>
              <div className="SkillList">
                {/* Druga lista umiejętności */}
                <div className="SkillElement">
                  <div className="SkillTilte">CODING</div>
                  <div className="SklillLevel">
                    <div className="BlueLevel" style={{ width: "40%" }}></div>
                  </div>
                </div>
                <div className="SkillElement">
                  <div className="SkillTilte">DEVELOPING</div>
                  <div className="SklillLevel">
                    <div className="BlueLevel" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="SkillElement">
                  <div className="SkillTilte">JAVA</div>
                  <div className="SklillLevel">
                    <div className="BlueLevel" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
