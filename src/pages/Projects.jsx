import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (projectId) => {
    clearTimeout(timeoutRef.current);
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredProject(null);
    }, 500);
  };

  const projects = [
    {
      id: 1,
      title: "Building My Website",
      preview: "Technologies, Challenges, and Solutions in creating this website",
      slug: "project1",
      image: "/images/articles/projects/project1-logo.jpg",
      className: "project1-preview"
    },
    {
      id: 2,
      title: "Project 2",
      preview: "Short description of Project 2",
      slug: "project2",
      image: "/images/projects/project2.jpg",
      className: "project2-preview"
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <Link 
            key={project.id} 
            to={`/interests/projects/${project.slug}`} 
            className={`project-preview ${hoveredProject === project.id ? 'expanded' : ''} ${project.className || ''}`}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-image" style={{backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <h3>{project.title}</h3>
            </div>
            <div className="project-hover-content">
              <p>{project.preview}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
