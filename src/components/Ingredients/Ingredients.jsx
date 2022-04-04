import React from "react";
import styles from "./Ingredients.module.css";

export default function Ingredients(props) {
  const { persons, ingredients } = props;

  const [currentPersons, setCurrentPersons] = React.useState(persons);

  return (
    <div className={styles.ingredientsContainer}>
      <h2>Ingredients</h2>
      <div>
        <input
          type="number"
          value={currentPersons}
          onChange={(e) => setCurrentPersons(e.target.value)}
        />{" "}
        personnes mangent
      </div>

      <ul>
        {ingredients.map((ingredient, index) =>
          ingredient.length === 1 ? (
            <li key={index}>{ingredient.join(" ")}</li>
          ) : (
            <li key={index}>
              {(ingredient[0] / persons) * currentPersons} {ingredient[1]}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
