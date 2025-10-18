import { useState } from 'react';
import Cart from './components/Cart';
import Categories from './components/Categories';
import Items from './components/Items';
import './styles/App.scss';
import categories from './data/categories.json';
import items from './data/items.json';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const filteredItems = items.filter((item) => item.categoryId === selectedCategoryId);

  return (
    <div className="app-layout">
      <div className="left-panel">
        <Categories categories={categories} setSelectedCategoryId={setSelectedCategoryId} />
      </div>
      <div className="main-panel">
        <Items setCartItems={setCartItems} cartItems={cartItems} items={filteredItems} />
      </div>
      <div className="right-panel">
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  );
}

export default App;
