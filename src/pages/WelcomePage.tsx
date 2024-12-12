import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState } from "react";

const WelcomePage = ({ setIsWelcomePage }: { setIsWelcomePage: Function }) => {
  const { progress } = useProgress();
  const [isExiting, setIsExiting] = useState(false);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => setIsWelcomePage(false), 1000);
  };

  return (
<motion.div
  className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black text-white z-50"
  initial={{ opacity: 1, scale: 1, borderRadius: "0%" }}
  animate={
    isExiting
      ? {
          opacity: 0, 
          scale: 0, 
          borderRadius: "100%", 
        }
      : {
          opacity: 1,
          scale: 1,
          borderRadius: "0%"
        }
  }
  transition={{
    duration: 2, // Adjust for a smoother, slower animation
    ease: [0.22, 1, 0.36, 1]
  }}
>

      <div className="text-xl mb-4">Loading {Math.round(progress)}%</div>
      <div className="w-3/4 bg-gray-700 h-2 rounded">
        <div
          className="bg-green-500 h-2 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button
        className={`mt-8 px-6 py-2 bg-green-500 text-white font-bold rounded ${
          progress < 100 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
        disabled={progress < 100}
        onClick={handleExit}
      >
        Explore World
      </button>
    </motion.div>
  );
};

export default WelcomePage;
