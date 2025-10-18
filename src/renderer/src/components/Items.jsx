import React from 'react'

import "./styles/Items.scss";

const Items = ({setCartItems, cartItems, items}) => {

    const handleAddToCart = (item) => {
        const newCartItems = [...cartItems];
        if (newCartItems.find((cartItem) => cartItem.id === item.id)){
            newCartItems.find((cartItem) => cartItem.id === item.id).quantity += 1;
            setCartItems(newCartItems);
            return;
        }
        setCartItems((prevCartItems)=> [...prevCartItems, {...item, quantity: 1}]);
    }

    return (
        <div className="items-content">
            <h2>Items</h2>
            <div className='items-container'>
                {items.map((item) => (
                    <button key={item.id} className='items' onClick={()=> handleAddToCart(item)}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </button>
            ))}
            </div>
        </div>
    );
}

export default Items;