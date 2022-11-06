import { Link } from "react-router-dom";

import React from "react";

import styles from "./Footer.module.css";

export default function Footer(props) {
  const { showDevTools, setShowDevTools } = props;
  return (
    <div className={styles.footer}>
      <button onClick={() => setShowDevTools(!showDevTools)}>
        {showDevTools ? "Cacher " : "Afficher "} les outils de développement
      </button>
      <Link to="/suggestion" style={{ textDecoration: "none" }}>
        <button>Nouvelle recette</button>
      </Link>
    </div>
  );
}
