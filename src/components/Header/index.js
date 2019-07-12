import React from 'react';
import './styles.scss';
import Decoration from '../Decoration';
import Menu from '../Menu';
import BurgerMenu from '../BurgerMenu';

function Header(props) {
    const { openMenu, menuDisplayed } = props;
    return (
        <header className="page__header">
            <Decoration />
            <Menu openMenu={openMenu} menuDisplayed={menuDisplayed} />
            <BurgerMenu  openMenu={openMenu} menuDisplayed={menuDisplayed}/>

            <div className="page__header-container">
                <div className="page__hero-container">
                    <p className="header__hero">Hola!</p>
                    <p className="header__hero">Soy Elvira Fuente,</p>
                    <h1 className="header__hero sub">Programadora Front End.</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;