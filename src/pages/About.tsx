import { useEffect, useState } from "react";
import StarsCanvas from "../components/canvas/StarsCanvas";
import GlareEffect from "../components/canvas/GlareEffect";
import transition from "./transition";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

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
    <div className="main-container relative min-h-screen max-h-screen overflow-x-hidden overflow-y-scroll bg-main sm:h-screen sm:overflow-hidden">
      <StarsCanvas />
      <GlareEffect />
      <div className="sub-container relative flex flex-col justify-center px-8 h-full overflow-hidden md:px-0 md:flex-row md:justify-end md:pr-5 lg:pr-20 sm:overflow-y-scroll">
        <div className="relative top-24 p-4 mb-4 w-full text-center md:fixed md:left-12 md:top-1/2 md:-translate-y-1/2 md:p-8 md:mb-0 md:w-auto md:text-start lg:left-20 lg:top-1/2 lg:-translate-y-1/2 lg:w-auto">
          <ContentLeft activeSection={activeSection} />
        </div>

        <div className="pb-14 w-full h-full text-gray-400 md:w-[40%] lg:ml-20">
          <ContentRight />
        </div>
      </div>
    </div>
  );
};

export default transition(About);
