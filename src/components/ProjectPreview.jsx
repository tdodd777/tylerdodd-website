import React from 'react';
import '../styles/ProjectPreview.css';

function ProjectPreview({ title, description, imageUrl, link }) {
  return (
    <div className="project-preview">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <p className="extra-info">Click to learn more!</p>
        <button className="read-more-button">View Project</button>
      </div>
    </div>
  );
}

export default ProjectPreview;
