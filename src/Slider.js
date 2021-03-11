import React from 'react';
import './Slider.css';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "./images/image1.jpg" },
  { url: "./images/image2.jpg" },
  { url: "./images/image3.jpg" },
  { url: "./images/image4.jpg" },
  { url: "./images/image5.jpg" },
  { url: "./images/image6.jpg" },
  { url: "./images/image7.jpg" },
  { url: "./images/image8.jpg" },
  { url: "./images/image9.jpg" },
];

const Slider = () => {
    return (
      <div>
        <SimpleImageSlider height={504} images={images} />
      </div>
    );
}

export default Slider
