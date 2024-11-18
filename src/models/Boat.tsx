import { useRef, useEffect } from 'react'

import boat from '../assets/3d/boat.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three'


const Boat = ({isRotating, ...props}) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(boat);
    const { actions } = useAnimations(animations);


    return (
    <a.mesh {...props} ref={ref}>
        <primitive object={scene}/>
    </a.mesh>
  )
}

export default Boat