import "./Counter.css"; // Importowanie stylów specyficznych dla komponentu Counter
import "./GlobalStyle.css"; // Importowanie stylów globalnych
import { useState, useEffect, useRef } from "react"; // Importowanie hooków useState, useEffect i useRef z React

// Komponent Counter odpowiedzialny za wyświetlanie liczników z animacją
export const Counter = () => {
  const NumberCountr = (start, end, duration, isVisible) => {
    const [currentNumber, setCurrentNumber] = useState(start); // Stan przechowujący aktualną wartość licznika

    useEffect(() => {
      if (!isVisible) return; // Animacja startuje tylko, gdy element jest widoczny

      const startTime = performance.now(); // Czas rozpoczęcia animacji
      const diff = end - start; // Różnica między końcową a początkową wartością

      /**
       * Funkcja aktualizująca wartość licznika na podstawie czasu
       * @param {number} currentTime - Aktualny czas
       */
      const updateNumber = (currentTime) => {
        const elapsedTime = currentTime - startTime; // Czas, który upłynął od rozpoczęcia animacji
        const progress = Math.min(elapsedTime / duration, 1); // Progres animacji (od 0 do 1)
        const newNumber = start + Math.floor(diff * progress); // Nowa wartość licznika

        setCurrentNumber(newNumber); // Aktualizacja stanu licznika

        if (progress < 1) {
          requestAnimationFrame(updateNumber); // Kontynuacja animacji
        }
      };

      requestAnimationFrame(updateNumber); // Inicjalizacja animacji
    }, [start, end, duration, isVisible]); // Uruchomienie efektu przy zmianie tych zależności

    return currentNumber; // Zwraca aktualną wartość licznika
  };

  /**
   * Hook do śledzenia widoczności elementu na ekranie
   * @param {Object} options - Opcje dla IntersectionObserver
   * @returns {[ref, boolean]} - Ref do elementu i flaga widoczności
   */
  const useElementOnScreen = (options) => {
    const containerRef = useRef(null); // Ref do obserwowanego elementu
    const [isVisible, setIsVisible] = useState(false); // Stan przechowujący widoczność elementu

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting); // Ustawienie widoczności na podstawie obserwacji
      }, options);

      if (containerRef.current) {
        observer.observe(containerRef.current); // Rozpoczęcie obserwacji elementu
      }

      // Czyszczenie obserwatora przy odmontowaniu komponentu lub zmianie opcji
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current); // Zakończenie obserwacji
        }
      };
    }, [options]); // Uruchomienie efektu przy zmianie opcji

    return [containerRef, isVisible]; // Zwraca ref i flagę widoczności
  };

  // Użycie hooka do śledzenia widoczności sekcji z licznikami
  const [counterRef, isVisible] = useElementOnScreen({
    root: null, // Śledzenie względem viewportu
    rootMargin: "0px", // Margines obserwacji
    threshold: 0.1, // 10% widoczności, aby uruchomić animację
  });

  // Uruchomienie liczników tylko wtedy, gdy element jest widoczny
  const number1 = NumberCountr(0, 7, 1500, isVisible); // Licznik od 0 do 7 w 1,5 sekundy
  const number2 = NumberCountr(0, 5, 1500, isVisible); // Licznik od 0 do 5 w 1,5 sekundy
  const number3 = NumberCountr(130, 137, 1500, isVisible); // Licznik od 130 do 137 w 1,5 sekundy

  return (
    <>
      {/* Sekcja liczników z ciemnym tłem */}
      <div className="GlobalElementBoxDark">
        <div className="GlobalContainer" ref={counterRef}>
          {" "}
          {/* Ref do śledzenia widoczności */}
          <div className="GlobalBoxPosition">
            {/* Tytuł sekcji */}
            <div className="CounterTitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              sodales dolor de arcu sagittis ultrices felis, faucibus tortor sed
            </div>

            {/* Kontener na trzy elementy licznikowe */}
            <div className="three-Element">
              {/* Pierwszy licznik */}
              <div className="element1">
                <p>4.{number1} K</p>{" "}
                {/* Wyświetlanie aktualnej wartości licznika */}
                <span>Downloads</span> {/* Opis licznika */}
              </div>

              {/* Drugi licznik */}
              <div className="element2">
                <p>2.{number2} K+</p>{" "}
                {/* Wyświetlanie aktualnej wartości licznika */}
                <span>Campaigns</span> {/* Opis licznika */}
              </div>

              {/* Trzeci licznik */}
              <div className="element3">
                <p>{number3}</p>{" "}
                {/* Wyświetlanie aktualnej wartości licznika */}
                <span>Users</span> {/* Opis licznika */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
