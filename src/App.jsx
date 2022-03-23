import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import Recipe from "./screens/Recipe/Recipe";
import RecipesList from "./screens/RecipesList/RecipesList";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipesList />} />
          <Route path="/recipe/*" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}
