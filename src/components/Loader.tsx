import { Html } from "@react-three/drei"

const Loader = () => {
  return (
    <Html>
      <div className='absolute w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50'>
        <div className='relative'>
          <div className='w-20 h-20 border-4 border-t-transparent border-blue-500 border-opacity-50 rounded-full animate-spin'></div>
          <div className='absolute top-0 left-0 w-20 h-20 border-4 border-t-transparent border-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow'></div>
        </div>
      </div>
    </Html>
  )
}

export default Loader