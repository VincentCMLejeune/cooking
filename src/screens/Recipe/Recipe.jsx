import { useEffect, useState } from "react";
import { recipes } from "../../recipesData/recipesData";

import Ingredients from "../../components/Ingredients/Ingredients";

import clock from "../../assets/pictures/clock.svg";
import lunch from "../../assets/pictures/lunch.svg";
import vegetable from "../../assets/pictures/vegetable.svg";

import styles from "./Recipe.module.css";

export default function Recipe() {
  const [currentRecipe, setCurrentRecipe] = useState(null);

  useEffect(() => {
    const urlRecipe = window.location.pathname.split("/recipe/")[1];
    const foundRecipe = recipes.find(
      (recipe) => recipe.lowerCaseName === urlRecipe
    );
    if (foundRecipe) {
      setCurrentRecipe(foundRecipe);
    }
  }, []);

  return (
    <>
      {currentRecipe && (
        <div className={styles.recipeContainer}>
          <img
            src={require(`../../assets/recipes/${currentRecipe.lowerCaseName}.jpg`)}
            alt={currentRecipe}
            className={styles.recipePicture}
          />
          <h1>{currentRecipe.name}</h1>
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
      )}
    </>
  );
}
