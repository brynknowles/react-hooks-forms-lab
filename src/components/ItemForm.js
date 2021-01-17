import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function submitHandler(event) {
    event.preventDefault();
    console.log("submitting form")

    onItemFormSubmit({
      id: uuid(),
      name: name,
      category: category
    });
  }

  function handleCategoryChange(event) {
    console.log(event.target.value)
    setCategory(event.target.value);
  }

  function handleNameChange(event) {
    console.log(event.target.value)
    setName(event.target.value)
  }

  return (
    <form className="NewItem" onSubmit={submitHandler}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
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


/* 
There is a new component called ItemForm that will allow us to add new items to our shopping list. When the form is submitted, a new item should be created and added to our list of items.

Make all the input fields for this form controlled inputs, so that you can access all the form data via state. When setting the initial state for the <select> tag, use an initial value of "Produce" (since that's the first option in the list).

Handle the form's submit event, and use the data that you have saved in state to create a new item object with the following properties:

const newItem = {
  id: uuid(), // the `uuid` library can be used to generate a unique id
  name: itemName,
  category: itemCategory,
};
Add the new item to the list by updating state. To get the test passing, you'll need to use a prop called onItemFormSubmit as a callback.

NOTE: to add a new element to an array in state, it's a good idea to use the spread operator:

function addElement(element) {
  setArray([...array, element]);
}
The spread operator allows us to copy all the old values of an array into a new array, and then add new elements as well. When you're working with state you never want to mutate state by using methods like .push -- always use non-destructive array methods when working with state!
*/