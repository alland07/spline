import Spline from "@splinetool/react-spline";
import React from "react";

const Carac = () => {
  return(
    <section id='caracteristiques'>
      <h2>Caractéristiques</h2>
      <div className='content'>
        <Spline className={'canvasStyle'} scene="https://prod.spline.design/VcFomkg1shAqKtTp/scene.splinecode" />
        <div className='deskCarac'>
          Content
        </div>
      </div>
    </section>
  );
}

export default Carac;
