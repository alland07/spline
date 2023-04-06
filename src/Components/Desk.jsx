import Spline from "@splinetool/react-spline";
import React from "react";

const Desk = () => {
  return(
    <section id='desk'>
      <Spline className='scene' scene='https://prod.spline.design/qaD9t6LBUmgbesdx/scene.splinecode' />
      <div className='deskContent'>
        <p>
          Un bureau gamer RGB est un choix parfait pour tous les joueurs passionnés qui cherchent à améliorer leur expérience de jeu.
          Ce bureau est conçu pour offrir un environnement de jeu optimal avec des fonctionnalités pratiques et esthétiques.
        </p>
        <p>
          Outre l'éclairage LED, un bureau gamer RGB offre également une surface de jeu spacieuse pour accueillir tous vos périphériques de jeu.
        </p>
        <p>
          Les dimensions typiques d'un bureau gamer RGB sont d'environ 120 cm de largeur, 60 cm de profondeur et 75 cm de hauteur, offrant suffisamment d'espace pour votre clavier, votre souris, votre casque, votre moniteur et autres accessoires de jeu.
        </p>
        <p>
          Un bureau gamer RGB est souvent équipé de fonctionnalités pratiques, telles que des porte-gobelets et des porte-casques, pour garder votre espace de jeu organisé et fonctionnel.
        </p>
      </div>
    </section>
  );
}

export default Desk;
