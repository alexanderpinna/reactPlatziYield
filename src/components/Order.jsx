import React from 'react';
import '../styles/Order.scss';

const Order = () => {
    return (
        <div className="order">
            <p>
                <span>04.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src="./icons/flechita.svg" alt />
        </div>

    );
}

export default Order;