import styles from "./Recipe.module.css";
const recipesImages = require("../../assets/recipes/recipesImg");

export default function RecipePicture(props) {
  return (
    <div className={styles.recipePictureContainer}>
      <img
        src={recipesImages[props.name]}
        alt="recipe"
        className={styles.recipePicture}
      />
    </div>
  );
}
