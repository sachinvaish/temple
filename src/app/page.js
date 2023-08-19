import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Slider from "./components/Slider";

export default function Home() {
  return <main>
        <Slider/>
        <AboutSection/>
        <Gallery/>
        <Events/>
        <Contact/>
        <Location/>
  </main>;
}
