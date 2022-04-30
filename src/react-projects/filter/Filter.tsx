import { useState } from "react";

function Filter() {

  const fruitArray = [
    "Apple",
    "Banana",
    "Orange",
    "Pear",
    "Grape",
    "Watermelon",
    "Strawberry",
    "Cherry",
    "Mango",
    "Pineapple",
    "Kiwi",
    "Coconut",
    "Papaya",
    "Avocado",
    "Passion Fruit",
  ];

  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <h3>Fruit</h3>
      <ul>
        {fruitArray
          .filter((fruit) =>
            fruit.toLowerCase().includes(filterText.toLowerCase())
          ).map((fruit) => (
            <li>{fruit}</li>
          ))}
      </ul>
    </div>
  );
}

export default Filter;
