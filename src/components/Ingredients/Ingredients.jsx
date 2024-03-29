import React, { useState, useEffect } from "react";
import styles from "./Ingredients.module.css";

import man from "../../assets/pictures/man.svg";
import woman from "../../assets/pictures/woman.svg";
import surprised from "../../assets/pictures/surprised.svg";

export default function Ingredients(props) {
  const { persons, ingredients } = props;
  const [picutres, setPictures] = useState([]);

  const [currentPersons, setCurrentPersons] = useState(persons);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let newPictures = [];
    if (currentPersons > 10) {
      newPictures.push(surprised);
      setPictures(newPictures);
    } else {
      for (let i = 0; i < currentPersons; i++) {
        if (i % 2 === 0) {
          newPictures.push(man);
        } else {
          newPictures.push(woman);
        }
      }
      setPictures(newPictures);
    }
  }, [currentPersons]);

  useEffect(() => {
    setTimeout(function () {
      setShowError(false);
    }, 2000);
  }, [showError]);

  return (
    <div className={styles.ingredientsContainer}>
      <h2>Ingredients pour</h2>
      <div className={styles.personList}>
        {picutres.map((picture, index) => (
          <div key={index} className={styles.personPicture}>
            <img src={picture} alt="person" />
          </div>
        ))}
      </div>
      <div className={styles.personsInput}>
        <button
          onClick={() =>
            currentPersons > 1
              ? setCurrentPersons(currentPersons - 1)
              : setShowError(true)
          }
        >
          -1
        </button>
        <div className={styles.personsInputValue}>{currentPersons}</div>
        <button onClick={() => setCurrentPersons(currentPersons + 1)}>
          +1
        </button>
      </div>
      {showError && (
        <em className={styles.ingredientsError}>
          au pire, tu manges tout seul
        </em>
      )}

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
