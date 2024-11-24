import { NavLink } from 'react-router-dom'
import logo from '/logo-64.png'
const Navbar = () => {
  return (
    <header className="header flex justify-between items-center p-4 fixed top-0 w-full z-50 px-5">
      <NavLink to="/" className="flex flex-row justify-center items-center gap-0 backdrop-blur-sm rounded-lg p-1">
        <img src={logo} alt="logo" className="w-5 h-5 sm:w-6 sm:h-6" />
        <p className='blue-gradient_text font-bold sm:text-lg text-xs  italic uppercase'>ohn Raiven Olazo</p>
      </NavLink>
      <nav className="relative flex justify-center items-center space-x-4 bg-transparent px-4 py-2 font-bold text-md md:text-xl backdrop-blur-sm rounded-lg p-2">
        <p className="relative group">
        <NavLink to="/about" className={({ isActive }) => `${isActive ? 'text-blue-500 font-bold' : 'text-white'} hover:text-sky-300 transition-colors duration-200 ease`}>
          <span className='inline-block hover:-translate-y-0.5 transition-all'>About</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-1 w-0 h-0.5 rounded-sm bg-blue-400 -z-10 group-hover:w-full transition-all"/>
        </NavLink>
        </p>
        <p className="relative group">
        <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-blue-500 font-bold' : 'text-white'} hover:text-sky-300 transition-colors duration-200 ease`}>
          <span className='inline-block hover:-translate-y-0.5 transition-all'>Contact</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-1 w-0 h-0.5 rounded-sm bg-blue-400 -z-10 group-hover:w-full transition-all"/>
        </NavLink>
        </p>
      </nav>
    </header>
  )
}

export default Navbar