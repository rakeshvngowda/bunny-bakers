const Cart = ({ cartItems, setCartItems }) => {
  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });
    setCartItems(newCartItems);
  };

  return (
    <div className="cart-navbar">
      <h2>Cart</h2>
      <ul className="cart-container">
        {cartItems.map((cartItem) => (
          <li key={cartItem.id} className="cart-items">
            <span>{cartItem.name}</span>
            *
            <input
              type="number"
              value={cartItem.quantity}
              onChange={(e) => handleUpdateQuantity(cartItem.id, parseFloat(e.target.value))}
            />
            =<span>{cartItem.price * cartItem.quantity}</span>
          </li>
        ))}
        <br />
        <li key={'total'} className="cart-items total">
          Total: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
        </li>
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>
      <button onClick={()=> window.print()}>Bill</button>
    </div>
  );
};

export default Cart;
