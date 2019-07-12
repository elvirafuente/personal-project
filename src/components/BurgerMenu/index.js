import React from 'react';
import './styles.scss';
import { Link } from 'react-scroll';

function BurgerMenu(props) {
    const {menuDisplayed, openMenu} = props;

    return (
            <ul className={`burger__list ${menuDisplayed ? 'burger__list--open' : ''}`} >
                <li className="burger__item"><Link to="about" smooth={true} duration={500} onClick={openMenu}>sobre mí</Link></li>
                <li className="burger__item"><Link to="skills" smooth={true} duration={500} onClick={openMenu}>habilidades</Link></li>
                <li className="burger__item"><Link to="projects" smooth={true} duration={500} onClick={openMenu}>proyectos</Link></li>
                <li className="burger__item"><Link to="contact" smooth={true} duration={500} onClick={openMenu}>contacto</Link></li>
            </ul>
    )
}

export default BurgerMenu;  