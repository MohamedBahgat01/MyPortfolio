import React from 'react'
import MainPhoto from './assets/MainPhoto.jpeg';

const About = () => {
  return (
    <>
    <section class="about" id="about">
      <div class="about-circle"></div>

      <div class="about-img">
        <img src={MainPhoto} alt="" />
      </div>

      <div class="about-content">
        <h2 class="heading">About <span>Me</span></h2>

        <h3 class="typewriter-text">I'm a <span>Front-End Developer</span></h3>

        <p>
        A motivated Front End Developer with a passion for UI/UX design by Figma & Adobe XD 
        and a strong foundation in HTML, CSS, JavaScript, and the React.js framework, 
        as well as CSS frameworks like Bootstrap, SASS, and Tailwind.
        </p>

        <a href="#" class="btn">Read More</a>
      </div>
    </section>
    </>
  )
}

export default About
