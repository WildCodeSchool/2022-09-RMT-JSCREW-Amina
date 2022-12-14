import React from "react";
import { Link } from "react-router-dom";
import linkedin from "@assets/linkedin.png";
import github from "@assets/github.png";
import twitter from "@assets/twitter.png";
import development from "@assets/development.png";

function Home() {
  return (
    <div className="md:flex flex-row my-40">
      <div className="md:flex flex-col">
        <h2 className="hello-title-home text-2xl text-white font-medium mx-8 mt-20 mb-8 md:text-4xl">
          Hello !
        </h2>
        <h1 className="text-white text-2xl mx-7 mb-3 md:text-5xl">
          Je suis Amina HAKIMI
        </h1>
        <span className="text-white text-xl mx-8 my-2 md:text-3xl">
          Développeuse web junior
        </span>
        <div className="flex justify-start my-5">
          <img
            src={linkedin}
            alt="linkedin"
            width="30"
            height="30"
            className="mx-8"
          />
          <img src={github} alt="github" width="30" height="30" className="" />
          <img
            src={twitter}
            alt="twitter"
            width="30"
            height="30"
            className="mx-6"
          />
        </div>
        <div className="md:flex ">
          <Link to="/PORTFOLIO">
            <button
              type="button"
              className="button-home text-white text-center text-xl rounded my-6 py-1 mx-6 px-4"
            >
              Portfolio
            </button>
          </Link>
          <Link to="/CONTACT">
            <button
              type="button"
              className="button-home text-center text-white text-xl rounded my-6 py-1 mx-6 px-4"
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
      <div className="flex">
        <img
          src={development}
          alt="background"
          className="mt-10 opacity-30 ml-10"
        />
      </div>
    </div>
  );
}

export default Home;
