import React, { useState } from "react";

import styles from "./Suggestion.module.css";
import { recipes } from "../../recipesData/recipesData";

export default function Suggestion() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [persons, setPersons] = useState(0);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState("");
  const [vegetarian, setVegetarian] = useState(false);
  const [quick, setQuick] = useState(false);
  const [tuppable, setTuppable] = useState(false);
  const [json, setJson] = useState(undefined);

  const formatIngredient = (ingredient) => {
    if (ingredient.split(" ")[0].trim().match(/\d+/)) {
      let newIngredient = [];
      ingredient = ingredient.split(" ");
      newIngredient.push(Number(ingredient.shift().trim()));
      newIngredient.push(ingredient.join(" "));
      return newIngredient;
    } else {
      return [ingredient];
    }
  };

  const addIngredient = () => {
    let arr = ingredients;
    arr.push(formatIngredient(currentIngredient));
    setIngredients(arr);
    setCurrentIngredient("");
  };

  const deleteIngredient = (indexToRemove) => {
    setIngredients(
      ingredients.filter((ingredient, index) => index !== indexToRemove)
    );
  };

  const addStep = () => {
    let arr = steps;
    arr.push(currentStep);
    setSteps(arr);
    setCurrentStep("");
  };

  const deleteStep = (indexToRemove) => {
    setSteps(steps.filter((step, index) => index !== indexToRemove));
  };

  const createJson = () => {
    let newJson = {};

    newJson.name = title;
    newJson.lowerCaseName = title.toLowerCase().split(" ").join("");
    newJson.key = recipes.length + 1;
    newJson.ingredients = ingredients;
    newJson.basePersonsIngredients = persons;
    newJson.recipe = steps;

    if (vegetarian) {
      newJson.isVegetarian = true;
    } else {
      newJson.isVegetarian = false;
    }
    if (quick) {
      newJson.isQuick = true;
    } else {
      newJson.isQuick = false;
    }
    if (tuppable) {
      newJson.isTuppable = true;
    } else {
      newJson.isTuppable = false;
    }

    setJson(JSON.stringify(newJson));

    navigator.clipboard.writeText(json);
    alert("Recette ajoutée dans le presse papiers !");
  };

  return (
    <div className={styles.suggestionContainer}>
      <h1>Créer un fichier pour une nouvelle recette</h1>
      <label>Nom de la recette</label>
      <br />
      <input
        className={styles.optionText}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Ingrédients</label>
      <br />
      <input
        className={styles.optionsIngredients}
        type="text"
        value={currentIngredient}
        onChange={(e) => setCurrentIngredient(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addIngredient()}
      />
      <button onClick={addIngredient}>Ajouter</button>
      {ingredients.map((ingredient, index) => (
        <div key={index} className={styles.ingredientOption}>
          <li>{ingredient}</li>
          <button onClick={() => deleteIngredient(index)}>Supprimer</button>
        </div>
      ))}
      <br />
      <label>Nombre de personnes</label>
      <br />
      <input
        className={styles.optionText}
        type="number"
        value={persons}
        onChange={(e) => setPersons(e.target.value)}
      />
      <br />
      <label>Etapes</label>
      <br />
      <input
        className={styles.optionsSteps}
        type="text"
        value={currentStep}
        onChange={(e) => setCurrentStep(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addStep()}
      />
      <button onClick={addStep}>Ajouter</button>
      {steps.map((ingredient, index) => (
        <div key={index} className={styles.stepsOption}>
          <li>{ingredient}</li>
          <button onClick={() => deleteStep(index)}>Supprimer</button>
        </div>
      ))}

      <div className={styles.optionsSelector}>
        <label htmlFor="vegetarian">Vegetarien</label>
        <input
          type="checkbox"
          onChange={(e) => setVegetarian(!vegetarian)}
        ></input>
      </div>
      <div className={styles.optionsSelector}>
        <label htmlFor="vegetarian">Rapide</label>
        <input type="checkbox" onChange={(e) => setQuick(!quick)}></input>
      </div>
      <div className={styles.optionsSelector}>
        <label htmlFor="vegetarian">Tuppable</label>
        <input type="checkbox" onChange={(e) => setTuppable(!tuppable)}></input>
      </div>
      <button onClick={createJson}>CREER LA RECETTE</button>
      {json && <div className={styles.jsonToCopy}>{json}</div>}
    </div>
  );
}
