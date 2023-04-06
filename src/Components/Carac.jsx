import Spline from "@splinetool/react-spline";
import React from "react";

const Carac = () => {
  return(
    <section id='caracteristiques'>
      <h2>Bois</h2>
      <div className='content'>
        <Spline className='canvasStyle' scene='https://prod.spline.design/VcFomkg1shAqKtTp/scene.splinecode' />
        <div className='deskCarac'>
          <p>
            Un bureau classique est un choix pratique et fonctionnel pour toute personne qui travaille ou étudie à domicile.
            Avec des dimensions typiques d'environ 120 cm de largeur, 60 cm de profondeur et 75 cm de hauteur, il offre suffisamment d'espace pour accueillir un ordinateur, des documents, une lampe et d'autres fournitures de bureau essentielles.
          </p>
          <p>
            Les bureaux classiques sont généralement fabriqués à partir de matériaux durables tels que le bois, le métal ou le verre, ce qui leur permet de résister à une utilisation régulière et prolongée.
            Ils sont également disponibles dans une variété de styles et de finitions pour répondre à différents goûts et préférences de décoration d'intérieur.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Carac;
