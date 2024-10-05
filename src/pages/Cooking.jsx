import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cooking.css';
import { perfectSteakImage } from './cooking-articles/perfect-steak';

function Cooking() {
  const [hoveredArticle, setHoveredArticle] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (articleId) => {
    clearTimeout(timeoutRef.current);
    setHoveredArticle(articleId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredArticle(null);
    }, 500); // 500ms delay, same as the Interests menu
  };

  const articles = [
    {
      id: 1,
      title: "Cooking the Perfect Steak",
      preview: "Learn the secrets to achieving a restaurant-quality steak at home. Start with a high-quality cut, season well, and cook over high heat for a delicious, restaurant-worthy meal.",
      slug: "perfect-steak",
      image: perfectSteakImage,
      className: "perfect-steak-article"
    },
    // Add more articles here as needed
  ];

  return (
    <div>
      <h2>Cooking Articles</h2>
      <div className="article-grid">
        {articles.map(article => (
          <Link 
            key={article.id} 
            to={`/interests/cooking/${article.slug}`} 
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

export default Cooking;