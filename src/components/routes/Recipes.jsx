import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../shared/Layout";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios(`http://localhost:8000/recipes`);
      setRecipes(res.data.MyRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const recipesData = recipes.map((recipe) => {
    return (
      <div className="listed-recipe" key={recipe._id}>
        <NavLink to={`/recipes/${recipe._id}`}>
          <h1>{recipe.recipeName}</h1>
          <img src={recipe.recipeImage} alt="" />
        </NavLink>
      </div>
    );
  });

  useEffect(() => {
    fetchData();
  });

  return (
    <Layout>
      <div className="saved-recipes-container">
        <div className="listed-recipes-container">{recipesData}</div>
      </div>
    </Layout>
  );
};

export default Recipes;
