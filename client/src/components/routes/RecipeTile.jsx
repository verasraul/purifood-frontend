import React from "react";
import "../../styling.css";

function RecipeTile({ recipe }) {
  return (
    // create a filter to display images with certain extensions and not recipes with missing images
    // recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
    <div className="recipeTile">
      <div className="recipeTile-name">
        <p>{recipe["recipe"]["label"]}</p>
      </div>
      <a href={recipe["recipe"]["url"]}>
        <img
          className="recipeTile-image"
          src={recipe["recipe"]["image"]}
          alt="title-image"
        />
      </a>
      <div className="recipeTile-recipes">
        {recipe["recipe"]["ingredients"].map((ingredient, key) => {
          console.log(ingredient.text);
          return (
            <p className="recipeTile-ingredients" key={key}>
              {ingredient.text}
            </p>
          );
        })}
      </div>
    </div>
    // )
  );
}

export default RecipeTile;
