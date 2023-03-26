import React from "react";
import ImageRotator from "../components/ImageRotator";
import images from "../assets";

const Home = () => {
  const imagesList = [images.image1, images.image2, images.image3];

  return (
    <div>
      <ImageRotator images={imagesList} />
    </div>
  );
};

export default Home;
