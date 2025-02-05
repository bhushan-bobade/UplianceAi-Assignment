import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';



const Header = () => {

  const {pathname} = useLocation();
  console.log(pathname);
  const isAuthenticated = !!localStorage.getItem('userEmail');
  const navigate = useNavigate()

  const logOutfun = ()=>{
    localStorage.clear('userEmail');
    navigate('/login')

  }

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="sticky  top-0 z-10 bg-transparent backdrop-blur-xl sm:flex sm:justify-between shadow-lg sm:py-4 py-2 sm:px-12 px-4">
      <div className="flex justify-between items-center">
        <Link to="/">
          <div className="cursor-pointer text-blue-900 sm:text-xl text-lg font-bold">Upliance</div>
        </Link>
        <button className="sm:hidden text-2xl" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`sm:flex ${menuOpen ? 'block' : 'hidden'} flex-col sm:flex-row sm:gap-12 gap-4 sm:items-center`}>
        <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 font-semibold sm:text-xl text-lg">
          <Link to="/Counter">
            <button
              className={`${
                pathname === '/Counter'
                  ? 'border-b-3 border-green-600 rounded-md px-2'
                  : ''
              }`}
            >
              Counter
            </button>
          </Link>
          <Link to="/UserData">
            <button
              className={`${
                pathname === '/UserData'
                  ? 'border-b-3 border-green-600 rounded-md px-2'
                  : ''
              }`}
            >
              UserData
            </button>
          </Link>
          <Link to="/Editors">
            <button
              className={`${
                pathname === '/Editors'
                  ? 'border-b-3 border-green-600 rounded-md px-2'
                  : ''
              }`}
            >
              Editors
            </button>
          </Link>
        </div>
        {isAuthenticated && (
          <Link to="/login">
            <button
              onClick={logOutfun}
              className="border text-white px-4 py-1 font-semibold bg-red-500"
            >
              LOGOUTT
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
