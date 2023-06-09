import Spline from "@splinetool/react-spline";
import React from "react";

const Colors = () => {
  return(
    <section id='colors'>
      <h2>Granite</h2>
      <div className='content'>
        <div className='colorContent'>
          <p>
            Un bureau en pierre est un choix élégant et intemporel pour toute personne qui souhaite ajouter une touche de sophistication à son espace de travail. Fabriqué à partir de matériaux naturels tels que le granit ou le marbre, il offre une surface durable et facile à nettoyer qui résiste à l'usure quotidienne. De plus, sa texture unique et sa couleur naturelle ajoutent une touche de charme et de caractère à tout décor intérieur.
          </p>
        </div>
        <Spline className='canvasStyle' scene="https://prod.spline.design/BDKxtlG8aqs4j9kf/scene.splinecode" />
      </div>
    </section>
  );
}

export default Colors;
