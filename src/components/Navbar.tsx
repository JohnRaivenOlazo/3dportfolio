import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="header flex justify-between items-center p-4 fixed top-0 w-full z-50 px-5">
            <NavLink 
        to="/" 
        className="text-2xl font-bold text-white hover:text-blue-800 transition-all duration-300 
                  relative after:content-[''] after:absolute after:-bottom-0 after:left-0 after:w-full 
                  after:h-0.5 after:bg-blue-500 hover:after:bg-blue-800"
      >
        <p className="transform hover:-translate-y-0.5 transition-all duration-300">
          raiven.dev
        </p>
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