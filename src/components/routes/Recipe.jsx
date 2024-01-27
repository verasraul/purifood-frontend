import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";

function Recipe() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios(`http://localhost:3000/api/recipes/${id}`);
      console.log(response);
      const result = response.data.selectedRecipe;
      setRecipe(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const destroy = () => {
    axios({
      url: `http://localhost:3001/recipes/${id}`,
      method: "DELETE",
    })
      .then(() => setDeleted(true))
      .catch(console.error);
  };
  useEffect(() => {
    if (deleted) {
      return navigate("/recipes");
    }
  }, [deleted, navigate]);

  return (
    <Layout>
      <div className="recipe-post-container">
        <h1>{recipe.recipeName}</h1>
        <img src={recipe.recipeImage}></img>
        <p>{recipe.ingredients}</p>
        <div className="recipe-buttons">
          <NavLink to={`/recipes/${id}/update-recipe`} className="button">
            Edit
          </NavLink>
          <button onClick={() => destroy()} className="button">
            Delete
          </button>
          <NavLink to={"/recipes"} className="button">
            Back
          </NavLink>
        </div>
      </div>
    </Layout>
  );
}

export default Recipe;
