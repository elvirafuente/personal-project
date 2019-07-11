import React from 'react';
import './styles.scss';
import Decoration from '../Decoration';
import Menu from '../Menu';

function Header(props) {
    const {openMenu, menuDisplayed} = props;
    return (
        <header className="page__header">
            <Decoration />
            <div className="page__hero-container">
                <p className="header__hero">Hola!</p>
                <p className="header__hero">Soy Elvira Fuente,</p>
                <h1 className="header__hero sub">Programadora Front End.</h1>
            </div>
            <Menu openMenu={openMenu} menuDisplayed={menuDisplayed}/>
        </header>
    )
}

export default Header;