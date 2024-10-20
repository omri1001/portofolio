const projects = [
    { name: 'Project 1', description: 'Description of Project 1', link: 'https://github.com/yourproject1' },
    { name: 'Project 2', description: 'Description of Project 2', link: 'https://github.com/yourproject2' },
];

const Projects = () => (
    <div>
        <h2>My Projects</h2>
        <div>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
            ))}
        </div>
    </div>
);

export default Projects;