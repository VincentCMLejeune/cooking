import React from "react";
import { Link } from "react-router-dom";
import { recipes } from "../../recipesData/recipesData";

import styles from "./Recipes.module.css";

export default function RecipesList() {
  return (
    <div className={styles.recipesContainer}>
      Welcome to the recipes list
      {recipes.map((recipe) => (
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
