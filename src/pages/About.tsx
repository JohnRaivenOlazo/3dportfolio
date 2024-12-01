import StarsCanvas from "../components/canvas/StarsCanvas";
import GlareEffect from "../components/canvas/GlareEffect";
import transition from "./transition";

const About = () => {
  return (
    <div className="main-container bg-main relative min-h-screen h-screen overflow-y-scroll overflow-x-hidden sm:overflow-hidden">
      <StarsCanvas />
      <GlareEffect />
      <div className="flex flex-col md:flex-row items-start justify-between h-full overflow-hidden sm:overflow-y-scroll sticky">
        {/* Left Column */}
        <div className="bg-red-500 p-4 md:p-8 rounded-lg shadow-lg mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/3 sticky top-0">
          <p className="text-white text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit suscipit omnis quos, ut dolore porro unde vitae sit ratione sint ducimus, ullam, a enim repellat perferendis quia eveniet quo.
          </p>
        </div>

        {/* Right Column (Blue Background with Scroll) */}
        <div className="right-side bg-blue-500 p-4 md:p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 top-0">
          <p className="text-white text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit suscipit omnis quos, ut dolore porro unde vitae sit ratione sint ducimus, ullam, a enim repellat perferendis quia eveniet quo.
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit suscipit omnis quos, ut dolore porro unde vitae sit ratione sint ducimus, ullam, a enim repellat perferendis quia eveniet quo.
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit suscipit omnis quos, ut dolore porro unde vitae sit ratione sint ducimus, ullam, a enim repellat perferendis quia eveniet quo.
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit suscipit omnis quos, ut dolore porro unde vitae sit ratione sint ducimus, ullam, a enim repellat perferendis quia eveniet quo.
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit suscipit omnis quos, ut dolore porro unde vitae sit ratione sint ducimus, ullam, a enim repellat perferendis quia eveniet quo.
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit suscipit omnis quos, ut dolore porro unde vitae sit ratione sint ducimus, ullam, a enim repellat perferendis quia eveniet quo.
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit suscipit omnis quos, ut dolore porro unde vitae sit ratione sint ducimus, ullam, a enim repellat perferendis quia eveniet quo.
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit suscipit omnis quos, ut dolore porro unde vitae sit ratione sint ducimus, ullam, a enim repellat perferendis quia eveniet quo.
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit suscipit omnis quos, ut dolore porro unde vitae sit ratione sint ducimus, ullam, a enim repellat perferendis quia eveniet quo.
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit suscipit omnis quos, ut dolore porro unde vitae sit ratione sint ducimus, ullam, a enim repellat perferendis quia eveniet quo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default transition(About);
