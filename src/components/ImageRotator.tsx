import React, { useState, useEffect } from "react";
import "../styles/Page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface ImageRotatorPros {
  images: string[];
}

const ImageRotator = ({ images }: ImageRotatorPros) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [currentImage, images.length]);

  const handlePrevClick = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="image-rotator">
      <button className="leftArrow" onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <img className="cImage" src={images[currentImage]} alt="rotating boat" />
      <button className="rightArrow" onClick={handleNextClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default ImageRotator;
