import React from 'react';
import '../styles/Header.scss';

const Header = () => {
    return (
        <nav>
            <img src="./icons/icon_menu.svg" alt="menu" className="menu" />
            <div className="navbarLeft">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbarRight">
                <ul>
                    <li className="navbarEmail">platzi@example.com</li>
                    <li className="navbarShoppingCart">
                        <img src="./icons/icon_shopping_cart.svg" alt="shoppingCart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Header;