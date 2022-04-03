import React from "react";

import { recipes } from "../../recipesData/recipesData";

import styles from "./RecipeCard.module.css";

export default function RecipeCard(props) {
  const { index } = props;

  const currentRecipe = recipes[index - 1];

  return (
    <div className={styles.recipeCard}>
      It is a card
      <div>The key is {index}</div>
      <div>And the recipe is {currentRecipe.name}</div>
    </div>
  );
}
