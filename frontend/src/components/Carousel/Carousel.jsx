import React, { useState } from "react";
import "./Carousel.css";
import BtnSlider from "./BtnSlider";

const images = [
  {
    id: 1,
    titre: "Site web en HTML et CSS",
    Description:
      "Site web en HTML et CSS, Site web destiné à promouvoir les paysages japonais",
    langage: "Javascript",
    Librairie: "",
    Date_debut: "2022-09-26",
    Date_fin: "2022-10-07",
    src: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    titre: "Site web en React",
    Description: "Site web en React, Plateforme de streaming de films",
    langage: "React",
    Librairie: "Bootsratp",
    Date_debut: "2022-10-17",
    Date_fin: "2022-11-23",
    src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(setSlideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="container-slider max-w-2xl h-96 my-20 relative overflow-hidden md:hidden">
      {images.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            key={obj.id}
          >
            <img src={obj.src} alt={obj.titre} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
      <div className="container-dots absolute flex">
        {Array.from({ length: 5 }).map((item, index) => (
          <button
            type="button"
            onClick={() => moveDot(index + 1)}
            className={`${slideIndex === index + 1 ? "dot active" : "dot"} `}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
