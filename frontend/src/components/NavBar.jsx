import React from "react";
import logo from "@assets/logo.png";
import menuBurger from "@assets/menuBurger.png";
import close from "@assets/close.png";

function NavBar() {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="cursor-pointer md:px-10 px-7">
          <img
            src={logo}
            alt="logo"
            width="100"
            height="100"
            className="mx-8"
          />
        </div>
        <div className="absolute right-8 top-6 cursor-pointer md:hidden">
          <img src={menuBurger} alt="BurgerMenu" width="40" height="30" />
          <img src={close} alt="close" width="30" height="30" />
        </div>
        <ul className="md:flex md:items-center md:pb-0 pb-12 max-sm:bg-current absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
          <li className="md:ml-8 text-white text-xl md:my-0 my-5">ACCUEIL</li>
          <li className="md:ml-8 text-white text-xl md:my-0 my-5 ">A PROPOS</li>
          <li className="md:ml-8 text-white text-xl md:my-0 my-5">
            COMPÉTENCES
          </li>
          <li className="md:ml-8 text-white text-xl md:my-0 my-5">PORTFOLIO</li>
          <li className="md:ml-8 text-white text-xl">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
