import { useState } from "react";
import axios from "axios";
import RecipeTile from "./RecipeTile";
import Layout from "../shared/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faBowlRice} from "@fortawesome/free-solid-svg-icons";


function HomePage() {
  const [query, setQuery] = useState(" ");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegetarian");
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_EDAMAM_RECIPE_ID_KEY}&app_key=${process.env.REACT_APP_EDAMAM_RECIPE_API_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    let response = await axios.get(url);
    console.log(response.data);
    setRecipes(response.data.hits);
    // console.log(response.data.hits);
  };

  const onSubmit = (e) => {
    // will prevent page from reloading when submiting the form/query
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <Layout>
      <div className="GetNewRecipes">
        <h1 onClick={getRecipeInfo}>
          <u><FontAwesomeIcon icon={faBowlRice}/> PuriFood</u>
        </h1>

        <form className="GetNewRecipes-searchForm" onSubmit={onSubmit}>
          <input
            className="GetNewRecipes-searchInput"
            type="text"
            placeholder="Type the ingredient"
            autoComplete="Off"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            
          /><FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/>

          <select className="GetNewRecipes-healthLabels">
            <option
              value="vegan"
              onClick={() => {
                setHealthLabel("vegan");
              }}
            >
              Vegan
            </option>
            <option
              value="vegan"
              onClick={() => {
                setHealthLabel("vegetarian");
              }}
            >
              Vegetarian
            </option>
            <option
              value="vegan"
              onClick={() => {
                setHealthLabel("low-sugar");
              }}
            >
              Low-Sugar
            </option>
            <option
              value="vegan"
              onClick={() => {
                setHealthLabel("dairy-free");
              }}
            >
              Dairy-Free
            </option>
            <option
              value="vegan"
              onClick={() => {
                setHealthLabel("immuno-supportive");
              }}
            >
              Immuno-Supportive
            </option>
            <option
              value="vegan"
              onClick={() => {
                setHealthLabel("gluten-free");
              }}
            >
              Gluten-Free
            </option>
          </select>


          <input
            className="GetNewRecipes-submit"
            type="submit"
            value="Get Recipe"
          />
        </form>
        <div className="GetNewRecipes-recipes-list-container">
          {recipes.map((recipe, key) => {
            return (
              <div className="list-item" key={key}>
                <RecipeTile key={recipe.uniqueId} recipe={recipe} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
