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
    <>
      <StarsCanvas />
      <GlareEffect />
      <div className="sub-container flex flex-col justify-start px-8 overflow-x-hidden max-h-screen lg:px-0 lg:flex-row lg:justify-center lg:gap-40">
        <div className="relative top-0 translate-y-1/2 p-4 mb-4 w-full text-center lg:p-8 lg:sticky lg:mb-0 lg:text-start lg:translate-y-24 lg:w-auto m-0 lg:ml-12">
          <ContentLeft activeSection={activeSection} />
        </div>
        <div className="pb-14 w-full lg:w-[35rem] m-0 lg:mr-20">
          <ContentRight />
        </div>
      </div>
    </>
  );
};

export default transition(About);
