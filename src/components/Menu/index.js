import React from 'react';
import './styles.scss';

function Menu() {
    return (
        <nav>
            <ul className="page__menu">
                <li className="menu__item">sobre mí</li>
                <li className="menu__item">habilidades</li>
                <li className="menu__item">proyectos</li>
                <li className="menu__item">contacto</li>
            </ul>
        </nav>
    )
}

export default Menu;