import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./theme/themeSwitch";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar bg-primary text-primary-content shadow-lg">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost text-xl text-white"
            onClick={scrollToTop}>
            zo.ren
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold text-white mr-6">
            <li>
              <Link
                to="/contact"
                className="hover:bg-secondary"
                onClick={scrollToTop}>
                Contact Me
              </Link>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <div className="mr-8">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
