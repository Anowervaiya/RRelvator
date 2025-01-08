import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import 'react-tooltip/dist/react-tooltip.css';
// import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [toogle, setToogle] = useState(false);
  const handleToogle = () => {
    setToogle(!toogle);
  };

  // Function to check the scroll position
  const handleScroll = () => {
    if (window.scrollY > 100 ) {
      setIsScrolled(true); // If scrolled more than 20px, change state
    } else {
      setIsScrolled(false); // Reset state if scrolled back to the top
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navOptions = (
    <>
      <Link
        to={'/'}
        onClick={handleToogle}
        className="p-2 hover:text-blue-500 px-4 group"
        href="#"
      >
        Home
        <div className="bg-blue-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
      </Link>

      <Link
        to={'all-Products'}
        onClick={handleToogle}
        className="p-2  hover:text-blue-500 px-4 group"
        href="#"
      >
        All Products
        <div className="bg-blue-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
      </Link>
      <Link
        to={'About'}
        onClick={handleToogle}
        className="p-2  hover:text-blue-500 px-4 group"
        href="#"
      >
        About
        <div className="bg-blue-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
      </Link>
      <Link
        to={'Contact'}
        onClick={handleToogle}
        className="p-2  hover:text-blue-500 px-4 group"
        href="#"
      >
        Contact
        <div className="bg-blue-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
      </Link>
    </>
  );

  return (
    <>
      <div
        className={`navbar md:px-8 fixed z-50 ${
          isScrolled
            ? ' bg-white text-black shadow-md '
            : ' text-white '
        }  transition-all duration-700 border-b`}
      >
        <div className="navbar-start ">
          <div className="dropdown">
            <label
              onClick={handleToogle}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {toogle ? (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black bg-opacity-90 rounded-box w-52"
              >
                {navOptions}
              </ul>
            ) : (
              ''
            )}
          </div>
          <a className="cursor-pointer normal-case text-xl">RRElevator</a>
        </div>
        <div className="navbar-end hidden mr-10 lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
