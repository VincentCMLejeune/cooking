import React, { useEffect, useState } from "react";
import { recipes } from "../../recipesData/recipesData";

import RecipeCard from "../../components/RecipeCard/RecipeCard";

import styles from "./Home.module.css";

export default function Home() {
  const [index, setIndex] = useState();

  useEffect(() => {
    const randomIndex = Math.ceil(Math.random() * (recipes.length - 2));
    setIndex(randomIndex);
  }, []);

  return (
    <div className={styles.homeContainer}>
      Welcome to the home
      <RecipeCard index={recipes.length - 1} />
      <RecipeCard index={recipes.length} />
      <h2>Et la recette aléatoire :</h2>
      {index && <RecipeCard index={index} />}
    </div>
  );
}
