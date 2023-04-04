import Spline from "@splinetool/react-spline";
import React from "react";

const Colors = () => {
  return(
    <section id='colors'>
      <h2>Colors</h2>
      <div className='content'>
        <div className='colorContent'>
          Content
        </div>
        <Spline className={'canvasStyle'} scene="https://prod.spline.design/VcFomkg1shAqKtTp/scene.splinecode" />
      </div>
    </section>
  );
}

export default Colors;
