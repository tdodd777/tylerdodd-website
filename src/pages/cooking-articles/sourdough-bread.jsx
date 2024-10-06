import React from 'react';
import '../../styles/ProjectArticle.css';

export const sourdoughBreadImage = '/images/articles/cooking/sourdough-bread/sourdough-sliced.jpg';

const SourdoughBread = () => {
  return (
    <div className="project-article">
      <header className="article-header">
        <h1>Baking the Perfect Sourdough Bread</h1>
        <img src={sourdoughBreadImage} alt="Sourdough Bread" className="project-main-image" />
      </header>

      <section className="article-meta">
        <p className="date-time">Sunday, October 6, 2024 11:16 AM</p>
        <p className="author">Author: Tyler Dodd</p>
        <p className="read-time">Estimated Read Time: 10 minutes</p>
      </section>

      <section className="article-content">
        <p>When I moved to Chicago, I had a lot of free time on my hands, so I decided to take up sourdough bread baking. I already enjoyed cooking, so adding bread baking seemed like a natural skill to learn. Initially, I started with a simple no-knead recipe, but quickly transitioned to the one outlined here by Joshua Weissman. I've made a few small modifications to fit my needs, but this is essentially his recipe, and all credit is due to him! You can find more of his fantastic recipes at <a href="https://www.joshuaweissman.com/">Joshua Weissman's website</a>.</p>

        <h2>Levain</h2>
        <ul>
          <li>35g mature sourdough starter</li>
          <li>35g whole wheat flour</li>
          <li>35g all-purpose flour</li>
          <li>70g room temperature water</li>
        </ul>

        <h2>Dough</h2>
        <ul>
          <li>804g good bread flour</li>
          <li>75g whole wheat flour</li>
          <li>680g water at 90°F (32°C), divided</li>
          <li>18g fine sea salt</li>
        </ul>

        <p>I've found a lot of success using brands like King Arthur or Bob's Red Mill. My favorite combination for both the dough and levain recently has been using bread flour and dark rye flour from Bob's Red Mill. Unbleached is a must, and ideally unenriched as well. If you can't find the latter, it's not a huge deal, but cutting out the extra processed additives is possible for the end product and worth it.</p>

        <h2>Preparation</h2>
        <p><strong>Autolyse</strong> is the process of mixing flour and water and letting it rest before adding any other ingredients. Initially, I thought this step was unnecessary, but after trying it once, I realized it makes a significant difference, albeit hard to quantify. It's a passive step that takes only a few minutes, so it's definitely worth including. Mix the flour and water and let it rest for an hour.</p>

        <p>Make sure your sourdough starter is active and bubbly before you begin. If in doubt, give it another feeding and wait until it's lively.</p>

        <h2>Mixing & Folding</h2>
        <p>To mix the levain into the autolysed dough, try to spread it over the top as evenly as possible, sprinkle some of the reserved water, and then dimple the dough like you would with focaccia. This helps disperse the levain before starting stretch and fold techniques. Initially, the dough will be very wet and might seem concerning—don't panic, it's totally normal. Keep working it until it becomes stickier and more cohesive. When in doubt, use the slap and fold method.</p>

        <p>After mixing, perform "stretch and folds" six times, spaced out at intervals of 15-30 minutes. This helps develop the gluten structure that will eventually give the bread its chew and rise.</p>

        <h2>Bulk Fermentation</h2>
        <p>Once all the folds are complete, allow the dough to bulk ferment for 1-5 hours undisturbed. The goal is for the dough to rise and show signs of fermentation, like bubbles on the surface. I like to keep my dough in the oven (turned off) with the light on, which creates a warm environment ideal for fermentation.</p>

        <h2>Shaping the Dough</h2>
        <p>Shaping is arguably one of the hardest parts of making sourdough. The goal is to create enough surface tension on the outside of the dough so that it holds its shape. Personally, I'm still working on mastering this part—my main concern is making sure the dough doesn't stick to the basket while proofing overnight. I use the shoelace method to shape it and then gently place it in a banneton dusted with flour.</p>

        <h2>Proofing</h2>
        <p>I proof my shaped dough in the refrigerator overnight. To do this, I place the banneton with the dough in a large plastic bag, ensuring there's enough room for the dough to expand without touching the bag. In the morning, you can use the poke test to see if it's ready: gently poke the dough, and it should slowly spring back. If the indentation remains, it needs more time, but if it bounces back instantly, it's over-proofed.</p>

        <h2>Baking</h2>
        <p>In the morning, preheat the oven with a cast-iron combo cooker or Dutch oven inside at 500°F (260°C) for at least an hour. When ready to bake, gently turn the dough out onto a piece of parchment paper and score it with a razor blade or sharp paring knife. The scoring allows the dough to expand in a controlled way, rather than bursting unpredictably. Bake with the lid on for 20 minutes, then remove the lid and continue to bake for another 10-17 minutes, or until the crust is deeply browned.</p>

        <h2>Cooling and Slicing</h2>
        <p>Cooling the bread is crucial—cutting into it too soon can ruin the crumb structure. I take the baked loaf out of the Dutch oven and let it cool on a wire rack for at least 2 hours. To avoid damaging the crust, I use a 12-inch serrated knife to cut the bread. I typically cut the loaf in half, then place the cut sides down and slice from there.</p>

        <h2>Troubleshooting and Tips</h2>
        <p>Patience is key in sourdough baking. I ruined my first few loaves, and they suffered for it. If your starter isn't active enough, it's better to wait another day and feed it again. Each loaf teaches something new, so embrace the process and don't get discouraged by failures. Here's a sample schedule that might help with timing:</p>

        <ul>
          <li>**9am**: Mix levain</li>
          <li>**1pm**: Autolyse dough</li>
          <li>**2pm**: Mix dough and levain</li>
          <li>**2:30pm**: Fold #1</li>
          <li>**3:00pm**: Fold #2</li>
          <li>**3:30pm**: Fold #3</li>
          <li>**4:00pm**: Fold #4</li>
          <li>**4:30pm**: Fold #5, rest for 1.5 hours</li>
          <li>**6pm**: Shape dough and place in fridge overnight</li>
          <li>**Next morning**: Preheat the oven and bake</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Baking sourdough bread is one of my favorite activities. Not only do you end up with a delicious and healthy loaf, but the process itself is deeply satisfying. Many people are intimidated by the complexity of sourdough, but I'd encourage anyone to jump in head first—you'll learn so much along the way, and each loaf is a step closer to mastery.</p>

        <h2>Supplies Used</h2>
        <ul>
          <li>Dutch Oven</li>
          <li>Banneton</li>
          <li>Razor Blade</li>
        </ul>

        <p>Happy baking, and feel free to share your experiences or any variations you've tried!</p>
      </section>
    </div>
  );
};

export default SourdoughBread;