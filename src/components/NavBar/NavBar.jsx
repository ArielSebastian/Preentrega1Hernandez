import React from 'react';
import './navbar.scss';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div>
                <img src="/img/icono.jpg" alt="Icono" />
            </div>
            <ul>
                <li>Asesoría</li>
                <li>Rutinas</li>
                <li>Equipo</li>
                <li>Contacto</li>
            </ul>
            <div className="cart-icon">
                <CartWidget/>
                <p className="cart-count">0</p>
            </div>
        </nav>
    );
}

export default NavBar;