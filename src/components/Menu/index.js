import React from 'react';
import './styles.scss';

function Menu(props) {
    const {openMenu, menuDisplayed} = props;

    return (
        <nav className="page__menu">
            <ul className="page__menu-list" >
                <li className="menu__item"><a href="/">sobre mí</a></li>
                <li className="menu__item"><a href="/">habilidades</a></li>
                <li className="menu__item"><a href="/">proyectos</a></li>
                <li className="menu__item"><a href="/">contacto</a></li>
            </ul>
            <button type="menu__button" className={`menu__button ${menuDisplayed ? 'menu__button--open' : ''}`} onClick={openMenu}>menu</button>
        </nav>
    )
}

export default Menu;