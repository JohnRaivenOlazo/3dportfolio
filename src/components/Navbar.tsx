import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
    <header className="header">
        <NavLink to="/" className="bg-white flex justify-center items-center shadow-lg w-10 h-10 rounded-lg uppercase">
        <p className='blue-gradient_text'>JRO</p>
        </NavLink>


        <nav className="flex justify-center items-center space-x-4">
        <NavLink to="/about" className={({ isActive }) => `${isActive ? 'text-blue-500 font-bold' : 'text-black'}`}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-blue-500 font-bold' : 'text-black'}`}>Contact</NavLink></nav>
    </header>
  )
}

export default Navbar