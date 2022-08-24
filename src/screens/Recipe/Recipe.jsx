import React from "react";
import { useLocation } from "react-router-dom";

import Ingredients from "../../components/Ingredients/Ingredients";

import clock from "../../assets/pictures/clock.svg";
import lunch from "../../assets/pictures/lunch.svg";
import vegetable from "../../assets/pictures/vegetable.svg";

import styles from "./Recipe.module.css";

import RecipePicture from "./RecipePicture";
// import recipePicture from "../../assets/recipes/soupeDeglincoco.jpg";

export default function Recipe() {
  const location = useLocation();
  const { currentRecipe } = location.state;
  // const Picture = require(currentRecipe.illustration)


  return (
    <div className={styles.recipeContainer}>
      <h1>{currentRecipe.name}</h1>
      <RecipePicture img={currentRecipe.illustration} />
        {/* <img
          src={Picture}
          className="recipePicture"
          alt={currentRecipe.name}
        /> */}
        {/* <img src={require("../../assets/recipes/soupeDeglincoco.jpg")} /> */}
      <div className={styles.recipeDetails}>
        {currentRecipe.isQuick && (
          <div>
            <img src={clock} alt="rapide" />
            Rapide
          </div>
        )}
        {currentRecipe.isTuppable && (
          <div>
            <img src={lunch} alt="tuppable" />
            Tuppable
          </div>
        )}
        {currentRecipe.isVegetarian && (
          <div>
            <img src={vegetable} alt="végétarien" />
            Végétarien
          </div>
        )}
      </div>
      <div className={styles.recipeIngredientsAndProcess}>
        <Ingredients
          persons={currentRecipe.basePersonsIngredients}
          ingredients={currentRecipe.ingredients}
        />

        <div className={styles.recipeProcess}>
          <h2>Etapes</h2>
          <ol>
            {currentRecipe.recipe.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
