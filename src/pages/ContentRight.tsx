import { sections } from "../assets/data";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Projects from "../components/sections/Projects";
import Technologies from "../components/sections/Technologies";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContentRight = () => {
  return (
    <>
      {sections.map((section, index) => {
        const ref = useRef(null);
        const inView = useInView(ref, { once: true });

        return (
          <motion.div 
            key={section.id}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="title" id={section.id}>
              {index === sections.length - 1 ? null : (
                <div className="pt-36 pb-14 group text-white inline-block uppercase" id={section.id}>
                  <p className="tracking-[0.2em] group-hover:tracking-tighter transition-all duration-300 ease text-sm font-bold text-center">
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
          </motion.div>
        );
      })}
    </>
  );
};

export default ContentRight;
