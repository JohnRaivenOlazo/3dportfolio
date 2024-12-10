import { lazy } from "react";
import { useInView } from "react-intersection-observer";
import { technologies } from "../../assets/data";

const BallCanvas = lazy(() => import("../canvas/Ball"));

const Technologies = () => {
  const { ref, inView } = useInView({triggerOnce: true, threshold: 0.1});

  return (
    <div id="technologies" className="text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">My Tech Stack.</h2>
        <p className="text-gray-400 mb-12 text-sm">
          Here's a <span className="text-gray-100">selection</span> of tools and technologies I know and love working with.
        </p>
        <div ref={ref} className="grid grid-cols-4 lg:grid-cols-5 gap-5">
          {inView &&
            technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center w-16 h-16 transition-all transform hover:scale-110">
                <BallCanvas icon={tech.icon} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
