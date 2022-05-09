import React from 'react';
import '../styles/OrderItem.scss';

const ShoppingCartItem = () => {
    return (
        <div className="shoppingCart">
            <figure>
                <img src="./img/pexels-photo-276517.jpeg" alt />
            </figure>
            <p>Bike</p>
            <p>$30.00</p>
            <img src="./icons/icon_close.png" alt="close" />
        </div>

    );
}

export default ShoppingCartItem;