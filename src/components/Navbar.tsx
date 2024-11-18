import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header flex justify-between items-center p-4 fixed top-0 w-full z-50">
      <NavLink to="/" className="bg-white flex justify-center items-center shadow-lg w-10 h-10 rounded-lg uppercase">
        <p className='blue-gradient_text'>JRO</p>
      </NavLink>
      <nav className="flex justify-center items-center space-x-4 bg-transparent px-4 py-2 font-bold text-lg rounded-lg backdrop-blur-sm">
        <NavLink to="/about" className={({ isActive }) => `${isActive ? 'text-blue-500 font-bold' : 'text-white'} hover:text-sky-300 transition-colors duration-200 ease`}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-blue-500 font-bold' : 'text-white'} hover:text-sky-300 transition-colors duration-200 ease`}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar