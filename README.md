Polski:

ReactWebsite 

Opis Projektu:
Jest to strona internetowa zbudowana w technologii React, składająca się z wielu dynamicznych komponentów, które tworzą interaktywne i responsywne doświadczenie użytkownika. Projekt zawiera różnorodne sekcje, takie jak portfolio, blog, formularz kontaktowy oraz suwak z efektami paralaksy. Kod jest modularny i zoptymalizowany pod kątem wydajności i elastyczności.

Główne technologie i metody:
React Hooks: Projekt wykorzystuje hooki takie jak useState, useEffect oraz useRef do zarządzania stanem, śledzenia efektów oraz manipulacji DOM.

useState używany jest do dynamicznej zmiany stanów, jak w przypadku zmiany indeksu w suwakach obrazów lub liczników.
useEffect używany jest do śledzenia scrolla strony oraz inicjalizacji animacji i efektów, np. paralaksy.
useRef pomaga w zarządzaniu komponentami oraz ich właściwościami, np. w przypadku referencji do slajdów lub modali.
Modularność komponentów: Strona składa się z wielu oddzielnych komponentów, takich jak Menu, Slider, Services, Portfolio, Testimonial, które są importowane i używane w głównym komponencie App. To podejście sprzyja czytelności kodu i jego wielokrotnemu użyciu.

Responsywność i dostępność: Projekt zawiera elementy takie jak mobilne menu, które otwiera się i zamyka w odpowiedzi na interakcje użytkownika. Stylowanie opiera się na CSS, co zapewnia responsywność oraz intuicyjne doświadczenie na urządzeniach mobilnych.

Efekty animacji: Komponenty takie jak Slider oraz Counter korzystają z animacji do płynnego przejścia między stanami oraz wyświetlania dynamicznych treści, np. przejścia między slajdami lub animowane liczniki.

Interaktywne galerie i filtry: Sekcja Portfolio oferuje użytkownikom możliwość filtrowania treści (obrazki, tekst, wideo), co jest zarządzane poprzez dynamiczne przyciski filtrujące i komponenty renderowane warunkowo.

Formularz kontaktowy: Sekcja Contact zawiera walidowany formularz, który śledzi zmiany w polach oraz zarządza stanem błędów, zapewniając poprawność danych przed ich wysłaniem.

Technologie
React: Podstawowy framework do budowy interfejsu użytkownika, pozwalający na łatwe tworzenie komponentów.
CSS: Używany do stylizacji strony w celu uzyskania nowoczesnego i atrakcyjnego wyglądu.
Vite: Narzędzie do szybkiego budowania, które przyspiesza proces deweloperski.

Jak uruchomić projekt: 

Wystarczy kliknąć w ten link : https://jakubking98.github.io/ReactWebsite/

English:

React Website: 

Project Description
This is a website built using React technology, consisting of multiple dynamic components that create an interactive and responsive user experience. The project includes various sections such as portfolio, blog, contact form, and a slider with parallax effects. The code is modular and optimized for performance and flexibility.

Key Technologies and Methods:
React Hooks: The project utilizes hooks like useState, useEffect, and useRef for state management, effect tracking, and DOM manipulation.

useState is used for dynamically changing states, such as in image sliders or counters.
useEffect is used to track page scrolling and initialize animations and effects like parallax.
useRef helps manage components and their properties, such as handling references to slides or modals.
Component Modularization: The site is composed of several distinct components, such as Menu, Slider, Services, Portfolio, Testimonial, which are imported and used in the main App component. This approach promotes code readability and reusability.

Responsiveness and Accessibility: The project includes features like a mobile menu that opens and closes based on user interaction. Styling is based on CSS, ensuring responsiveness and an intuitive experience on mobile devices.

Animation Effects: Components like Slider and Counter use animations for smooth transitions between states and the display of dynamic content, such as slide transitions or animated counters.

Interactive Galleries and Filters: The Portfolio section offers users the ability to filter content (images, text, video), managed through dynamic filter buttons and conditionally rendered components.

Contact Form: The Contact section features a validated form that tracks changes in fields and manages error states, ensuring data correctness before submission.

Technologies
React: The primary framework for building the user interface, allowing for easy component creation.
CSS: Used for styling the page to achieve a modern and attractive look.
Vite: A fast build tool that accelerates the development process.

How to Run the Project:
Simply click this link: https://jakubking98.github.io/ReactWebsite/





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
