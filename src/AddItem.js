import React, { useState } from "react";
import "./AddItem.css";

function FruitForm() {
  const [fruits, setFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState("");
  const [filterFruits, setFilterFruits] = useState("");

  const handleInputChange = (e) => {
    setSelectedFruit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFruits([...fruits, { name: selectedFruit, quantity: 0 }]);
    setSelectedFruit("");
  };

  const handleIncrement = (index) => {
    const updatedFruits = [...fruits];
    updatedFruits[index].quantity += 1;
    setFruits(updatedFruits);
  };
  const handleDecrement = (index) => {
    const updatedFruits = [...fruits];
    if (updatedFruits[index].quantity > 0) {
      updatedFruits[index].quantity -= 1;
      setFruits(updatedFruits);
    } else {
      updatedFruits.splice(index, 1);
      setFruits(updatedFruits);
    }
  };
  const handleSearch = (e) => {
    setFilterFruits(e.target.value);
  };

  const filteredfruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(filterFruits.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Search</h2>
      <input
        type="text"
        value={filterFruits}
        onChange={handleSearch}
        className="search-input"
      />

      <h2 className="heading">Add Fruit</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          value={selectedFruit}
          onChange={handleInputChange}
          className="add-input"
        />
        <button type="submit" className="add-button">
          Add Fruit
        </button>
      </form>

      <h3 className="heading">Selected Fruits:</h3>
      <ul className="fruits-list">
        {filteredfruits.map((fruit, index) => (
          <li key={index} className="fruit-item">
            {fruit.name} {fruit.quantity}
            <button
              onClick={() => handleIncrement(index)}
              className="increment-button"
            >
              +
            </button>
            <button
              onClick={() => handleDecrement(index)}
              className="decrement-button"
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitForm;
