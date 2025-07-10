import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

const App = () => {
  //  Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  //  Cart State
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  //  Category Filter State
  const [selectedCategory, setSelectedCategory] = useState('all');
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/*  Dark Mode Toggle */}
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Category Filter */}
      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/*  Product List */}
      <ProductList 
        onAddToCart={handleAddToCart}
        selectedCategory={selectedCategory}
      />

      {/*  Cart */}
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;