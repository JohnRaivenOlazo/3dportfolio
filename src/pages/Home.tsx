import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useSpring } from '@react-spring/three'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Boat from '../models/Boat'
import HomeItems from '../components/HomeItems'
import {soundon, soundoff } from '../assets/icons'
import backgroundMusic from '../assets/beach.mp3'
import transition from "./transition"
import Tutorial from '../components/Tutorial'

const Home = () => {
  const audioRef = useRef(new Audio(backgroundMusic));
  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if(isPlaying){
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }

  }, [isPlaying])


  const [isRotating, setIsRotating ] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);

  const adjustBoatForScreenSize = () => {
    let rotation = isRotating ? [ -0.3, 2.2, -0.05 ]: [-0.2, 2.2, 0] ;
    let screenScale = [0.8, 0.9, 0.8];
    let screenPosition = [0, -3.5, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.4, 0.5, 0.4];
      screenPosition = [0, -2.9, 0];  
    } else {
      screenScale = [0.8, 0.9, 0.8];
      screenPosition = [0, -3.5, 0];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustIslandForScreenSize = () => {
        let rotation = [-0.30, 3.2, 0];
        let screenScale = [1, 1, 1]; 
        let screenPosition  = [];

        if(window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
            screenPosition = [0, -37, -110];
        } else {
            screenScale = [1, 1, 1];
            screenPosition = [0, -34, -106];
        }
        return [screenScale, screenPosition, rotation]
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [boatScale, boatPosition, boatRotation] = adjustBoatForScreenSize();

    const { rotation } = useSpring({
      rotation: boatRotation,
      config: { mass: 1, tension: 150, friction: 26 }
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

  const handleKeyDown = (event) => {
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
  <section className='w-full h-screen'>
      <div 
      className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeItems currentStage={currentStage} />}
      </div>
    <Canvas 
         className={`w-full h-screen fixed bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
         camera={{ near: 0.1, far: 1000 }}>
      <Suspense fallback={<Loader />}>
      <directionalLight position={[0, 1, 0]} intensity={1.5} />
      <hemisphereLight color="#fff" groundColor="#000" intensity={2} />
      <Sky
      rotation={[-0.3, 0, 0]} 
      isRotating={isRotating}
      />
      <Island 
      scale={islandScale}
      position={islandPosition}
      rotation={islandRotation}
      isRotating={isRotating}
      setIsRotating={setIsRotating}
      setCurrentStage={setCurrentStage}
      />
      <Boat 
      scale={boatScale}
      position={boatPosition}
      rotation={rotation} 
      isRotating={isRotating}
      setIsRotating={setIsRotating}
      />
      </Suspense>
    </Canvas>

   <div className='absolute bottom-2 left-2'>
    <img 
    src={isPlaying ? soundon : soundoff } 
    alt="sound" 
    className="w-19 h-10 cursor-pointer object-contain" 
    onClick={()=> setIsPlaying(!isPlaying)}
    />
    </div> 
    
    {showTutorial && <div className={`${isMove && 'fade-out'}`}><Tutorial /></div>}
  </section>
  )
}

export default transition(Home)