import React from 'react'

const Education = () => {
  return (
    <>
    <section class="timeline-section" id="education">
      <h2 class="heading">Education</h2>
      <div class="timeline-items">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date" style={{color:"#6A6E49"}}>2019 - 2024</div>
          <div class="timeline-content">
            <h3 style={{textAlign:"left"}}>University & Education</h3>
            <p style={{color:"#F1EFEB",fontSize:"14px",textAlign:"left"}} >
            I earned my Bachelor of Science in Computer Science from Helwan University 
            from  2019 to 2024.<br /> I took courses covering core subjects and participated in 
            student and academic activities. I completed projects in website development, 
            data analysis, systems analysis, and databases and gained practical experience 
            through internships or work experience in college. I graduated with a good overall 
            grade and an excellent grade in my graduation project on website development.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date" style={{color:"#6A6E49"}}>2021 - 2024</div>
          <div class="timeline-content">
            <h3 style={{textAlign:"left"}}>Courses & Certificates</h3>
            <ul style={{color:"#F1EFEB",fontSize:"14px"}}>
               <li>Front End Course focuses on  HTML, CSS, JavaScript, React, Bootstrap and make responsive websites pages (2024).</li>
               <li>Strong knowledge of UI#UX principles to design web & mobile pages & UI/UX Design course, 2022 .</li>
               <li>Udacity - Data Analysis Level 1 Certificate, 2022.</li>
               <li>Google - Fundamentals of Digital Marketing  Certificate, 2023 .</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date" style={{color:"#6A6E49"}}>2023 - 2024</div>
          <div class="timeline-content">
            <h3 style={{textAlign:"left"}}>Intership & Experience</h3>
            <p style={{textAlign:"left" ,color:"#fcfcfc",fontSize:"14px"}}>
                - Training Session on UI/UX Design Orange Company in partnership with the Instant Organization 
                Two-week training focused on UI/UX design principles and practices. <br />
                - I have done many projects with myself to develop my skills, increase my experience and raise my level in website development.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Education
