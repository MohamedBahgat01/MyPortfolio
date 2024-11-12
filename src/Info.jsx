import React from 'react'
import MainPhoto from './assets/MainPhoto.jpeg';
import CV from './assets/Mohamed Bahgat Farouk CV.pdf' ;
const Info = () => {
  return (
    <>
    <section class="home" id="home">
        <div class="home-circle-1"></div>
        <div class="home-circle-2"></div>

        <div class="home-content">
          <h3>Hi</h3>
          <h1>I'm <span>Mohamed</span></h1>
          <h3 class="text-animation">
            I'm a <span>Web Developer</span> 
          </h3>
          <p>
          A motivated Front End Developer with a passion for UI/UX design and 
          a strong foundation in HTML, CSS, JavaScript, and the React.js framework, 
          as well as CSS frameworks like Bootstrap, SASS, and Tailwind.
          </p>

          <div class="social-icons">
            <a href="https://www.linkedin.com/in/mohamed-bahgat-24652a202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <i class="bx bxl-linkedin-square"></i></a>
            <a href="https://github.com/MohamedBahgat01" target="_blank"
              ><i class="bx bxl-github"></i
            ></a>
            <a href="https://www.instagram.com/mohamedbahgat808?igsh=MXgwc3pjaTAzYzgybg==" target="_blank"
              ><i class="bx bxl-instagram"></i
            ></a>
            <a href="https://www.facebook.com/mohamed.bahgat.106?mibextid=ZbWKwL" target="_blank"
              ><i class="bx bxl-facebook"></i
            ></a>
          </div>

          <a href={CV} class="btn">Download CV</a>
        </div>

        <div class="home-img">
          <img src={MainPhoto} alt="" />
        </div>
    </section>
    </>
  )
}

export default Info
