import React, { useState } from 'react';
import '../../styles/ProjectArticle.css';

// Export the image paths for use in other components
export const articleImage = '/images/articles/technology/obsidian-logo.jpg';
export const articleLogo = '/images/articles/technology/zettelkasten-graph.jpg';

export const metadata = {
  title: "Understanding Zettelkasten: A Smart Note-Taking System",
  description: "Explore the Zettelkasten method, a powerful system for organizing thoughts and creating knowledge connections.",
  author: "Tyler Dodd",
  date: "November 30, 2024 11:00 AM",
  readTime: "8 minutes",
  category: "technology"
};

const Zettelkasten = () => {
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
        <h1>{metadata.title}</h1>
        <div 
          className="project-main-image" 
          style={{
            backgroundImage: `url(${articleImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          role="img"
          aria-label="Zettelkasten Knowledge Graph"
        />
        <div className="article-meta">
          <div className="meta-info">
            <p className="author">By {metadata.author}</p>
            <p className="date-time">{metadata.date}</p>
            <p className="read-time">Estimated Read Time: {metadata.readTime}</p>
          </div>
          <img src={articleLogo} alt="Obsidian Logo" className="project-logo" />
        </div>
      </div>

      {/* TL;DR Section */}
      <section className="tldr-section">
        <h2>Content</h2>
        <ul>
          <li><a href="#introduction">1. Introduction to Zettelkasten</a></li>
          <li><a href="#why-obsidian">2. Why Obsidian Markdown</a></li>
          <li><a href="#setting-up">3. Setting Up</a></li>
          <li><a href="#note-taking-strategies">4. Note-Taking Strategies</a></li>
          <li><a href="#benefits-challenges">5. Benefits & Challenges</a></li>
          <li><a href="#conclusion">6. Conclusion</a></li>
        </ul>
      </section>

      {/* Article Content */}
      <section id="introduction" className="article-section">
        <h2>1. Introduction to Zettelkasten</h2>
        <p>
          The Zettelkasten system is an organizational note-taking method. The term itself is
          German for "slip-box," referencing the slips of paper traditionally used for filing and
          recording notes. I first stumbled upon this concept during a late-night doom scroll online,
          and it quickly became a rabbit hole that changed how I organize my thoughts. For someone
          like me, whose mind races constantly with new ideas, the Zettelkasten system felt like the
          answer to managing that mental clutter.
        </p>
        <p>
          What makes this system powerful is its ability to not only store thoughts but also reveal
          the relationships between them. By using a tagging system, the Zettelkasten creates
          connections between notes, ideas, and concepts, forming overarching groups and showing
          how they relate. This interconnected structure is what the image accompanying this
          article illustrates—how seemingly unrelated thoughts can converge into a cohesive
          network.
        </p>
        <p>
          To me, the Zettelkasten is more than just a note-taking method. It's a way to distill
          personal experiences into their core components, identify patterns, and apply those
          insights to future endeavors. Life, after all, is about the overlap—the magic that happens
          when disparate ideas come together in unexpected ways.
        </p>
      </section>

      <section id="why-obsidian" className="article-section">
        <h2>2. Why Obsidian Markdown</h2>
        <p>
          There were a few things that drew me toward Obsidian.md. The biggest factors for me were
          its offline capabilities and real-time sync functionality. I switch between multiple devices—
          my PC, work laptop, phone, and iPad—and Obsidian allows me to maintain my notes locally
          on each of them while syncing seamlessly via the cloud whenever a device connects to the
          internet.
        </p>
        <p>
          Another major advantage is how well Obsidian integrates with ChatGPT, which I use
          extensively for both personal and professional purposes. Since GPT outputs in markdown,
          transferring content between the two has been incredibly easy. It’s gotten to the point where
          I prefer markdown over any other format—I even catch myself texting in markdown
          sometimes, haha.
        </p>
        <p>
          Obsidian also has a thriving community that creates plugins to extend its capabilities. For
          example, I use the Templater plugin to ensure my notes follow a consistent structure. I’ve
          heard good things about Notion and have used OneNote at work, but Obsidian outshines
          them both in my experience.
        </p>
      </section>

      <div className="image-container">
        <img src="/images/articles/technology/tag-guide.JPG" alt="Tags Guide" className="tag-guide-image rounded-image" />
      </div>

      <section id="setting-up" className="article-section">
        <h2>3. Setting Up</h2>
        <p>
          Setting up the system is by far the hardest part. I leveraged GPT to refine my proposed
          approach, ensuring the system could scale for decades to come. At its core, the Zettelkasten
          system revolves around three types of notes:
        </p>
        <ol>
          <li>
            <strong>Fleeting Notes</strong> (I call them Daily Notes because I create one every day): These
            are quick, shorthand entries meant to capture ideas as they come to you.
          </li>
          <li>
            <strong>Literature Notes</strong>: These are more structured and akin to textbook pages.
            They are the lengthiest notes and form the bulk of my system. I often extract content from
            my daily (fleeting) notes to create literature notes, which focus on accuracy and depth.
            Anything I might want to revisit later should have a corresponding literature note that
            allows me to quickly review the information.
          </li>
          <li>
            <strong>Permanent Notes</strong>: These are high-level but content-rich notes. Admittedly,
            I’m still refining how to implement them effectively. Once I feel I’ve mastered a topic or
            have compiled enough literature notes on it, I create a permanent note. These notes are
            highly distilled, summarizing key concepts and providing an overview. They link back to
            related literature or daily notes for ease of navigation.
          </li>
        </ol>
        <p>
          In addition to these note types, I maintain indexes for overarching topics like coding, math,
          and project management—what I call <strong>Maps of Content (MOCs)</strong>. These are
          auto-populating notes that serve as a table of contents, drawing in links to relevant notes
          based on the tags I assign. I also have a <strong>master tag index</strong> to quickly reference
          what each tag represents.
        </p>
        <p>
          Early on, I fell into the trap of trying to replicate other people’s Zettelkasten structures,
          losing sight of what would work best for me. The most effective system is the one that
          ensures ease of use for your workflow.
        </p>
        <p>
          Another common pitfall is overcomplicating the system with plugins. My rule of thumb is to
          keep additions to the out-of-the-box product minimal, ensuring the system doesn’t get
          bogged down by irrelevant features.
        </p>
        <div className="image-container">
          <img src="/images/articles/technology/coding-moc.JPG" alt="Coding Map of Content" className="coding-moc-image rounded-image" />
        </div>
      </section>

      <section id="note-taking-strategies" className="article-section">
        <h2>4. Note-Taking Strategies</h2>
        <p>
          The first thing I do every day is create a daily note and insert my pre-configured template.
          The template helps maintain a consistent structure across all notes while tailoring each
          note’s contents to whatever I’m focusing on that day.
        </p>
        <p>
          I decide whether to link the note to others based on a few factors. For instance, if the work
          from yesterday’s note carries over into today, or if the content in my daily note will
          eventually become part of a literature note, it makes sense to establish a connection
          between them.
        </p>
        <p>
          Throughout the day, I use tags to organize my notes. These tags are based entirely on the
          note’s content. For example, if I’m working on AI-related tasks, I’ll quickly add the
          <code>#topic/AI</code> tag. This instantly creates a relationship between the current note and
          all other notes with the same tag.
        </p>
        <p>
          When I feel overwhelmed, I take a step back and assess whether the problem lies within the
          system itself. If necessary, I make adjustments. This system isn’t a one-size-fits-all solution,
          nor is it a "set it and forget it" configuration. My Zettelkasten is meant to serve as a "second
          brain," and just like our own minds grow and evolve over time, so will this system.
        </p>
      </section>

      <img src="/images/articles/technology/daily-note.JPG" alt="Daily Note" className="daily-note-image rounded-image" />

      <section id="benefits-challenges" className="article-section">
        <h2>5. Benefits & Challenges</h2>
        <p>
          The most immediate benefit I’ve noticed is my eagerness to use the system. After putting
          so much time and effort into its setup, I’m constantly itching to do note-worthy shit. It’s lit
          a proverbial fire under my ass to accomplish more each day so I can continue growing my
          "Second Brain."
        </p>
        <p>
          A specific example of how the Zettelkasten has helped me solve a problem involves the
          connection between project management notes and notes related to C#. On the surface,
          these two topics seem to have fuck-all in common. But thanks to the Zettelkasten, I was
          able to identify relationships between them that I might have otherwise overlooked. I
          realized that the foundational logic used to implement certain programming concepts in
          C# parallels the level of granularity required to be an effective project manager. This
          insight helped me understand that attention to detail is crucial across many domains.
        </p>
        <p>
          This might sound superficial, but making connections between interests, hobbies, tasks,
          and jobs has been invaluable for me. These things no longer exist in isolated vacuums;
          instead, I can draw on past experiences and recycle them. Time is money, so why waste it
          starting from scratch when you likely have a comparable jumping-off point? I hope that
          makes sense.
        </p>
        <p>
          That said, a challenge I’ve faced is becoming overly committed to format and consistency.
          At times, I’ve found myself more focused on how notes connect to one another than the
          content of the notes themselves. The Zettelkasten is a powerful tool, but it’s important not
          to lose sight of its true purpose: enabling you to think more clearly and connect ideas
          meaningfully.
        </p>
      </section>

      <section id="conclusion" className="article-section">
        <h2>6. Conclusion</h2>
        <p>
          I’m not writing this article to claim that this is the perfect note-keeping method or that
          everyone must adopt it. Instead, my goal is to emphasize the importance of taking time to
          reflect on how and why we process information the way we do. I believe your brain is your
          greatest asset. So why do so few people take the time to reflect on how they think or absorb
          information?
        </p>
        <p>
          For much of my life, I’ve dealt with a jumbled mess of thoughts swirling between my ears—
          and I’m sure many people out there feel the same. That’s why I’d encourage anyone to try
          implementing their own version of a Zettelkasten, whatever that might look like. If you’re
          someone who benefits from handwriting, grab some shoeboxes and index cards. If Obsidian
          seems like the right tool for you, dive in. There’s no shortage of ways to organize your notes
          and thoughts—the real difference is that people rarely take the time to do so.
        </p>
        <p>
          You owe it to yourself to step back every now and then and ask why you do things the way
          you do. Repetition forms habits, and habits are often carried out subconsciously. If you’ve
          been taking notes the same way for a decade and it works for you, do you really believe
          there’s no room for improvement?
        </p>
      </section>
    </div>
  );
};

const TableOfContents = () => (
  <nav className="table-of-contents">
    <h3>Contents</h3>
    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#why-obsidian">Why Obsidian Markdown</a></li>
      <li><a href="#setting-up">Setting Up</a></li>
      <li><a href="#note-taking-strategies">Note-Taking Strategies</a></li>
      <li><a href="#benefits-challenges">Benefits & Challenges</a></li>
      <li><a href="#conclusion">Conclusion</a></li>
    </ul>
  </nav>
);

export default Zettelkasten;