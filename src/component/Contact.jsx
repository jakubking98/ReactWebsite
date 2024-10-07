import "./Contact.css"; // Importowanie stylów specyficznych dla komponentu Contact
import { useState } from "react"; // Importowanie hooka useState z React

// Komponent Contact odpowiedzialny za wyświetlanie formularza kontaktowego
export const Contact = () => {
  const [activeField, setActiveField] = useState(""); // Stan śledzący aktywne pole formularza
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  }); // Stan przechowujący wartości pól formularza

  const [errors, setErrors] = useState({}); // Stan przechowujący błędy walidacji formularza

  // Funkcja ustawiająca aktywne pole formularza
  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  // Funkcja resetująca aktywne pole po opuszczeniu
  const handleBlur = () => {
    setActiveField("");
  };

  // Funkcja obsługująca zmiany w polach formularza
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Funkcja walidacji formularza
  const validate = () => {
    const newErrors = {};

    // Walidacja pola Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Walidacja pola Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }

    return newErrors;
  };

  // Funkcja obsługująca wysłanie formularza
  const handleSubmit = (e) => {
    e.preventDefault(); // Zapobiega domyślnej akcji przeglądarki

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Ustawienie błędów walidacji, jeśli istnieją
    } else {
      // Tutaj możesz obsłużyć wysłanie formularza, np. wysłać dane do API
      console.log("Form submitted successfully:", formData);

      // Resetowanie formularza po pomyślnym wysłaniu
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <>
      {/* Sekcja kontaktowa z szarym tłem, identyfikator "contact" dla nawigacji */}
      <div className="GlobalElementBoxGray" id="contact">
        <div className="GlobalContainer">
          {/* Nagłówek sekcji */}
          <h2 className="GlobalSectorTitle">CONTACT</h2>

          {/* Kontener pozycji dla zawartości sekcji */}
          <div className="GlobalBoxPosition">
            {/* Numer sekcji */}
            <div className="GlobalTitleNumber">09</div>

            {/* Podtytuł sekcji z przykładowym tekstem */}
            <div className="GlobalSubTitle">
              Donec dipiscing elit ultrices nec id sed cursus
              <br />
              tempor lipsum arcu lorem amet est per sei.
            </div>

            {/* Kontener na lewą i prawą część sekcji */}
            <div className="GlobalBoxPositionFlexRow">
              {/* Lewa część z formularzem kontaktowym */}
              <div className="ContactLeft">
                <div className="box1">
                  <form
                    className="contact-form"
                    onSubmit={handleSubmit} // Obsługa wysłania formularza
                    noValidate // Wyłączenie domyślnej walidacji przeglądarki
                  >
                    {/* Pole Name */}
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className={activeField === "name" ? "active" : ""} // Dodanie klasy 'active' jeśli pole jest aktywne
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange} // Obsługa zmiany wartości pola
                        onFocus={() => handleFocus("name")} // Ustawienie pola jako aktywne przy focuse
                        onBlur={handleBlur} // Resetowanie aktywnego pola przy blur
                        className={errors.name ? "input-error" : ""} // Dodanie klasy 'input-error' jeśli jest błąd
                      />
                      {errors.name && (
                        <span className="error">{errors.name}</span> // Wyświetlenie błędu walidacji, jeśli istnieje
                      )}
                    </div>

                    {/* Pole Email */}
                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className={activeField === "email" ? "active" : ""} // Dodanie klasy 'active' jeśli pole jest aktywne
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} // Obsługa zmiany wartości pola
                        onFocus={() => handleFocus("email")} // Ustawienie pola jako aktywne przy focuse
                        onBlur={handleBlur} // Resetowanie aktywnego pola przy blur
                        className={errors.email ? "input-error" : ""} // Dodanie klasy 'input-error' jeśli jest błąd
                      />
                      {errors.email && (
                        <span className="error">{errors.email}</span> // Wyświetlenie błędu walidacji, jeśli istnieje
                      )}
                    </div>

                    {/* Pole Subject */}
                    <div className="form-group">
                      <label
                        htmlFor="subject"
                        className={activeField === "subject" ? "active" : ""} // Dodanie klasy 'active' jeśli pole jest aktywne
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange} // Obsługa zmiany wartości pola
                        onFocus={() => handleFocus("subject")} // Ustawienie pola jako aktywne przy focuse
                        onBlur={handleBlur} // Resetowanie aktywnego pola przy blur
                      />
                    </div>

                    {/* Pole Message */}
                    <div className="form-group">
                      <label
                        htmlFor="message"
                        className={activeField === "message" ? "active" : ""} // Dodanie klasy 'active' jeśli pole jest aktywne
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange} // Obsługa zmiany wartości pola
                        onFocus={() => handleFocus("message")} // Ustawienie pola jako aktywne przy focuse
                        onBlur={handleBlur} // Resetowanie aktywnego pola przy blur
                      ></textarea>
                    </div>

                    {/* Przycisk wysłania formularza */}
                    <button type="submit" className="GlobalButtonLinkLowMargin">
                      Send Message<p className="GlobalButtonLine"></p>
                    </button>
                  </form>
                </div>
              </div>

              {/* Prawa część z informacjami kontaktowymi */}
              <div className="ContactRight">
                <div className="box">
                  {/* Tekst informacyjny */}
                  <div className="text">
                    Nisl mi commodo enim nisl curabitur in massa id orci. Ut
                    pellentesque se donec aliquet pellentesque duis est
                    sollicitudin aliquet eget ridiculus.
                  </div>
                  <div className="text">
                    In by an appetite no humoured returned informed.
                  </div>
                  {/* Informacje kontaktowe */}
                  <div>
                    <p className="text">
                      PHONE: (+98) 765 4321
                      <br />
                      EMAIL: company@youremail.com
                      <br />
                      ADDRESS: Some Street 987, USA
                      <br />
                      WEBSITE: www.yourwebsite.com
                    </p>
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
