import { useEffect, useState } from "react";
import StarsCanvas from "../components/canvas/StarsCanvas";
import GlareEffect from "../components/canvas/GlareEffect";
import transition from "./transition";
import ContentLeft from "../components/ContentLeft";
import ContentRight from "../components/ContentRight";

const About = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".title[id]");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "") {
              setActiveSection("");
            } else {
              setActiveSection(entry.target.id);
              history.replaceState(null, "", window.location.pathname);
            }
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  //Scroll to the section if the URL has a hash
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView();
      }
    }
  }, []);
  
  return (
    <div className="main-container bg-main relative min-h-screen max-h-screen sm:h-screen overflow-y-scroll overflow-x-hidden sm:overflow-hidden">
      <StarsCanvas />
      <GlareEffect />
      <div className="sub-container relative px-8 md:px-0 lg:px-0 flex flex-col md:flex-row justify-evenly h-full overflow-hidden sm:overflow-y-scroll">
        <div className="text-gray-50 p-4 md:p-8 mb-4 md:mb-0 w-full md:w-[57%] lg:w-auto relative lg:sticky top-24 left-auto leading-none text-center md:text-start">
          <ContentLeft activeSection={activeSection} />
        </div>

        <div className="pb-14 w-full ml-0 lg:ml-20 h-full md:w-[35%] lg:w-[40%] text-gray-400">
          <ContentRight />
        </div>
      </div>
    </div>
  );
};

export default transition(About);
