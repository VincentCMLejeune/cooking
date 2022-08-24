import React from "react";
import { Link } from "react-router-dom";

import styles from "./Devtools.module.css";

export default function Devtools() {
  return (
    <div className={styles.banner}>
      <Link to="/suggestion" style={{ color: "#FFF" }}>
        <div>Ajouter une recette</div>
      </Link>
      <a
        href="https://trello.com/b/jVS2zwyI/cooking-website"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#FFF" }}
      >
        Trello
      </a>
      <div className={styles.boxContainer}>
        <div className={styles.box} style={{ backgroundColor: "#f6fff8" }}>
          X LIGHT GREEN
        </div>
        <div className={styles.box} style={{ backgroundColor: "#eaf4f4" }}>
          LIGHT GREEN
        </div>
        <div className={styles.box} style={{ backgroundColor: "#cce3de" }}>
          GREEN
        </div>
        <div className={styles.box} style={{ backgroundColor: "#a4c3b2" }}>
          DARK GREEN
        </div>
        <div className={styles.box} style={{ backgroundColor: "#6b9080" }}>
          X DARK GREEN
        </div>
      </div>
    </div>
  );
}
