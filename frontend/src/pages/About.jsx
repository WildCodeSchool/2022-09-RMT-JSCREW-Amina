import React from "react";
import Profil from "@assets/Profil.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="mx-auto md:w-100 mt-40 md:flex items-center justify-between md:mt-40">
      <img
        src={Profil}
        alt="profile"
        width="200"
        className="mx-auto rounded-lg ml-24 md:w-[300px] md:mr-2"
      />
      <div className="md:flex flex-col basis-2/4  text-xl">
        <h3 className="mx-auto text-white text-xl font-medium ml-5 my-5 md:hidden">
          A PROPOS
        </h3>
        <p className="text-white text-sm ml-4 my-4 my-4 md:text-lg">
          à la recherche de mon épanouissement j'ai entamée ma reconversion
          professionnelle dans le développement web et rejoint l'aventure de la
          Wild Code School .
        </p>
        <p className="text-white text-sm ml-4 my-4 my-3 md:text-lg">
          Pendant les 5 mois intensifs nous apprenons les bases de la
          programmation et mettons en pratiques les notions apprises grâce aux
          ateliers et workshops .
        </p>
        <p className="text-white text-sm ml-4 my-4 my-3 md:text-lg">
          Nous montons aussi en compétences en réalisons des projets concret de
          sites web à l'issue de la formation je recherche un stage en
          entreprise .
        </p>

        <hr className="about-line w-40 mx-10 my-7 md:hidden" />
        <p className="text-white" />
        <div className="about-card flex flex-col mx-auto w-[350px] border-2 p-3 rounded md:grid gap-2 grid-cols-2 ml-15 md:w-[600px] md:ml-5 mt-5">
          <span className="text-white text-lg ml-1 w-50 md:text-lg">
            Formation Développeur Web
          </span>
          <span className="text-white text-lg ml-1 w-50 md:text-lg">
            (Wild Code School)
          </span>
          <span className="text-white text-lg ml-1 w-50 md:text-lg">
            Github : Samarcande86
          </span>
          <span className="text-white text-lg ml-1 md:text-xl">
            Expérience : 3 projets réalisés pendant la formation
          </span>
        </div>
        <div className="inline mt-5">
          <Link
            to="/"
            className="button-home hidden text-center text-lg text-white rounded md:inline md:mx-6 md:my-6 md:py-1 md:px-4"
          >
            Télécharger CV
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
