import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Devtools from "./components/Devtools/Devtools";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import Recipe from "./screens/Recipe/Recipe";
import RecipesList from "./screens/RecipesList/RecipesList";
import Suggestion from "./screens/Suggestion/Suggestion";

import "./App.css";

export default function App() {
  const [showDevTools, setShowDevTools] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header />
        {showDevTools && <Devtools />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipesList />} />
          <Route path="/recipe/*" element={<Recipe />} />
          <Route path="/suggestion" element={<Suggestion />} />
        </Routes>
        <Footer showDevTools={showDevTools} setShowDevTools={setShowDevTools} />
      </Router>
    </div>
  );
}
