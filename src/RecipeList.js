import React from "react";

function RecipeList({ recipes, setRecipes }) {

  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes &&
            recipes.map((recipe, index) => {
              return <tr key={index}>
                <td style={{ width: "10%" }}>
                  {recipe.name}
                </td>
                <td style={{ width: "10%" }}>
                  {recipe.cuisine}
                </td>
                <td style={{ width: "10%" }}>
                  <img src={recipe.photo} alt={recipe.name} />
                </td>
                <td className="content_td" style={{ width: "30%" }}>
                  <p>{(recipe.ingredients)}</p>
                </td>
                <td className="content_td" style={{ width: "30%" }}>
                  <p>{(recipe.preparation)}</p>
                </td>
                <td style={{ width: "10%" }}>
                  <button name="delete" onClick={() =>
                    setRecipes((prev) => prev.filter((item, i) => i !== index))}>
                    Delete
                  </button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
