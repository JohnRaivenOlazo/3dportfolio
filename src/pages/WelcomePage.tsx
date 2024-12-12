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
  animate={isExiting ? { opacity: 0 }: { opacity: 1,scale: 1 }}
  transition={{ duration: 0.8, ease:[0.22, 1, 0.36, 1] }}
>
      <button className={`relative top-0 w-1/4 bg-gray-400 h-14 rounded-full text text-white text-center font-bold 
      ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
        disabled={loading}
        onClick={handleExit}
      >
        <div className="absolute top-0 bg-teal-500 h-14 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        <p className="absolute inset-0 flex items-center justify-center text-2xl">{loading ? "Loading..." : <>Explore World <FaArrowRight className="ml-2 inline-block"/></>}</p>
      </button>
    </motion.div>
  );
};

export default WelcomePage;
