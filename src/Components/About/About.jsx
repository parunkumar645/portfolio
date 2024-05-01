import React from 'react'
import "./About.css"
import theam_pattren from "../../img/theme_pattern.svg"
import profile_img from "../../img/pic9.jpeg"

const About = () => {
  return (
    <div className="about" id='about'>
      <div className="about-titile">
        <h1>About Me</h1>
        <img src={theam_pattren} alt="theam_pattren" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile_img" className='about-img' />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I'm a junior full stack web developer with a passion for
              innovation and problem-solving. With a strong foundation in both
              frontend and backend technologies, I bring a unique fusion of
              skills to every project. Proficient in HTML, CSS, JavaScript,
              Bootstrap, React, Python, Django, MySQL, Node.js, and MongoDB, I
              excel at creating user-centric experiences and scalable web
              solutions.
            </p>
            <p>
              Skilled in crafting user-friendly interfaces for diverse
              applications including construction management, ambulance booking,
              and student portals. Eager to leverage my practical knowledge to
              contribute effectively to a dynamic development team in a
              progressive company.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JS & React JS </p> <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>BackEnd  </p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>DataBase </p> <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
}

export default About
