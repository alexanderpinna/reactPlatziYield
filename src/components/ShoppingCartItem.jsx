import React from 'react';
import '../styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
    return (
        <div className="ShoppingCartItem">
            <figure>
                <img src="./img/pexels-photo-276517.jpeg" alt />
            </figure>
            <p>Bike</p>
            <p>$30.00</p>
        </div>

    );
}

export default ShoppingCartItem;