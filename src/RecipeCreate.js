import React, { useState } from "react";

function RecipeCreate({ setRecipes }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const handleChange = ({ target }) => {
    switch (target.name) {
      case "name":
        setName(target.value)
        break;
      case "cuisine":
        setCuisine(target.value)
        break;
      case "photo":
        setPhoto(target.value)
        break;
      case "ingredients":
        setIngredients(target.value)
        break;
      case "preparation":
        setPreparation(target.value)
        break;
      default:
        console.log("Invalid form field name :(")
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes((prev) =>
      [
        ...prev,
        {
          name: name,
          cuisine: cuisine,
          photo: photo,
          ingredients: ingredients,
          preparation: preparation
        }
      ]
    )
    setName("")
    setCuisine("")
    setPhoto("")
    setIngredients("")
    setPreparation("")
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table >
        <tbody>
          <tr>
            <td style={{ width: "10%" }}>
              <label htmlFor="name">
                <input
                  id="name"
                  name="name"
                  required={true}
                  value={name}
                  placeholder="Name"
                  onChange={handleChange}
                />
              </label>
            </td>
            <td style={{ width: "10%" }}>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  name="cuisine"
                  required={true}
                  value={cuisine}
                  placeholder="Cuisine"
                  onChange={handleChange}
                />
              </label>
            </td>
            <td style={{ width: "10%" }}>
              <label htmlFor="photo">
                <input
                  id="photo"
                  name="photo"
                  required={true}
                  value={photo}
                  placeholder="URL"
                  onChange={handleChange}
                />
              </label>
            </td>
            <td style={{ width: "30%" }}>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  name="ingredients"
                  required={true}
                  rows={3}
                  value={ingredients}
                  placeholder="Ingredients"
                  onChange={handleChange}
                />
              </label>
            </td>
            <td style={{ width: "30%" }}>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  name="preparation"
                  required={true}
                  rows={3}
                  value={preparation}
                  placeholder="Preparation"
                  onChange={handleChange}
                />
              </label>
            </td>
            <td style={{ width: "10%" }}>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
