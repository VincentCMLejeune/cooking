import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { recipes } from "../../recipesData/recipesData";

import styles from "./Recipes.module.css";

export default function RecipesList() {
  const [displayedRecipes, setDisplayedRecipes] = useState(recipes);
  const [vegetarianOnly, setVegetarianOnly] = useState(false);
  const [quickOnly, setQuickOnly] = useState(false);
  const [tuppableOnly, setTuppableOnly] = useState(false);

  useEffect(() => {
    let newDisplayedRecipes = recipes;
    if (vegetarianOnly) {
      newDisplayedRecipes = newDisplayedRecipes.filter(
        (recipe) => recipe.isVegetarian === true
      );
    }
    if (quickOnly) {
      newDisplayedRecipes = newDisplayedRecipes.filter(
        (recipe) => recipe.isQuick === true
      );
    }
    if (tuppableOnly) {
      newDisplayedRecipes = newDisplayedRecipes.filter(
        (recipe) => recipe.isTuppable === true
      );
    }
    setDisplayedRecipes(newDisplayedRecipes);
  }, [vegetarianOnly, quickOnly, tuppableOnly]);

  return (
    <div className={styles.recipesContainer}>
      <h1>Welcome to the recipes list</h1>
      <div className={styles.optionsSelector}>
        <label htmlFor="vegetarian">Vegetarien</label>
        <input
          type="checkbox"
          onChange={(e) => setVegetarianOnly(!vegetarianOnly)}
        ></input>
      </div>
      <div className={styles.optionsSelector}>
        <label htmlFor="vegetarian">Rapide</label>
        <input
          type="checkbox"
          onChange={(e) => setQuickOnly(!quickOnly)}
        ></input>
      </div>
      <div className={styles.optionsSelector}>
        <label htmlFor="vegetarian">Tuppable</label>
        <input
          type="checkbox"
          onChange={(e) => setTuppableOnly(!tuppableOnly)}
        ></input>
      </div>

      {displayedRecipes.map((recipe) => (
        <Link
          to={`/recipe/${recipe.lowerCaseName}`}
          key={recipe.key}
          state={{ currentRecipe: recipe }}
        >
          {recipe.name}
        </Link>
      ))}
    </div>
  );
}
