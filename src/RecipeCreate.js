import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { ...formData, id: Date.now() };
    addRecipe(newRecipe);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="cuisine" placeholder="Cuisine" value={formData.cuisine} onChange={handleChange} />
      <input type="text" name="photo" placeholder="Photo URL" value={formData.photo} onChange={handleChange} />
      <textarea name="ingredients" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange} />
      <textarea name="preparation" placeholder="Preparation" value={formData.preparation} onChange={handleChange} />
      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;