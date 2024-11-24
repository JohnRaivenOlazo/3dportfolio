import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import skyScene from '../assets/3d/sky_day.glb'
import { useFrame } from '@react-three/fiber';

const Sky = ({ isRotating, ...props }) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef(null);
    
    useFrame((_, delta) => {
        if(isRotating) {
            skyRef.current.rotation.y += 0.02 * delta;
        }
    })

    return (
        <mesh {...props} ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
  )
}

export default Sky