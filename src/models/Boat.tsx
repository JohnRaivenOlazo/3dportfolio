import { useRef } from 'react'

import boat from '../assets/3d/boat.glb'
import { useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three'


const Boat = (props : any ) => {
    const ref = useRef(null);
    const { scene } = useGLTF(boat);

    return (
    <a.mesh {...props} ref={ref}>
        <primitive object={scene}/>
    </a.mesh>
  )
}

export default Boat