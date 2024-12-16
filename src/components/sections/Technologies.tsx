import { useInView } from "react-intersection-observer";
import { technologies } from "../../assets/data";
import BallCanvas from "../canvas/Ball";

const Technologies = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
      <div className="text-white">
        <h2 className="text-2xl sm:3xl font-bold mb-3">My Tech Stack.</h2>
        <p className="text-gray-400 mb-10 text-sm">
          I actively use this wide range of tools and technologies, and I continue to <span className="text-gray-200">explore</span> new ones. I love working with these technologies and am always <span className="text-gray-200">eager</span> to learn.
        </p>
        <div ref={ref} className="grid grid-cols-3 lg:grid-cols-5 justify-items-center gap-4 mx-auto py-4">
          {technologies.slice(0,5).map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="flex flex-col items-center w-16 h-16">
              {inView && <BallCanvas icon={tech.icon} />}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 justify-items-center gap-0 mx-auto pb-6  rounded-lg transition-all duration-200 ease hover:bg-gray-900">
          {technologies.slice(5).map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="flex flex-col items-center w-16 h-16 mt-10 transition-all ease hover:scale-105">
              <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              <p className="text-xs text-gray-400 mt-1">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Technologies;
