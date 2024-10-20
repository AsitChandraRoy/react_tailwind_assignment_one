import React from "react";
import { navItems } from "../../lib/db";
import { NavLink, Outlet } from "react-router-dom";

export const ToggleMenu = ({ toggleMenu }) => {
  return (
    <div className="lg:hidden absolute top-0 left-0 right-0 w-full bg-card z-50 overflow-y-auto p-6">
      <div className="flex justify-between items-center pb-6">
        <img className="w-32" src="/logo.png" alt="" />

        {/* Close Button */}
        <button
          className="self-end text-black text-2xl"
          onClick={toggleMenu}
          aria-label="Close button"
        >
          &times;
        </button>
      </div>

      {/* Nav Menu Items */}
      <div className="space-y-4">
        {navItems.map(({ text, link }, i) => (
          <li key={i} className=" opacity-50">
            <NavLink to={link}>{text}</NavLink>
          </li>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
