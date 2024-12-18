import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const WelcomePage = ({ setIsWelcomePage }: { setIsWelcomePage: Function }) => {
  const { progress } = useProgress();
  const [isExiting, setIsExiting] = useState(false);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => setIsWelcomePage(false), 1000);
  };

  const loading = progress < 100;

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black text-white z-50"
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="text-center mb-4 sm:mb-16"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-wider mb-0 sm:mb-4 px-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          <span className="hidden sm:inline-block">John</span> Raiven <span className="hidden sm:inline-block">Olazo</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
        >
          Full Stack Developer
        </motion.p>
      </motion.div>

      <button className={`relative top-0 w-60 rounded-full h-10 sm:h-12 text text-white text-center group hover:scale-110 transition-all ease-in
      ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
        disabled={loading}
        onClick={handleExit}
      >
        <div className="absolute top-0 glassmorphism h-10 sm:h-12 transition-all duration-300" style={{ width: `${progress}%` }} />
        <p className="absolute inset-0 flex items-center justify-center text-lg transition-all group-hover:tracking-wide sm:text-xl">{loading ? "Loading..." : <>Explore World <FaArrowRight className="ml-1 sm:ml-2 h-4 w-6 inline-block transition-all group-hover:translate-x-2"/></>}</p>
      </button>
    </motion.div>
  );
};

export default WelcomePage;
