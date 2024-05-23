import { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={`fixed w-full sm:sticky bg-cyan-100 min-h-screen transition-all duration-700 top-[52px] p-3 shrink-0 basis-72 z-10 ${
        showMenu ? "left-0" : "-left-[100vw]"
      }`}
    >
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={`fixed top-1/2 transform -translate-y-1/2 text-4xl transition-all duration-700 sm:hidden ${
          showMenu ? "right-1 left-auto" : "right-auto left-1"
        }`}
      >
        <i
          className={`fa-solid fa-chevron-${
            showMenu ? "left" : "right"
          } transition-all duration-700`}
        ></i>
      </button>
      <div className="">
        <div className="grid gap-2">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-2 font-semibold text-lg p-2"
          >
            <i className="fa-regular fa-clipboard"></i>
            <p>Tasks</p>
          </NavLink>
          <NavLink
            to="/tasks/new"
            className="flex items-center gap-2 font-semibold text-lg p-2"
          >
            <i className="fa-regular fa-pen-to-square"></i>
            <p>New Tasks</p>
          </NavLink>
          <div className="flex items-center gap-1 absolute bottom-16 sm:bottom-5 left-1">
            <img
              src="#"
              alt=""
              className="w-8 aspect-square rounded-full bg-gray-400"
            />
            <div>
              <p className="text-sm font-semibold">Alan Wake</p>
              <p className="text-xs">alanwake@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
