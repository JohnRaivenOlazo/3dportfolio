import { motion } from 'framer-motion'

const transition = (Component: any) => {
  return () => (
    <>
      <Component />
      <motion.div
      className='slide-in-page z-50'
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />


    <motion.div
      className='slide-out-page z-50'
      initial={{ scaleY: 1, borderRadius: '0%' }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5, easeout: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}

export default transition