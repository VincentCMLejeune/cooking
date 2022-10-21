import React from "react";
import { Link } from "react-router-dom";
import pizzaLogo from "../../assets/pizzaLogo.png";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className={styles.header}>
        <img src={pizzaLogo} className={styles.headerLogo} alt="Logo" />
        <h1>LES RECETTES DU OINK</h1>
      </div>
    </Link>
  );
}
