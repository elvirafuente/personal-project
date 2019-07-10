import React from 'react';
import './styles.scss';

function Contact() {
    return (
        <div className="page__contact">
            <h2 className="section__title contact-title">Contacto</h2>
            <div className="contact__list">
                <div className="contact__item">
                    <i className="fab fa-linkedin contact__ico"></i>
                    <p className="ico__text">linkedin.com/in/elvirafuente</p>
                </div>
                <div className="contact__item">
                    <i className="fab fa-twitter-square contact__ico"></i>
                    <p className="ico__text">twitter.com/elvirafuente</p>
                </div>
                <div className="contact__item">
                    <i className="fab fa-github contact__ico"></i>
                    <p className="ico__text">github.com/elvirafuente</p>
                </div>
                <div className="contact__item">
                    <i className="fas fa-envelope-square contact__ico"></i>
                    <p className="ico__text">elvirafuente@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact