import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../common/Button";
import { isTokenExpired } from "../../utils/auth.js";
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setMenuOpen(false)
    toast.success('Logout successful')
    navigate("/dashboard/app/account/login", { replace: true });
  };

  const isExpired = isTokenExpired(localStorage.getItem("token"));
  if (isExpired) {
    localStorage.removeItem("token");
  }

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="max-w-8xl w-full h-20 px-6 md:px-8 py-5 mx-auto flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">

        <Link to="/" className="text-2xl font-light text-[#EA723C]">
          Intelligent <span className="font-bold">CV</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-10">
          <ul className="flex items-center space-x-8">
            <li>
              <Link to="/" className="hover:text-[#EA723C]">
                Resumes
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[#EA723C]">
                Cover letters
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[#EA723C]">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-[#EA723C]">
                Pricing
              </Link>
            </li>
          </ul>

          {isExpired ? (
            <Button hasMargin={false} text="Login" to="/dashboard/app/account/login" />
          ) : (
           <button onClick={handleLogout} className={`py-3 block mt-0 relative px-6 border-zinc-400 border-1 min-w-[200px] text-center bottom-0 transition cursor-pointer rounded-md hover:bg-[#FAFBFC] sm:px-12`}>
            
            Logout
          </button>
          )}
        </nav>

        <button
          className="text-3xl text-[#EA723C] lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>


        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md border-t border-gray-100 lg:hidden animate-slideDown">
            <ul className="flex flex-col items-center space-y-6 py-6 text-lg">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#EA723C]"
                  onClick={() => setMenuOpen(false)}
                >
                  Resumes
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-[#EA723C]"
                  onClick={() => setMenuOpen(false)}
                >
                  Cover letters
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-[#EA723C]"
                  onClick={() => setMenuOpen(false)}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-[#EA723C]"
                  onClick={() => setMenuOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                {isExpired ? (
                  <Button
                    text="Login"
                    to="/dashboard/app/account/login"
                    onClick={() => setMenuOpen(false)}
                  />
                ) : (
                 <button onClick={handleLogout} className={`py-3 block mt-0 relative px-6 border-zinc-400 border-1 min-w-[200px] text-center bottom-0 transition cursor-pointer rounded-md hover:bg-[#FAFBFC] sm:px-12`}>
                    Logout
                 </button>
                )}
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
