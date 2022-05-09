import React from 'react';
import '../styles/ProductItem.scss';

const ProductItem = () => {
    return (
        <div className="productItem">
            <div className="productItemClose">
                <img src="./icons/icon_close.png" alt="close" />
            </div>
            <img src="./img/pexels-photo-276517.jpeg" alt="bike" />
            <div className="productInfo">
                <p>$35.00</p>
                <p>Bike</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button className="primaryButton AddToCartButton">
                    <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </div>

    );
}

export default ProductItem;