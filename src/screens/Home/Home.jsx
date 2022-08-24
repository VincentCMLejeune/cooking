import React, { useEffect, useState } from "react";
import { recipes } from "../../recipesData/recipesData";

import RecipeCard from "../../components/RecipeCard/RecipeCard";
import HomeToolbar from "../../components/Home Toolbar/HomeToolbar";

import styles from "./Home.module.css";

export default function Home() {
  const [index, setIndex] = useState();

  useEffect(() => {
    const randomIndex = Math.ceil(Math.random() * (recipes.length - 2));
    setIndex(randomIndex);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <HomeToolbar />
      <div className={styles.lastTwoRecipeContainer}>
        <RecipeCard index={recipes.length - 1} />
        <RecipeCard index={recipes.length} />
      </div>
      
      <div className={styles.randomRecipeContainer}>
        <h2>Et la recette aléatoire :</h2>
        {index && <RecipeCard index={index} />}
      </div>
    </div>
  );
}
