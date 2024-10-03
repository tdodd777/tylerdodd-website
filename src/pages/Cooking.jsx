import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cooking.css';

function Cooking() {
  const [hoveredArticle, setHoveredArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "Cooking the Perfect Steak",
      preview: "Learn the secrets to achieving a restaurant-quality steak at home. Start with a high-quality cut, season well, and cook over high heat for a delicious, restaurant-worthy meal.",
      slug: "perfect-steak",
      image: "/images/articles/cooking/perfect-steak/perfect-steak.png"
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
            className={`article-preview ${hoveredArticle === article.id ? 'expanded' : ''}`}
            onMouseEnter={() => setHoveredArticle(article.id)}
            onMouseLeave={() => setHoveredArticle(null)}
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