import React, { forwardRef } from 'react';
import receiptData from '../data/receiptData.json';
import './styles/Bill.scss';

const Bill = forwardRef((props, ref) => {
    const subTotal = props.items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const total = subTotal;

    return (
        <div ref={ref} className="receipt-container">
            <div className="header">
                <div className="logo">B</div>
                <h2>{receiptData.restaurantName}</h2>
                <p>{receiptData.address.street}</p>
                <p>{receiptData.address.area}</p>
                <p>{receiptData.address.city}</p>
            </div>
            <hr />
            <h4>Receipt</h4>
            <div className="meta">
                <div>
                    <p>Invoice No: 56798</p>
                    <p>Date: {new Date().toLocaleDateString("en-GB")}</p>
                </div>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, i) => (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>₹{item.price}</td>
                            <td>{item.quantity || 1}</td>
                            <td>₹{item.price * (item.quantity || 1)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="summary">
                <p><strong>Sub-Total:</strong> ₹{subTotal.toFixed(2)}</p>
                <hr />
                <p><strong>Mode:</strong> Cash</p>
                <h3>Total: ₹{total.toFixed(0)}</h3>
            </div>

            <div className="footer">
                <p>** SAVE PAPER SAVE NATURE !! **</p>
                <p>1800 226344 (TOLL-FREE)</p>
                <p>Time: {new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour12: false })}</p>
            </div>
        </div>
    );
});



export default Bill;