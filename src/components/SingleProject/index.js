import React from 'react';
import './styles.scss';

function SingleProject(props) {
    const { name, img, description, urlCode, urlDemo } = props.projectInfo;
    
    return (
        <li className="card__container">
            <img src={img} className={`card__img`} alt={name} />
            <div className="card__info">
                <h3 className="card__title" >{name}</h3>
                <p className="card__description" >{description}</p>
                <div className="card-links__container">
                    <a href={urlCode} target="_blank" rel="noopener noreferrer" className="card__link"><p className="card__link-text">código</p></a>
                    <a href={urlDemo} target="_blank" rel="noopener noreferrer" className="card__link"><p className="card__link-text">demo</p></a>
                </div>
            </div>
        </li>
    )
}

export default SingleProject;