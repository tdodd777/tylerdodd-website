import React from 'react';
import '../styles/Home.css';
import RecentArticles from '../components/RecentArticles';

function Home() {
  return (
    <div className="home">
      <div className="welcome-message">
        <h1>Hi! I'm Tyler Dodd</h1>
        <p>
          This website is a place where I share my interests in cooking, technology, and more. 
          Feel free to explore!
        </p>
      </div>
      <RecentArticles />
    </div>
  );
}

export default Home;