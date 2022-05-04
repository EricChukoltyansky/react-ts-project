import React, { useState } from "react";
import images from "./images/images";
import "./SliderStyle.css";

function Slider() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prevState) => (prevState += 1));
    console.log(value);
    console.log(images.length);
    if (value >= images.length - 1) setValue((prevState) => (prevState = 0));
  };

  const decrement = () => {
    setValue((prevState) => (prevState -= 1));
    if (value <= 0) setValue((prevState) => (prevState = images.length - 1));
  };

  return (
    <>
      <div className="container">
        <div className="slider">
          <button onClick={decrement}>Left</button>
          <div className="image-container">
            <img src={images[value].src} alt={images[value].alt} />
          </div>
          <button onClick={increment}>Right</button>
        </div>
      </div>
    </>
  );
}

export default Slider;
