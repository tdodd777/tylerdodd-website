import React, { useState } from 'react';
import '../../styles/ProjectArticle.css';
import projectLogo from '/images/articles/projects/project1-logo.jpg';

export const project1Image = '/images/projects/project1.jpg';
export const project1Logo = '/images/articles/projects/project1-logo.jpg';

const Project1 = () => {
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
        <h1>Building My Website: Technologies, Challenges, and Solutions</h1>
        <div className="article-meta">
          <div className="meta-info">
            <p className="author">By Tyler Dodd</p>
            <p className="date-time">October 5, 2024</p>
            <p className="read-time">10 min read</p>
          </div>
          <img src={projectLogo} alt="Project Logo" className="project-logo" />
        </div>
      </div>

      {/* TL;DR Section */}
      <section className="tldr-section">
        <h2>TL;DR</h2>
        <ul>
          <li><a href="#introduction">1. Introduction</a></li>
          <li><a href="#domain-setup">2. Domain Purchase and Setup</a></li>
          <li><a href="#hosting">3. Hosting on DigitalOcean VPS</a></li>
          <li><a href="#file-management">4. File Management and Uploads</a></li>
          <li><a href="#version-control">5. Version Control and Collaboration</a></li>
          <li><a href="#ai-tools">6. AI Tools for Development</a></li>
          <li><a href="#issues">7. Issues and Resolutions</a></li>
          <li><a href="#lessons-learned">8. Lessons Learned</a></li>
          <li><a href="#conclusion">9. Conclusion</a></li>
        </ul>
      </section>

      {/* Article Content */}
      <section id="introduction" className="article-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to the first article on my new website. I figured it made sense to make the first post about why and how I went about standing up a website. In truth, there wasn't one definitive reason to stand up a website. At one point, I thought learning some HTML and CSS might be useful to do some freelance WebDev stuff or just know in general, so I turned to The Odin Project to learn more. I enjoyed learning some basics there, but didn't end up pursuing much more than that.
        </p>
        <p>
          I tend to bounce around from one project, hobby, or idea to the next without finishing the original. Hopefully, some documentation here will help me hold myself a bit more accountable in that department, but who knows.
        </p>
        <p>
          With the limited amount I know about coding and technology, and a lot of help from various AI tools, I was able to stand up what I consider to be a pretty clean website. So, feel free to keep reading to learn more, or jump to the bottom for a TL;DR / summary.
        </p>
      </section>

      <section id="domain-setup" className="article-section">
        <h2>2. Domain Purchase and Setup</h2>
        <h3>Namecheap for Domain Purchase</h3>
        <p>
          First thing's first, I needed to buy a domain name. This is the web address you type in the URL bar, i.e., the website name. After a quick googling and browsing a few Reddit posts, I landed on Namecheap.com to purchase my domain. As I'm sure you can guess, it wasn't all that much money, which was my only real criterion outside of having TylerDodd.com available. $11.28 for the domain name annually. And just like that, I owned TylerDodd.com.
        </p>

        <h3 id="dns">Cloudflare for DNS</h3>
        <p>
          Moving over to DNS, I chose to use Cloudflare. This is just an industry-best standard I'm familiar with, and it was suggested to me by GPT. What the hell is DNS and Cloudflare though? Let's take a step back.
        </p>
        <h4>DNS (Domain Name System)</h4>
        <p>
          Think of DNS as the internet's address book. Every website has a numerical "address" (called an IP address), but it's hard to remember numbers like 192.0.2.1. So, instead of typing in numbers, you type the website's name (like <strong>tylerdodd.com</strong>) into your browser. DNS translates the name you typed into the correct IP address, guiding you to the right website, just like how an address book would guide you to someone's house using their name.
        </p>
        <h4>Cloudflare</h4>
        <p>
          Cloudflare is like a security guard and traffic controller for websites. Imagine you have a restaurant (your website), and you want it to run smoothly, with customers getting served quickly and safely. Cloudflare helps by:
        </p>
        <ul>
          <li><strong>Speeding up your website</strong> by showing customers a faster route to get to your restaurant (using servers closer to them).</li>
          <li><strong>Protecting your website</strong> from bad customers (hackers, bots) by blocking or filtering harmful traffic before it even reaches your restaurant.</li>
        </ul>
        <p>
          So, Cloudflare makes sure your website is fast and secure for visitors. Cloudflare is free, and all I had to do was update a few nameserver configurations, and I was good to go. I also set up a mailing address of <a href="mailto:hello@tylerdodd.com">hello@tylerdodd.com</a> through Cloudflare for free.
        </p>
      </section>

      <section id="hosting" className="article-section">
        <h2>3. Hosting on DigitalOcean VPS</h2>
        <h3>Hosting Options</h3>
        <ul className="expandable-list">
          {[
            { 
              id: 'shared', 
              title: 'Shared Hosting', 
              content: 'This is like renting an apartment where you share the building (server) with many other people (websites). Everyone uses the same pool of resources (storage, bandwidth, etc.). It\'s cheap, but if one neighbor throws a big party (uses a lot of resources), it might slow down the building\'s elevators or utilities for everyone else. Good for small sites with low traffic.'
            },
            { 
              id: 'vps', 
              title: 'VPS (Virtual Private Server)', 
              content: 'A VPS is like renting a condo in a larger building. While you still share the physical structure (the server) with others, your condo (virtual space) is completely private and sectioned off. You have dedicated resources, meaning no one else\'s activity affects your performance. It\'s more flexible, gives you control, and is a great option for growing websites.'
            },
            { 
              id: 'dedicated', 
              title: 'Dedicated Server', 
              content: 'This is like owning your own house. The entire property (server) is yours, and no one else can use its resources. It\'s the most powerful and customizable option, but also the most expensive. You\'re responsible for maintaining everything, just like a homeowner is responsible for repairs and upkeep. It\'s best for very large websites or businesses with lots of traffic and specific requirements.'
            },
            { 
              id: 'cloud', 
              title: 'Cloud Hosting', 
              content: 'Cloud hosting is like living in multiple condos in different buildings all over the city. Instead of one physical server, your website runs on a network of servers in different places (the cloud). If one server goes down or gets overloaded, another one takes over, keeping your site running smoothly. It\'s scalable, meaning you can easily increase or decrease the resources your website uses, which is ideal for websites with variable traffic.'
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

        <h3>Setting Up the VPS</h3>
        <p>
          After purchasing a droplet from DigitalOcean, I used GPT-4 mini to help me initialize my server and do basic configuration. It also assisted me in downloading and using PuTTY to create and utilize an SSH key. This key essentially lets me connect my personal computer and its files to the virtual private server. This means I can upload the files I work on directly to the website and see changes take effect.
        </p>
      </section>

      <section id="file-management" className="article-section">
        <h2>4. File Management and Uploads</h2>
        <h3>WinSCP for SSH File Transfers</h3>
        <p>
          As I mentioned above, I used PuTTY to create an SSH key. I used that same key with WinSCP to actually drag and drop my files to the VPS using the GUI since I'm newer to command line navigation and frankly didn't want to mess the whole thing up from the jump, lol. This was free, not too much more to it than simple connect and drop files.
        </p>
      </section>

      <section id="version-control" className="article-section">
        <h2>5. Version Control and Collaboration</h2>
        <h3>GitHub as a Working Repository</h3>
        <p>
          Like any project, I am using GitHub for version control and storage of master files. I will eventually create an automated workflow to enable me to locally push to GitHub and have GitHub push to my VPS, providing updates to the site for me. Otherwise, this is just being leveraged very basically.
        </p>
      </section>

      <section id="ai-tools" className="article-section">
        <h2>6. AI Tools for Development</h2>
        <h3>ChatGPT 4.0, io mini, io Preview</h3>
        <p>
          GPT is king, plain and simple. I DO NOT know how to code (beyond incredibly beginner-level stuff). I can get by as needed and was able to stand up a very basic HTML/CSS site. Then I used GPT to overhaul the whole thing and really let it take shape. The real challenge most times wasn't coding; it was prompt engineering to ensure I could clearly convey what I wanted and needed to happen in my code.
        </p>
        <h3>4.0 Canvas Beta</h3>
        <p>
          Mind you, at the time of writing this, 4.0 Canvas Beta has been out for ~a day, so I have not had the opportunity to use it a ton yet. From what I can tell, though, it will be powerful.
        </p>
        <h3>Cursor AI</h3>
        <p>
          Cursor AI has been an amazing tool to become familiar with. Cursor is essentially VS Studio + AI chat capabilities like GPT. Cursor actually runs on the Claude 3.5 Sonnet LLM rather than GPT. Cursor saves the headache of copying and pasting code to and from GPT. It is also directly connected to your codebase and allows the AI to have a much more deeply seeded understanding of your code. I use Cursor and GPT to talk back and forth to one another and enhance code continuously. It's pretty good at it.
        </p>
      </section>

      <section id="issues" className="article-section">
        <h2>7. Issues and Resolutions</h2>
        <h3>Challenges Faced</h3>
        <p>
          There were too many challenges and errors to even begin listing them all. Most notably, I built the entire site in HTML/CSS/JS and then immediately deleted everything to start from scratch and use React. That was a bit of a nuisance but was ultimately worth the challenge. Kind of like doing your laundry but not wanting to actually fold and put it away.
        </p>
        <p>
          DNS was pretty annoying to set up for a good bit, but ultimately, I got it figured out. I used Certbot to get SSL for security as well.
        </p>
        <p>
          Also, getting those two stupid vertical lines in the footer took way longer to do than I'd care to admit. Same with getting the game under the contact page to work with dark mode. Still can't get the score and high score to work at this point, though.
        </p>

        <h3>Solutions Found</h3>
        <p>
          Each of these issues was resolved using a combination of AI tools and trial and error. Some took longer than others, but persistence paid off in the end.
        </p>
      </section>

      <section id="lessons-learned" className="article-section">
        <h2>8. Lessons Learned</h2>
        <p>
          This has been a ridiculously challenging yet rewarding project to undertake. More than anything, I am glad to have a place to organize what I'm up to and reflect and discuss it as well. Not too sure if anyone will ever see the site really or not, aside from some friends and family I'll force to check it out, lol. But I'm happy I know more about what goes into standing a site like this up. I can't even begin to imagine how some of these big sites were created. I'm excited to learn more!
        </p>
      </section>

      <section id="conclusion" className="article-section conclusion-section">
        <h2>9. Conclusion</h2>
        <p>
          Reflecting on the journey of building this website, I've learned a ton and grown my understanding of web development, even with a limited background. Moving forward, I plan to keep experimenting with new features and make the site a place to document my projects and share updates. Feel free to reach out at <a href="mailto:hello@tylerdodd.com">hello@tylerdodd.com</a> if you're interested in hearing more!
        </p>
      </section>
    </div>
  );
};

export default Project1;