import React, { useEffect, useState } from "react";
import apiConnexion from "@services/apiConnexion";
import "./Carousel.css";
import BtnSlider from "./BtnSlider";

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [project, setProject] = useState([]);
  useEffect(() => {
    apiConnexion
      .get(`/PORTFOLIO`)
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
      setSlideIndex(setSlideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(project.length);
    }
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="container-slider max-w-2xl h-96 my-20 relative overflow-hidden md:hidden">
      {project.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            key={obj.id}
          >
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${obj.url_image}`}
              alt={obj.titre}
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
  );
}

export default Carousel;
