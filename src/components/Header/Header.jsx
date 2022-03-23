import React from "react";
import { Link } from "react-router-dom";
import pizzaLogo from "../../assets/pizzaLogo.png";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
        <Link to="/">
          <img src={pizzaLogo} className={styles.headerLogo} alt="Logo" />
        </Link>
        <Link to="/recipes">
          <div>Toutes les recettes</div>
        </Link>
    </div>
  );
}
