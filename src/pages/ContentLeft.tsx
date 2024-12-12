import { useRef } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { sections } from "../assets/data";
import { useInView, motion } from "framer-motion";

const ContentLeft = ({ activeSection }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xl sm:text-2xl font-medium tracking-tighter">
        <span className="text-white">Hi, I'm Raiven!</span>
      </p>
      <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700">
        Development
      </p>
      <p className="text-white text-2xl sm:text-3xl font-extrabold">
        My passion and profession.
      </p>
      <div className="mt-4 sm:mt-6 flex items-center gap-3 flex-wrap text-xs sm:text-sm justify-center md:justify-start cursor-pointer">
        <span className="relative py-1 px-4 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 hover:-translate-y-1 transition-all duration-300 ease before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-teal-300 before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2">
          <span className="bg-clip-text text-gray-50">&nbsp;Full-Stack</span>
        </span>
        <span className="relative py-1 px-4 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 hover:-translate-y-1 transition-all duration-300 ease before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-teal-300 before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2">
          <span className="bg-clip-text text-gray-100">&nbsp;Web</span>
        </span>
        <span className="relative py-1 px-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:-translate-y-1 transition-all duration-300 ease before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-teal-300 before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2">
          <span className="bg-clip-text text-gray-200">&nbsp;Mobile</span>
        </span>
      </div>

      <div className="mt-10 text-gray-400 hidden md:block">
        <ul className="flex flex-col gap-5 group uppercase text-sm">
          {sections.map((section, index) => {
            if (index === sections.length - 1) return null;
            return (
            <a href={`#${section.id}`} key={section.id}>
              <li className={`flex items-center gap-2 transition-colors duration-300 hover:text-white ${activeSection === section.id && "text-white"}`}>
                <span className={`h-[0.5px] bg-white transition-all duration-300 ease ${activeSection === section.id ? "w-20" : "w-10"}`} />
                <span>{section.label}</span>
              </li>
            </a>
           )
          })}
        </ul>
      </div>

      <div className="mt-5 sm:mt-10 flex gap-5 justify-center md:justify-start">
        <a href="https://www.linkedin.com/in/john-raiven-olazo" target="_blank" className="w-6 h-6 text-gray-400 hover:text-gray-300 hover:-translate-y-1 transition-all duration-300 ease">
          <FaLinkedin className="w-full h-full" />
        </a>
        <a href="https://github.com/JohnRaivenOlazo" target="_blank" className="w-6 h-6 text-gray-400 hover:text-gray-300 hover:-translate-y-1 transition-all duration-300 ease">
          <FaGithub className="w-full h-full" />
        </a>
        <a href="https://www.facebook.com/johnraivenolazo" target="_blank" className="w-6 h-6 text-gray-400 hover:text-gray-300 hover:-translate-y-1 transition-all duration-300 ease">
          <FaFacebook className="w-full h-full" />
        </a>
      </div>
    </motion.div>
  );
};

export default ContentLeft;
