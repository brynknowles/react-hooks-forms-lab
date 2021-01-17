import React from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={onSearchChange}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

/* 
Filter
In the filter component, there is a new input field for searching our list. When the user types in this field, the list of items should be filtered so that only items whose name matches the text are included.

Determine where you need to add state for this feature. What components need to know about the search text?

Once you've determined which component should hold the state for this feature, set up your initial state, and connect that state to the input field. Remember, we're trying to make this input a controlled input -- so the input's value should always be in sync with state.

After you've connected the input to state, you'll also need to find a way to set state when the input changes. To get the test passing, you'll need to use a prop called onSearchChange as a callback.

Finally, after making those changes, you'll need to use that state value to determine which items are being displayed on the page, similar to how the category dropdown works.

Note: you may be asking yourself, why are we making this input controlled when the <select> element is not a controlled input? Well, the <select> input should probably be controlled as well! The tests don't require it, but feel free to update the <select> element to be a controlled.
*/
