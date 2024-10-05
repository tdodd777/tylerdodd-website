
import React from 'react';
import '../styles/ArticlePreview.css';

function ArticlePreview({ title, description, date, imageUrl, link }) {
  return (
    <div className="article-preview">
      <img src={imageUrl} alt={title} className="article-image" />
      <div className="article-content">
        <h3>{title}</h3>
        <p className="article-date">{date}</p>
        <p className="article-description">{description}</p>
        <p className="extra-info">Click to read more!</p> {/* Extra info that appears on hover */}
        <button className="read-more-button">Read More</button> {/* Button appears on hover */}
      </div>
    </div>
  );
}

export default ArticlePreview;
