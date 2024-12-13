import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '/logo-64.png';

const Navbar = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHome, setIsHome] = useState(location.pathname === '/');

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsHome(location.pathname === '/');
      setIsTransitioning(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <header className="header flex justify-between items-center p-4 relative sm:fixed top-0 w-full z-50 px-5">
      <NavLink
        to={location.pathname === '/about' || location.pathname === '/' ? '/' : '/about#project-category'}
        className="text-2xl font-bold hover:text-teal-300 transition-all duration-300 relative"
      >
        <div
          className={`backdrop-blur-lg px-2 py-1 rounded-lg transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
            {isHome ? (
            <img src={logo} alt="logo" className="transition-transform duration-300 w-full max-w-xs h-10 sm:h-12 hover:scale-110"
            />
            ) : (
            <p
              className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 transform hover:-translate-y-0.5 hover:scale-105 transition-all duration-300"
            >
              <span className="sm:inline-block hidden">John</span> Raiven{' '}
              <span className="sm:inline-block hidden">Olazo</span>
            </p>
            )}
        </div>
      </NavLink>
      {isHome && (
      <nav className="relative flex justify-center items-center space-x-4 bg-transparent px-4 py-2 text-md md:text-xl backdrop-blur-3xl rounded-lg p-2">
        <p className="relative group">
          <NavLink to="/about" className="text-gray-400 hover:text-white transition-colors duration-100 ease-in">
            <span className="font-bold inline-block hover:-translate-y-0.5 transition-all text-xl sm:text-2xl">About</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-1 w-0 h-0.5 rounded-sm bg-gray-400 -z-10 group-hover:w-full transition-all" />
          </NavLink>
        </p>
      </nav>
      )}
    </header>
  );
};

export default Navbar