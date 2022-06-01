import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./components/routes/HomePage";
import Recipes from "./components/routes/Recipes";
import Recipe from "./components/routes/Recipe";
import RecipeCreate from "./components/routes/RecipeCreate";
import RecipeEdit from "./components/routes/RecipeEdit";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { faBowlRice } from "@fortawesome/free-solid-svg-icons";


function App() {
  const location = useLocation();

  return (
    <div className="app">
      <h3>{location.state ? location.state.msg : null}</h3>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/recipes/create-recipe" element={<RecipeCreate />} />
        <Route path="/recipes/:id/update-recipe" element={<RecipeEdit />} />
      </Routes>
    </div>
  );
}

export default App;
