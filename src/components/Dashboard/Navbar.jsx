import React, { useEffect, useState } from "react";
import { Container } from "../common/container";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../../lib/db";
import { ToggleMenu } from "./ToggleMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const bodyClass = document.body.classList;
    isMenuOpen ? bodyClass.add("no-scroll") : bodyClass.remove("no-scroll");

    return () => bodyClass.remove("no-scroll");
  }, [isMenuOpen]);

  return (
    <>
      <section className="bg-card">
        <Container>
          <nav className="flex justify-between items-center pb-3 px-5 sm:px-7 md:px-10 xl:px-12 border-b-2 border-[#cbcbd9]">
            <img
              className="h-5 md:h-7 xl:h-9"
              src="/logo.png"
              alt="Company logo"
            />
            <div>
              <ul className="hidden md:flex justify-center items-center gap-2 md:gap-4 lg:gap-7 xl:gap-8 text-xs md:text-sm xl:text-base">
                {navItems.map(({ text, link }, i) => (
                  <li key={i}>
                    <NavLink
                      to={link}
                      className={({ isActive }) =>
                        isActive ? "text-black" : "text-lowLight"
                      }
                    >
                      {text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center gap-2 text-xs md:text-sm xl:text-base">
              <button
                className="md:hidden block"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                <div className="space-y-1">
                  <span className="block w-5 h-0.5 bg-black" />
                  <span className="block w-5 h-0.5 bg-black" />
                  <span className="block w-5 h-0.5 bg-black" />
                </div>
              </button>
              <div className="flex h-4 md:h-5 xl:h-7 gap-1">
                <img
                  className="bg-[#ffffff] p-1 rounded-full hover:cursor-pointer hover:scale-105 transition-all duration-300"
                  src="/notification.png"
                  alt="Notification icon"
                />
                <img
                  className="h-1 md:h-2 xl:h-3 -ms-3 z-10"
                  src="/notiTop.png"
                  alt="Notification indicator"
                />
                <img
                  className="hover:cursor-pointer hover:scale-105 transition-all duration-300"
                  src="/head.png"
                  alt="User profile icon"
                />
              </div>
              <div>
                <h4 className="opacity-80">Usman Zafar</h4>
                <p className="opacity-70 sm:text-xs md:text-sm">
                  usmanzafar@gmail.com
                </p>
              </div>
            </div>
          </nav>
          <Outlet />
          {isMenuOpen && <ToggleMenu toggleMenu={toggleMenu} />}
        </Container>
      </section>
    </>
  );
}

export default Navbar;
