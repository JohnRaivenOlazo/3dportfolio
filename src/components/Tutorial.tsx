import drag from '../assets/drag_white.png'

const Tutorial = () => {
    return (
      <div className="text-white absolute top-28 sm:top-24 left-0 right-0 flex justify-center items-center flex-col cursor-grab">
        <img src={drag} className="w-6 h-6 block animate-slide-loop" />
        <p className="font-medium text-xs sm:text-lg text-center animate-pulse ease-in-out">
          Drag to Explore
        </p>
      </div>
    );
  };

export default Tutorial;

