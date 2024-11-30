import React, { useState } from 'react';
import '../../styles/ProjectArticle.css';

// Export the image paths for use in other components
export const articleImage = '/images/articles/technology/obsidian-logo.jpg';
export const articleLogo = '/images/articles/technology/zettelkasten-graph.jpg';

export const metadata = {
  title: "Understanding Zettelkasten: A Smart Note-Taking System",
  description: "Explore the Zettelkasten method, a powerful system for organizing thoughts and creating knowledge connections.",
  author: "Tyler Dodd",
  date: "March 2024",
  readTime: "8 min",
  category: "technology"
};

const Zettelkasten = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="project-article">
      <div className="article-header">
        <h1>{metadata.title}</h1>
        <div className="article-meta">
          <div className="meta-info">
            <p className="author">By {metadata.author}</p>
            <p className="date-time">{metadata.date}</p>
            <p className="read-time">{metadata.readTime} read</p>
          </div>
          <img src={articleLogo} alt="Obsidian Logo" className="project-logo" />
        </div>
      </div>

      <div 
        className="project-main-image" 
        style={{
          backgroundImage: `url(${articleImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        role="img"
        aria-label="Zettelkasten Knowledge Graph"
      />

      {/* TL;DR Section */}
      <section className="tldr-section">
        <h2>TL;DR</h2>
        <ul>
          <li><a href="#introduction">1. Introduction</a></li>
          <li><a href="#section2">2. Section Two</a></li>
          <li><a href="#section3">3. Section Three</a></li>
          <li><a href="#conclusion">4. Conclusion</a></li>
        </ul>
      </section>

      {/* Article Content */}
      <section id="introduction" className="article-section">
        <h2>1. Introduction</h2>
        <p>
          Your introduction text here.
        </p>
      </section>

      <section id="section2" className="article-section">
        <h2>2. Section Two</h2>
        <p>
          Content for section two.
        </p>
        
        {/* Example of an expandable list */}
        <ul className="expandable-list">
          {[
            {
              id: 'item1',
              title: 'Expandable Item 1',
              content: 'Content for expandable item 1'
            },
            {
              id: 'item2',
              title: 'Expandable Item 2',
              content: 'Content for expandable item 2'
            }
          ].map(section => (
            <li key={section.id}>
              <button className="expand-button" onClick={() => toggleSection(section.id)}>
                {section.title}
              </button>
              <div className={`expandable-content ${expandedSections[section.id] ? 'expanded' : ''}`}>
                <p>{section.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="section3" className="article-section">
        <h2>3. Section Three</h2>
        <p>
          Content for section three.
        </p>
      </section>

      <section id="conclusion" className="article-section">
        <h2>4. Conclusion</h2>
        <p>
          Your conclusion text here.
        </p>
      </section>
    </div>
  );
};

const TableOfContents = () => (
  <nav className="table-of-contents">
    <h3>Contents</h3>
    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#what-is-zettelkasten">What is Zettelkasten?</a></li>
      <li><a href="#key-principles">Key Principles</a></li>
      <li><a href="#digital-tools">Digital Tools</a></li>
      <li><a href="#implementation">Implementation Guide</a></li>
      <li><a href="#conclusion">Conclusion</a></li>
    </ul>
  </nav>
);

export default Zettelkasten;