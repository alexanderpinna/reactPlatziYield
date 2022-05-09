import React from 'react';
import '../styles/ProductInfo.scss';

const ProductInfo = () => {
    return (
        <aside className="productDetail">
            <div className="productDetailClose">
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
        </aside>
    );
}

export default ProductInfo;