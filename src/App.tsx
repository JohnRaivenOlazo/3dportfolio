import { BrowserRouter as _, Routes, Route, useLocation } from 'react-router-dom';
import { Home, About } from './pages';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Project from './pages/Project';

const App = () => {
  return (
    <main>
      <Navbar />
      <AnimatePresence mode='wait'> //'mode' property ensure all animations is done before transitioning 
    <Routes location={useLocation()} key={useLocation().pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path=":title" element={<Project />} />
    </Routes>
    </AnimatePresence>
    </main>
  )
}

export default App