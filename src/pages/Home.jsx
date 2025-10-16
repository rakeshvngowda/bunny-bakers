import React, { useState } from 'react';
import Categories from '../components/Catgories';
import Items from '../components/Items';
// import '../styles.css';

export const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleItemClick = (item) => {
    console.log('Item clicked:', item);
  };

  const handleAddToCart = (item) => {
    console.log('Add to cart:', item);
  };

  return (
    <div className="app-root">
      <Categories
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={setSelectedCategoryId}
      />
      <Items />
    </div>
  );
};