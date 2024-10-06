import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cooking.css';
import { sourdoughBreadImage } from './cooking-articles/sourdough-bread';

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
      title: "Baking the Perfect Sourdough Bread",
      preview: "Learn the secrets to creating a delicious sourdough loaf at home. From starter maintenance to scoring techniques, discover the art of sourdough baking.",
      slug: "sourdough-bread",
      image: "/images/articles/cooking/sourdough-bread/sourdough-sliced.jpg",
      className: "sourdough-bread-article"
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