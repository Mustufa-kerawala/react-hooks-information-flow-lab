import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  const itemsToDisplay = itemData.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <Filter selectedCategory={itemsToDisplay} onCategoryChange={handleCategoryChange}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
