import StarsCanvas from "../components/canvas/StarsCanvas";
import GlareEffect from "../components/canvas/GlareEffect";
import transition from "./transition";

const Contact = () => {


  return (
    <div className="bg-main relative h-screen overflow-x-hidden">
      <StarsCanvas />
      <GlareEffect />
      <div>

      </div>
    </div>
  );
};

export default transition(Contact);
