import React from 'react';
import './styles.scss';
import Decoration from '../Decoration'

function Header() {
    return (
        <header className="page__header">
            <Decoration />
            <div className="page__hero-container">
                <p className="header__hero">Hola!</p>
                <p className="header__hero">Soy Elvira Fuente,</p>
                <h1 className="header__hero sub">Programadora Front End.</h1>
                <i className="fas fa-chevron-down header__ico"></i>

            </div>

        </header>
    )
}

export default Header;