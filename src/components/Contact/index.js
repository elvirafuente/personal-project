import React from 'react';
import './styles.scss';
import Envelope from '../../images/envelope.png';
import Twitter from '../../images/twitter.png';
import Linkedin from '../../images/linkedin.png';
import Github from '../../images/github.png';

function Contact() {
    return (
        <div className="page__contact">
            <h2 className="section__title contact-title">Contacto</h2>
            <div className="contact__list">
                <a href="https://linkedin.com/in/elvirafuente" target="_blank" className="contact__link">
                    <div className="contact__item">
                        <img className="contact__ico" src={Linkedin} alt="linkedin" />
                        <p className="ico__text">linkedin.com/in/elvirafuente</p>
                    </div>
                </a>
                <a href="http://twitter.com/elvirafuente" target="_blank" className="contact__link">
                    <div className="contact__item">
                        <img className="contact__ico" src={Twitter} alt="twitter" />
                        <p className="ico__text">twitter.com/elvirafuente</p>
                    </div>
                </a>
                <a href="https://github.com/elvirafuente" target="_blank" className="contact__link">
                    <div className="contact__item">
                        <img className="contact__ico" src={Github} alt="github" />
                        <p className="ico__text">github.com/elvirafuente</p>
                    </div>
                </a>
                <a href="mailto:elvirafuente@gmail.com" target="_blank" className="contact__link">
                    <div className="contact__item">
                        <img className="contact__ico" src={Envelope} alt="email" />
                        <p className="ico__text">elvirafuente@gmail.com</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Contact