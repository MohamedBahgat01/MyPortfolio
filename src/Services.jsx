import React from 'react'

const Services = () => {
  return (
    <div>
      <section class="services" id="services">
      <h2 class="heading">Services</h2>

      <div class="service-container">
        <div class="services-box">
          <i class="bx bxs-devices"></i>

          <h3>Client Needs Analysis & Scoping</h3>
          <p>
            Analyze client ideas and discover project requirements. &
            Identify project type (e-commerce, personal, business, etc.). &
            Assist in choosing the right scope and purpose for the website. &
            Recommend suitable technologies based on project needs.
          </p>

          <a href="#" class="btn">Read More</a>
        </div>

        <div class="services-box">
          <i class="bx bxs-palette"></i>

          <h3>UI # UX Design</h3>
          <p>
            I begin by creating a preliminary wireframe to give the client a clear idea of the website's structure. &
            I present the wireframe for feedback and ensure it aligns with the client’s vision. &
            Once the client approves the wireframe, I proceed with designing the full website. &
            I make sure the final design reflects the approved layout and meets all project objectives.
          </p>

          <a href="#" class="btn">Read More</a>
        </div>

        <div class="services-box">
          <i class="bx bx-code-block"></i>

          <h3>Web Development</h3>
          <p>
          I build dynamic web applications using the React framework, combining HTML, CSS, and JavaScript. 
          I utilize React libraries such as React Router for seamless navigation, Redux for state 
          management, and Axios for handling API requests. Additionally, I incorporate modern styling 
          libraries like Sass for CSS preprocessing and Tailwind CSS for utility-first styling to ensure 
          efficient, responsive designs. React's component-based architecture, paired with these libraries, 
          allows me to create reusable, scalable, and maintainable UI components.
          </p>

          <a href="#" class="btn">Read More</a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Services
