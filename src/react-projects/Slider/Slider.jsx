import React, { useState } from "react";
import images from "./images/images";

function Slider() {

  const [image, setImage] = useState()
  return (
    <>
      <div>
        <button>Left</button>
        <div>
         <img src={image} alt="" />
        </div>
        <button>Right</button>
      </div>
    </>
  );
}

export default Slider;
