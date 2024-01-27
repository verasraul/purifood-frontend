import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RecipeForm from "../shared/RecipeForm";
import axios from "axios";

const RecipeCreate = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    recipeName: "",
    recipeImage: "",
    ingredients: "",
  });

  const [createdRecipe, setCreatedRecipe] = useState(null);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedRecipe = Object.assign(recipe, updatedField);
    setRecipe(editedRecipe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:8000/recipes/create-recipe`,
      method: "POST",
      data: recipe,
    })
      .then(() => setCreatedRecipe(recipe))
      .catch(console.error);
  };

  useEffect(() => {
    if (createdRecipe) {
      return navigate("/recipes");
    }
  }, [createdRecipe, navigate]);
  return (
    <div>
      <RecipeForm
        recipe={recipe}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath="/recipes"
      />
    </div>
  );
};

export default RecipeCreate;
