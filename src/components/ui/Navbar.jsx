import { Link } from "react-router-dom";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <>
      <header className="max-w-8xl w-full h-20 px-8   py-5 mx-auto flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-1000 bg-white">
        <Link to="/" className="text-2xl font-light text-[#EA723C]">
          Intelligent <span className="font-bold">CV</span>
        </Link>

        <nav className="flex items-center space-x-14" id="main-nav">
          <ul className="flex items-center space-x-12 gap-4">
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

          {localStorage.getItem("token") ? (
            <Button text="Access Dashboard" to="/dashboard/app/home" />
          ) : (
            <Button text="Login" to="/dashboard/app/account/login" />
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
