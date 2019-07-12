import React from 'react';
import './styles.scss';
import { Link } from 'react-scroll';


function Menu(props) {
    const { openMenu, menuDisplayed } = props;

    return (
        <nav className="page__menu">
            <ul className="page__menu-list" >
                <li className="menu__item"><Link to="about" smooth={true} duration={500}>sobre mí</Link></li>
                <li className="menu__item"><Link to="skills" smooth={true} duration={500}>habilidades</Link></li>
                <li className="menu__item"><Link to="projects" smooth={true} duration={500}>proyectos</Link></li>
                <li className="menu__item"><Link to="contact" smooth={true} duration={500}>contacto</Link></li>
            </ul>
            <button type="menu__button" className={`menu__button ${menuDisplayed ? 'menu__button--open' : ''}`} onClick={openMenu}>menu</button>
        </nav>
    )
}

export default Menu;