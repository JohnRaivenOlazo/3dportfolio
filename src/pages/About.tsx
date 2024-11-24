import StarsCanvas from "../components/canvas/StarsCanvas";
import GlareEffect from "../components/canvas/GlareEffect";
import transition from "./transition";

const About = () => {


  return (
    <div className="bg-main h-screen overflow-x-hidden relative">
      <StarsCanvas />
      <GlareEffect />
      <div>

      </div>
    </div>
  );
};

export default transition(About);
