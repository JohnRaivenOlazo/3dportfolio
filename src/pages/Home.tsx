import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";
import Loader from "../components/Loader";
import Earth from "../models/Earth.tsx";
import Sky from "../models/Sky";
import Spaceship from "../models/Spaceship";
import HomeItems from "../components/HomeItems";
import { soundon, soundoff } from "../assets/icons";
import backgroundMusic from "../assets/wind.mp3";
import transition from "./transition";
import Tutorial from "../components/Tutorial";

const Home = () => {
  const audioRef = useRef(new Audio(backgroundMusic));
  audioRef.current.volume = 0.03;
  audioRef.current.loop = true;
  const [isPlaying, setIsPlaying] = useState(false);

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

  const adjustSpaceshipForScreenSize = () => {
    let screenScale: number[];
    let screenPosition = isRotating ? [0.3, -1.5, 0] : [0, -1.5, 1];
    let rotation = isRotating ? [-0.7, 1.2, 0] : [-0.7, 1.5, 0.5];

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
  const [spaceshipScale, spaceshipPosition, spaceshipRotation] =
    adjustSpaceshipForScreenSize();

  const { rotation, position } = useSpring({
    rotation: spaceshipRotation,
    position: spaceshipPosition,
    config: { mass: 1, tension: 150, friction: 26 },
  });

  const [showTutorial, setShowTutorial] = useState(true);
  const [isMove, setIsMove] = useState(false);

  useEffect(() => {
    const hideTutorial = () => {
      setIsMove(true);
      setTimeout(() => {
        setShowTutorial(false);
      }, 2000);
    };

    const handleClick = () => {
      hideTutorial();
    };

    const handleKeyDown = (event : any) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        hideTutorial();
      }
    };

    const handleTouchStart = () => {
      hideTutorial();
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <section className="w-full h-screen">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeItems currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen fixed bg-main ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight
            color="#fff"
            position={[50, 50, 50]}
            intensity={2.0}
            castShadow
          />
          <ambientLight color="#666" intensity={0.2} />
          <hemisphereLight color="#fff" groundColor="#444444" intensity={0.8} />
          <Sky rotation={[-0.3, 0, 0]} position={[0,0,-90]} isRotating={isRotating} />
          <Earth
            scale={earthScale}
            position={earthPosition}
            rotation={earthRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
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
