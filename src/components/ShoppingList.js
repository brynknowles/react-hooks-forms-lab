import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [category, setCategory] = useState("All");
  const [itemSearch, setItemSearch] = useState("");

  // console.log(itemSearch, items)

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(itemSearch.toLowerCase())
  });

  // console.log("Filtered Items: ", filteredItems);

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  const itemsToDisplay = filteredItems.filter((item) => {
    if (category === "All") return true;
    return item.category === category;
  });

  function handleSearchChange(event) {
    // console.log(event.target.value)
    setItemSearch(event.target.value)
  };

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
