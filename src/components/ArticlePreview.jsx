import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ArticlePreview.css';

function ArticlePreview({ title, description, date, imageUrl, link }) {
  return (
    <div className="article-preview">
      <img src={imageUrl} alt={title} className="article-image" />
      <div className="article-content">
        <h3>{title}</h3>
        <p className="article-date">{date}</p>
        <p className="article-description">{description}</p>
        <Link to={link} className="read-more">Read More</Link>
      </div>
    </div>
  );
}

export default ArticlePreview;