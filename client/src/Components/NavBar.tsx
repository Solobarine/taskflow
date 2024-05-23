import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex items-center gap-3 justify-between py-5 px-4 sm:px-10 sticky top-0 bg-cyan-100 z-20">
      <NavLink to="/" className="font-bold text-xl text-blue-500">
        tasKFlow
      </NavLink>
      <div
        className={`flex sm:flex-row sm:static items-center justify-end sm:p-0 p-3 gap-5 text-sm font-semibold transition-all duration-700 bg-cyan-100 rounded-lg right-1 w-full absolute sm:right-0 flex-col ${
          showMenu ? "top-[52px]" : "-top-[100vw]"
        }`}
      >
        <NavLink to="#features">Features</NavLink>
        <NavLink to="#about">About</NavLink>
        <NavLink to="#contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className="text-2xl">
        <i
          className={`fa-solid sm:hidden ${showMenu ? "fa-xmark" : "fa-bars"}`}
        />
      </button>
    </div>
  );
};

export default NavBar;
