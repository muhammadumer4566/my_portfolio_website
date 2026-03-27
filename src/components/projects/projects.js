import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { projectsData } from '../../data/projects-data';
import styles from '../../styles/projects.module.css';
import SingleProject from './project-card/project-card';

function Projects() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={styles.projects}
            id="projects"
            style={{ backgroundColor: theme.secondary }}
        >
            {/* HEADER */}
            <div className={styles.projectsHeader}>
                <h1 style={{ color: theme.primary, fontWeight: 'bold' }}>
                    Projects
                </h1>
            </div>

            {/* BODY */}
            <div className={styles.projectsBody}>
                <div className={styles.projectsBodyContainer}>
                    {projectsData.slice(0, 6).map(project => (
                        <SingleProject
                            key={project.id}
                            theme={theme}
                            name={project.projectName}
                            desc={project.projectDesc}
                            tags={project.tags}
                            demo={project.demo}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;