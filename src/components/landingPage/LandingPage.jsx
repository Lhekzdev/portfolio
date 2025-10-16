import { useRef, useState, useEffect } from 'react';
import Skills from "../Skills.jsx";
import Experience from "../experience/Experience.jsx";
import AboutMe from "../aboutMe/AboutMe.jsx";

// import Portfolio from "../portfolio/Portfolio.jsx";
import Home from "../Home.jsx";
import Portfolio from "../portfolio/Portfolio.jsx";


import Contact from "../contactMe/Contact.jsx";









const LandingPage = () => {


  const topRef = useRef()
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (

    <div className="">
      
      <section ref={topRef} id="landingPage">
        <Home />


      </section>


      <section id="portfolio">
        <Portfolio />

      </section>
      <section id="AboutMe">
        <AboutMe />
      </section>



      <section id="skills">
        <Skills />
      </section>

      <section id ="experience">
        < Experience />
      </section>

      <section>

<Contact/>
      </section>


      <section>
        {showTopBtn && (
          <button onClick={scrollToTop} className="fixed bottom-4 right-4 bg-[hsl(172,90%,69%)] text-black px-4 py-2 rounded">
            ↑ Back to Top
          </button>

        )}
      </section>
    </div>
  )
}

export default LandingPage;