import { Link } from "react-router-dom";
const RecipeForm = ({ handleSubmit, handleChange, cancelPath }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="recipe-form-container">
      <form className="recipe-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter Recipe Name"
          name="recipeName"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Enter Recipe Image Link"
          name="recipeImage"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Enter Recipe Ingredients"
          name="ingredients"
          onChange={(e) => handleChange(e)}
        />
        <div>
          <div className="recipe-form-buttons">
            <button type="submit" className="button">
              Submit
            </button>

            <Link to={cancelPath}>
              <button className="button">Cancel</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
