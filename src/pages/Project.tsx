import StarsCanvas from "../components/canvas/StarsCanvas";
import GlareEffect from "../components/canvas/GlareEffect";
import transition from "./transition";
import {projects} from "../assets/data/index.ts";
import TypewriterComponent from "typewriter-effect";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

const Project = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);

  return (
    <div className="bg-main relative min-h-screen overflow-hidden">
      <StarsCanvas />
      <GlareEffect />
      <div className="w-full h-auto flex flex-col justify-start items-center relative text-white p-24 lg:p-28">
      <h1 className="text-3xl md:text-4xl text-gray-400 mb-4">{`<`}</h1>
      <h1 className="text-center mb-2 text-3xl md:text-4xl">
          <TypewriterComponent
            options={{
              strings: [
                "Web",
                "Mobile",
                "AI",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
              delay: 120
            }}
          />
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-sm lg:text-md text-gray-400 text-center max-w-2xl leading-relaxed tracking-tight">
          <span className="text-white">Welcome to my project portfolio!</span> Here, you'll find a collection of my <span className="text-white">significant</span> and <span className="text-white">impactful</span> projects. 
          Each project showcases my <span className="text-white">skills</span>, <span className="text-white">creativity</span>, and <span className="text-white">dedication</span> to delivering high-quality work. 
          <span className="text-white"> Explore</span> the projects I've developed.
        </p>
        <h1 className="text-3xl md:text-4xl text-gray-400 mt-4 mb-8">{`/>`}</h1>

        <div className="flex space-x-2 md:space-x-4 mb-8">
          {["All", "Web", "Mobile","Cross-Platform", "AI", "Other"].map(category => (
            <button
              key={category}
              className={`text-xs sm:text-md px-3 py-1 md:px-4 md:py-2 rounded-full ${filter === category ? "bg-blue-500" : "glassmorphism text-gray-400"}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map(project => (
            <Tilt key={project.id} options={{ max: 25, scale: 1.00 }}>
              <motion.div
          className="p-4 rounded-lg shadow-lg hover:glassmorphism transition-all duration-300 hover:bg-gray-900"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
              >
          <img src={project.image} alt={project.title} className="w-full h-auto object-contain rounded-xl mb-4" />
          <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
          <p className="text-gray-400 mb-2 text-sm">Category: {project.category}</p>
          <p className="text-gray-400 text-sm">{project.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
        <div className="mt-24 flex flex-col gap-2 text-center items-center">
        <p className="text-lg mb-4 font-bold">Got a project you want to work on?</p>
        <p className="text-sm mb-6 max-w-2xl text-center text-gray-400">
          If you’ve got an idea or a challenge you want to tackle, I’d love to help you bring it to life. Let's team up and make it happen!
        </p>
        <Link
        to="/contact"
        className="inline-block px-6 py-3 glassmorphism text-white font-bold rounded-lg shadow-lg transition-colors duration-300"
        >
          Connect with me!
        </Link>
        </div>
      </div>
    </div>
  );
};

export default transition(Project);