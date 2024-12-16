import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";
import Earth from "../models/Earth.tsx";
import Sky from "../models/Sky";
import Spaceship from "../models/Spaceship";
import HomeItems from "../components/HomeItems";
import { soundon, soundoff } from "../assets/icons";
import backgroundMusic from "../assets/wind.mp3";
import transition from "./transition";
import Tutorial from "../components/Tutorial";
import WelcomePage from "./WelcomePage.tsx"

const Home = () => {
  const audioRef = useRef(new Audio(backgroundMusic));
  audioRef.current.volume = 0.03;
  audioRef.current.loop = true;
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoverRotation, setHoverRotation] = useState([]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlaying]);

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [isWelcomePage, setIsWelcomePage] = useState(true);

  useEffect(() => {
  setIsPlaying(true);
  audioRef.current.play();
  }, [isWelcomePage]);

  useEffect(() => {
    if (!isRotating) {
      const interval = setInterval(() => {
        setHoverRotation((prev) => {
          const newZ = prev[2] === 0.5 ? 0.53 : 0.5;
          return [-0.7, 1.5, newZ];
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  const adjustSpaceshipForScreenSize = () => {
    let screenScale: number[];
    let screenPosition = isRotating ? [0.3, -1.5, 0] : [-0.06, -1.5, 1];
    let rotation = isRotating ? [-0.7, 1.5, -0.5] : hoverRotation;

    if (window.innerWidth < 768) {
      screenScale = [0.2, 0.2, 0.2];
    } else {
      screenScale = [0.3, 0.3, 0.3];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustEarthForScreenSize = () => {
    let rotation = [0, 0, 0],
      screenPosition: number[],
      screenScale: number[];

    if (window.innerWidth < 768) {
      rotation = [0, 0, 0];
      screenScale = [50, 50, 50];
      screenPosition = [0, 0, -125];
    } else {
      rotation = [0, 0, 0];
      screenScale = [60, 60, 60];
      screenPosition = [0, 0, -114];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();
  const [spaceshipScale, spaceshipPosition, spaceshipRotation] = adjustSpaceshipForScreenSize();

  const { rotation, position } = useSpring({
    rotation: spaceshipRotation,
    position: isWelcomePage ? [0, -4, 1] : spaceshipPosition,
    config: { mass: 2, tension: 100, friction: 26 },
  });

  const [showTutorial, setShowTutorial] = useState(true);
  const [isMove, setIsMove] = useState(false);

  useEffect(() => {
    const hideTutorial = () => {
      setIsMove(true);
      setTimeout(() => {
        setShowTutorial(false);
      }, 3000);
    };
  
    let canHide = false;
  
    const handleClick = () => {
      if (canHide) {
        hideTutorial();
      }
    };
  
    const handleKeyDown = (event: any) => {
      if (canHide && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        hideTutorial();
      }
    };
  
    const handleTouchStart = () => {
      if (canHide) {
        hideTutorial();
      }
    };

    if (!isWelcomePage) {
      canHide = true;
      window.addEventListener("click", handleClick);
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("touchstart", handleTouchStart);
  
      return () => {
        window.removeEventListener("click", handleClick);
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("touchstart", handleTouchStart);
      };
    }
  }, [isWelcomePage]);
  
  const [isPopup, setIsPopup] = useState(false);
  
  const handleSetCurrentStage = (stage: any) => {
    if (currentStage === stage) return;
    setIsPopup(false);
    setTimeout(() => {
      setCurrentStage(stage);
      setTimeout(() => {
        setIsPopup(true);
      }, 400);
    }, 300);
  };
  

  return (
    <section className="w-full h-screen">
      {isWelcomePage && <WelcomePage setIsWelcomePage={setIsWelcomePage} />}
      <div className={`absolute top-28 left-0 right-0 z-10 flex items-center justify-center ${isWelcomePage && "hidden"}`}>
        {currentStage && (
          <div className={`transition-all duration-150 ease-in-out ${isPopup ? "opacity-100" : "opacity-0"}`}>
            <HomeItems currentStage={currentStage} />
          </div>
        )}
      </div>
      <Canvas
        className={`w-full h-screen fixed bg-main ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense>
          <directionalLight
            color="#fff"
            position={[50, 50, 50]}
            intensity={2.0}
            castShadow
          />
          <ambientLight color="#666" intensity={0.2} />
          <hemisphereLight color="#fff" groundColor="#444444" intensity={0.8} />
          <Sky
            rotation={[-0.3, 0, 0]}
            position={[0, 0, -90]}
            isRotating={isRotating}
          />
          <Earth
            scale={earthScale}
            position={earthPosition}
            rotation={earthRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={handleSetCurrentStage}
          />
          <Spaceship
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            scale={spaceshipScale}
            position={position}
            rotation={rotation}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={isPlaying ? soundon : soundoff}
          alt="sound"
          className="w-19 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlaying(!isPlaying)}
        />
      </div>

      {showTutorial && (
        <div className={`${isMove && "fade-out"}`}>
          <Tutorial />
        </div>
      )}
    </section>
  );
};

export default transition(Home);
