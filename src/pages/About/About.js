import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>In the realm of words and boundless thought,
Lies a world unseen, within books sought.
With pages filled, a treasure trove,
A poet's heart, a reader's love.

In libraries old, where wisdom rests,
And shelves adorned, with literary quests.
Each book a journey, a story untold,
Unfolding secrets, as time unfolds.

</p>
            <p className='fs-17'>with every turn, a new chapter begins,
Characters dance, as imagination wins.
From fantasy realms to historical lore,
Books hold the keys to worlds galore.

Poetry whispers, in delicate prose</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About