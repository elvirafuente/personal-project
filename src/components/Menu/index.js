import React from 'react';
import './styles.scss';

function Menu(props) {
    const {openMenu, menuDisplayed} = props;

    return (
        <nav className="page__menu">
            <button type="button" className="menu__button" onClick={openMenu}>menu</button>
            <ul className={`page__menu-list ${menuDisplayed ?'': `hidden`}`}>
                <li className="menu__item">sobre mí</li>
                <li className="menu__item">habilidades</li>
                <li className="menu__item">proyectos</li>
                <li className="menu__item">contacto</li>
            </ul>
        </nav>
    )
}

export default Menu;