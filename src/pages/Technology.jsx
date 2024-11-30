import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/cooking.css';

function Technology() {
  const [hoveredArticle, setHoveredArticle] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (articleId) => {
    clearTimeout(timeoutRef.current);
    setHoveredArticle(articleId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredArticle(null);
    }, 500);
  };

  const articles = [
    {
      id: 1,
      title: "Understanding Zettelkasten: A Smart Note-Taking System",
      preview: "Explore the Zettelkasten method, a powerful system for organizing thoughts and creating knowledge connections.",
      slug: "zettelkasten",
      image: "/images/articles/technology/obsidian-logo.jpg",
      className: "zettelkasten-article"
    }
  ];

  return (
    <div>
      <h2>Technology Articles</h2>
      <div className="article-grid">
        {articles.map(article => (
          <Link 
            key={article.id} 
            to={`/interests/technology/${article.slug}`} 
            className={`article-preview ${hoveredArticle === article.id ? 'expanded' : ''} ${article.className || ''}`}
            onMouseEnter={() => handleMouseEnter(article.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="article-image" style={{backgroundImage: `url(${article.image})`}}>
              <h3>{article.title}</h3>
            </div>
            <div className="article-hover-content">
              <p>{article.preview}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Technology;
