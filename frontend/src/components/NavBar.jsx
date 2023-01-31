import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logo.png";
import menuBurger from "@assets/menuBurger.png";
import close from "@assets/close.png";
import User from "@contexts/User";

function NavBar() {
  const userContext = useContext(User.UserContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="cursor-pointer z-1">
          <Link to="/">
            <img src={logo} alt="logo" width="70" height="70" />
          </Link>
        </div>
        <button
          type="button"
          onClick={() => handleOpen()}
          className="absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <img
              src={close}
              alt="close"
              width="30"
              height="30"
              className="close"
            />
          ) : (
            <img
              src={menuBurger}
              alt="BurgerMenu"
              width="40"
              height="30"
              className="burger md:hidden"
            />
          )}
        </button>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 max-sm:bg-slate-700 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          }`}
        >
          <Link to="/">
            <li className="md:ml-8 text-white text-xl md:my-0 my-5 md:hover:bg-zinc-500">
              ACCUEIL
            </li>
          </Link>
          <Link to="/APROPOS">
            <li className="md:ml-8 text-white text-xl md:my-0 my-5 md:hover:bg-zinc-500">
              A PROPOS
            </li>
          </Link>
          <Link to="/COMPÉTENCES">
            <li className="md:ml-8 text-white text-xl md:my-0 my-5 md:hover:bg-zinc-500">
              COMPÉTENCES
            </li>
          </Link>
          <Link to="/PORTFOLIO">
            <li className="md:ml-8 text-white text-xl md:my-0 my-5 md:hover:bg-zinc-500">
              PORTFOLIO
            </li>
          </Link>
          <Link to="/CONTACT">
            <li className="md:ml-8 text-white text-xl md:hover:bg-zinc-500">
              CONTACT
            </li>
          </Link>
          {userContext.user && (
            <button
              onClick={() => userContext.handleUser(null)}
              type="button"
              className="md:ml-8 text-white text-xl md:hover:bg-zinc-500"
            >
              Logout
            </button>
          ) 
            
          }
          {userContext.user && (
            <Link to="/ADMIN">
              <li className="md:ml-8 text-white text-xl md:hover:bg-zinc-500">
                Admnistration
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
