import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleNameChange(event) {
    setItemName(event.target.value);
  }

  function handleCategoryChange(event) {
    setItemCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Create a new item object only if name is not empty
    if (itemName.trim()) {
      const newItem = {
        id: uuid(),
        name: itemName,
        category: itemCategory,
      };

      // Pass the new item to the parent component
      onItemFormSubmit(newItem);

      // Clear the form after submission
      setItemName("");
      setItemCategory("Produce");
    }
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName}
          onChange={handleNameChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
