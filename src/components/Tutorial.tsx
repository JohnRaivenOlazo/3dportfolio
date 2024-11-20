import drag from '../assets/drag.png'

const Tutorial = () => {
    return (
      <div className="absolute top-20 left-0 right-0 flex justify-center items-center flex-col cursor-grab">
        <img src={drag} className="w-6 h-6 block animate-slide-loop" />
        <p className="font-medium text-xs sm:text-lg text-center animate-pulse 1s ease-in-out">
          Drag to Explore
        </p>
      </div>
    );
  };

export default Tutorial;

