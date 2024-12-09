import { useRef } from 'react'
import SpaceshipModel from '../assets/3d/spaceship.glb'
import { useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three'


const Spaceship = (props : any ) => {
    const ref = useRef(null);
    const { scene } = useGLTF(SpaceshipModel) as any;

    return (
    <a.mesh {...props} ref={ref}>
        <primitive object={scene}/>
    </a.mesh>
  )
}

export default Spaceship