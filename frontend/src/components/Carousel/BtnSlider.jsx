import React from "react";
import "./Carousel.css";
import arrowRight from "@assets/arrowRight.png";
import leftArrow from "@assets/leftArrow.png";

function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      type="button"
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={direction === "next" ? arrowRight : leftArrow}
        alt="icone-fleche"
      />
    </button>
  );
}

export default BtnSlider;
