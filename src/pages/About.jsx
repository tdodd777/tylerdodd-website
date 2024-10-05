import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      
      {/* Biography Section */}
      <section>
        <h2>What's Going on Here?</h2>
        <p>
          Hello! I'm Tyler Dodd, and this is my website. But what is this website for? In short, I have no idea. 
          I simply wanted to learn more about coding so decided to set out on standing this site up. Admittedly, 
          I didn't think I'd get this far but here we are.
        </p>
        <p>
          I think I'll use it as an online place for me to provide updates on things, and continuously improve my technical skills.
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2>Isn't That Just a Blog?</h2>
        <p>
          Yes, for all intents and purposes this will function as a blog. Except I'm not ready to accept the fact that I'm 
          the guy that moved away from home and started a blog about sourdough and circuit boards. More on that later. 
          Let's keep moving.
        </p>
      </section>

      {/* Personal Interests Section */}
      <section>
        <h2>Dude, Cut to the Chase...</h2>
        <p>
          I like technology. I like cooking. I like learning about random things more often than not. 
          Here is a website filled with a random assortment of what i'm up to.
        </p>
      </section>
    </div>
  );
}

export default About;
