import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Recipe.module.css";

export default function Recipe() {
  const location = useLocation();
  const { currentRecipe } = location.state;

  return (
    <div className={styles.recipeContainer}>
      Welcome to the recipe of the famous {currentRecipe.name}
      <h2>Process</h2>
      <ol>
        {currentRecipe.recipe.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
