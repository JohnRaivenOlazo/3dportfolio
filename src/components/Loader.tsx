import { Html } from "@react-three/drei"

const Loader = () => {
  return (
    <Html>
      <div className='absolute w-full h-full flex justify-center items-center bg-transparent z-[999]'>
        <div className='relative'>
          <div className='w-10 h-10 border-4 border-t-transparent border-blue-500 border-opacity-50 rounded-full animate-spin'></div>
        </div>
      </div>
    </Html>
  )
}

export default Loader