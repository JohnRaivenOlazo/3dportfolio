import { sections } from "../assets/data";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Projects from "../components/sections/Projects";
import Technologies from "../components/sections/Technologies";

const ContentRight = () => {
  return (
    <>
      {sections.map((section, index) => (
        <div key={section.id}>
          <div className="title" id={section.id}>
            {index === sections.length - 1 ? null : (
              <div className="pt-36 pb-14 group text-white inline-block uppercase" id={section.id}>
                <p className="tracking-[0.2em] group-hover:tracking-tighter transition-all duration-300 ease font-bold">
                  {section.label}
                </p>
                <hr className="max-w-0 group-hover:max-w-full transition-all duration-300 ease" />
              </div>
            )}
            {(() => {
              switch (section.id) {
                case "overview":
                  return <About />;
                case "projects":
                  return <Projects />;
                case "technologies":
                  return <Technologies />;
                case "contact":
                  return <Contact />;
                default:
                  return <Footer />;
              }
            })()}
          </div>
        </div>
      ))}
    </>
  );
};

export default ContentRight;
