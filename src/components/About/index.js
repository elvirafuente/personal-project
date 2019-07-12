import React, { Fragment } from 'react';
import './styles.scss';
import ProfilePicture from '../../images/picture.png'

function About() {
    return (
        <Fragment>
            <section className="section__about" id="about">
                <h2 className="section__title">Sobre mí</h2>
                <div className="section__content">
                    <img src={ProfilePicture} alt="Elvira Fuente" className="section__image" />
                    <p className="section__description">Programadora Front-End y diseñadora gráfica. Me apasionan los procesos de construcción. Veo la programación como un medio de creación tan apasionante como el arte. Me gusta formar parte de equipos en los que sienta que puedo aportar, y además nutrirme de la experiencia y conocimientos de las personas que me rodean. Soy muy curiosa y me ilusiona aprender cosas nuevas constantemente.</p>
                </div>
            </section>
            <section className="section__skills" id="skills">
                <div className="array-container">
                    <p className="item item1">lenguajes =</p>
                    <p className="item item2">[</p>
                    <p className="item item2">HTML5, CSS3,</p>
                    <p className="item item2">SASS, BEM,</p>
                    <p className="item item2">JavaScript ES6,</p>
                    <p className="item item2">ReactJS</p>
                    <p className="item item2">]</p>
                </div>
                <div className="array-container">
                    <p className="item item1">herramientas =</p>
                    <p className="item item2">[</p>
                    <p className="item item2">Git, Terminal,</p>
                    <p className="item item2">Visual Studio Code,</p>
                    <p className="item item2">Adobe Creative Suite,</p>
                    <p className="item item2">WordPress</p>
                    <p className="item item2">]</p>
                </div>
                <div className="array-container">
                    <p className="item item1">metodologías =</p>
                    <p className="item item2">[</p>
                    <p className="item item2">Agile,</p>
                    <p className="item item2">SCRUM</p>
                    <p className="item item2">]</p>
                </div>
            </section>
        </Fragment>
    )
}

export default About;