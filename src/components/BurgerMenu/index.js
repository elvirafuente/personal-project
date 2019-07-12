import React from 'react';
import './styles.scss';

function BurgerMenu(props) {
    const {menuDisplayed} = props;

    return (
            <ul className={`burger__list ${menuDisplayed ? 'burger__list--open' : ''}`} >
                <li className="burger__item"><a href="/">sobre mí</a></li>
                <li className="burger__item"><a href="/">habilidades</a></li>
                <li className="burger__item"><a href="/">proyectos</a></li>
                <li className="burger__item"><a href="/">contacto</a></li>
            </ul>
    )
}

export default BurgerMenu;  