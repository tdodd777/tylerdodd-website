import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RecentArticles.css';

// This function should be replaced with actual data fetching logic
const getRecentArticles = () => {
  return [
    {
      id: 1,
      title: "Baking the Perfect Sourdough Bread",
      preview: "Learn the secrets to creating a delicious sourdough loaf at home.",
      image: "/images/articles/cooking/sourdough-bread/sourdough-cooked.jpg",
      link: "/interests/cooking/sourdough-bread"
    },
    {
      id: 2,
      title: "Building My Website",
      preview: "Technologies, Challenges, and Solutions in creating this website",
      image: "/images/articles/projects/project1-logo.jpg",
      link: "/interests/projects/project1"
    }
  ];
};

function RecentArticles() {
  const recentArticles = getRecentArticles();

  return (
    <div className="recent-articles">
      <h2>Recent Articles</h2>
      <div className="article-grid">
        {recentArticles.map(article => (
          <Link to={article.link} key={article.id} className="article-preview">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.preview}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecentArticles;
