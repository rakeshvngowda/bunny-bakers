import React, { useRef } from 'react';
import './styles/Cart.scss';
import { useReactToPrint } from 'react-to-print';
import Bill from './Bill';

const Cart = ({ cartItems, setCartItems }) => {
    const componentRef = useRef();

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

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: "Bunny Bakers Bill",
    })

    return (
        <div className="cart-navbar">
            <h2 className='cart-title'>🛒 Cart</h2>

            <ul className="cart-container">
                {cartItems.map((cartItem) => (
                    <li key={cartItem.id} className="cart-item">
                        <span className="cart-item-name">{cartItem.name}</span>

                        <span className='cart-item-price'>{cartItem.price}</span>
                        X<input
                            type="number"
                            className="cart-item-quantity"
                            min="0"
                            // step="0.01"
                            value={cartItem.quantity}
                            onChange={(e) =>
                                handleUpdateQuantity(cartItem.id, parseFloat(e.target.value))
                            }
                        />

                        <span className="cart-item-total-price">
                            ₹{(cartItem.price * (cartItem.quantity || 0)).toFixed(2)}
                        </span>
                    </li>
                ))}

                <li key="total" className="cart-item-total">
                    <strong>Total:</strong>{" "}
                    ₹
                    {cartItems
                        .reduce((total, item) => total + item.price * (item.quantity || 0), 0)
                        .toFixed(2)}
                </li>
            </ul>

            <div className="cart-actions">
                <button onClick={handleClearCart}>Clear Cart</button>
                <button onClick={()=>handlePrint()}>Print Bill</button>
                <div style={{ visibility: "hidden", height: 0, overflow: "hidden" }}>
                    <Bill ref={componentRef} items={cartItems} />
                </div>
            </div>
        </div>

    );
};

export default Cart;
