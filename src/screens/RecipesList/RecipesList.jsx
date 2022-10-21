import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { recipes } from "../../recipesData/recipesData";

import crossBlack from "../../assets/crossBlack.svg";

import styles from "./Recipes.module.css";

export default function RecipesList() {
  const [displayedRecipes, setDisplayedRecipes] = useState(null);
  const [vegetarianOnly, setVegetarianOnly] = useState(false);
  const [quickOnly, setQuickOnly] = useState(false);
  const [tuppableOnly, setTuppableOnly] = useState(false);
  const [search, setSearch] = useState("");

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
    newDisplayedRecipes = newDisplayedRecipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(search.toLowerCase());
    });
    setDisplayedRecipes(
      newDisplayedRecipes.sort((a, b) => a.name.localeCompare(b.name))
    );
  }, [search, vegetarianOnly, quickOnly, tuppableOnly]);

  return (
    <>
      {displayedRecipes && (
        <div className={styles.recipesContainer}>
          <div className={styles.recipesSearchInput}>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            ></input>
            <img onClick={() => setSearch("")} src={crossBlack} alt="Delete" />
          </div>
          <div className={styles.recipesParamsSelector}>
            <div
              className={styles.recipesParam}
              onClick={() => setVegetarianOnly(!vegetarianOnly)}
              id={vegetarianOnly ? styles.recipesParamSelected : null}
            >
              VEGE
            </div>
            <div
              className={styles.recipesParam}
              onClick={() => setQuickOnly(!quickOnly)}
              id={quickOnly ? styles.recipesParamSelected : null}
            >
              RAPIDE
            </div>
            <div
              className={styles.recipesParam}
              onClick={() => setTuppableOnly(!tuppableOnly)}
              id={tuppableOnly ? styles.recipesParamSelected : null}
            >
              TUPP
            </div>
          </div>
          <div className={styles.recipesList}>
            {displayedRecipes.map((recipe) => (
              <Link
                to={`/recipe/${recipe.lowerCaseName}`}
                key={recipe.key}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.recipesListElement}>{recipe.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
