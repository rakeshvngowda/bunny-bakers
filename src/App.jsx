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
    <div className="grid-container">
      <Categories categories={categories} setSelectedCategoryId={setSelectedCategoryId} />
      <Items setCartItems={setCartItems} cartItems={cartItems} items={filteredItems}/>
      <Cart cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
}

export default App;