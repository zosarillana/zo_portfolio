import React from "react";
import ThemeSwitcher from "./theme/themeSwitch";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="navbar bg-primary text-primary-content shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">zo.ren</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold text-white mr-6">
            <li>
              <a className="hover:bg-secondary">Home</a>
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
export default Header;
