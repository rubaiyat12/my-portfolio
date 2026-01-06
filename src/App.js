import { useEffect, useState } from "react";
import Landing from "./scenes/Landing";
// import DotGroup from "./scenes/DotGroup";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Project/Projects";
import SkillR from "./scenes/SkillR";
import AboutMe from "./scenes/AboutMe";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:full">
        <AboutMe />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:full">
        <SkillR />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>

      <div className="mt-50">
        <Footer />
      </div>
    </div>
  );
}

export default App;
