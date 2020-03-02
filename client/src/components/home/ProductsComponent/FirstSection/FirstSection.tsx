import React from "react";
import { Image } from "./FirstSection.Style";

const FirstSection = () => {
  return (
    <Image>
      <div className='first-section-image'>
        <img src={"/images/fashion3.jpg"} alt='fashion1' />
      </div>
    </Image>
  );
};

export default FirstSection;
