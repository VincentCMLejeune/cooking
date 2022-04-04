import React from "react";

import styles from "./Footer.module.css";

export default function Footer(props) {
  const { showDevTools, setShowDevTools } = props;
  return (
    <div className={styles.footer}>
      <button onClick={() => setShowDevTools(!showDevTools)}>
        {showDevTools ? "Cacher " : "Afficher "} les outils de développement
      </button>
    </div>
  );
}
