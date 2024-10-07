import "./App.css";
import "./component/menu.css";
import { Menu } from "./component/Menu";
import { menuItems } from "./component/menuItems";
import { Slider } from "./component/slider";
import { LinkInHeader } from "./component/linkInHeader";
import { Services } from "./component/Services";
import { About } from "./component/About";
import { Counter } from "./component/Counter";
import { Portfolio } from "./component/Portfolio";
import { Pricing } from "./component/PRICING";
import { Testimonial } from "./component/Testimonial";
import { Blog } from "./component/Blog";
import { Skill } from "./component/Skill";
import { Timeline } from "./component/Timeline";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";

function App() {
  return (
    <>
      <Menu items={menuItems} />
      <Slider />
      <LinkInHeader />
      <Services />
      <About />
      <Counter />
      <Portfolio />
      <Pricing />
      <Testimonial />
      <Blog />
      <Skill />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
