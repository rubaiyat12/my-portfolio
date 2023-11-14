import {useEffect, useState } from "react";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
// import MySkills from "./scenes/MySkills";
// import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import LineGradient from "./components/LineGradient";
// import Skills from "./scenes/Skills";

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
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="app bg-deep-blue">

      <Navbar
      isTopOfPage={isTopOfPage}
       selectedPage={selectedPage}
       setSelectedPage={setSelectedPage} />

<div className="w-5/6 mx-auto md:h-full ">
       {
        isAboveMediumScreens && (
          <DotGroup

          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}

           />
        )
       }
       <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:full">
        {/* <Skills /> */}

        <AboutMe/>

       
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:full">
        {/* <Skills /> */}

        <SkillR/>

       
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <Testimonials />
        
      </div>
     
      


      
      <div className="w-5/6 mx-auto  md:h-full  ">
        <Contact />
        
      </div>

      <div className="mt-50">
      <Footer  />

      </div>
      
      
        
      
     

      
    </div>
  );
}

export default App;
