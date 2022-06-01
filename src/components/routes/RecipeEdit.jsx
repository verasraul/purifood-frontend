import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import RecipeForm from "../shared/RecipeForm";

function RecipeEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recipe, setRecipe] = useState({
    recipeName: "",
    recipeImage: "",
    ingredients: "",
  });
  const [updated, setUpdated] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios(`http://localhost:3001/recipes/${id}`);
      console.log(response);
      setRecipe(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedItem = Object.assign(recipe, updatedField);
    setRecipe(editedItem);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3001/recipes/${id}/update-recipe`,
      method: "PUT",
      data: recipe,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (updated) {
      return navigate(`/recipes/${id}`);
    }
  });

  return (
    <div>
      <RecipeForm
        recipe={recipe}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath={`/recipes/${id}`}
      />
    </div>
  );
}

export default RecipeEdit;
