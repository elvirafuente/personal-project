import React from 'react';
import SingleProject from '../SingleProject';
import { projects } from '../../info/projects';
import './styles.scss'

function ProjectList() {
    return (
        <section className="section__portfolio" id="projects">
            <h2 className="section__title">Proyectos</h2>
            <ul className="section__projects">
                {projects
                    .sort((a,b) => {return b.id - a.id })
                    .map(project => 
                        <SingleProject 
                            key={project.id} 
                            projectInfo={project} 
                        />
                    )}
            </ul>
        </section>
    )
}

export default ProjectList;