import React, { useEffect, useState } from "react";
import apiConnexion from "@services/apiConnexion";
import "./Carousel.css";
import BtnSlider from "./BtnSlider";

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [project, setProject] = useState([]);
  useEffect(() => {
    apiConnexion
      .get(`/Project`)
      .then((json) => setProject(json.data))
      .catch((err) => console.error(err));
  }, []);

  const nextSlide = () => {
    if (slideIndex !== project.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === project.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(project.length);
    }
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div>
      <div className="container-slider max-w-2xl h-96 my-20 relative overflow-hidden md:hidden">
        {project.map((obj, index) => {
          return (
            <div
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
              key={obj.id}
            >
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${obj.url_image}`}
                alt={`${import.meta.env.VITE_BACKEND_URL}/${obj.titre_projet}`}
                className="z-0"
              />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction="next" />
        <BtnSlider moveSlide={prevSlide} direction="prev" />
        <div className="container-dots absolute flex">
          {project.map((item, index) => (
            <button
              type="button"
              onClick={() => moveDot(index + 1)}
              className={`${slideIndex === index + 1 ? "dot active" : "dot"} `}
            >
              {" "}
            </button>
          ))}
        </div>
      </div>
      {project.length > 0 && (
        <div>
          <h1 className="text-white text-center font-semibold text-lg my-5 underline md:hidden">
            Portfolio des projets
          </h1>
          <p className="hello-title-home text-white text-center font-bold mx-3 my-5 z-20 md:hidden">
            {project[slideIndex - 1].titre_projet}
          </p>
          <p className="text-white text-center font-semibold leading-7 mx-6 my-5 z-20 md:hidden">
            {project[slideIndex - 1].description_projet}
          </p>
          <p className="text-white text-center  mx-6 my-5 font-medium z-20 md:hidden">
            Languages utilisés : {project[slideIndex - 1].language[0].name}
          </p>
          <p className="text-white text-center  mx-6 my-5 font-medium z-20 md:hidden">
            Librairie css utilisée : {project[slideIndex - 1].nom}
          </p>
          <p className="text-white text-center  mx-6 my-5 font-medium md:hidden">
            Durée du projet :
            {project[slideIndex - 1].date_debut.split("T").shift()} au
            {project[slideIndex - 1].date_fin.split("T").shift()}
          </p>
          <div className="flex flex-col items-center">
            <a
              className="button-home rounded text-white font-semibold text-center px-3 py-1 my-5 md:hidden"
              href={project[slideIndex - 1].url_site}
              target="_blank"
              rel="noreferrer"
            >
              Voir le site
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
