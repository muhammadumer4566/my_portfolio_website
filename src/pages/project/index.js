import React, { useContext, useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import Link from '../../components/link';
import { ThemeContext } from '../../contexts/theme-context';
import { projectsData } from '../../data/projects-data';
import { SingleProject } from '../../components';

function ProjectPage() {
    const [search, setSearch] = useState('');
    const { theme } = useContext(ThemeContext);

    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags;
        return content.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
            <div className="projectPage-header" style={{ backgroundColor: theme.primary }}>
                <Link href="/">
                    <AiOutlineHome />
                </Link>
                <h1 style={{ color: theme.secondary, fontWeight: 'bold' }}>
                    Projects
                </h1>
            </div>

            <div className="projectPage-container">
                <div className="projectPage-search">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search project..."
                        className="search-input"
                    />
                </div>

                <div className="project-container">
                    <div className="project-grid">
                        {filteredArticles.map(project => (
                            <SingleProject
                                theme={theme}
                                key={project.id}
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
        </div>
    );
}

export default ProjectPage;