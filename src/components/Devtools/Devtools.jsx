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
        <div className={styles.box} style={{ backgroundColor: "#ADBCA5" }}>
          GREEN
        </div>
        <div className={styles.box} style={{ backgroundColor: "#E8B9AB" }}>
          MELON
        </div>
        <div className={styles.box} style={{ backgroundColor: "#E09891" }}>
          PINK
        </div>
        <div className={styles.box} style={{ backgroundColor: "#CB769E" }}>
          ORCHID
        </div>
        <div className={styles.box} style={{ backgroundColor: "#8C5F66" }}>
          MAUVE
        </div>
      </div>
    </div>
  );
}
