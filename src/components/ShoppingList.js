import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;
  const categories = [
    "All",
    ...new Set(items.map((item) => item.category)), 
  ];

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "All" ? "Filter by category" : category}
            </option>
          ))}
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
