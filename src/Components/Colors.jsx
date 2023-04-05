import Spline from "@splinetool/react-spline";
import React from "react";

const Colors = () => {
  return(
    <section id='colors'>
      <h2>Bureau granite</h2>
      <div className='content'>
        <div className='colorContent'>
          Content
        </div>
        <Spline className='canvasStyle' scene="https://prod.spline.design/BDKxtlG8aqs4j9kf/scene.splinecode" />
      </div>
    </section>
  );
}

export default Colors;
