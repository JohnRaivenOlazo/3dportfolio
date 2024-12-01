import { useEffect, useState } from "react";
import StarsCanvas from "../components/canvas/StarsCanvas";
import GlareEffect from "../components/canvas/GlareEffect";
import transition from "./transition";
import LeftContent from "../components/LeftContent";

const About = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "") {
              setActiveSection("");
            } else {
              setActiveSection(entry.target.id);
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

  return (
    <div className="main-container bg-main relative min-h-screen max-h-screen sm:h-screen overflow-y-scroll overflow-x-hidden sm:overflow-hidden">
      <StarsCanvas />
      <GlareEffect />
      <div className="sub-container px-8 md:px-0 lg:px-0 flex flex-col md:flex-row items-start justify-evenly h-full overflow-hidden sm:overflow-y-scroll relative sm:sticky">
        <div className="text-gray-50 p-4 md:p-8 rounded-lg mb-4 md:mb-0 w-full md:w-[56%] lg:w-1/2 sticky top-20 left-auto leading-none text-center sm:text-start">
          <LeftContent activeSection={activeSection} />
        </div>

        <div className="pt-24 pb-14 w-full h-full md:w-[40%] lg:w-[40%] text-gray-400">
          <div className="h-screen" id="about">
            ABOUT
          </div>
          <div className="h-screen" id="projects">
            PROJECTS
          </div>
          <div className="h-screen" id="technologies">
            TECHNOLOGIES
          </div>
          <div className="h-screen" id="certifications">
            CERTIFICATIONS
          </div>
          <div className="h-screen" id="contacts">
            CONTACTS
          </div>
          <div className="h-screen" id="footer">
            FOOTER
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(About);
