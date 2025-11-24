import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../common/Button";
import { isTokenExpired, getValidToken } from "../../utils/auth.js";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setMenuOpen(false);
    toast.success("Logout successful");
    navigate("/dashboard/app/account/login", { replace: true });
  };

  const isExpired = isTokenExpired(localStorage.getItem("token"));
  if (isExpired) {
    localStorage.removeItem("token");
  }
  const decodeJwtPayload = (token) => {
    if (!token) return null;
    try {
      const parts = token.split(".");
      if (parts.length < 2) return null;
      const payload = parts[1].replace(/-/g, "+").replace(/_/g, "/");
      const pad = payload.length % 4;
      const padded = pad ? payload + "=".repeat(4 - pad) : payload;
      const json = atob(padded);
      return JSON.parse(json);
    } catch (e) {
      return null;
    }
  };

  const token = getValidToken();
  const user = decodeJwtPayload(token) || null;
  const displayName = user?.username;

  const linkBase =
    "relative transition-colors duration-200 hover:text-[#EA723C] after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-0 after:h-[3px] after:rounded-full after:bg-[#EA723C] after:transition-all after:duration-300 hover:after:w-3/4";

  const linkActive =
    "text-[#EA723C] after:w-3/4 after:h-[3px] after:rounded-full after:bg-[#EA723C]";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className=" w-full h-20 px-6 md:px-8 py-5 mx-auto flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <NavLink to="/" className="text-2xl font-light text-[#EA723C]">
          Intelligent <span className="font-bold">CV</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <ul className="flex items-center space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                Pricing
              </NavLink>
            </li>
          </ul>

          {isExpired ? (
            <Button
              hasMargin={false}
              text="Login"
              to="/dashboard/app/account/login"
            />
          ) : (
            <div className="flex items-center gap-4">
              {displayName && (
                <Link
                  to="/dashboard"
                  className="hidden md:block text-sm text-gray-700 truncate max-w-[180px]"
                >
                  {displayName}
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="py-3 block mt-0 relative px-6 border border-zinc-400 min-w-[120px] text-center transition cursor-pointer rounded-md hover:bg-[#FAFBFC] sm:px-12"
              >
                Logout
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl text-[#EA723C] lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md border-t border-gray-100 lg:hidden animate-slideDown">
            <ul className="flex flex-col items-center space-y-6 py-6 text-lg">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                {!isExpired && displayName && (
                  <div className="px-4 py-2 text-sm text-gray-800">
                    <Link
                      to="/dashboard"
                      className="hidden md:block text-sm text-gray-700 truncate max-w-[180px]"
                    >
                      Signed in as {displayName}
                    </Link>
                  </div>
                )}
              </li>
              <li>
                {isExpired ? (
                  <Button
                    text="Login"
                    to="/dashboard/app/account/login"
                    onClick={() => setMenuOpen(false)}
                  />
                ) : (
                  <button
                    onClick={handleLogout}
                    className="py-3 block mt-0 relative px-6 border border-zinc-400 min-w-[200px] text-center transition cursor-pointer rounded-md hover:bg-[#FAFBFC] sm:px-12"
                  >
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
