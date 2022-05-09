import React from 'react';
import '../styles/Menu';

const Menu = () => {
    return (
        <div className="desktopMenu">
            <ul>
                <li>
                    <a href="/" className="title">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>

    );
}

export default Menu;